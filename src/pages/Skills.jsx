import React from "react";
import { styled } from "styled-components";
import SingleSkill from "../components/SingleSkill";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../theme";

const dummyData = [
  {
    type: "Frontend",
    skills: [
      { name: "HTML", val: 10 },
      { name: "CSS", val: 85 },
      { name: "javaScript", val: 90 },
      { name: "React", val: 50 },
    ],
  },
  {
    type: "Backend",
    skills: [
      { name: "Node", val: 80 },
      { name: "php", val: 85 },
      { name: "django", val: 90 },
      { name: "flask", val: 50 },
    ],
  },
  {
    type: "Database",
    skills: [
      { name: "Mysql", val: 80 },
      { name: "noSql", val: 85 },
      { name: "gresql", val: 90 },
      { name: "graphql", val: 50 },
    ],
  },
];
const frontendData = dummyData.filter((data) => data.type === "Frontend");
const backendData = dummyData.filter((data) => data.type === "Backend");
const databaseData = dummyData.filter((data) => data.type === "Database");

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.background};
  /* border: 1px solid #ccc; */

  .arrowDown {
    position: absolute;
    bottom: 5%;
    left: 50%;
    font-size: 30px;
    animation: animateArow 1s infinite ease-in alternate;
    cursor: pointer;
    background: transparent;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

    @keyframes animateArow {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(20px) scale(1.2);
        opacity: 0.3;
      }
    }
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-self: start;
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Title = styled.h1`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Desc = styled.h3`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.paraColor.color};
`;
const Skills = () => {
  const skillObj = {
    first: "Frontend",
    second: "Backend",
    third: "Database",
  };
  return (
    <>
      <Skill id="skills">
        <Intro>
          <Title>Skills</Title>
          <Desc>My Skill Set</Desc>
        </Intro>
        <SingleSkill skillName={skillObj} skillArr={dummyData} />
        <KeyboardArrowDownIcon className="arrowDown" />
      </Skill>
    </>
  );
};

export default Skills;
