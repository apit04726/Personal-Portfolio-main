import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hi, I’m <b className="purple">Vishal</b>, a <b className="purple">Bachelor of Engineering in Information Technology </b>
                student at <b className="purple">Gujarat Technological University</b>, Bhavnagar, Gujarat.
                <br />
                <br />
                I have strong proficiency in programming languages including&nbsp;
                <b className="purple">
                  C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.
                </b>
                <br />
                <br />
                I have hands-on experience with modern frameworks and libraries such as&nbsp;
                <b className="purple">
                  Node.js, React.js, React Native, and Express.js.
                </b>
                <br />
                <br />
                I am passionate about building scalable, high-performance applications using&nbsp;
                <b className="purple">
                  modern JavaScript frameworks and technologies.
                </b>
                <br />
                <br />
                In my free time, I enjoy exploring new technologies and building innovative web and mobile solutions.
                <br />
                <br />
                <b>
                  <span className="purple">Full Stack Engineer</span>
                  <span className="pipe"> | </span>
                  <span className="purple">PHP & Laravel Developer</span>
                  <span className="pipe"> | </span>
                  <span className="purple">React & Node.js Specialist</span>
                  <span className="pipe"> | </span>
                  <span className="purple">WordPress & Shopify Expert</span>
                  <span className="pipe"> | </span>
                  <span className="purple">Scalable Web Solutions Architect</span>
                  <span className="pipe"> | </span>
                  <span className="purple">Android App Developer</span>
                  <span className="pipe"> | </span>
                </b>
              </p>
            </Fade>

          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
