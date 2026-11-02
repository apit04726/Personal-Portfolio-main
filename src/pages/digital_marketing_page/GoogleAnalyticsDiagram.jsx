import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaSearch,
  FaCheckCircle,
  FaRocket,
  FaChartPie,
  FaBullhorn
} from "react-icons/fa";
import { SiGoogleanalytics, SiGoogleads, SiMeta } from "react-icons/si";

function CustomDropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((o) => o.value === value) || options[0];

  return (
    <div className="ga-filter-select-box" ref={dropdownRef}>
      <span className="ga-filter-label">{label}</span>
      <div className="ga-custom-select-wrap">
        <button
          type="button"
          className={`ga-filter-select ga-custom-select-trigger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="ga-custom-select-text">{selectedOption.label}</span>
          <span className={`ga-custom-select-arrow ${open ? "arrow-up" : ""}`}>▾</span>
        </button>

        {open && (
          <div className="ga-custom-dropdown-menu">
            {options.map((opt) => (
              <div
                key={opt.value}
                className={`ga-custom-dropdown-item ${opt.value === value ? "active" : ""}`}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
              >
                <span className="ga-dropdown-item-label">{opt.label}</span>
                {opt.value === value && <span className="ga-dropdown-check">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function GoogleAnalyticsDiagram() {
  const [timeRange, setTimeRange] = useState("30d");
  const [activeChannel, setActiveChannel] = useState("all");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [deviceFilter, setDeviceFilter] = useState("all");

  // Dynamic dataset per time range (Matching real GA4 metrics from reference)
  const datasets = {
    "7d": {
      kpis: {
        sessions: "1.8M",
        sessionsGrowth: "+18.4%",
        totalUsers: "890K",
        usersGrowth: "+14.2%",
        newUsers: "640K",
        newUsersGrowth: "+19.1%",
        avgEngagement: "05:42",
        avgRoas: "4.7x"
      },
      donut: [
        { id: "seo", label: "Organic Search", pct: 51.2, users: "455K", sessions: "921K", color: "#00e676" },
        { id: "meta", label: "Meta Ads (IG & FB)", pct: 28.5, users: "253K", sessions: "513K", color: "#3b82f6" },
        { id: "google", label: "Google Ads PPC", pct: 15.8, users: "140K", sessions: "284K", color: "#f59e0b" },
        { id: "direct", label: "Direct & Referral", pct: 4.5, users: "42K", sessions: "82K", color: "#b061df" }
      ],
      table: [
        { channel: "Organic Search", sessions: "921K", users: "455K", newUsers: "390K", share: "51.2%", color: "#00e676", id: "seo" },
        { channel: "Meta Ads (IG/FB)", sessions: "513K", users: "253K", newUsers: "185K", share: "28.5%", color: "#3b82f6", id: "meta" },
        { channel: "Paid Search (Google)", sessions: "284K", users: "140K", newUsers: "98K", share: "15.8%", color: "#f59e0b", id: "google" },
        { channel: "Direct & Referral", sessions: "82K", users: "42K", newUsers: "27K", share: "4.5%", color: "#b061df", id: "direct" }
      ],
      circles: [
        { id: "seo", title: "Organic SEO", pct: 51, val: "921K", sub: "+140% Growth", color: "#00e676", icon: <FaSearch /> },
        { id: "meta", title: "Meta Ads", pct: 29, val: "4.7x", sub: "Verified ROAS", color: "#3b82f6", icon: <SiMeta /> },
        { id: "google", title: "Google PPC", pct: 16, val: "9/10", sub: "Quality Score", color: "#f59e0b", icon: <SiGoogleads /> },
        { id: "social", title: "Social Reach", pct: 82, val: "240%", sub: "+6.8% Eng.", color: "#b061df", icon: <FaBullhorn /> },
        { id: "cvr", title: "Conversion", pct: 74, val: "4.4%", sub: "1,540 Leads", color: "#ec4899", icon: <FaRocket /> },
        { id: "track", title: "GA4 Accuracy", pct: 99, val: "99.4%", sub: "Server CAPI", color: "#00d2ff", icon: <FaCheckCircle /> }
      ]
    },
    "30d": {
      kpis: {
        sessions: "7.3M",
        sessionsGrowth: "+24.8%",
        totalUsers: "3.6M",
        usersGrowth: "+21.5%",
        newUsers: "2.6M",
        newUsersGrowth: "+27.3%",
        avgEngagement: "06:18",
        avgRoas: "4.8x"
      },
      donut: [
        { id: "seo", label: "Organic Search", pct: 53.4, users: "1.92M", sessions: "3.90M", color: "#00e676" },
        { id: "meta", label: "Meta Ads (IG & FB)", pct: 27.4, users: "986K", sessions: "2.00M", color: "#3b82f6" },
        { id: "google", label: "Google Ads PPC", pct: 15.2, users: "547K", sessions: "1.10M", color: "#f59e0b" },
        { id: "direct", label: "Direct & Referral", pct: 4.0, users: "147K", sessions: "300K", color: "#b061df" }
      ],
      table: [
        { channel: "Organic Search", sessions: "3.9M", users: "2.4M", newUsers: "2.0M", share: "53.4%", color: "#00e676", id: "seo" },
        { channel: "Meta Ads (IG/FB)", sessions: "2.0M", users: "665.3K", newUsers: "374.3K", share: "27.4%", color: "#3b82f6", id: "meta" },
        { channel: "Paid Search (Google)", sessions: "1.1M", users: "304.9K", newUsers: "63.9K", share: "15.2%", color: "#f59e0b", id: "google" },
        { channel: "Direct & Referral", sessions: "300K", users: "185K", newUsers: "71K", share: "4.0%", color: "#b061df", id: "direct" }
      ],
      circles: [
        { id: "seo", title: "Organic SEO", pct: 53, val: "3.9M", sub: "+192% Growth", color: "#00e676", icon: <FaSearch /> },
        { id: "meta", title: "Meta Ads", pct: 27, val: "4.8x", sub: "Verified ROAS", color: "#3b82f6", icon: <SiMeta /> },
        { id: "google", title: "Google PPC", pct: 15, val: "9.2/10", sub: "Quality Score", color: "#f59e0b", icon: <SiGoogleads /> },
        { id: "social", title: "Social Reach", pct: 85, val: "280%", sub: "+7.4% Eng.", color: "#b061df", icon: <FaBullhorn /> },
        { id: "cvr", title: "Conversion", pct: 78, val: "4.5%", sub: "6,420 Leads", color: "#ec4899", icon: <FaRocket /> },
        { id: "track", title: "GA4 Accuracy", pct: 99, val: "99.4%", sub: "Server CAPI", color: "#00d2ff", icon: <FaCheckCircle /> }
      ]
    },
    "90d": {
      kpis: {
        sessions: "19.5M",
        sessionsGrowth: "+38.2%",
        totalUsers: "9.8M",
        usersGrowth: "+32.1%",
        newUsers: "7.1M",
        newUsersGrowth: "+35.6%",
        avgEngagement: "06:45",
        avgRoas: "5.1x"
      },
      donut: [
        { id: "seo", label: "Organic Search", pct: 54.0, users: "5.29M", sessions: "10.53M", color: "#00e676" },
        { id: "meta", label: "Meta Ads (IG & FB)", pct: 27.0, users: "2.65M", sessions: "5.26M", color: "#3b82f6" },
        { id: "google", label: "Google Ads PPC", pct: 15.0, users: "1.47M", sessions: "2.93M", color: "#f59e0b" },
        { id: "direct", label: "Direct & Referral", pct: 4.0, users: "392K", sessions: "780K", color: "#b061df" }
      ],
      table: [
        { channel: "Organic Search", sessions: "10.5M", users: "5.3M", newUsers: "4.2M", share: "54.0%", color: "#00e676", id: "seo" },
        { channel: "Meta Ads (IG/FB)", sessions: "5.3M", users: "2.6M", newUsers: "1.9M", share: "27.0%", color: "#3b82f6", id: "meta" },
        { channel: "Paid Search (Google)", sessions: "2.9M", users: "1.5M", newUsers: "810K", share: "15.0%", color: "#f59e0b", id: "google" },
        { channel: "Direct & Referral", sessions: "780K", users: "392K", newUsers: "190K", share: "4.0%", color: "#b061df", id: "direct" }
      ],
      circles: [
        { id: "seo", title: "Organic SEO", pct: 54, val: "10.5M", sub: "+240% Growth", color: "#00e676", icon: <FaSearch /> },
        { id: "meta", title: "Meta Ads", pct: 27, val: "5.1x", sub: "Verified ROAS", color: "#3b82f6", icon: <SiMeta /> },
        { id: "google", title: "Google PPC", pct: 15, val: "9.4/10", sub: "Quality Score", color: "#f59e0b", icon: <SiGoogleads /> },
        { id: "social", title: "Social Reach", pct: 88, val: "340%", sub: "+8.1% Eng.", color: "#b061df", icon: <FaBullhorn /> },
        { id: "cvr", title: "Conversion", pct: 82, val: "4.6%", sub: "17.8K Leads", color: "#ec4899", icon: <FaRocket /> },
        { id: "track", title: "GA4 Accuracy", pct: 99, val: "99.6%", sub: "Server CAPI", color: "#00d2ff", icon: <FaCheckCircle /> }
      ]
    },
    "12m": {
      kpis: {
        sessions: "76.4M",
        sessionsGrowth: "+52.0%",
        totalUsers: "38.2M",
        usersGrowth: "+48.4%",
        newUsers: "29.4M",
        newUsersGrowth: "+51.2%",
        avgEngagement: "07:12",
        avgRoas: "5.3x"
      },
      donut: [
        { id: "seo", label: "Organic Search", pct: 55.5, users: "21.2M", sessions: "42.4M", color: "#00e676" },
        { id: "meta", label: "Meta Ads (IG & FB)", pct: 26.5, users: "10.1M", sessions: "20.2M", color: "#3b82f6" },
        { id: "google", label: "Google Ads PPC", pct: 14.5, users: "5.5M", sessions: "11.1M", color: "#f59e0b" },
        { id: "direct", label: "Direct & Referral", pct: 3.5, users: "1.4M", sessions: "2.7M", color: "#b061df" }
      ],
      table: [
        { channel: "Organic Search", sessions: "42.4M", users: "21.2M", newUsers: "16.8M", share: "55.5%", color: "#00e676", id: "seo" },
        { channel: "Meta Ads (IG/FB)", sessions: "20.2M", users: "10.1M", newUsers: "7.6M", share: "26.5%", color: "#3b82f6", id: "meta" },
        { channel: "Paid Search (Google)", sessions: "11.1M", users: "5.5M", newUsers: "3.8M", share: "14.5%", color: "#f59e0b", id: "google" },
        { channel: "Direct & Referral", sessions: "2.7M", users: "1.4M", newUsers: "920K", share: "3.5%", color: "#b061df", id: "direct" }
      ],
      circles: [
        { id: "seo", title: "Organic SEO", pct: 56, val: "42.4M", sub: "+310% Growth", color: "#00e676", icon: <FaSearch /> },
        { id: "meta", title: "Meta Ads", pct: 27, val: "5.3x", sub: "Verified ROAS", color: "#3b82f6", icon: <SiMeta /> },
        { id: "google", title: "Google PPC", pct: 15, val: "9.5/10", sub: "Quality Score", color: "#f59e0b", icon: <SiGoogleads /> },
        { id: "social", title: "Social Reach", pct: 92, val: "450%", sub: "+9.0% Eng.", color: "#b061df", icon: <FaBullhorn /> },
        { id: "cvr", title: "Conversion", pct: 85, val: "4.8%", sub: "64.8K Leads", color: "#ec4899", icon: <FaRocket /> },
        { id: "track", title: "GA4 Accuracy", pct: 99, val: "99.7%", sub: "Server CAPI", color: "#00d2ff", icon: <FaCheckCircle /> }
      ]
    }
  };

  const curr = datasets[timeRange];

  // SVG Donut calculation constants
  const donutRadius = 78;
  const donutCircumference = 2 * Math.PI * donutRadius; // ~490.09

  // Calculate cumulative offsets for each slice
  let runningPercent = 0;
  const donutSlices = curr.donut.map((slice) => {
    const strokeDash = (slice.pct / 100) * donutCircumference;
    const strokeOffset = -(runningPercent / 100) * donutCircumference;
    runningPercent += slice.pct;
    return {
      ...slice,
      strokeDash,
      strokeOffset
    };
  });

  // Circular gauge constant for the 6 circle cards
  const gaugeRadius = 42;
  const gaugeCircumference = 2 * Math.PI * gaugeRadius; // ~263.89

  return (
    <div className="ga-real-dashboard-wrap">
      {/* ========================================================
          1. REAL DASHBOARD TOP NAV & FILTER BAR (Matching Reference)
         ======================================================== */}
      <div className="ga-real-header">
        <div className="ga-real-header-left">
          <div className="ga-real-icon-badge">
            <SiGoogleanalytics />
          </div>
          <div>
            <h3 className="ga-real-title">
              Google Analytics Dashboard • All Properties
            </h3>
            <div className="ga-real-status-line">
              <span className="ga-pulse-dot"></span>
              <span className="ga-live-text">Realtime Tracking Active</span>
              <span className="ga-sub-badge">GA4 Property Verified</span>
              <span className="ga-sub-badge meta">Meta CAPI Active</span>
            </div>
          </div>
        </div>

        {/* Quick Range Selector Buttons */}
        <div className="ga-real-time-tabs">
          <button
            className={`ga-time-tab ${timeRange === "7d" ? "active" : ""}`}
            onClick={() => setTimeRange("7d")}
          >
            7 Days
          </button>
          <button
            className={`ga-time-tab ${timeRange === "30d" ? "active" : ""}`}
            onClick={() => setTimeRange("30d")}
          >
            30 Days
          </button>
          <button
            className={`ga-time-tab ${timeRange === "90d" ? "active" : ""}`}
            onClick={() => setTimeRange("90d")}
          >
            90 Days
          </button>
          <button
            className={`ga-time-tab ${timeRange === "12m" ? "active" : ""}`}
            onClick={() => setTimeRange("12m")}
          >
            12 Months
          </button>
        </div>
      </div>

      {/* Real Dropdown Filter Bar (Report Date, Property, Channel, Device) */}
      <div className="ga-real-filter-bar">
        <CustomDropdown
          label="Report Date"
          value={timeRange}
          onChange={(val) => setTimeRange(val)}
          options={[
            { value: "7d", label: "Last 7 Days" },
            { value: "30d", label: "Last 30 Days (Default)" },
            { value: "90d", label: "Last 90 Days" },
            { value: "12m", label: "Last 12 Months" }
          ]}
        />

        <CustomDropdown
          label="Property Name"
          value={propertyFilter}
          onChange={(val) => setPropertyFilter(val)}
          options={[
            { value: "all", label: "All Properties (E-Comm + Lead Gen)" },
            { value: "ecom", label: "Main E-Commerce Property" },
            { value: "lead", label: "B2B SaaS Lead Generation" }
          ]}
        />

        <CustomDropdown
          label="Channel"
          value={activeChannel}
          onChange={(val) => setActiveChannel(val)}
          options={[
            { value: "all", label: "All Acquisition Channels" },
            { value: "seo", label: "Organic Search (SEO)" },
            { value: "meta", label: "Meta Ads (Instagram & Facebook)" },
            { value: "google", label: "Google Ads (Paid PPC)" },
            { value: "direct", label: "Direct & Social" }
          ]}
        />

        <CustomDropdown
          label="Device Category"
          value={deviceFilter}
          onChange={(val) => setDeviceFilter(val)}
          options={[
            { value: "all", label: "All Devices (Mobile, Desktop, Tablet)" },
            { value: "mobile", label: "Mobile Devices (68%)" },
            { value: "desktop", label: "Desktop Computers (28%)" },
            { value: "tablet", label: "Tablets (4%)" }
          ]}
        />
      </div>

      {/* ========================================================
          2. TOP 4 SOLID KPI CARDS (Matching Reference Color Blocks)
         ======================================================== */}
      <div className="ga-real-kpi-grid">
        {/* Card 1: Sessions (Blue) */}
        <div className="ga-kpi-card kpi-blue">
          <div className="kpi-top">
            <span className="kpi-title">Sessions</span>
            <span className="kpi-pill">{curr.kpis.sessionsGrowth}</span>
          </div>
          <div className="kpi-number">{curr.kpis.sessions}</div>
          <div className="kpi-footer">Across all channels</div>
        </div>

        {/* Card 2: Total users (Teal / Cyan) */}
        <div className="ga-kpi-card kpi-teal">
          <div className="kpi-top">
            <span className="kpi-title">Total users</span>
            <span className="kpi-pill">{curr.kpis.usersGrowth}</span>
          </div>
          <div className="kpi-number">{curr.kpis.totalUsers}</div>
          <div className="kpi-footer">Verified unique visitors</div>
        </div>

        {/* Card 3: New users (Green) */}
        <div className="ga-kpi-card kpi-green">
          <div className="kpi-top">
            <span className="kpi-title">New users</span>
            <span className="kpi-pill">{curr.kpis.newUsersGrowth}</span>
          </div>
          <div className="kpi-number">{curr.kpis.newUsers}</div>
          <div className="kpi-footer">First-time acquired users</div>
        </div>

        {/* Card 4: Avg engagement time (Purple) */}
        <div className="ga-kpi-card kpi-purple">
          <div className="kpi-top">
            <span className="kpi-title">Avg engagement time</span>
            <span className="kpi-pill">{curr.kpis.avgRoas} ROAS</span>
          </div>
          <div className="kpi-number">{curr.kpis.avgEngagement}</div>
          <div className="kpi-footer">High intentional traffic</div>
        </div>
      </div>

      {/* ========================================================
          3. REAL TWO-COLUMN PANEL: TABLE (Left) + DONUT CIRCLE (Right)
         ======================================================== */}
      <Row className="ga-real-content-row g-3">
        {/* LEFT COLUMN: Channel Breakdown Table */}
        <Col lg={7} md={12}>
          <div className="ga-real-table-card">
            <div className="table-card-head">
              <h5 className="table-card-title">Acquisition Channel Breakdown</h5>
              <span className="table-head-badge">1 - 4 of 4 Channels</span>
            </div>

            <div className="ga-table-responsive">
              <table className="ga-data-table">
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th className="text-end">Sessions</th>
                    <th className="text-end">Total Users</th>
                    <th className="text-end">New Users</th>
                    <th className="text-end">Traffic Share</th>
                  </tr>
                </thead>
                <tbody>
                  {curr.table.map((row) => {
                    const isSelected = activeChannel === row.id;
                    return (
                      <tr
                        key={row.id}
                        className={`ga-table-row ${isSelected ? "row-selected" : ""}`}
                        onClick={() => setActiveChannel(row.id === activeChannel ? "all" : row.id)}
                      >
                        <td className="channel-name-cell">
                          <span
                            className="channel-dot"
                            style={{ backgroundColor: row.color }}
                          ></span>
                          <strong>{row.channel}</strong>
                        </td>
                        <td className="text-end mono-num">{row.sessions}</td>
                        <td className="text-end mono-num">{row.users}</td>
                        <td className="text-end mono-num">{row.newUsers}</td>
                        <td className="text-end">
                          <span
                            className="share-badge"
                            style={{
                              backgroundColor: `${row.color}22`,
                              color: row.color,
                              borderColor: `${row.color}55`
                            }}
                          >
                            {row.share}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Micro summary below table */}
            <div className="table-card-foot">
              <span>* Click any channel to highlight its share in the circle</span>
              <button
                className="reset-filter-link"
                onClick={() => setActiveChannel("all")}
              >
                Reset Selection
              </button>
            </div>
          </div>
        </Col>

        {/* RIGHT COLUMN: Real Donut Breakdown Circle ("cirelc ma badhu aavu joye") */}
        <Col lg={5} md={12}>
          <div className="ga-real-donut-card">
            <div className="donut-card-head">
              <h5 className="donut-card-title">Properties Breakdown by Users</h5>
              <span className="live-pill">Live GA4</span>
            </div>

            {/* Donut Legend Chips on Top (like reference image) */}
            <div className="donut-legend-top">
              {donutSlices.map((item) => {
                const isSelected = activeChannel === item.id;
                return (
                  <button
                    key={item.id}
                    className={`legend-pill-btn ${isSelected ? "active" : ""}`}
                    onClick={() => setActiveChannel(item.id === activeChannel ? "all" : item.id)}
                  >
                    <span
                      className="legend-pill-dot"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="legend-pill-name">{item.label}</span>
                    <strong className="legend-pill-pct">{item.pct}%</strong>
                  </button>
                );
              })}
            </div>

            {/* The Donut Circle */}
            <div className="donut-circle-area">
              <div key={`donut-wrap-${timeRange}`} className="donut-circle-wrap donut-spin-anim">
                <svg key={`donut-svg-${timeRange}`} viewBox="0 0 200 200" className="donut-svg">
                  {/* Gray Base Track Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r={donutRadius}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="24"
                  />

                  {/* Colored Slices */}
                  {donutSlices.map((slice) => {
                    const isMuted = activeChannel !== "all" && activeChannel !== slice.id;
                    const isHighlighted = activeChannel === slice.id;
                    return (
                      <circle
                        key={`${slice.id}-${timeRange}`}
                        cx="100"
                        cy="100"
                        r={donutRadius}
                        fill="none"
                        stroke={slice.color}
                        strokeWidth={isHighlighted ? 28 : 24}
                        strokeDasharray={`${slice.strokeDash} ${donutCircumference}`}
                        strokeDashoffset={slice.strokeOffset}
                        transform="rotate(-90 100 100)"
                        opacity={isMuted ? 0.35 : 1}
                        className="donut-slice-circle"
                        style={{
                          transition: "stroke-width 0.25s ease, opacity 0.25s ease",
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          setActiveChannel(activeChannel === slice.id ? "all" : slice.id)
                        }
                      />
                    );
                  })}
                </svg>

                {/* Donut Center Display */}
                <div className="donut-hole-center">
                  <span className="donut-hole-label">Total Users</span>
                  <span className="donut-hole-number">{curr.kpis.totalUsers}</span>
                  <span className="donut-hole-sub">100% Tracked</span>
                </div>
              </div>
            </div>

            <div className="donut-card-foot">
              <span className="foot-note">
                Organic Search holds the dominant volume at{" "}
                <strong style={{ color: "#00e676" }}>53.4%</strong> with{" "}
                <strong style={{ color: "#3b82f6" }}>4.8x ROAS</strong> on paid ads.
              </span>
            </div>
          </div>
        </Col>
      </Row>

      {/* ========================================================
          4. ALL METRICS IN CIRCLES ("cirelc ma badhu aavu joye")
          6 Circular Gauges for Channel Performance & Tracking
         ======================================================== */}
      <div className="ga-all-circles-section">
        <div className="circles-section-header">
          <h4 className="circles-section-title">
            <FaChartPie className="me-2" style={{ color: "#fbd9ad" }} />
            Channel Performance &amp; Tracking Accuracy In Circles
          </h4>
          <span className="circles-section-sub">
            Real-time percentage progress rings for all core marketing channels
          </span>
        </div>

        <div className="ga-circular-gauges-grid">
          {curr.circles.map((item) => {
            const isSelected = activeChannel === item.id;
            const strokeDash = (item.pct / 100) * gaugeCircumference;

            return (
              <div
                key={item.id}
                className={`circular-gauge-card ${isSelected ? "gauge-active" : ""}`}
                onClick={() => setActiveChannel(activeChannel === item.id ? "all" : item.id)}
              >
                {/* Radial Meter SVG */}
                <div key={`gauge-box-${item.id}-${timeRange}`} className="radial-meter-box gauge-spin-anim">
                  <svg key={`gauge-svg-${item.id}-${timeRange}`} viewBox="0 0 110 110" className="radial-meter-svg">
                    {/* Background Ring */}
                    <circle
                      cx="55"
                      cy="55"
                      r={gaugeRadius}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="9"
                    />
                    {/* Active Stroke Ring */}
                    <circle
                      cx="55"
                      cy="55"
                      r={gaugeRadius}
                      fill="none"
                      stroke={item.color}
                      strokeWidth="9"
                      strokeDasharray={`${strokeDash} ${gaugeCircumference}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      transform="rotate(-90 55 55)"
                      className="gauge-active-stroke"
                    />
                  </svg>

                  {/* Inside Circle Number & Icon */}
                  <div className="radial-meter-inside">
                    <span className="radial-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <strong className="radial-pct">{item.pct}%</strong>
                  </div>
                </div>

                {/* Circle Description */}
                <h6 className="gauge-title">{item.title}</h6>
                <div className="gauge-value" style={{ color: "#fbd9ad" }}>
                  {item.val}
                </div>
                <div
                  className="gauge-badge"
                  style={{
                    backgroundColor: `${item.color}22`,
                    color: item.color,
                    borderColor: `${item.color}44`
                  }}
                >
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          5. EXECUTIVE BOTTOM VERIFIED STRIP
         ======================================================== */}
      <div className="ga-real-bottom-summary">
        <div className="summary-block">
          <span className="summary-label">Experience:</span>
          <strong className="summary-val">3+ Years Proven Track Record</strong>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-block">
          <span className="summary-label">Campaign Budget Managed:</span>
          <strong className="summary-val">$150,000+ Meta &amp; Google</strong>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-block">
          <span className="summary-label">Average Return on Ad Spend:</span>
          <strong className="summary-val text-success">4.8x - 5.3x Verified ROAS</strong>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-block">
          <span className="summary-label">Organic SEO Rankings:</span>
          <strong className="summary-val" style={{ color: "#00e676" }}>45+ High-Intent Keywords #1</strong>
        </div>
      </div>
    </div>
  );
}
