import Card from "../Card";
import Slider from "../Slider/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faReact} from "@fortawesome/free-brands-svg-icons";
import { faMicrophoneLines, faUserGear, faBrain} from "@fortawesome/free-solid-svg-icons";
import SkillButton from "../Buttons/SkillButton";
import { useState } from "react";

let htmlIcon = (
  <FontAwesomeIcon
    icon={faHtml5}
    style={{ color: "#FF5722", fontSize: "20rem" }}
  />
);
let cssIcon = (
  <FontAwesomeIcon
    icon={faCss3Alt}
    style={{ color: "#004CE8", fontSize: "20rem" }}
  />
);
let jsIcon = (
  <FontAwesomeIcon
    icon={faSquareJs}
    style={{ color: "#F7E018", fontSize: "20rem" }}
  />
);
let reactIcon = (
  <FontAwesomeIcon
    icon={faReact}
    style={{ color: "#00D8FF", fontSize: "20rem" }}
  />
);

let communicationIcon = (
  <FontAwesomeIcon
    icon={faMicrophoneLines}
    style={{ color: "#878787", fontSize: "20rem" }}
  />
);

let adaptivityIcon = (
  <FontAwesomeIcon
    icon={faUserGear}
    style={{ color: "#4CAF50", fontSize: "18rem" }}
  />
);

let critThinkIcon = (
  <FontAwesomeIcon
    icon={faBrain}
    style={{ color: "#e83cbd", fontSize: "20rem" }}
  />
);

export default function SkillsSection() {
  const [contentType, setContentType] = useState("HardSkills");

  const hardSkills = [
    <Card
      cardTitle={"HTML"}
      description={"Hyper Text Markup Language"}
      imageCover={htmlIcon}
    />,
    <Card
      cardTitle={"CSS"}
      description={"Language for styling Web page"}
      imageCover={cssIcon}
    />,
    <Card
      cardTitle={"JavaScript"}
      description={"Programming language"}
      imageCover={jsIcon}
    />,
    <Card
      cardTitle={"React"}
      description={"Framework for JavaScript"}
      imageCover={reactIcon}
    />,
  ];

  const softSkills = [
    <Card
      cardTitle={""}
      description={"Effective communication skills"}
      imageCover={communicationIcon}
    />,
    <Card
      cardTitle={""}
      description={"Ability to adapt to new situations"}
      imageCover={adaptivityIcon}
    />,
    <Card
      cardTitle={""}
      description={"Critical thinking and problem solving"}
      imageCover={critThinkIcon}
    />,
  ];

  return (
    <section className="skill">
      <div className="skill-content">
        <div className="skill-button-container">
          <SkillButton
            isActive={contentType === "HardSkills"}
            onClick={() => setContentType("HardSkills")}
          >
            HardSkills
          </SkillButton>
          <SkillButton
            isActive={contentType === "SoftSkills"}
            onClick={() => setContentType("SoftSkills")}
          >
            SoftSkills
          </SkillButton>
        </div>
        {contentType === "HardSkills" ? (
          <Slider items={hardSkills} />
        ) : (
          <Slider items={softSkills} />
        )}
      </div>
    </section>
  );
}
