import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minesweeper from "../../Assets/Projects/minesweeper.png";
import battleship from "../../Assets/Projects/battleship.png";
import tris from "../../assets/Projects/tris.png";
import chess from "../../assets/Projects/chess.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="red">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesweeper}
              isBlog={false}
              title="Minesweeper"
              description="A Python application developed with the Tkinter library that reproduces the classic game of Minesweeper. Players must uncover all the cells in the field without triggering the bombs."
              ghLink="https://github.com/barba-12/CampoMinato"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battleship}
              isBlog={false}
              title="Battleship"
              description="A C program that simulates a game of Battleship between two players. Ships are randomly placed on a grid, and players take turns attacking each other's ships. The player who sinks all of their opponent's ships wins."
              ghLink="https://github.com/barba-12/BattagliaNavale"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tris}
              isBlog={false}
              title="Tris"
              description="A C++ program that simulates the game of Tic Tac Toe (or Tic Tac Toe). Two players compete by placing their moves in a 3x3 grid, trying to line up three identical symbols in a row, column, or diagonal."
              ghLink="https://github.com/barba-12/Tris"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess"
              description="chess in C# using Windows Forms."
              ghLink="https://github.com/barba-12/Scacchi-GUI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
