import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiWindows } from "react-icons/di";
import { FaCodeBranch } from "react-icons/fa";
import { 
  SiVisualstudio, 
  SiVisualstudiocode, 
  SiGithub,
  SiCisco,
  SiVirtualbox
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
        <h5 className="textBoxSkill"> windows </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5 className="textBoxSkill"> github </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCodeBranch />
        <h5 className="textBoxSkill"> tortoise svn </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 className="textBoxSkill"> visual studio code </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <h5 className="textBoxSkill"> visual studio </h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox />
        <h5 className="textBoxSkill"> virtual box </h5>
      </Col>
    </Row>
  );
}

export default Toolstack;