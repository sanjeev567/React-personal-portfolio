import { styled } from "styled-components";
import ProjectSlider from "../components/ProjectSlider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-bottom: 1px solid #ccc;

  .arrowDown {
    position: absolute;
    bottom: 5%;
    left: 50%;
    font-size: 30px;
    animation: animateArow 1s infinite ease-in alternate;
    cursor: pointer;
    background: transparent;

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

const ProjectHeading = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h1`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Desc = styled.h3`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.paraColor.color};
`;
const Projects = () => {
  return (
    <Wrapper id="projects">
      <ProjectHeading>
        <Title>Projects</Title>
        <Desc>See My works</Desc>
      </ProjectHeading>
      <ProjectSlider />
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default Projects;
