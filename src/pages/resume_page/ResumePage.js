import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/final-resume.pdf";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Zoom from "react-reveal/Zoom";

const Document = lazy(() => import("react-pdf").then(mod => ({ default: mod.Document })));
const Page = lazy(() => import("react-pdf").then(mod => ({ default: mod.Page })));
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <section>
        <Container>
          <div>
            <div
              className="d-flex justify-content-center"
              width="100%"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <a href={pdf} download="final-resume.pdf" style={{marginTop:"50px"}}>
                <Button variant="primary">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </a>
            </div>
              <div className="resume d-flex justify-content-center">
                <Suspense fallback={<div>Loading resume...</div>}>
                  <Document file={pdf} onLoadSuccess={({ numPages }) => { setNumPages(numPages); }}>
                    {[...Array(numPages || 1)].map((_, idx) => (
                      <Page key={idx + 1} pageNumber={idx + 1} scale={width > 786 ? 1.6 : 0.4} />
                    ))}
                  </Document>
                </Suspense>
              </div>
            <div className="d-flex justify-content-center">
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
