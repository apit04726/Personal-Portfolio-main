import React, { useState, useEffect } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import projects from "../../data/portfolioProjects";

export default function ProjectPage() {
  // Initialize active filter from localStorage (if available)
  const [activeFilter, setActiveFilter] = useState(() => {
    try {
      return localStorage.getItem('activeFilter') || 'All project';
    } catch (e) {
      return 'All project';
    }
  });

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [loading, setLoading] = useState(false);

  // Available categories for filtering (ensure this is always defined)
  const categories = ['All project', 'wordpress &php', 'react js', 'react native app', 'shopify', 'core php', 'laravel'];

  // Sync filteredProjects and persist activeFilter whenever it changes
  useEffect(() => {
    if (!activeFilter || activeFilter === 'All project') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.category && project.category.toString().trim().toLowerCase() === activeFilter.toString().trim().toLowerCase()
      );
      setFilteredProjects(filtered);
    }

    try {
      localStorage.setItem('activeFilter', activeFilter);
    } catch (e) {
      // ignore write errors (e.g., private mode)
    }
  }, [activeFilter]);

  const handleFilterClick = (category) => {
    setLoading(true);
    setActiveFilter(category);

    // Show loader for 1 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>

          {/* Filter Buttons - Improved Design */}
          <div className="text-center my-4">
            <Fade bottom>
              <div className="filter-buttons-container">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => handleFilterClick(category)}
                    disabled={loading}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Fade>
          </div>

          {/* Beautiful Loader */}
          {loading && (
            <Fade>
              <div className="loader-container">
                <div className="spinner"></div>
                <p className="loader-text">Loading projects...</p>
              </div>
            </Fade>
          )}
          <div style={{ display: loading ? 'none' : 'block' }}>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-3">
                      <Row className="g-5">
                        {filteredProjects.map((project, index) => (
                          <Col md={3} className="col-sm-12 col-md-4" key={index}>
                            <Fade bottom>
                              <div
                                className="singleProject"
                                style={{
                                  backgroundColor: "rgb(142 70 186 / 31%)",
                                  border: "1px solid",
                                }}
                              >
                                <div className="projectContent">
                                  <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                    {project.title}
                                  </h5>
                                  <h6 id={"first"} style={{ color: "#fbd9ad" }}>
                                    {project.category}
                                  </h6>
                                  <img src={project.image} alt={project.title} />
                                  <div className="project--showcaseBtn">
                                    <Link to={`/project/${project.slug}`} className={"iconBtn detailsBtn"} aria-label={`Details ${project.title}`}>
                                      <FaCode aria-hidden="true" />
                                    </Link>
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
                                    {project.details}
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
                                  {project.category}
                                </div>
                              </div>
                            </Fade>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>

      <style jsx>{`
        .filter-buttons-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 0 15px;
        }

        .filter-btn {
          background-color: #fbd9ad;
          color: rgb(134 61 176);
          border: 2px solid rgb(134 61 176);
          border-radius: 25px;
          font-weight: 600;
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          min-width: 120px;
          flex: 1;
          max-width: 160px;
        }
          /* Responsive for screens ≤ 1024px */
        @media (max-width: 1024px) {
        .filter-btn {
          padding: 2px 14px;
          font-size: 13px;
          min-width: 90px;
          max-width: 120px;
          border-radius: 18px;
        }
        }
 
        .filter-btn:hover:not(:disabled) {
          background-color: rgb(134 61 176);
          color: #fbd9ad;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(134, 61, 176, 0.3);
        }

        .filter-btn.active {
          background-color: rgb(134 61 176);
          color: #fbd9ad;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(134, 61, 176, 0.4);
        }

        .filter-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Beautiful Loader Styles */
        .loader-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          min-height: 300px;
        }

      .spinner {
        border: 6px solid #f3f3f3;
        border-top: 6px solid #ffb347;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        animation: spin 1s linear infinite;
        margin-top: 9%;
      }

        .loader-text {
          color: rgb(134, 61, 176);
          font-size: 15px;
          font-weight: 600;
          margin: 9px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .filter-buttons-container {
            gap: 8px;
            padding: 0 10px;
          }

          .filter-btn {
            padding: 0px 16px;
            font-size: 11px;
            min-width: 100px;
            max-width: 140px;
            border-radius: 20px;
          }

          .spinner {
            width: 50px;
            height: 50px;
            border-width: 6px;
          }

          .loader-text {
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          .filter-buttons-container {
            gap: 6px;
          }

          .filter-btn {
            padding: 6px 12px;
            font-size: 11px;
            min-width: 90px;
            max-width: 110px;
            border-radius: 18px;
          }

          .loader-container {
            padding: 40px 15px;
            min-height: 200px;
          }

          .spinner {
            width: 35px;
            height: 35px;
            border-width: 6px;
          }

          .loader-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .filter-buttons-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }

          .filter-btn {
            min-width: auto;
            max-width: none;
            width: 100%;
            padding: 8px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}