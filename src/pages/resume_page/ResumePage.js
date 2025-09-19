
import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/final-resume.pdf";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      <section style={{ padding: isMobile ? "0 10px" : "0 20px" }}>
        <Container fluid>
          <div>
            {/* Heading */}
            <div
              className="d-flex justify-content-center"
              style={{ 
                backgroundColor: "#fbd9ad", 
                padding: "15px 0",
                marginBottom: "25px",
                width: "100%"
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
                    padding: isMobile ? "8px 16px" : "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>

            {/* Resume Viewer - use react-pdf for cross-device support */}
            <div className="d-flex justify-content-center mt-4">
              <div style={{
                width: "100%",
                maxWidth: "800px",
                backgroundColor: "white",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "0 auto",
                padding: 8
              }}>
                <Document
                  file={pdf}
                  loading={<div style={{ textAlign: 'center', padding: 40 }}>Loading PDF...</div>}
                  error={<div style={{ textAlign: 'center', color: 'red', padding: 40 }}>Failed to load PDF.</div>}
                >
                  <Page
                    pageNumber={1}
                    width={typeof window !== 'undefined' && window.innerWidth < 600 ? window.innerWidth - 32 : 800}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
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
                    padding: isMobile ? "8px 16px" : "10px 20px",
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