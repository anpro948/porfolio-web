import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/image1_hH9B4gs.jpg"
              isBlog={false}
              title="Cyclistic Bike-share Analysis - A Case Study"
              description="I created this notebook to showcase the result of EDA for the Cyclistic Bike-share capstone project. The project was carried out as part of the Google Data Analytics Professional Certificate program and was built upon the divvy-tripdata dataset."
              ghLink="https://www.kaggle.com/code/anhoangvo/cyclistic-bike-share-analysis-a-case-study"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/CzCpVYf/road-accident-dashboard.png"
              isBlog={false}
              title="Road accident dasboard"
              description="I build this dashboard that people can interact with. This effort aims to help decision-makers better choices based on data to improve road satefy."
              ghLink="https://uithcm-my.sharepoint.com/:x:/g/personal/21520555_ms_uit_edu_vn/EQpuZ2U2q7JMlb3sqi4xsiYBRansZj7gTCAHVvoO0fODjQ?e=JIkvcs"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
