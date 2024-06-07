import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* About Me Card */}
        <blockquote className="blockquote mb-0">
          <p className="justify-text">
            Welcome! My name is
            <span className="goldenrod"> Christopher Blue </span>
            currently living in <span className="purple">Dallas, TX</span>
            <br />
            I'm an Army vet, looking to find a home in coding.
          </p>
          <br />
          {/* About Me Quote */}
          <p className="quote-text">
            I'm a beginner designer and developer learning to create custom
            websites using React.js, JavaScript, HTML5, and CSS3. I'm also
            exploring Shopify app development with React.js, JavaScript,
            GraphQL, and Node.js, and starting to build mobile apps with React
            Native.
          </p>
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
