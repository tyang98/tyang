import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import RESUME from "../resume/res.pdf" //Import you CV file here!
import other from "/" //Import other downloadable here

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "CS @ Cornell"
        }
        body2={"learn a little about my background and expertise"}
        title={"Tony Yang"}
      />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem", marginLeft: "20rem" }}>
          <MyButton text={"Resume"} URL={RESUME} />
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Computer Science student seeking enriching internship opportunities to apply software development skills for Summer 2021 </h5>
            <br />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        {/* Masters Degreee*/}
        <Row>
          <Col>
            <h5>Cornell University</h5>
          </Col>
        </Row>
        <Row>
          <Col>B.A. Computer Science</Col>
          <Col>Expected May 2022</Col>
        </Row>
        <br></br>
        <Row>
          <Col> <b>Relevant Coursework: </b> Data Structures and Functional Programming, Introduction to Analysis of Algorithms, Object-Oriented Programming and Data Structures, Discrete Structures, Linear Algebra. (Fall 2020) Programming Language and Logics, C++ Programming, Computer System Organization and Programming, Multivariable Calculus </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h5>Ithaca High School</h5>
          </Col>
        </Row>
        <Row>
          <Col>Regents Diploma with Advanced Designation | GPA: 4.10</Col>
          <Col>2015-2019</Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Experience</h3>
          </Col>
        </Row>
        {/* Position number 1*/}
        <Row>
          <Col>
            <h5>Software Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Cornell Design & Tech Initiative</Col>
          <Col>2019.19 - Present</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              • Developer for a selective project team on campus, working on Carriage, a platform for requesting CULift
              paratransit service rides, with a team of designers, product managers, and web developers.
            </p>
            <p style={{ marginTop: "1rem" }}>
              • Created an iOS and Android app using Flutter
            </p>
            <p style={{ marginTop: "1rem" }}>
              • Gained experience with the Git branching workflow
            </p>
          </Col>
        </Row>
        <hr />
        {/* SW intern Position*/}
        <Row>
          <Col>
            <h5>Software Developer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Genomic Open-source Breeding informatics initiative</Col>
          <Col>2018.06 - 2018.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              • Developed a platform that a comparative analysis of genotype files and report differences
            </p>
            <p style={{ marginTop: "1rem" }}>
              • Implemented a parser that reads genotype files containing 1000+ lines of genome sequences and
              metadata
            </p>
            <p style={{ marginTop: "1rem" }}>
              • Integrated application with GOBii's scalable genomic data management system
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Research Assistant</h5>
          </Col>
        </Row>
        <Row>
          <Col>Barwick Lab - Cornell Department of Economics</Col>
          <Col>2017.06 - 2018.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              • Compiled over 200 quarterly and annual financial reports for major Chinese automobile firms using
              financial databases
            </p>
            <p style={{ marginTop: "1rem" }}>
              • Analyzed new car technologies and their impact on the rapid product quality improvement in the Chinese
              auto industry
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the skill section*/}
        <Row>
          <Col>
            <h3>Skills</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Technologies</h5>
          </Col>
        </Row>
        <Row>
          <Col>Java, OCaml, Kotlin, HMTL5, CSS, JavaScript, Python, Dart</Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h5>Tools</h5>
          </Col>
        </Row>
        <Row>
          <Col>Android Studio, Git, LaTeX, Vim, Flutter</Col>
        </Row>

      </Container>
    </Layout>
  </div>
)
