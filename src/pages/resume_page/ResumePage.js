import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/final-resume.pdf";

function Resume() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
      padding: isMobile ? "70px 0 30px 0" : "80px 0 40px 0"
    }}>
      <section style={{ padding: isMobile ? "0 10px" : "0" }}>
        <Container fluid={isMobile}>
          <div>
            {/* Heading */}
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ 
                backgroundColor: "#fbd9ad", 
                padding: "15px 0",
                marginBottom: "25px"
              }}
            >
              <Zoom left cascade>
                <h1 style={{ 
                  color: "rgb(134, 61, 176)", 
                  fontSize: isMobile ? "1.8rem" : "2.5rem",
                  fontWeight: "bold",
                  margin: 0
                }}>
                  RESUME
                </h1>
              </Zoom>
            </div>

            {/* Download Button Top */}
            <div className="d-flex justify-content-center mt-4">
              <a href={pdf} download="Vishal_Baria_Resume.pdf" style={{ textDecoration: "none" }}>
                <Button 
                  variant="primary" 
                  size={isMobile ? "sm" : "lg"}
                  style={{
                    backgroundColor: "rgb(134, 61, 176)",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>

            {/* Resume Viewer - embed PDF directly for instant view */}
            <div className="d-flex justify-content-center mt-4">
              <div style={{
                width: "100%",
                maxWidth: "800px",
                backgroundColor: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                overflow: "hidden"
              }}>
                <iframe
                  src={pdf}
                  title="Resume PDF"
                  width="100%"
                  height={isMobile ? "500px" : "1000px"}
                  style={{ 
                    border: "none", 
                  }}
                  allow="autoplay"
                />
              </div>
            </div>

            {/* Download Button Bottom */}
            <div className="d-flex justify-content-center mt-4 mb-4">
              <a href={pdf} download="Vishal_Baria_Resume.pdf" style={{ textDecoration: "none" }}>
                <Button 
                  variant="primary" 
                  size={isMobile ? "sm" : "lg"}
                  style={{
                    backgroundColor: "rgb(134, 61, 176)",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Resume;