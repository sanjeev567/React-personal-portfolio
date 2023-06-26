import { useContext, useState } from "react";
import { styled } from "styled-components";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import DarkModeContext from "../context/darkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link } from "react-scroll";
import { smallScreen } from "../mediaQueries";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 80px;
  background: ${(props) => props.theme.navbar.background};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 1100px;
  z-index: 999;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  background: transparent;
`;
const LeftHeading = styled.h1`
  background: #fff;
  background: transparent;
  color: ${(props) => props.theme.color};
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  ${smallScreen`
  display: none;
 `}
`;
const RightUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  background: ${(props) => props.theme.navbar.background};

  .active-link {
    background: transparent;
    cursor: pointer;
  }
`;
const RightUlLI = styled.li`
  margin-right: 15px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

// cross Box
const CrossBox = styled.div`
  /* border: 2px solid red; */
  display: none;
  ${smallScreen`
    display: flex;
  `}
`;
const CrossWrapper = styled.div`
  display: flex;
  gap: 10px;
  background: ${(props) => props.theme.navbar.background};
  align-items: center;
`;
const LightDark = styled.div`
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.color};
`;
const LightDarkItem = styled.div`
  background: ${(props) => props.theme.navbar.background};
`;
const CrossLineBox = styled.div`
  /* border: 2px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  background: ${(props) => props.theme.navbar.background};
`;
const CrossLine = styled.span`
  width: 20px;
  height: 2px;
  background: ${(props) => props.theme.color};

  transform: ${(props) =>
    props.isRotate &&
    (props.first
      ? "rotate(45deg) translate(0px, 7px)"
      : "rotate(-45deg) translate(0px, -6px)")};
  transition: transform 0.5s ease-in-out;
`;
const CrossUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.color};
  position: absolute;
  top: 79px;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 30vh;
  flex-direction: column;
  gap: 12px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  opacity: ${(props) => (props.isRotate ? 1 : 0)};
  visibility: ${(props) => (props.isRotate ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.isRotate ? "0" : "-130%")});
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in,
    transform 0.5s ease-in;

  .active-link {
    background: transparent;
    cursor: pointer;
  }
`;
const CrossLi = styled.li`
  margin-right: 15px;
  background: transparent;
  color: ${(props) => props.theme.color};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const [isActive, setIsActive] = useState("home");
  const [isRotate, setIsRotate] = useState(false);
  const handleIsActive = (type) => {
    setIsActive(type);
  };
  const addRotateSpan = () => {
    setIsRotate(!isRotate);
  };
  return (
    <Container>
      <Left>
        <LeftHeading>Portfolio</LeftHeading>
      </Left>
      <Right>
        <RightUl>
          <Link
            onClick={() => handleIsActive("home")}
            to="front"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <RightUlLI style={isActive === "home" ? { color: "#6e57e0" } : {}}>
              Home
            </RightUlLI>
          </Link>
          <Link
            onClick={() => handleIsActive("about")}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <RightUlLI style={isActive === "about" ? { color: "#6e57e0" } : {}}>
              about
            </RightUlLI>
          </Link>
          <Link
            onClick={() => handleIsActive("skills")}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <RightUlLI
              style={isActive === "skills" ? { color: "#6e57e0" } : {}}
            >
              Skills
            </RightUlLI>
          </Link>
          <Link
            onClick={() => handleIsActive("projects")}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // // style={{ background: "transparent" }}
          >
            <RightUlLI
              style={isActive === "projects" ? { color: "#6e57e0" } : {}}
            >
              Projects
            </RightUlLI>
          </Link>
          <Link
            onClick={() => handleIsActive("contacts")}
            to="contacts"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <RightUlLI
              style={isActive === "contacts" ? { color: "#6e57e0" } : {}}
            >
              ContactMe
            </RightUlLI>
          </Link>

          {darkMode ? (
            <RightUlLI onClick={() => dispatch({ type: "TOGGLE" })}>
              <DarkModeOutlinedIcon
                className="themeIcon"
                style={{ background: `transparent` }}
              />
            </RightUlLI>
          ) : (
            <RightUlLI onClick={() => dispatch({ type: "TOGGLE" })}>
              <LightModeIcon
                className="themeIcon"
                style={{ background: "transparent" }}
              />
            </RightUlLI>
          )}
        </RightUl>
      </Right>
      <CrossBox>
        <CrossWrapper
          style={{ background: `${(props) => props.theme.navbar.background}` }}
        >
          <LightDark>
            {darkMode ? (
              <LightDarkItem onClick={() => dispatch({ type: "TOGGLE" })}>
                <DarkModeOutlinedIcon
                  className="themeIcon"
                  style={{ background: `transparent` }}
                />
              </LightDarkItem>
            ) : (
              <LightDarkItem onClick={() => dispatch({ type: "TOGGLE" })}>
                <LightModeIcon
                  className="themeIcon"
                  style={{ background: "transparent" }}
                />
              </LightDarkItem>
            )}
          </LightDark>
          <CrossLineBox onClick={addRotateSpan}>
            <CrossLine isRotate={isRotate} first></CrossLine>
            <CrossLine isRotate={isRotate} second></CrossLine>
          </CrossLineBox>
        </CrossWrapper>
        <CrossUl isRotate={isRotate}>
          <Link
            onClick={() => handleIsActive("home")}
            to="front"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <CrossLi
              style={isActive === "home" ? { color: "#6e57e0" } : {}}
              onClick={() => setIsRotate(!isRotate)}
            >
              Home
            </CrossLi>
          </Link>
          <Link
            onClick={() => handleIsActive("about")}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <CrossLi
              style={isActive === "about" ? { color: "#6e57e0" } : {}}
              onClick={() => setIsRotate(!isRotate)}
            >
              about
            </CrossLi>
          </Link>
          <Link
            onClick={() => handleIsActive("skills")}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <CrossLi
              style={isActive === "skills" ? { color: "#6e57e0" } : {}}
              onClick={() => setIsRotate(!isRotate)}
            >
              Skills
            </CrossLi>
          </Link>
          <Link
            onClick={() => handleIsActive("projects")}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // // style={{ background: "transparent" }}
          >
            <CrossLi
              style={isActive === "projects" ? { color: "#6e57e0" } : {}}
              onClick={() => setIsRotate(!isRotate)}
            >
              Projects
            </CrossLi>
          </Link>
          <Link
            onClick={() => handleIsActive("contacts")}
            to="contacts"
            smooth={true}
            duration={500}
            spy={true}
            // activeClass="active-link"
            className="active-link"
            // style={{ background: "transparent" }}
          >
            <CrossLi
              style={isActive === "contacts" ? { color: "#6e57e0" } : {}}
              onClick={() => setIsRotate(!isRotate)}
            >
              ContactMe
            </CrossLi>
          </Link>
        </CrossUl>
      </CrossBox>
    </Container>
  );
};

export default Navbar;
