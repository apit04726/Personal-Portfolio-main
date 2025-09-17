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
              <a href={pdf} download="final-resume.pdf">
                <Button variant="primary">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>

            {/* Resume Viewer - embed PDF directly for instant view */}
            <div className="resume d-flex justify-content-center mt-4">
              <iframe
                src={pdf}
                title="Resume PDF"
                width={isMobile ? "100%" : "800px"}
                height={isMobile ? "500px" : "1000px"}
                style={{ border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                allow="autoplay"
              />
            </div>

            {/* Download Button Bottom */}
            <div className="d-flex justify-content-center mt-4">
              <a href={pdf} download="final-resume.pdf">
                <Button variant="primary">
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
