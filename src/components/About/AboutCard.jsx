import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Riccardo Barbacini </span>
            from <span className="red"> Parma, Italy.</span>
            <br />
            I'm currently a high school student specializing in computer science.
            <br />
            I’m passionate about technology and love learning how software and systems work.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
