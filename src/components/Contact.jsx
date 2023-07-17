import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "./utils/PageTitle";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setMail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jnha8ag",
        "template_9gmwxgj",
        {
          from_name: mail.name,
          to_name: "Laxy",
          form_email: mail.email,
          to_email: "laxyking142@gmail.com",
          message: mail.message,
        },
        "7txJSBtBeeePc4cB_"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible");
          setMail({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

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
                <a href="mailto:jasmin.oruc23@gmail.com" target="_blank">
                  <span>
                    <AiOutlineMail />
                  </span>{" "}
                  jasmin.oruc23@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/jqsmiin" target="_blank">
                  <span>
                    <AiFillGithub />
                  </span>{" "}
                  jqsmiin@github.com
                </a>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
      <Container data-aos="fade-up" data-aos-duration="1100">
        <PageTitle title={"Get In Touch"} />
        <Row>
          <Col md={12} className="contact-item">
            <div className="input-container">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={mail.name}
                    name="name"
                    onChange={onChange}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={mail.email}
                    name="email"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Your message"
                    value={mail.message}
                    name="message"
                    onChange={onChange}
                  ></textarea>
                  <div className="button-container">
                    <button type="submit" className="primary-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
