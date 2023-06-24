import React, { useContext } from "react";
import { styled } from "styled-components";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import DarkModeContext from "../context/darkModeContext";
import theme from "../theme";

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  border-bottom: 1px solid #ccc;
`;

const front = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Wrapper theme={darkMode ? theme.DarkMode : theme.lightMode}>
      <Navbar />
      <Intro />
    </Wrapper>
  );
};

export default front;
