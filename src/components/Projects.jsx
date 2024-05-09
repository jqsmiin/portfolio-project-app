import { Col, Container, Row } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import PageTitle from "./utils/PageTitle";
import { projectsInfo } from "./utils/Data";

function Projects() {
  return (
    <section
      id="projects"
      className="mb-6"
      data-aos="fade-up"
      data-aos-duration="1100"
    >
      <Container>
        <PageTitle title={"Projects"} />
        <Row>
          {projectsInfo.map((project) => (
            <Col md={12} className={`item item-${project.id}`} key={project.id}>
              <div className="heading">
                <div>
                <h2>{project.title}</h2>
                <div className="project-icons">
                  <a target="_blank" href={project.gitLink}>
                    <AiFillGithub />
                  </a>
                  <a target="_blank" href={project.link}>
                    <BsBoxArrowUpRight />
                  </a>
                </div>
                </div>
                <p>{project.subtitle}</p>
              </div>
              <div className="wrapper">
                <Row>
                  <Col
                    md={7}
                    lg={8}
                    className="wrapper-item-1"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    <p>{project.paragraph}</p>
                  </Col>
                  <Col
                    md={5}
                    lg={4}
                    className="wrapper-item-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <div className="background-image">
                      <img src={project.circle} alt="background-circle" />
                      <img src={project.img} alt="project" />
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
