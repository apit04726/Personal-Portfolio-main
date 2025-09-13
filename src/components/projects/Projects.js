import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import jk from "../../images/jk-.jpeg";
import leaninng from "../../images/leaninng-1.jpg";
import mrfish from "../../images/mr-fish.jpg";
import { FaCode } from "react-icons/fa";
import amm from "../../images/Amm-pro.jpg";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
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
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "25px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      LendingUSA
                    </h5>
                    <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                      WordPress ACF & PHP
                    </h6>
                    <img src={leaninng} alt={leaninng} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://lendingusa.com/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      LendingUSA is a fintech platform that provides point-of-sale
                      financing for merchants and personal loans for borrowers, helping over 10,000
                      businesses and 150,000 customers with fast, flexible funding solutions.

                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    WordPress & PHP ACF, MySQL & SQL, JavaScript, HTML, CSS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",marginBottom: "25px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Jk Capinvest
                    </h5>
                    <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                      WordPress Elementor
                    </h6>
                    <img src={jk} alt={jk} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://jkcapinvest.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Use of AI and Machine Learning: Artificial intelligence
                      and machine learning are already being used in healthcare
                      to help predict heart disease. In the future, these
                      technologies could become more advanced, enabling more
                      accurate predictions of heart disease risk.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Advanced Wordpress & Elementor Build Plugins
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",marginBottom: "25px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Mr Fish Uk
                    </h5>
                    <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                      WordPress Elementor
                    </h6>
                    <img src={mrfish} alt={mrfish} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://www.mrfish.uk.com/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Mr Fish — A beloved traditional fish & chips eatery located at 51 Salusbury Rd,
                      London NW6 6NJ, serving up a mix of classic and modern British fare for over 30 years.

                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    CSS, JavaScript, PHP, SCSS, WordPress, Elementor
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",marginBottom: "25px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Amm Pro
                    </h5>
                    <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                      WordPress Bakery Page Builder
                    </h6>
                    <img src={amm} alt={amm} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://amm-pro.com/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      AMM-PRO (AM Management & Productions) is a London-founded event production company,
                      established in 2003 by Ali Matar. With over 20 years of expertise, AMM-PRO delivers custom-tailored
                      show production and event management—spanning from intimate gatherings to large-scale international.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    wordpress Elementor paid Plugin
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
