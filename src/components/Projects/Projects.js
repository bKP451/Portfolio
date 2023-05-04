import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import notesTakingApp from "../../Assets/Projects/notes_taking_app.png"
import bnsWebDemoPic from "../../Assets/Projects/demo_bns_collections.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesTakingApp}
              isBlog={false}
              status={"DONE"}
              title="Notes Taking App"
              description="It is a simple notes taking application. It is developed using React Technology. The notes are stored in browser's local storage."
              ghLink="https://github.com/bKP451/Notes-application"
              demoLink="https://notes-application-snowy.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bnsWebDemoPic}
              isBlog={false}
              status={"STARTED"}
              title="BNS Collections clothing shop"
              description="Web application for bnscollections.com.np. It is a shop selling normal male clothing accessories. The shop is located at Lalitpur, Nepal. I have just forked the github source code and have started working on it. The web application will allow customers to view and order goods and pay via Nepali payment gateways."
              ghLink="https://github.com/bKP451/BNS--collections"
              demoLink="https://expresscart-demo.markmoffat.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
