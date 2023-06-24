import React from "react";
import { styled } from "styled-components";
import Front from "./pages/Front";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import { useContext } from "react";
// import { DarkModeContext } from "./context/DarkModeContext";
import DarkModeContext from "./context/DarkModeContext";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

const Main = styled.div`
  width: 100%;
  max-width: 1100px;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  margin: 0 auto;
  -webkit-box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5),
    5px 0 5px -5px rgba(0, 0, 0, 0.5);
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5),
    5px 0 5px -5px rgba(0, 0, 0, 0.5);
`;
const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <ThemeProvider theme={darkMode ? theme.DarkMode : theme.lightMode}>
        <Main>
          <Front />
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
