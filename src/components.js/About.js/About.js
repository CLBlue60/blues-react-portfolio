import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";
import { SKILLS, TOOLS } from "../../Constants";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        {/* About Me Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="goldenrod">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>

        {/* Skillset and Tools Section */}
        <Row className="skill-tools-wrapper">
          {/* Professional Skillset */}
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="goldenrod">Skillset</strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                key={index}
                name={skill.name}
                initialRating={skill.initialRating}
              />
            ))}
          </Col>
          {/* Tools I use */}
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
