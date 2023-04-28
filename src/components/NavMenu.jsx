import { Col, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../photos/logo2.png";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavMenu() {
  const [scroll, setScroll] = useState(false);

  const setNavbar = () => {
    //console.log(window.scrollY)
    if (window.scrollY > 25) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
  }, []);

  return (
    <Navbar expand="lg" id="navbar" className={scroll ? "scroll-nav" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <GiHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Col md={10} className="justify-content-center d-flex item-1">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={2} className="justify-content-center d-flex item-2">
            <a href="#contact" className="primary-btn">
              Let's Talk
            </a>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
