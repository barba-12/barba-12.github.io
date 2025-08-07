import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { 
  SiC, 
  SiCplusplus, 
  SiCsharp 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h5 className="textBoxSkill"> java </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5 className="textBoxSkill"> html </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h5 className="textBoxSkill"> css </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5 className="textBoxSkill"> javascript </h5>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5 className="textBoxSkill"> react </h5>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5 className="textBoxSkill"> python </h5>
      </Col>
    </Row>
  );
}

export default Techstack;
