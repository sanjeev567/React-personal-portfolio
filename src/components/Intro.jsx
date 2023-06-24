import React, { useContext } from "react";
import { styled } from "styled-components";
import IntroImg from "../assets/sanjeev.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import theme from "../theme";
import { DarkModeContext } from "../context/darkModeContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
  justify-content: space-between;
  gap: 40px;
  min-height: 60vh;
  position: relative;

  .arrowDown {
    position: absolute;
    bottom: -40%;
    left: 50%;
    font-size: 30px;
    animation: animateArow 1s infinite ease-in alternate;
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.color};

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
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  height: 45vh;
  background: ${(props) => props.theme.background};
`;

// const ImgBox = styled.div`
//   width: 200px;
//   height: 200px;
//   z-index: 3;
// `;
const Img = styled.img`
  /* width: 100%;
  height: 100%; */
  width: 200px;
  height: 200px;
  z-index: 3;
  background: transparent;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  animation: animate 5s infinite ease alternate;
  overflow: hidden;
  /* background: ${(props) => props.theme.background}; */

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid red; */
  z-index: 5;
  margin-top: 30px;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  gap: 20px;
  color: #6e57e0;

  .Icon {
    font-size: 2.3rem;
    background-color: transparent;
    margin-top: 15px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
  background: ${(props) => props.theme.background};

  flex: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 10px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #444;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const Desc = styled.p`
  color: #777;
  width: 70%;
  font-size: 18px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const ContactBox = styled.span`
  /* border: 2px solid red; */
  border-radius: 10px;
  margin: 30px 0;
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 10px;
  background: #fff;
  &:hover {
    cursor: pointer;
  }
  p {
    color: #6e57e0;
    background-color: #fff;
    font-weight: bolder;
    font-size: 18px;
  }
  .sendIcon {
    background-color: #fff;
    color: #6e57e0;
  }
`;
const ContactTitle = styled.p``;

const CanvasContainer = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  top: -60px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: black;
  #canvasId > div > canvas {
    background: ${(props) => props.theme.background};
  }
`;

const Intro = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Wrapper theme={darkMode ? theme.DarkMode : theme.lightMode}>
      <Left>
        <CanvasContainer>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }} id="canvasId">
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 1200]} scale={1.7}>
              <MeshDistortMaterial
                color="#6e57e0"
                attach="material"
                distort={0.3}
                speed={1}
              />
            </Sphere>
          </Canvas>
        </CanvasContainer>
        {/* <ImgBox> */}
        <Img src={IntroImg} alt="IntroImgErr" />
        {/* </ImgBox> */}
        <Social>
          <LinkedInIcon className="Icon" />
          <GitHubIcon className="Icon" />
          <TwitterIcon className="Icon" />
        </Social>
      </Left>

      <Right>
        <Title>Hi, I'm Sanjeev</Title>
        <SubTitle>Full Stack Developer</SubTitle>
        <Desc>
          High level experience in web design and development knowledge,
          producing quality work.
        </Desc>
        <ContactBox>
          <ContactTitle>Contact Me</ContactTitle>
          <SendIcon className="sendIcon" />
        </ContactBox>
      </Right>
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default Intro;
