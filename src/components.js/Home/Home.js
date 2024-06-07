import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Blue.JPG"; // Importing profile image
import SocialMedia from "../SocialMedia"; // Importing SocialMedia component
import TypeWriter from "./TypeWriter"; // Importing TypeWriter effect component

function Home() {
  return (
    <section>
      {/* Home section */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            {/* Left column for content */}
            <Col md={6} className="home-header">
              {/* Greeting and name */}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Sunil Yadav</strong>
              </h1>

              {/* Description */}
              <p className="heading-description blockquote">
                "I'm excited about using JavaScript and animation libraries to
                create amazing user experiences. I recently completed a coding
                bootcamp at SMU where I learned to build web applications using
                the latest front-end and back-end technologies."
              </p>

              {/* Typewriter effect */}
              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            {/* Right column for profile picture */}
            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* About section */}
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              {/* Get in Touch section */}
              <h1>How to Reach Me!</h1>
              <p>
                Whether you'd like to reach out or discuss collaborating on a
                project.
                <br />
                <strong>You can reach me at</strong>
              </p>

              {/* Social media links */}
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
