import React from 'react'
import { Container, Row, Col,Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';


export default function AboutmeContainer() {
    const location = useLocation();
    const pathname = location.pathname;

    const isAboutActive = pathname === "/";
    const isSkillsActive = pathname === "/technicalskill" || pathname === "/personalskill" || pathname === "/toolkit";
    const isJourneyActive = pathname === "/educationjourney" || pathname === "/experiencejourney" || pathname === "/technicaljourney" || pathname === "/projectjourney";
    const isSocialActive = pathname === "/socialmedia";

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description d-flex justify-content-start">
                    <Zoom left cascade>
                        <h1 className='aboutme-heading'>
                            About me
                        </h1>
                    </Zoom>
                    </Col>
                    <Col ms={12} className="mt-3 d-flex flex-column">
                        <div>
                            <Nav justify variant="tabs" defaultActiveKey="/">
                            <Nav.Item className="Navitem">
                                <Nav.Link as={Link} to="/" active={isAboutActive} eventKey="link-1" style={{ fontSize: "17px",fontWeight:700 }}>About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="technicalskill" active={isSkillsActive} eventKey="link-2" style={{ fontSize: "17px",fontWeight:700 }}>Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="educationjourney" active={isJourneyActive} eventKey="link-3" style={{ fontSize: "17px",fontWeight:700 }}>Journey</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="socialmedia" active={isSocialActive} eventKey="link-5" style={{ fontSize: "17px",fontWeight:700 }}>
                                Social Media
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
