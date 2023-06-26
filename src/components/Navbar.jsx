import { useContext, useState } from "react";
import { styled } from "styled-components";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import DarkModeContext from "../context/darkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link } from "react-scroll";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 80px;
  background: ${(props) => props.theme.navbar.background};
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

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  const [isActive, setIsActive] = useState("home");

  const handleIsActive = (type) => {
    setIsActive(type);
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
    </Container>
  );
};

export default Navbar;
