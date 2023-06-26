import { styled } from "styled-components";
import Contact from "../components/Contact";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

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

const ContactHeading = styled.div`
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

const Contacts = () => {
  return (
    <Wrapper id="contacts">
      <ContactHeading>
        <Title>Contact</Title>
        <Desc>Contact through either ways: </Desc>
      </ContactHeading>
      <Contact />
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default Contacts;
