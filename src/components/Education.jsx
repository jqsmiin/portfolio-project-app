import { Col, Container, Row } from "react-bootstrap";
import PageTitle from "./utils/PageTitle";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./utils/TimelineElement";

function Education() {
  return (
    <section id="education" className="mb-6">
      <Container>
        <PageTitle title={"Education"} />
        <Row>
          <Col md={12} className="item-1">
            <VerticalTimeline>
              <TimelineElement />
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
