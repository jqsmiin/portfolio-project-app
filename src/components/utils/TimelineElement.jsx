import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "./Data.jsx";

function TimelineElement() {
  return (
    <>
      {educationData.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(33, 150, 243)",
          }}
          date={item.year}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={item.icon}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <p>{item.paragraph}</p>
          <a className="timeline-btn">See More</a>
        </VerticalTimelineElement>
      ))}
    </>
  );
}

export default TimelineElement;
