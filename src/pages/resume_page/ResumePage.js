import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/final-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/src/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Fix: Make PDF responsive on all screens
  const pdfWidth = Math.min(width - 32, 800);

  useEffect(() => {
    // Add custom scrollbar styling for the PDF viewer only
    const style = document.createElement("style");
    style.innerHTML = `
      .resume-pdf-viewer::-webkit-scrollbar {
        width: 6px;
      }
      .resume-pdf-viewer::-webkit-scrollbar-thumb {
        background: #c7a4de;
        border-radius: 6px;
      }
      .resume-pdf-viewer::-webkit-scrollbar-track {
        background: transparent;
      }
      .resume-pdf-viewer {
        scrollbar-width: thin;
        scrollbar-color: #c7a4de transparent;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      <section style={{ marginTop: isMobile ? "34%" : "10%" }}>
        <Container>
          <div>
            {/* Heading */}
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>

            {/* Download Button Top */}
            <div className="d-flex justify-content-center mt-4">
              <a
                href={pdf}
                download="Vishal_Baria_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="primary"
                  size={isMobile ? "sm" : "lg"}
                  style={{
                    backgroundColor: "rgb(134, 61, 176)",
                    border: "none",
                    borderRadius: "5px",
                    padding: isMobile ? "8px 16px" : "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>

            {/* Resume Viewer */}
            <div className="d-flex justify-content-center mt-4">
              <div
                className="resume-pdf-viewer"
                style={{
                  width: "100%",
                  maxWidth: 817,
                  backgroundColor: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  borderRadius: 14,
                  overflowY: "auto",
                  overflowX: "hidden",
                  maxHeight: isMobile ? "80vh" : "90vh",
                  margin: "0 auto",
                  padding: 8,
                  boxSizing: "border-box",
                }}
              >
                <Document
                  file={pdf}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  loading={
                    <div style={{ textAlign: "center", padding: 40 }}>
                      Loading PDF...
                    </div>
                  }
                  error={
                    <div
                      style={{ textAlign: "center", color: "red", padding: 40 }}
                    >
                      Failed to load PDF.
                    </div>
                  }
                >
                  {numPages &&
                    Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={pdfWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={true}
                      />
                    ))}
                </Document>
              </div>
            </div>

            {/* Download Button Bottom */}
            <div className="d-flex justify-content-center mt-4 mb-4">
              <a
                href={pdf}
                download="Vishal_Baria_Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="primary"
                  size={isMobile ? "sm" : "lg"}
                  style={{
                    backgroundColor: "rgb(134, 61, 176)",
                    border: "none",
                    borderRadius: "5px",
                    padding: isMobile ? "8px 16px" : "10px 20px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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
