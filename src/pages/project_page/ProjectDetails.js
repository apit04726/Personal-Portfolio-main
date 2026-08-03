import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Particle from '../../Particle';
import projects from '../../data/portfolioProjects';
import { FaExternalLinkAlt, FaArrowLeft, FaTh, FaUser, FaCalendarAlt, FaTag, FaGlobe, FaListAlt, FaDownload, FaMobileAlt } from 'react-icons/fa';

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const featuresListRef = useRef(null);
  const techListRef = useRef(null);
  const packagesListRef = useRef(null);
  const [hasFeaturesScroll, setHasFeaturesScroll] = useState(false);
  const [hasTechScroll, setHasTechScroll] = useState(false);
  const [hasPkgsScroll, setHasPkgsScroll] = useState(false);

  const project = projects.find(p => p.slug === slug);
  const formatUrl = (u) => {
    if (!u) return u;
    const ok = /^(https?:\/\/|mailto:|tel:|\/\/)/i;
    return ok.test(u) ? u : `https://${u}`;
  };
  const projectUrl = formatUrl(project?.url);
  const isReactNative = project?.category?.toString().trim().toLowerCase() === 'react native app';

  // Check if lists are scrollable
  useEffect(() => {
    const checkScroll = (ref, setter) => {
      if (ref.current) {
        const element = ref.current;
        const isScrollable = element.scrollHeight > element.clientHeight;
        setter(isScrollable);
      }
    };
    
    checkScroll(featuresListRef, setHasFeaturesScroll);
    checkScroll(techListRef, setHasTechScroll);
    checkScroll(packagesListRef, setHasPkgsScroll);
  }, [project?.features, project?.technologies, project?.packages]);

  // (Removed hover hint state/handlers — not used in markup)

  if (!project) {
    return (
      <Container className="py-5">
        <h3>Project not found</h3>
        <p>The requested project was not found.</p>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
      </Container>
    );
  }

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-start g-4 project-details-row">
            <Col md={6} className="order-1 order-md-1">
              <div className="project-image-wrap">
                {project.video ? (
                  <video
                    src={project.video}
                    controls
                    muted
                    playsInline
                    poster={project.image}
                    className="project-hero-video"
                    aria-label={`${project.title} video`}
                  />
                ) : project.images && project.images.length > 0 ? (
                  <Carousel className="project-hero-carousel" interval={4000} pause="hover">
                    {project.images.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        <img src={img} alt={`${project.title} slide ${idx + 1}`} className="project-hero-img" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <img src={project.image} alt={project.title} className="project-hero-img" />
                )}
              </div>
            </Col>
            <Col md={6} className="order-2 order-md-2">
              <div className="project-details card-like">
                <h2 className="project-title">
                  <span className="title-badge"><FaTh className="title-icon" /></span>
                  <span className="title-text">{project.title}</span>
                </h2>
                <p className="project-sub">{project.description}</p>
                <p className="project-desc">{project.details}</p>

                <div className="project-meta">
                  <div className="meta-row"><FaUser className="meta-icon" /><span className="meta-label">Client:</span> <span className="meta-value">{project.client}</span></div>
                  <div className="meta-row"><FaCalendarAlt className="meta-icon" /><span className="meta-label">Date:</span> <span className="meta-value">{project.date}</span></div>
                  <div className="meta-row"><FaTag className="meta-icon" /><span className="meta-label">Category:</span> <span className="meta-value">{project.category}</span></div>
                  <div className="meta-row">
                    {isReactNative ? (
                      <>
                        <FaMobileAlt className="meta-icon" />
                        <span className="meta-label">Download App:</span>
                      </>
                    ) : (
                      <>
                        <FaGlobe className="meta-icon" />
                        <span className="meta-label">Website:</span>
                      </>
                    )}
                    <span className="meta-value">{projectUrl ? (
                        <a
                          className={isReactNative ? "download-app-link" : "visit-link"}
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={isReactNative ? `Download ${project.title} App` : `Open ${project.title} website`}
                          onClick={(e) => {
                            try { e.preventDefault(); } catch (err) {}
                            if (projectUrl) { window.open(projectUrl, '_blank', 'noopener,noreferrer'); }
                          }}
                        >
                          <span className={isReactNative ? "download-app-text" : "visit-text"}>
                            {isReactNative ? 'Download App' : 'Visit Site'}
                          </span>{' '}
                          {isReactNative ? (
                            <FaDownload className="link-icon smart-download-icon" />
                          ) : (
                            <FaExternalLinkAlt className="link-icon" />
                          )}
                        </a>
                    ) : '—'}</span>
                  </div>
                </div>

                <hr/>
                <div className="project-features">
                  <div className="pf-grid">
                    <div className="pf-col pf-features">
                      <div className="features-header">
                        <h5>Features</h5>
                      </div>
                      <div ref={featuresListRef} className="pf-list-scroll">
                        <ul>
                          {((project.features || []).length > 0) ? (project.features || []).map((f, i) => <li key={i}>{f}</li>) : <li>—</li>}
                        </ul>
                        {/* Gradient overlay at bottom when scrollable */}
                        {hasFeaturesScroll && <div className="scroll-gradient-overlay"></div>}
                      </div>
                    </div>

                    <div className="pf-col pf-technologies">
                      <h5>Technologies</h5>
                      <div ref={techListRef} className="pf-list-scroll">
                        <ul>
                          {((project.technologies || []).length > 0) ? (project.technologies || []).map((t, i) => <li key={i}>{t}</li>) : <li>—</li>}
                        </ul>
                        {hasTechScroll && <div className="scroll-gradient-overlay"></div>}
                      </div>
                    </div>

                    <div className="pf-col pf-packages">
                      <h5>Libraries / Packages</h5>
                      <div ref={packagesListRef} className="pf-list-scroll">
                        <ul>
                          {((project.packages || []).length > 0) ? (project.packages || []).map((p, i) => <li key={i}>{p}</li>) : <li>—</li>}
                        </ul>
                        {hasPkgsScroll && <div className="scroll-gradient-overlay"></div>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 project-actions d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-back" onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
                  <Link to="/projectspage" className="btn btn-primary btn-all"><FaListAlt /> All Projects</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        /* ensure content sits above particle canvas and receives pointer events */
        .home-content { position: relative; z-index: 2; }

        .project-image-wrap {
          background: linear-gradient(180deg, #ffffff 0%, #fbf8ff 100%);
          padding: 18px;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(4,6,23,0.12);
          max-width: 100%;
        }
          .visit-link {
            font-weight: 600;
            color: #6b3bd0;
            text-decoration: underline;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color 0.3s ease;
          }
          .visit-link:hover {
            color: #8b46ff;
          }
          .visit-text {
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-weight: 700;
            font-size: 15px;
            color: inherit;
            display: inline-block;
          }

        .download-app-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6366f1 100%);
          background-size: 200% 200%;
          color: #ffffff !important;
          font-weight: 700;
          font-size: 14px;
          padding: 8px 20px;
          border-radius: 30px;
          text-decoration: none !important;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, filter 0.3s ease;
          position: relative;
          overflow: hidden;
          will-change: transform, box-shadow;
          animation: gradientShift 4s ease infinite, pulseGlow 2.5s infinite;
        }

        .download-app-link::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            60deg,
            transparent 30%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 70%
          );
          transform: rotate(30deg);
          animation: smartShimmer 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        .download-app-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(124, 58, 237, 0.65), 0 0 15px rgba(168, 85, 247, 0.5);
          filter: brightness(1.06);
          color: #ffffff !important;
        }

        .download-app-link:active {
          transform: translateY(0);
          filter: brightness(0.96);
        }

        .download-app-text {
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.3px;
          position: relative;
          z-index: 1;
        }

        .smart-download-icon {
          font-size: 14px;
          position: relative;
          z-index: 1;
          animation: smartBounce 1.8s infinite ease-in-out;
        }

        @keyframes smartBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(3px);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes smartShimmer {
          0% {
            transform: translateX(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) rotate(30deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
          }
          50% {
            box-shadow: 0 4px 22px rgba(168, 85, 247, 0.7);
          }
        }
        
        .project-hero-img {
          width: 100%;
          height: auto;
          display: block;
          margin: 0 auto;
          border-radius: 8px;
        }

        .project-video-wrap { margin-top: 12px; }
        .project-hero-video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          outline: none;
        }

        .project-hero-carousel .carousel-indicators [data-bs-target] {
          background-color: #7b3bd9;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 5px;
        }

        .project-hero-carousel .carousel-control-prev-icon,
        .project-hero-carousel .carousel-control-next-icon {
          background-color: rgba(123, 59, 217, 0.5);
          border-radius: 50%;
          padding: 10px;
          background-size: 50%;
        }

        .project-details { color: #222; background: #ffffff; padding: 24px; border-radius: 14px; 
          /* responsive typography variables */
          --fs-title: clamp(18px, 4.5vw, 28px);
          --fs-sub: clamp(14px, 3vw, 16px);
          --fs-desc: clamp(14px, 3.2vw, 16px);
          --fs-pf-h5: clamp(15px, 3vw, 16px);
          --fs-list: clamp(14px, 3vw, 15px);
        }
        .card-like { box-shadow: 0 18px 60px rgba(15, 23, 42, 0.12); border: 1px solid rgba(99,102,241,0.03); }

        .project-title { margin-bottom: 6px; display: flex; align-items: center; gap: 12px; }
        .title-badge { background: linear-gradient(180deg,#7c3aed,#b794f4); width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center; border-radius:10px; box-shadow: 0 6px 18px rgba(124,58,237,0.12); }
        .title-icon { color: #fff; font-size: 16px; }
        .title-text { color: #2b1b57; font-size: var(--fs-title); font-weight:700; }

        .project-sub { font-size: var(--fs-sub); color: #5b4b6b; margin: 8px 0 6px; font-weight:600; text-align: justify; hyphens: auto; word-break: break-word; }
        .project-desc { color: rgba(34,34,34,0.92); margin-top: 8px; line-height: 1.6; font-size: var(--fs-desc); text-align: justify; text-justify: inter-word; hyphens: auto; word-break: break-word; }

        .project-meta { margin-top: 12px; display:flex; flex-direction:column; gap:8px; }
        .meta-row { display:flex; gap:10px; align-items:center; color:#4b415d; flex-wrap: wrap; }
        .meta-icon { color: #7b3bd9; vertical-align: middle; min-width:18px; }
        .meta-label { color:#6b3bd0; font-weight:600;}
        .meta-value { color:#3a3147; }

        .btn-visit { color: #fff !important; background: linear-gradient(90deg,#7b3bd9,#b06cfb); padding: 8px 12px; border-radius: 999px; display:inline-flex; align-items:center; gap:8px; text-decoration:none; box-shadow: 0 8px 20px rgba(123,59,217,0.12); }
        .link-icon { font-size: 12px; }

        .project-features { margin-top: 16px; }
        .project-features .pf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 8px;
          align-items: start;
          background: #f6f5fb;
          padding: 18px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(99,102,241,0.04);
        }
        .project-features .pf-col { min-width: 0; }
        .project-features .pf-col h5 {
          margin-bottom: 10px;
          color: #6b3bd0;
          font-size: var(--fs-pf-h5);
          font-weight:800;
          letter-spacing: 0.2px;
        }
        
        .features-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .scroll-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transform: translateY(-5px);
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .scroll-hint.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-hint-icon {
          color: #7b3bd9;
          font-size: 12px;
          animation: bounce 2s infinite;
        }
        
        .scroll-hint-text {
          font-size: 11px;
          color: #7b3bd9;
          font-weight: 600;
          white-space: nowrap;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-3px);
          }
          60% {
            transform: translateY(-1px);
          }
        }
        
        .project-features .pf-col ul {
          padding-left: 20px;
          margin: 0;
          list-style: disc;
          color: #3a3147;
          line-height: 1.6;
          margin-top: 6px;
          font-size: var(--fs-list);
        }
        .project-features .pf-col li { margin-bottom: 8px; }

        /* Desktop-only: limit Features column to ~3 list items and make it scrollable */
        .project-features .pf-col .pf-list-scroll {
          position: relative;
        }
        
        @media (min-width: 769px) {
          .project-features .pf-col .pf-list-scroll {
            max-height: calc(var(--fs-list) * 11.8 + 12px);
            overflow-y: auto;
            padding-right: 6px;
            position: relative;
          }
          
          .scroll-gradient-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 6px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, #f6f5fb 90%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .project-features .pf-col .pf-list-scroll:not(:hover) .scroll-gradient-overlay {
            opacity: 1;
          }
          
          .project-features .pf-col .pf-list-scroll:hover .scroll-gradient-overlay {
            opacity: 0;
          }
          
          .project-features .pf-col .pf-list-scroll ul { margin: 0; }
          .project-features .pf-col .pf-list-scroll::-webkit-scrollbar { width: 8px; }
          .project-features .pf-col .pf-list-scroll::-webkit-scrollbar-thumb { 
            background: rgba(107,59,215,0.2); 
            border-radius: 6px; 
          }
          .project-features .pf-col .pf-list-scroll::-webkit-scrollbar-thumb:hover { 
            background: rgba(107,59,215,0.3); 
          }
          .project-features .pf-col .pf-list-scroll { 
            scrollbar-width: thin; 
            scrollbar-color: rgba(107,59,215,0.2) transparent; 
          }
        }

        .project-actions .btn { display: inline-flex; align-items: center; gap: 8px; }
        .btn-back { border-radius: 10px; padding: 8px 14px; }
        .btn-all { border-radius: 10px; padding: 8px 14px; background: linear-gradient(90deg,#6b2bd7,#9f67f5); border: none; color: #fff; box-shadow: 0 8px 24px rgba(107,43,215,0.12); }

        /* Responsive: center content on small screens and stack */
        @media (max-width: 1200px) {
          .project-features .pf-grid { gap: 18px; }
        }

        @media (max-width: 992px) {
          .project-details { text-align: left; }
          .project-features .pf-grid { grid-template-columns: repeat(2, 1fr); }
          .features-header {
            justify-content: flex-start;
            gap: 12px;
          }
        }

        @media (max-width: 768px) {
          .project-details { text-align: left; }
          .project-sub, .project-desc { text-align: justify; }
          .project-features .pf-grid { grid-template-columns: 1fr; }
          .project-features .pf-col h5 { text-align: left; }
          .project-features .pf-col ul { text-align: left; }
          .project-actions { flex-direction: column; }
          .project-actions .btn { width: 100%; justify-content: center; }
          .project-image-wrap { padding: 12px; }
          .scroll-hint { display: none; }
          .scroll-gradient-overlay { display: none; }
        }

        /* On small/narrow devices avoid full justification (large gaps) */
        @media (max-width: 520px) {
          .project-sub, .project-desc {
            text-align: left;
            text-justify: auto;
            hyphens: auto;
            word-break: break-word;
            word-spacing: normal;
          }
        }

        @media (max-width: 480px) {
          .title-text { font-size: 20px; }
          .project-desc { font-size: 14px; text-align: left; }
          .download-app-link { padding: 6px 14px; font-size: 13px; }
          .download-app-text { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}