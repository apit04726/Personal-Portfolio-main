import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AiChat from "./AiChat";
import { TbMessageChatbot } from "react-icons/tb";

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the chat widget automatically when the page URL/route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Action Button */}
      <button
        className={`ai-widget-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Close AI Assistant" : "Ask Vishal AI"}
        aria-label="Toggle AI Assistant"
      >
        {!isOpen && <div className="ai-widget-pulse" />}
        {isOpen ? "✕" : <TbMessageChatbot style={{ color: "#fff", fontSize: "32px" }} />}
      </button>

      {/* Floating Chat Drawer Container */}
      <div className={`ai-chat-drawer ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <AiChat isWidgetMode={true} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
