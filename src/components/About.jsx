import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import BallCanvas from "./assets/Ball";
import html from "../photos/tech/html.png";
import css from "../photos/tech/css.png";
import docker from "../photos/tech/docker.png";
import git from "../photos/tech/git.png";
import javascript from "../photos/tech/javascript.png";
import mongodb from "../photos/tech/mongodb.png";
import nodejs from "../photos/tech/nodejs.png";
import reactjs from "../photos/tech/reactjs.png";
import redux from "../photos/tech/redux.png";
import tailwind from "../photos/tech/tailwind.png";
import typescript from "../photos/tech/typescript.png";
import threejs from "../photos/tech/threejs.svg";
import figma from "../photos/tech/figma.png";
import Chart from "./utils/Chart";

function About() {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  return (
    <section id="about" className="mb-6">
      <Container>
        <div className="page-title">
          <h3>About Me</h3>
          <div className="page-bottom-line"></div>
        </div>
        <Row>
          <Col md={6} className="item-1">
            <p>
              {" "}
              I'm a web developer with experience working with the MERN stack. I
              love creating beautiful and functional websites that bring my
              clients' visions to life. With my passion for problem-solving and
              attention to detail, I strive to deliver high-quality work that
              exceeds expectations. I'm excited to continue honing my skills and
              taking on new challenges in the ever-evolving world of web
              development.
            </p>
            <div className="icons">
              <h3 className="icon-1">
                <AiFillGithub />
              </h3>
              <h3 className="icon-2">
                <AiFillLinkedin />
              </h3>
            </div>
          </Col>
          <Col md={6}>
            <Chart />
          </Col>
          <Col md={12} className="item-3">
            {technologies.map((technology) => (
              <BallCanvas icon={technology.icon} key={technology.name} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
