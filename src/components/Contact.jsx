// import styled from "@emotion/styled";
import { styled } from "styled-components";

import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ChatIcon from "@mui/icons-material/Chat";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { smallScreen, mediumScreen } from "../mediaQueries";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 90%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${smallScreen`
    flex-direction: column;
    
  `}
`;
const ContactLinks = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${smallScreen`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  `}
`;
const SingleLink = styled.span`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${smallScreen`
    flex: 1;
  gap: 5px;
  align-items: center;
  `}

  .linkIcon {
    font-size: 2.2rem;
    color: #6e57e0;
    background: transparent;
    ${smallScreen`
       font-size: 1.5rem;

  `}
  }
`;
const Text = styled.span`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${smallScreen`
       font-size: 1.2rem;

  `}
`;
const Desc = styled.h3`
  color: #777;
  font-weight: 300;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${smallScreen`
       font-size: 1rem;

  `}
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  ${smallScreen`
       width: 90%;
       gap: 10px

  `}
`;

const InputWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  .formIcon {
    background-color: transparent;
    color: gray;
  }
  &:focus-within {
    border-color: blue;
  }
  ${smallScreen`
       padding: 5px;

  `}
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  font-size: 1.1rem;
  color: #555;
  &::placeholder {
    color: #999;
    font-size: 1rem;
  }
`;
const Button = styled.button`
  align-self: center;
  background: #5943cb;
  border: none;
  outline: none;
  border: 1px solid #ccc;
  height: 50px;
  width: 60%;
  margin: 20px 0;
  font-size: 1.4rem;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  ${smallScreen`
    margin: 0;
    margin-top: 20px;
  `}
`;

const SuccessMessage = styled.span`
  color: green;
`;
const Contact = () => {
  const [success, setSuccess] = useState(null);
  const [isInputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => {
    setInputFocus(true);
  };
  const handleInputBlur = () => {
    setInputFocus(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Wrapper>
      <ContactLinks>
        <SingleLink>
          <CallIcon className="linkIcon" />
          <a href="+91 7254903908" style={{ textDecoration: "none" }}>
            <Text>
              <Title>Call</Title>
              <Desc>+91 7254903908</Desc>
            </Text>
          </a>
        </SingleLink>
        <SingleLink>
          <WhatsAppIcon className="linkIcon" />
          <a
            href="https://wa.me/917254903908?text=Hi%20there,"
            style={{ textDecoration: "none" }}
          >
            <Text>
              <Title>WhatsApp</Title>
              <Desc>+91 7254903908</Desc>
            </Text>
          </a>
        </SingleLink>
        <SingleLink>
          <EmailIcon className="linkIcon" />
          <a
            href="mailto:sanjeevsingh.ss342@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Text>
              <Title>Email</Title>
              <Desc>sanjeevsingh@gmail.com</Desc>
            </Text>
          </a>
        </SingleLink>
        <SingleLink>
          <LocationOnIcon className="linkIcon" />
          <Text>
            <Title>Location</Title>
            <Desc>Patna,In</Desc>
          </Text>
        </SingleLink>
      </ContactLinks>

      <ContactForm ref={form} onSubmit={sendEmail}>
        <Title style={{ background: "transparent", color: "black" }}>
          Contact Me
        </Title>
        <InputWrapper onClick={handleInputFocus}>
          <Input type="text" name="name" placeholder="Enter Name: " />
          <AccountBoxIcon className="formIcon" />
        </InputWrapper>
        <InputWrapper onClick={handleInputFocus} onBlur={handleInputBlur}>
          <Input type="email" name="email" placeholder="Enter Email: " />
          <EmailIcon className="formIcon" />
        </InputWrapper>

        <InputWrapper>
          <Input type="text" name="project" placeholder="Enter Project: " />
          <DriveFileRenameOutlineIcon className="formIcon" />
        </InputWrapper>
        <InputWrapper>
          <Input type="textarea" name="message" placeholder="Enter Message: " />
          <ChatIcon className="formIcon" />
        </InputWrapper>

        {success && (
          <SuccessMessage>Message sent Successfully ! </SuccessMessage>
        )}
        <Button type="submit">Send</Button>
      </ContactForm>
    </Wrapper>
  );
};

export default Contact;
