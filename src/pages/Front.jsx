import { styled } from "styled-components";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  border-bottom: 1px solid #ccc;
`;

const front = () => {
  return (
    <Wrapper id="front">
      <Navbar />
      <Intro />
    </Wrapper>
  );
};

export default front;
