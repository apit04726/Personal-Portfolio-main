import "./App.css";
import "./style.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense, lazy, useState, useEffect } from "react";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import Loader from "./Loader";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
// import Ranking from "./components/aboutme/ranking/Ranking";
import EducationJourney from "./components/aboutme/journey/EducationJourney";
import ExperienceJourney from "./components/aboutme/journey/ExperienceJourney";
// import CertificatePage from "./pages/certificate_page/CertificatePage";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import Notfound from "./pages/blogs_page/notfound";
import BlogPage from "./pages/blogs_page/BlogPage";
import TechnicalJourney from "./components/aboutme/journey/TechnicalJourney";
import ProjectJourney from "./components/aboutme/journey/ProjectJourney";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
// import Zoom from 'react-reveal/Zoom';
import Toolkit from "./components/aboutme/skills/Toolkit";
import AiChatWidget from "./components/aichat/AiChatWidget";

const Home = lazy(() => import("./pages/home_page/HomePage"));
const Resume = lazy(() => import("./pages/resume_page/ResumePage"));
const ProjectPage = lazy(() => import("./pages/project_page/ProjectPage"));
const ProjectDetails = lazy(() => import("./pages/project_page/ProjectDetails"));
const AiChatPage = lazy(() => import("./pages/aichat_page/AiChatPage"));

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
  <Suspense fallback={<Loader />}> 
          <Routes>
            <Route path="/" element={<Home />}> 
              <Route path="/" element={<About />}></Route>
              <Route path="personalskill" element={<PersonalSkill />} />
              <Route path="technicalskill" element={<TechnicalSkill />} />
              <Route path="technicaljourney" element={<TechnicalJourney />} />
              <Route path="projectjourney" element={<ProjectJourney />} />
              <Route
                path="educationjourney"
                element={<EducationJourney />}
              ></Route>
              <Route
                path="experiencejourney"
                element={<ExperienceJourney />}
              ></Route>
              {/* <Route path="ranking" element={<Ranking />}></Route> */}
              <Route path="socialmedia" element={<SocialMedia />}></Route>
              <Route path="toolkit" element={<Toolkit />}></Route>
            </Route>
            <Route path="/projectspage" element={<ProjectPage />} />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            {/* <Route path="/certificatepage" element={<CertificatePage />} /> */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/aichat" element={<AiChatPage />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
        <Footer />
        <AiChatWidget />
      </div>
    </Router>
  );
}
export default App;
