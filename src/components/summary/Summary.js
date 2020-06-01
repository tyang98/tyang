import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Technologies I Use:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-java hover_effect" />
        <br />
        <span>Java</span>
      </Col>
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React</span>
      </Col>
      <Col>
        <i className="fab fa-python hover_effect" />
        <br />
        <span>Python</span>
      </Col>
    </Row>
    <br />
  </Container>
)

export default Summary
