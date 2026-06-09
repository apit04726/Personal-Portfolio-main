import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
export default function Contactus() {
  const [formData, setFormData] = useState({});
  const [notification, setNotification] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      showNotification("Please fill in all details (Name, Email, and Message)!", "error");
      return;
    }
    try {
      const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        showNotification("Email service is not configured. Please check your .env file.", "error");
        return;
      }

      const response = await axios.post(
        "https://api.web3forms.com/submit",
        {
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        }
      );

      if (response.status === 200 && response.data.success) {
        showNotification(`Thanks ${formData.name}, your message has been sent successfully!`, "success");
        setFormData({});
      } else {
        showNotification("Something went wrong! Please try again.", "error");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      showNotification("Failed to send your message. Please try again later.", "error");
    }
  };
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                          value={formData.name || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={formData.message || ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="submit-btn">
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button
                            type="submit"
                            className="submitBtn"
                            onClick={handleSubmit}
                            style={{ display: "flex", alignItems: "center", gap: "5px" }}
                          >
                            Submit
                            <AiOutlineSend className="send-icon" />
                          </button>
                          <a
                            href="https://wa.me/917096728816"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <button
                              type="button"
                              className="submitBtn"
                              style={{
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                gap: "10px", backgroundColor: "#fbd9ad", color: "#6c3483", border: "none",
                                width: "170px", fontSize: "1.3rem", fontWeight: "500"
                              }}
                            >
                              <span style={{ flex: 1, textAlign: "left", fontSize: "16px", marginLeft: "12px" }}>Direct to Chat</span>
                              <AiOutlineWhatsApp style={{ color: "#6c3483", fontSize: "30px" }} />
                            </button>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:vishalbaria7096@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        vishalbaria7096@gmail.com
                      </p>
                    </a>
                    <a
                      href={`tel:+917096728816`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+917096728816</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/uNgkGy9thecMoBE77"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Rajkot, Gujarat, India
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472591.2138770507!2d70.821296!3d22.273487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1757567906394!5m2!1sen!2sus"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      
      {/* Smart and Professional Notification Banner */}
      {notification.show && createPortal(
        <div 
          className="custom-notification-toast"
          style={{
            background: notification.type === "success" 
              ? "linear-gradient(135deg, rgba(142, 70, 186, 0.95), rgba(94, 44, 128, 0.95))"
              : "linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(185, 28, 28, 0.95))",
            color: "#ffffff"
          }}
        >
          {/* Icon */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: notification.type === "success" ? "#fbd9ad" : "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "28px",
            height: "28px",
            flexShrink: 0
          }}>
            {notification.type === "success" ? (
              <span style={{ color: "#6c3483", fontWeight: "bold", fontSize: "16px" }}>✓</span>
            ) : (
              <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "14px" }}>✕</span>
            )}
          </div>
          
          {/* Message */}
          <span style={{ flexGrow: 1, marginRight: "10px", lineHeight: "1.4" }}>
            {notification.message}
          </span>
          
          {/* Close Button */}
          <button 
            onClick={() => setNotification(prev => ({ ...prev, show: false }))}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255, 255, 255, 0.6)",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              padding: "4px",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.color = "#ffffff"}
            onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.6)"}
          >
            ✕
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}
