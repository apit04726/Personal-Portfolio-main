import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Web Developer in Digitize Info System Pvt Ltd
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          </h6>
          <div style={{ textAlign: "justify" }}>
            <p>• Developed custom WordPress themes and plugins, focusing on dynamic content and advanced customization</p>
            <p>• Optimized website performance, ensuring fast load times and improved SEO.</p>
            <p>• Built responsive, dynamic UIs using React.js, enhancing user experience and application performance.</p>
            <p>• Integrated RESTful APIs and improved front-end application efficiency.</p>
            <p>• Customized Shopify themes and implemented bespoke functionality using Liquid and JavaScript.</p>
            <p>• Developed robust backend solutions using Core PHP, focusing on CRUD operations and form handling.</p>
          </div>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Full Stack Developer in Digitize Info System Pvt Ltd
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          </h6>

          <div style={{ textAlign: "justify" }}>
            <p>• Developed end-to-end web applications using Laravel for backend and React.js for frontend.</p>
            <p>• Created custom Shopify themes and apps using Liquid, JavaScript, and React.js.</p>
            <p>• Built RESTful APIs and integrated third-party services for seamless functionality.</p>
            <p>• Implemented responsive designs and optimized performance for cross-platform compatibility.</p>
            <p>• Managed database systems including MySQL, MongoDB, and Firebase.</p>
            <p>• Engineered custom WordPress themes and plugins to deliver dynamic, scalable websites tailored to client needs.</p>
            <p>• Optimized website performance, reducing load times and improving SEO rankings across multiple projects.</p>
            <p>• Collaborated with cross-functional teams, ensuring smooth project delivery from design to deployment.</p>
            <p>• Applied version control best practices with Git and GitHub/GitLab to maintain clean, collaborative codebases.</p>
            <p>• Implemented secure authentication and authorization systems using JWT, OAuth, and Laravel Passport.</p>
            <p>• Designed reusable UI components and state management solutions in React.js for scalable applications.</p>
            <p>• Deployed and maintained applications on cloud platforms such as AWS, Netlify, and Vercel.</p>
          </div>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
