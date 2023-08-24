import React from "react";
import { Col, Row } from "react-bootstrap";


import {
  DiPython,
} from "react-icons/di";


import {SiTableau, SiMicrosoftexcel} from "react-icons/si";

import {TbSql} from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
  		<DiPython />
	</Col>
 	<Col xs={4} md={2} className="tech-icons">
  		<SiMicrosoftexcel />
	</Col>
 
	<Col xs={4} md={2} className="tech-icons">
  		<SiTableau />
	</Col>
 
	<Col xs={4} md={2} className="tech-icons">
  		<TbSql />
	</Col>
    </Row>
  );
}

export default Toolstack;
