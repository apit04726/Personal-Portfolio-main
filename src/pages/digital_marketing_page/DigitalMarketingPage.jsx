import React from "react";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaChartLine,
  FaCheckCircle,
  FaRocket,
  FaAward,
  FaBullseye,
  FaArrowRight,
  FaInstagram,
  FaGoogle
} from "react-icons/fa";
import { SiGoogleanalytics, SiGoogleads, SiMeta, SiSemrush } from "react-icons/si";
import GoogleAnalyticsDiagram from "./GoogleAnalyticsDiagram";
import "./DigitalMarketing.css";

export default function DigitalMarketingPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content dm-page-container">
          {/* Header Banner - Matching Theme identically to Projects and Resume */}
          <div
            className="d-flex justify-content-center page-header-banner"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>DIGITAL MARKETING</h1>
            </Zoom>
          </div>

          {/* Hero Intro - First Person Real Experience */}
          <Fade bottom>
            <div className="dm-hero-badge-wrap">
              <div className="dm-exp-badge">
                <FaAward />
                <span>3+ Years of Hands-on Industry Experience &amp; Proven Track Record</span>
              </div>
            </div>

            <h2 className="dm-hero-headline">
              Driving Measurable Growth With <span className="dm-gradient-text">Smart Marketing &amp; High ROAS</span>
            </h2>

            <p className="dm-hero-subtext">
              I specialize in scaling brands through end-to-end digital marketing execution. From launching profitable <strong>Meta Ads &amp; Google Ads</strong> campaigns to managing high-growth <strong>Social Media accounts</strong>, ranking on Google with advanced <strong>SEO</strong>, and tracking every conversion with <strong>Google Analytics 4 (GA4)</strong>.
            </p>
          </Fade>

          {/* Real Work Highlights Counter */}
          <Fade bottom>
            <div className="dm-stats-row">
              <div className="dm-stat-card">
                <div className="dm-stat-number">
                  <span>3+</span>
                  <span style={{ fontSize: "1.3rem", color: "#b061df" }}>Years</span>
                </div>
                <div className="dm-stat-label">Real Hands-on Experience</div>
              </div>

              <div className="dm-stat-card">
                <div className="dm-stat-number">
                  <span>$150K+</span>
                </div>
                <div className="dm-stat-label">Ad Budget Personally Managed</div>
              </div>

              <div className="dm-stat-card">
                <div className="dm-stat-number" style={{ color: "#00e676" }}>
                  <span>4.8x</span>
                </div>
                <div className="dm-stat-label">Average Return on Ad Spend (ROAS)</div>
              </div>

              <div className="dm-stat-card">
                <div className="dm-stat-number">
                  <span>50+</span>
                </div>
                <div className="dm-stat-label">Successful Campaigns Delivered</div>
              </div>
            </div>
          </Fade>

          {/* =======================================================
              EXECUTIVE GOOGLE ANALYTICS DIAGRAM SECTION
             ======================================================= */}
          <div className="dm-section-title-wrap">
            <span className="dm-section-tag">Real-Time Data &amp; Verified Analytics</span>
            <h3 className="dm-section-heading">Google Analytics 4 (GA4) Executive Dashboard</h3>
          </div>

          <Fade bottom>
            <GoogleAnalyticsDiagram />
          </Fade>

          {/* =======================================================
              MY HANDS-ON WORK: SEO, SOCIAL MEDIA, ADS & ANALYTICS
             ======================================================= */}
          <div className="dm-section-title-wrap">
            <span className="dm-section-tag">Direct Hands-on Expertise</span>
            <h3 className="dm-section-heading">How I Have Worked &amp; Delivered Real Results</h3>
          </div>

          <Fade bottom>
            <div className="dm-services-grid">
              {/* 1. Meta Ads (Facebook & Instagram) */}
              <div className="dm-service-card">
                <div className="service-icon-box ads">
                  <SiMeta />
                </div>
                <h4 className="dm-service-title">Meta Ads (Facebook &amp; Instagram)</h4>
                <p className="dm-service-desc">
                  I have built and scaled multi-tiered paid ad funnels on Facebook and Instagram, transforming cold traffic into high-converting buyers with optimal ad spend.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Full Funnel Setup: TOFU (Reach/Awareness), MOFU (Consideration/Lead), BOFU (Retargeting)</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Advanced Meta Pixel &amp; Conversions API (CAPI) setup with iOS 14.5+ event prioritization</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Lookalike Audiences (1%-3%) &amp; High-Intent Custom Audiences from website visitors</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Continuous A/B creative testing (Reel video ads, high-converting carousels &amp; copy hooks)</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Delivered consistent <strong>4.2x to 5.5x ROAS</strong> across e-commerce &amp; service businesses</span>
                  </li>
                </ul>
              </div>

              {/* 2. Social Media Account Management */}
              <div className="dm-service-card">
                <div className="service-icon-box smm">
                  <FaInstagram />
                </div>
                <h4 className="dm-service-title">Social Media Accounts Management</h4>
                <p className="dm-service-desc">
                  I have personally managed and scaled professional brand accounts on Instagram, Facebook, and LinkedIn, increasing brand equity and authentic engagement.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Designed cohesive visual feed aesthetics, brand guidelines, and carousel templates</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Viral Reels &amp; short-form video scripting focused on viewer retention and shareability</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Planned high-impact monthly content calendars (Educational, Social Proof, Offers)</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Organic community engagement, active comment replies &amp; story interaction polls</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Grew account follower base organically by <strong>250%+</strong> within 90-day cycles</span>
                  </li>
                </ul>
              </div>

              {/* 3. Google Analytics 4 (GA4) & Tag Manager */}
              <div className="dm-service-card">
                <div className="service-icon-box analytics">
                  <SiGoogleanalytics />
                </div>
                <h4 className="dm-service-title">Google Analytics 4 &amp; Tracking Setup</h4>
                <p className="dm-service-desc">
                  I ensure every marketing dollar is accountable by configuring rock-solid GA4 measurement, custom events, and conversion funnel analytics.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Complete GA4 migration and configuration with custom conversion event parameters</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Google Tag Manager (GTM) setup for WhatsApp clicks, phone calls, form submits &amp; purchases</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>User behavior funnel mapping to identify exact drop-off points between cart and checkout</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Bounce rate reduction and landing page engagement time optimization (Avg. 3m 48s)</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Built interactive Looker Studio dashboards for automated, transparent client reports</span>
                  </li>
                </ul>
              </div>

              {/* 4. Google Ads (Search, Display & PMax) */}
              <div className="dm-service-card">
                <div className="service-icon-box roas">
                  <SiGoogleads />
                </div>
                <h4 className="dm-service-title">Google Ads (Search, Display &amp; PMax)</h4>
                <p className="dm-service-desc">
                  I have designed and executed high-intent Google Ads campaigns that capture customers at the exact moment they are ready to purchase or hire.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>High-intent keyword targeting with exhaustive negative keyword lists to prevent wasted spend</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Quality Score optimization (achieving 8 to 10/10) to secure top ad ranks at lower CPC</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Performance Max (PMax) campaigns leveraging Google's machine learning across all channels</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Smart Bidding strategies (Target CPA &amp; Target ROAS) for maximum profitability</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Reduced Cost Per Acquisition (CPA) by <strong>45%</strong> while doubling conversion volume</span>
                  </li>
                </ul>
              </div>

              {/* 5. SEO (Search Engine Optimization) */}
              <div className="dm-service-card">
                <div className="service-icon-box seo">
                  <FaSearch />
                </div>
                <h4 className="dm-service-title">SEO (Search Engine Optimization)</h4>
                <p className="dm-service-desc">
                  I execute technical, on-page, and authority SEO strategies that rank competitive keywords on Google Page 1 for organic recurring traffic.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Deep technical site audits resolving crawl errors, broken links, and redirect chains</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>On-page optimization: Title tags, meta descriptions, semantic headers, and image ALT tags</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Core Web Vitals speed optimization to ensure lightning-fast mobile loading speeds</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>High-authority backlink acquisition and Google Business Profile (GBP) Local SEO</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Successfully ranked <strong>45+ competitive keywords</strong> on Google Page 1</span>
                  </li>
                </ul>
              </div>

              {/* 6. Smart & Data-Driven Execution */}
              <div className="dm-service-card">
                <div className="service-icon-box smart">
                  <FaRocket />
                </div>
                <h4 className="dm-service-title">Smart &amp; Professional Execution</h4>
                <p className="dm-service-desc">
                  I combine creative marketing instincts with rigorous data analysis. Every decision is tested, measured, and optimized for business profit.
                </p>
                <ul className="dm-feature-list">
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Landing page conversion rate optimization (CRO) with user friction removal</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Transparent weekly performance tracking with actionable video walkthroughs</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Zero wasted budget policy — stopping underperforming ads early and scaling winners</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Continuous competitive intelligence and trend adaptation to keep clients ahead</span>
                  </li>
                  <li>
                    <FaCheckCircle className="check-icon" />
                    <span>Reliable, responsive collaboration focused on long-term growth and client ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>

          {/* =======================================================
              MY 4-STEP PROVEN WORK PROCESS
             ======================================================= */}
          <div className="dm-section-title-wrap">
            <span className="dm-section-tag">Proven Methodology</span>
            <h3 className="dm-section-heading">My 4-Step Smart Execution Process</h3>
          </div>

          <div className="dm-process-grid">
            <Fade bottom delay={100}>
              <div className="dm-process-step">
                <span className="step-number">01</span>
                <FaSearch className="step-icon" />
                <h5 className="step-title">1. Audit &amp; Opportunity Map</h5>
                <p className="step-text">
                  I analyze current ad accounts, website analytics, conversion tracking gaps, and competitor strengths to build a concrete battle plan.
                </p>
              </div>
            </Fade>

            <Fade bottom delay={200}>
              <div className="dm-process-step">
                <span className="step-number">02</span>
                <FaBullseye className="step-icon" />
                <h5 className="step-title">2. Funnel &amp; Asset Creation</h5>
                <p className="step-text">
                  I construct target buyer personas, design high-converting ad hooks, write persuasive sales copy, and configure server-side pixel tracking.
                </p>
              </div>
            </Fade>

            <Fade bottom delay={300}>
              <div className="dm-process-step">
                <span className="step-number">03</span>
                <FaRocket className="step-icon" />
                <h5 className="step-title">3. Launch &amp; Rapid Split-Testing</h5>
                <p className="step-text">
                  I deploy campaigns with controlled budgets, split-testing multiple creative angles, audiences, and headlines to identify top performers.
                </p>
              </div>
            </Fade>

            <Fade bottom delay={400}>
              <div className="dm-process-step">
                <span className="step-number">04</span>
                <FaChartLine className="step-icon" />
                <h5 className="step-title">4. Scale &amp; Maximize ROAS</h5>
                <p className="step-text">
                  I scale winning ad sets horizontally and vertically, continuously refining SEO keyword rank and optimizing cost-per-acquisition.
                </p>
              </div>
            </Fade>
          </div>

          {/* =======================================================
              PLATFORMS & TOOLS I WORK WITH
             ======================================================= */}
          <div className="dm-section-title-wrap">
            <span className="dm-section-tag">Platforms &amp; Tools Mastered</span>
            <h3 className="dm-section-heading">Industry Software &amp; Tech Stack I Use Daily</h3>
          </div>

          <Fade bottom>
            <div className="dm-tools-grid">
              <div className="dm-tool-item">
                <SiGoogleanalytics className="tool-icon text-warning" />
                <span className="tool-name">Google Analytics 4</span>
              </div>

              <div className="dm-tool-item">
                <SiGoogleads className="tool-icon text-info" />
                <span className="tool-name">Google Ads</span>
              </div>

              <div className="dm-tool-item">
                <SiMeta className="tool-icon text-primary" />
                <span className="tool-name">Meta Ads Manager</span>
              </div>

              <div className="dm-tool-item">
                <FaGoogle className="tool-icon text-danger" />
                <span className="tool-name">Search Console</span>
              </div>

              <div className="dm-tool-item">
                <SiSemrush className="tool-icon text-warning" />
                <span className="tool-name">SEMrush SEO</span>
              </div>

              <div className="dm-tool-item">
                <FaInstagram className="tool-icon text-danger" />
                <span className="tool-name">Instagram &amp; LinkedIn</span>
              </div>
            </div>
          </Fade>

          {/* =======================================================
              CALL TO ACTION (CTA)
             ======================================================= */}
          <Fade bottom>
            <div className="dm-cta-card">
              <h3 className="dm-cta-title">Looking for High-ROAS Growth &amp; Professional Execution?</h3>
              <p className="dm-cta-desc">
                Whether you need profitable Meta &amp; Google Ads, high-authority Google SEO, strategic social media growth, or full GA4 tracking setup, I am ready to scale your business.
              </p>
              <div className="dm-cta-btn-group">
                <a
                  href="https://wa.me/917096728816?text=Hi%20Vishal,%20I'm%20interested%20in%20your%20Digital%20Marketing,%20SEO%20and%20Ads%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="dm-primary-btn"
                >
                  <FaRocket /> Discuss Your Project on WhatsApp
                </a>
                <Link to="/" className="dm-secondary-btn">
                  Back to Main Portfolio <FaArrowRight />
                </Link>
              </div>
            </div>
          </Fade>
        </Container>
      </Container>
    </section>
  );
}
