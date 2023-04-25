import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import BallCanvas from "./assets/Ball";
import { technologies } from "./utils/Data";
import Chart from "./utils/Chart";

function About() {
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
