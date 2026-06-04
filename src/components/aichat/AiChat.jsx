import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/portfolioProjects";
import {
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineSound,
} from "react-icons/ai";
import { FaMicrophone, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

// Helper function for 12-hour format (e.g. 6:49 Pm)
const getChatTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'Pm' : 'Am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return `${hours}:${minutes} ${ampm}`;
};

export default function AiChat({ isWidgetMode = false, onClose = null }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am Vishal's AI Assistant. I can help you find information about Vishal's projects, skills, education, and experience. Feel free to type or speak in English!",
      time: getChatTime(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Settings state
  const [apiKey] = useState(localStorage.getItem("gemini_api_key") || process.env.REACT_APP_GEMINI_API_KEY || "");
  const [ttsEnabled, setTtsEnabled] = useState(JSON.parse(localStorage.getItem("ai_tts_enabled") ?? "true"));

  // Voice Recognition (Speech-to-Text) State
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Initialize Speech Recognition (English only)
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      rec.lang = "en-US";

      rec.onstart = () => {
        setIsRecording(true);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSendMessage(transcript);
      };

      rec.onerror = (event) => {
        console.error("Speech Recognition Error", event);
        setIsRecording(false);
      };

      recognitionRef.current = rec;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  // Voice Output (Text-to-Speech) Function (English only)
  const speakText = (text) => {
    if (!ttsEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop current speech
    
    // Remove markdown formatting before speaking
    const cleanText = text
      .replace(/[*#_`~-]/g, "") // remove bold, italics, headers, list points
      .replace(/https?:\/\/\S+/g, "") // remove links
      .replace(/\n/g, " ");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "en-US";
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.includes("en"));
    if (voice) {
      utterance.voice = voice;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  // Microphone toggle handler
  const toggleRecording = () => {
    if (!speechSupported || !recognitionRef.current) return;

    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.start();
    }
  };

  // Local rule-based projects search engine (offline mode / no-key fallback) - English only
  const getLocalResponse = (query) => {
    const q = query.toLowerCase().trim();
    
    // Match specific projects by title or slug
    let matchedProject = null;
    for (const proj of projects) {
      if (q.includes(proj.slug) || q.includes(proj.title.toLowerCase())) {
        matchedProject = proj;
        break;
      }
    }
    
    if (matchedProject) {
      const textEn = `Here is information about the project "${matchedProject.title}":\n\n${matchedProject.details || matchedProject.description}\n\n**Technologies:** ${matchedProject.technologies.join(", ")}`;
      return {
        text: textEn,
        project: matchedProject
      };
    }
    
    // Match tech categories precisely
    if (q.includes("wordpress")) {
      const matched = projects.filter(p => p.category.toLowerCase().includes("wordpress"));
      return {
        text: `Vishal has built ${matched.length} WordPress & PHP projects. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("laravel")) {
      const matched = projects.filter(p => p.category.toLowerCase() === "laravel");
      return {
        text: `Vishal has built ${matched.length} Laravel projects. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("react native") || q.includes("native") || q.includes("mobile")) {
      const matched = projects.filter(p => p.category.toLowerCase().includes("native") || p.category.toLowerCase().includes("mobile"));
      return {
        text: `Vishal has built ${matched.length} React Native mobile apps. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("react")) {
      const matched = projects.filter(p => p.category.toLowerCase().includes("react") && !p.category.toLowerCase().includes("native"));
      return {
        text: `Vishal has built ${matched.length} React JS web applications. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("shopify")) {
      const matched = projects.filter(p => p.category.toLowerCase() === "shopify");
      return {
        text: `Vishal has built ${matched.length} Shopify storefronts. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("core php")) {
      const matched = projects.filter(p => p.category.toLowerCase() === "core php");
      return {
        text: `Vishal has built ${matched.length} Core PHP websites. Here is the full list:`,
        projectsList: matched
      };
    }
    if (q.includes("n8n") || q.includes("automation")) {
      const matched = projects.filter(p => p.category.toLowerCase() === "n8n");
      return {
        text: `Vishal has built ${matched.length} n8n automation workflow. Here are the details:`,
        projectsList: matched
      };
    }

    // General projects query fallback
    if (q.includes("project") || q.includes("work") || q.includes("portfolio") || q.includes("all")) {
      return {
        text: `Vishal has built ${projects.length} amazing projects across WordPress, Laravel, React JS, React Native, Shopify, Core PHP and n8n. Here is the full list of projects:`,
        projectsList: projects
      };
    }
    
    // Skills queries
    if (q.includes("skill") || q.includes("technology") || q.includes("stack") || q.includes("language")) {
      return {
        text: "Vishal is a Full Stack Developer proficient in React.js, React Native, Laravel, Node.js, PHP, WordPress, Shopify, HTML5/CSS3, Git, and MySQL."
      };
    }

    // Experience/Education queries
    if (q.includes("who are you") || q.includes("about") || q.includes("vishal") || q.includes("education") || q.includes("study") || q.includes("college")) {
      return {
        text: "Vishal is currently studying Bachelor of Engineering in IT at Gujarat Technological University (GTU), Bhavnagar. He builds high-performance web applications and mobile apps."
      };
    }

    // Contact/Hire queries
    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire")) {
      return {
        text: "You can contact Vishal through the contact page or via social media links. He is open for freelance gigs and job offers!"
      };
    }

    // Basic greetings
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return {
        text: "Hello! Ask me anything about Vishal's projects, skills, or studies."
      };
    }

    // Default response
    return {
      text: "I'm Vishal's Assistant. Try asking about a specific project (like 'LendingUSA' or 'SocialGo') or his skills. Enter a Gemini API Key in the settings for real-time AI responses!"
    };
  };

  // Main message sending handler
  // Main message sending handler
  const handleSendMessage = async (textToSend = inputText) => {
    if (!textToSend.trim()) return;

    const userMessage = {
      sender: "user",
      text: textToSend,
      time: getChatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Search locally for projects to attach if the query is project-related
    const localProjResult = getLocalResponse(textToSend);

    // Call Gemini API if Key is present
    if (apiKey) {
      try {
        const systemPrompt = `You are "Vishal's AI Voice Assistant", an interactive, smart AI helper built into Vishal's Personal Portfolio website.
Your job is to answer visitors' questions about Vishal, his projects, skills, education, and experience.

Here is Vishal's profile information:
- Name: Vishal
- Education: Bachelor of Engineering in Information Technology (B.E. IT) student at Gujarat Technological University (GTU), Bhavnagar, Gujarat.
- Profession: Full Stack Engineer, PHP & Laravel Developer, React & Node.js Specialist, WordPress & Shopify Expert, Scalable Web Solutions Architect, and Android App Developer.
- Skills:
  * WordPress (90% proficiency)
  * Laravel (80% proficiency)
  * Shopify (50% proficiency)
  * JavaScript (71% proficiency)
  * MySQL (68% proficiency)
  * NodeJS (66% proficiency)
  * React JS (78% proficiency)
  * PHP (75% proficiency)
  * HTML5, CSS3, GitLab, GitHub (90% proficiency)
- Core Strengths: Designing responsive templates, building custom ACF-driven CMS sites, e-commerce integrations, cross-platform React Native apps, automation workflows (like n8n with Gemini), and role-based administrative panels (Laravel + Vue.js).

Here are the projects Vishal has worked on (in JSON format):
${JSON.stringify(projects.map(p => ({
  title: p.title,
  slug: p.slug,
  description: p.description,
  details: p.details,
  category: p.category,
  technologies: p.technologies,
  features: p.features,
  url: p.url
})), null, 2)}

Instructions:
1. Always respond in English. Do not write or speak in Gujarati or any other language under any circumstances.
2. Keep answers short, direct, and conversational (ideally under 3-4 sentences) because this is a chat drawer interface.
3. Be proud of Vishal's work. If a user asks about his projects, mention 2-3 key projects matching their interest and tell them they can view more details on the Projects page.
4. Encourage users to contact Vishal. Mention that they can send a message using the Contact section.
5. If the user asks about a technology not listed in Vishal's skillset, politely explain that Vishal is highly proficient in his core stack but is always excited to learn new tech.
6. Avoid using markdown formatting like headers, code blocks, or bold markers in excess since this will be read aloud via Text-to-Speech (TTS). Keep it clean and natural.`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: textToSend }],
                },
              ],
              system_instruction: {
                parts: [{ text: systemPrompt }],
              },
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMsg = errorData.error?.message || `HTTP error! status: ${response.status}`;
          throw new Error(errorMsg);
        }

        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply from AI";

        const botMessage = {
          sender: "bot",
          text: replyText,
          time: getChatTime(),
          project: localProjResult.project || null,
          projectsList: localProjResult.projectsList || null,
        };

        setMessages((prev) => [...prev, botMessage]);
        speakText(replyText);

      } catch (err) {
        console.error("Gemini API error, falling back to local search", err);
        // Fallback to local
        const botMessage = {
          sender: "bot",
          text: `⚠️ **API Error:** ${err.message}\n\n*Using Local Fallback:*\n${localProjResult.text}`,
          project: localProjResult.project,
          projectsList: localProjResult.projectsList,
          time: getChatTime(),
        };
        setMessages((prev) => [...prev, botMessage]);
        speakText(localProjResult.text);
      }
    } else {
      // Local Database search fallback (immediately)
      setTimeout(() => {
        const botMessage = {
          sender: "bot",
          text: localProjResult.text,
          project: localProjResult.project,
          projectsList: localProjResult.projectsList,
          time: getChatTime(),
        };
        setMessages((prev) => [...prev, botMessage]);
        speakText(localProjResult.text);
      }, 500);
    }
    
    setIsLoading(false);
  };



  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-header-avatar">
            <TbMessageChatbot style={{ color: "#fbd9ad", fontSize: "24px" }} />
          </div>
          <div className="chat-header-title">
            <h4>Vishal AI Assistant</h4>
            <span>online</span>
          </div>
        </div>
        <div className="chat-header-actions">
          <button className="chat-header-btn" onClick={() => {
            setTtsEnabled(!ttsEnabled);
            localStorage.setItem("ai_tts_enabled", JSON.stringify(!ttsEnabled));
            if (ttsEnabled) window.speechSynthesis.cancel();
          }} title={ttsEnabled ? "Mute Voice" : "Enable Voice Output"}>
            {ttsEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          {isWidgetMode && onClose && (
            <button className="chat-header-btn" onClick={onClose} title="Close Chat">
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>



      {/* Messages */}
      <div className="chat-messages-container">
        {messages.map((msg, index) => {
          return (
            <div key={index} className={`chat-msg-row ${msg.sender}`}>
              <div className="chat-msg-bubble-container">
                <div className="chat-msg-bubble">
                  {msg.sender === "bot" && (
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
                      <button
                        className="chat-bubble-speak-btn-inline"
                        onClick={() => speakText(msg.text)}
                        title="Read Aloud"
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#fbd9ad",
                          cursor: "pointer",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "center",
                          padding: "2px",
                          transition: "color 0.2s ease"
                        }}
                      >
                        <AiOutlineSound />
                      </button>
                    </div>
                  )}
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    {msg.text}
                  </div>
                  
                  {/* Inline project card render */}
                  {msg.project && (
                    <div className="chat-project-card">
                      <div className="chat-project-card-header" style={{ backgroundImage: `url(${msg.project.image})` }}>
                        <div className="chat-project-card-header-overlay" />
                      </div>
                      <div className="chat-project-card-body">
                        <h5 className="chat-project-card-title">{msg.project.title}</h5>
                        <p className="chat-project-card-desc">{msg.project.description}</p>
                        <div className="chat-project-tags">
                          {msg.project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="chat-project-tag">{tech}</span>
                          ))}
                        </div>
                        <div className="chat-project-links">
                          <Link to={`/project/${msg.project.slug}`} className="chat-project-link details" onClick={() => onClose && onClose()}>
                            Details
                          </Link>
                          {msg.project.url && (
                            <a href={msg.project.url} target="_blank" rel="noopener noreferrer" className="chat-project-link live">
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Inline list of project recommendations - Highlighted Special Design */}
                  {msg.projectsList && (
                    <div className="chat-projects-list-container">
                      <div className="chat-projects-list-header">
                        Projects ({msg.projectsList.length})
                      </div>
                      {msg.projectsList.map((p, i) => (
                        <div key={i} className="chat-highlighted-project-card">
                          <div className="chat-project-thumb-container">
                            <img
                              src={p.image}
                              alt={p.title}
                              className="chat-project-thumb"
                            />
                          </div>
                          <div className="chat-project-details">
                            <div className="chat-project-header-row">
                              <h5 className="chat-project-title">{p.title}</h5>
                              <span className="chat-project-category-tag">
                                {p.category.replace(" js", "JS").replace(" app", " App")}
                              </span>
                            </div>
                            <p className="chat-project-short-desc">
                              {p.description}
                            </p>
                            <div className="chat-project-tech-tags">
                              {p.technologies.slice(0, 3).map((tech, j) => (
                                <span key={j} className="chat-project-tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="chat-project-action-buttons">
                              <Link
                                to={`/project/${p.slug}`}
                                className="chat-project-action-btn details"
                                onClick={() => onClose && onClose()}
                              >
                                Details ➔
                              </Link>
                              {p.url && (
                                <a
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="chat-project-action-btn live"
                                >
                                  Live Demo ➔
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="chat-msg-time">{msg.time}</span>
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="chat-msg-row bot">
            <div className="chat-msg-bubble">
              <div className="chat-typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Queries Tags */}
      <div className="chat-quick-queries">
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show all projects")}>
          💼 View All Projects
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show WordPress projects")}>
          🌐 WordPress & PHP
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show Laravel projects")}>
          ⚡ Laravel Apps
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show React JS projects")}>
          ⚛️ React JS Projects
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show React Native apps")}>
          📱 React Native Apps
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show Shopify projects")}>
          🛍️ Shopify Stores
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show Core PHP projects")}>
          🐘 Core PHP Sites
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Show n8n projects")}>
          🤖 n8n Automations
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("What are your skills?")}>
          🛠️ Skills & Stack
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("How can I contact you?")}>
          📞 Contact Vishal
        </div>
        <div className="chat-quick-tag" onClick={() => handleSendMessage("Where do you study?")}>
          🎓 Education & Studies
        </div>
      </div>

      {/* Input Bar */}
      <div className="chat-input-bar">
        {speechSupported && (
          <button
            className={`chat-btn-action mic ${isRecording ? "recording" : ""}`}
            onClick={toggleRecording}
            title={isRecording ? "Recording... Click to stop" : "Speak Aloud (Voice Input)"}
          >
            <FaMicrophone />
          </button>
        )}
        <input
          type="text"
          className="chat-input-field"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          placeholder={isRecording ? "Listening..." : "Type a message / ask..."}
          disabled={isRecording}
        />
        <button
          className="chat-btn-action send"
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim() || isRecording}
          title="Send Message"
        >
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
}
