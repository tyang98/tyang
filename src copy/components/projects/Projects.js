import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/logo_rider.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"Rider"}
        date={"2019-01-15"}
        description={
          "Rider is both an Android and iOS app that allows users of CULift to request rides around campus"
        }
        sourceURL={"https://github.com/cornell-dti/carriage-rider"}
      />
      <Link to="/projects" className="blue">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
