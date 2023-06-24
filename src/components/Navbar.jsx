import { useContext } from "react";
import { styled } from "styled-components";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import theme from "../theme";
// import { DarkModeContext, darkMode } from "../context/DarkModeContext";
import { DarkModeContext } from "../context/darkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
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
`;
const RightUlLI = styled.li`
  margin-right: 15px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const Navbar = () => {
  const { dispatch, darkMode } = useContext(DarkModeContext);
  return (
    <Container theme={darkMode ? theme.DarkMode : theme.lightMode}>
      <Left>
        <LeftHeading>Sanjeev</LeftHeading>
      </Left>
      <Right>
        <RightUl>
          <RightUlLI>Home</RightUlLI>
          <RightUlLI>About</RightUlLI>
          <RightUlLI>Skills</RightUlLI>
          <RightUlLI>Services</RightUlLI>
          <RightUlLI>Portfolio</RightUlLI>
          <RightUlLI>ContactMe</RightUlLI>
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
