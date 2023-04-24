import { VscSymbolStructure } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimelineElement() {
  const data = [
    {
      id: 1,
      icon: <FaReact />,
      title: "React Front to Back 2022",
      paragraph:
        "I learned about react and some backend technologies like firebase, mongodb etc. It was very helpful and polished my skills.",
      year: "Aug. 6 - 2022",
      link: "",
    },
    {
      id: 2,
      icon: <IoLogoNodejs />,
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
      paragraph:
        "I learned about Node, MongoDB, Express and other backend technologies.",
      year: "Oct. 4 - 2022",
      link: "",
    },
    {
      id: 3,
      icon: <VscSymbolStructure />,
      title: "JavaScript Data Structures & Algorithms",
      paragraph:
        "I learned about a variety of data structures, including arrays, linked lists, stacks, queues, trees, heaps, and graphs. Additionally, I learned about a range of algorithms for sorting and searching",
      year: "May. 5 - 2023",
      link: "",
    },
  ];
  return (
    <>
      {data.map((item) => (
        <VerticalTimelineElement
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
