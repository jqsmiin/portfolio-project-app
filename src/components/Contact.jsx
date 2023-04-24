import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "./utils/PageTitle";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Mail } from "./assets/Mail";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function Contact() {
  return (
    <section id="contact">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ea4e35"
          fill-opacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,96C384,139,480,213,576,208C672,203,768,117,864,117.3C960,117,1056,203,1152,229.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="text-container">
        <div className="content">
          <div className="info">
            <h3>Info</h3>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <ul>
              <li>
                <a href="" target="_blank">
                  <span>
                    <AiOutlineMail />
                  </span>{" "}
                  jasmin.oruc23@gmail.com
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <span>
                    <AiFillGithub />
                  </span>{" "}
                  jqsmiin@github.com
                </a>
              </li>
            </ul>
            <p></p>
          </div>
          {/* <div className="icons">
            <Canvas camera={{ fov: 8 }}>
              <ambientLight intensity={1.25} />
              <Suspense fallback={null}>
                <Mail />
              </Suspense>
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div> */}
        </div>
      </div>
      <Container>
        <PageTitle title={"Get In Touch"} />
        <Row>
          <Col md={12}>
            <div className="input-container">
              <div className="input-group">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <textarea placeholder="Your message"></textarea>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
