import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/logo_rider.png"
import project2Picture from "../images/portfolio/tattler.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//TODO: Make this into an array with objects and map through them instead down below.

//Project 1

const project1 = {
  title: "Rider",
  date: "2020-01-15",
  decription:
    "I joined Cornell Design & Tech Initiative in Fall 2019 as an Android Developer. I am responsible for the development of Rider, an Android and iOS app that allows users of CULift to request rides around campus. I developed this app along with one other developer using Flutter.",
  sourceURL: "https://github.com/cornell-dti/carriage-rider",
}

//Project 2

const project2 = {
  title: "Tattler",
  date: "2019-03-03",
  decription:
    "A native Android app for the Tattler, Ithaca High School's student-run newspaper. Uses a Django backend to connect app to a database of articles. Deloped as a side-project to learn mobile development.",
  sourceURL: "https://github.com/tyang98/Tattler",
}

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Projects"}
        body={"projects are an excellent way to learn and practice concepts/skills"}
        body2={"here are some of my personal projects"}
      />
      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              sourceURL={project1.sourceURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              sourceURL={project2.sourceURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
