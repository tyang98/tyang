import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hi, I'm Tony  <span className="wave">👋</span>
      </h1>
      <br />
      <h3>
        I'm currently a CS student at Cornell University, interested in full-stack/mobile development, programming languages, and systems
      </h3>
      <p>Have questions for me?</p>
      <p>
        Contact me @ {" "}
        <a href="mailto:txy3@cornell.edu">
          <span style={{ color: "blue" }}>txy3@cornell.edu</span>
        </a>
      </p>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
