import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Tony Yang</h3>
          <p style={{ color: "blueviolet", fontSize: "1.3rem" }}>
            {/*TODO: ADD A MAILTO-LINK */}
            <a href="mailto:txy3@cornell.edu">
              <span style={{ color: "blueviolet" }}>txy3@cornell.edu</span>
            </a>
          </p>
          <br />
          <p style={{ fontSize: "1.3rem" }}>
            I'm a great developer that loves to code. I hope that I can propel social impact with technology
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Menu
        </Col>
      </Row>
      <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/projects">
            <span className="link_styles">Projects</span>
          </Link>
        </Col>
      </Row>

      {/* TODO: Make use of the SocialRow component to make the below icons obsolete */}

      <Row className="footer_social text-center">
        <Col>
          <a
            href="https://www.github.com/tyang98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github hover_effect" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/tyang98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin hover_effect" />
          </a>
        </Col>

        <Col>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram hover_effect" />
          </a>
        </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Tony Yang © {new Date().getFullYear()}, Built with
          <i
            className="fas fa-mug-hot"
            style={{
              marginLeft: "10px",
              marginRight: "3px",
              fontSize: "1.5rem",
            }}
          />
          <a href="https://www.gatsbyjs.org">
            {" "}
            <span className="blueViolet">& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
