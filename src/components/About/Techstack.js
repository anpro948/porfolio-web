import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

	<Col xs={4} md={2} className="tech-icons">
 		<p style={{ fontSize: "16px", margin: "10px 0 0 0", fontWeight: "bold" }}>Communication</p>
	</Col>

	<Col xs={4} md={2} className="tech-icons">
 		<p style={{ fontSize: "16px", margin: "10px 0 0 0", fontWeight: "bold" }}>Analytics Thinking</p>
	</Col>

	<Col xs={4} md={2} className="tech-icons">
 		<p style={{ fontSize: "16px", margin: "10px 0 0 0", fontWeight: "bold" }}>Technology Skills</p>
	</Col>

    </Row>
  );
}

export default Techstack;
