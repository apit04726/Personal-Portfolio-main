import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025; // change this to your project's first year, or set to null
  const displayYear = startYear && startYear < currentYear ? `${startYear} - ${currentYear}` : `${currentYear}`;
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by vishal</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {displayYear} vishal</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://wa.me/917096728816"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:vishalbaria7096@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
