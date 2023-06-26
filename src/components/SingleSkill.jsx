import React, { useState } from "react";
import { styled } from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import theme from "../theme";
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  /* border: 2px solid green; */
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SkillName = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SkillVal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const SkillItem = styled.div`
  /* border: 2px solid red; */
  width: 40vw;
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  .wrapper {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
  }

  .container {
    background-color: #eae3e3;
    /* border: 2px solid yellow; */
    width: 100%;
  }

  .barCompleted {
    background-color: #6e57e0;
    width: ${(props) => props.completed}%;
    height: 10px;
    border-radius: 10px;
  }

  .label {
    font-size: 20px;
    color: green;
    display: none;
  }
`;
const NamePercetageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid yellow; */
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SkillItemName = styled.span`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Skillnamewrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const SingleSkill = ({ skillName, skillArr }) => {
  const [display, setDisplay] = useState("Frontend");

  const reduceArr = () => {};
  return (
    <Wrapper>
      <Skillnamewrapper>
        <SkillName
          onClick={() => setDisplay(skillName.first)}
          style={
            display === skillName.first
              ? { color: "gray" }
              : { cursor: "pointer" }
          }
        >
          {skillName.first}
        </SkillName>
        <SkillName
          onClick={() => setDisplay(skillName.second)}
          style={
            display === skillName.second
              ? { color: "gray" }
              : { cursor: "pointer" }
          }
        >
          {skillName.second}
        </SkillName>
        <SkillName
          onClick={() => setDisplay(skillName.third)}
          style={
            display === skillName.third
              ? { color: "gray" }
              : { cursor: "pointer" }
          }
        >
          {skillName.third}
        </SkillName>
      </Skillnamewrapper>
      <SkillVal>
        {skillArr
          .filter((skill) => skill.type === display)[0]
          .skills.map((skill) => (
            <SkillItem key={skill.name} completed={skill.val}>
              <NamePercetageWrapper>
                <SkillItemName>{skill.name}</SkillItemName>
                <SkillItemName>{skill.val}%</SkillItemName>
              </NamePercetageWrapper>
              <ProgressBar
                completed={skill.val}
                className="wrapper"
                barContainerClassName="container"
                completedClassName="barCompleted"
                labelClassName="label"
              />
            </SkillItem>
          ))}
      </SkillVal>
    </Wrapper>
  );
};

export default SingleSkill;
