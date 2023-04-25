import { Col, Container, Row } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import PageTitle from "./utils/PageTitle";
import { projectsInfo } from "./utils/Data";

function Projects() {
  return (
    <section id="projects" className="mb-6">
      <Container>
        <PageTitle title={"Projects"} />
        <Row>
          {projectsInfo.map((project) => (
            <Col md={12} className={`item item-${project.id}`} key={project.id}>
              <div className="heading">
                <h2>{project.title}</h2>
                <div className="project-icons">
                  <a target="_blank" href={project.link}>
                    <AiFillGithub />
                  </a>
                  <a target="_blank" href={project.link}>
                    <BsBoxArrowUpRight />
                  </a>
                </div>
                <p>{project.subtitle}</p>
              </div>
              <div className="wrapper">
                <Row>
                  <Col md={8} className="wrapper-item-1">
                    <p>{project.paragraph}</p>
                  </Col>
                  <Col md={4} className="wrapper-item-2">
                    <div className="background-image">
                      <div className="background">
                        <img src={project.circle} alt="circle" />
                      </div>
                      <div className="project">
                        <img src={project.img} alt="project detail" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
