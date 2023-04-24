import { Col, Container, Row } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import { Game } from "./assets/Game";
import { Suspense, useRef, useEffect } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Typed from "typed.js";

function Header() {
  const titleRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["A creative Web Developer."],
      typeSpeed: 40,
      backSpeed: 20,
      cursorChar: " ",
      startDelay: 1000,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed(titleRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="header" className="mb-6">
      <Container>
        <Row>
          <Col md={6} className="item-1">
            <div className="text-container">
              <h1>
                Hi I'm Jasmin. <span ref={titleRef}></span>{" "}
              </h1>
            </div>
            <p>
              I'm passionate about building beautiful and functional websites
              that solve real-world problems. From ideation to deployment, I
              love working with clients to bring their visions to life.{" "}
            </p>
            <div className="button-container">
              <a href="#contact" className="primary-btn">
                Hire Me
              </a>
              <a href="#projects" className="project-btn">
                Projects{" "}
                <span>
                  <BsArrowUpRight />
                </span>
              </a>
            </div>
          </Col>
          <Col md={6} className="canvas-container">
            <Canvas camera={{ fov: 8 }}>
              <ambientLight intensity={1.25} />
              <Suspense fallback={null}>
                <Game />
              </Suspense>
              <Environment preset="sunset" />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
