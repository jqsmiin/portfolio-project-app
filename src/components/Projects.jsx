import { Col, Container, Row } from "react-bootstrap";
import circle from "../photos/circle.png";
import project1 from "../photos/project1.png";
import project2 from "../photos/project2.png";
import project3 from "../photos/project3.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import PageTitle from "./utils/PageTitle";

function Projects() {
  const projectsInfo = [
    {
      id: 1,
      link: "https://startling-entremet-a3f819.netlify.app",
      title: "Wear App",
      subtitle: "Wear Project | React & Firebase",
      paragraph:
        "T-shirt shop is an app where you can add, update, edit and remove a t-shirt or hoodie. The application also provides the possibility of getting in touch with the owner of the clothes and adding the clothes to the cart. If you are not registered, you cannot buy or contact people. Happy shopping!",
      circle,
      img: project1,
    },
    {
      id: 2,
      link: "https://startling-entremet-a3f819.netlify.app",
      title: "Movie Search",
      subtitle: "Movie Project | React Next.js",
      paragraph:
        "Movie Search is where you can search for your favorite movie or TV show, watch a trailer, get reviews, and more.                       Beautiful design and great search function are what make this app great. For each movie you can find a photo of theactor, trailer, number of seasons and episodes, year of release and a short description.",
      circle,
      img: project2,
    },
    {
      id: 3,
      link: "https://startling-entremet-a3f819.netlify.app",
      title: "Landing Page",
      subtitle: "Landing Page Project | React Next.js",
      paragraph:
        "T-shirt shop is an app where you can add, update, edit and remove a t-shirt or hoodie. The application also provides the possibility of getting in touch with the owner of the clothes and adding the clothes to the cart. If you are not registered, you cannot buy or contact people. Happy shopping!",
      circle,
      img: project3,
    },
  ];
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
