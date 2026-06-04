import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import AiChat from "../../components/aichat/AiChat";

export default function AiChatPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="ai-chat-page-sec">
        <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="ai-chat-page-container">
            {/* Header section with heading */}
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#fbd9ad",
                padding: "10px",
                width: "100%",
                borderBottom: "2px solid #b061df"
              }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134, 61, 176)", margin: 0, fontSize: isMobile ? "1.8rem" : "2.2rem", fontWeight: "700" }}>
                  AI VOICE ASSISTANT
                </h1>
              </Zoom>
            </div>
            
            {/* AI Chat content */}
            <div style={{ flex: 1, height: "calc(100% - 60px)" }}>
              <AiChat isWidgetMode={false} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
