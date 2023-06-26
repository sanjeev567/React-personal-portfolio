import { styled } from "styled-components";
import IntroImg from "../assets/sanjeev.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { smallScreen, mediumScreen } from "../mediaQueries";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.background};
  justify-content: space-around;
  gap: 40px;
  min-height: 60vh;
  position: relative;

  /* Media queries for smaller device */
  ${smallScreen`
      flex-direction: column;
    justify-content: center;
    height: 80vh;
    gap: 20px
  `}

  .arrowDown {
    position: absolute;
    bottom: -40%;
    left: 50%;
    font-size: 30px;
    animation: animateArow 1s infinite ease-in alternate;
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.theme.color};
    ${smallScreen`
      bottom: -40px;
    `}

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
  ${smallScreen`
    //  border: 2px solid green;
     transform: translateY(30px);
     overflow: hidden;
     width: 400px;
  `}
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  z-index: 3;
  background: transparent;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  animation: animate 5s infinite ease alternate;
  overflow: hidden;
  ${smallScreen`
    margin-top: 0px;
    position: relative;
    top: 0px;
    left: 0px
  `}

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
  ${smallScreen`
    flex-direction: column;
    top: -30px;
    left: -300px;
    gap: 0;
  `}

  .Icon {
    font-size: 2.3rem;
    background-color: transparent;
    margin-top: 15px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};

  flex: 1;
  ${smallScreen`
    justify-content: center;
    align-items: center;
  `}
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 10px;
  background: transparent;
  color: ${(props) => props.theme.headingColor.color};
`;

const SubTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #444;
  background: transparent;
  color: ${(props) => props.theme.paraColor.color};
`;

const Desc = styled.p`
  color: #777;
  width: 70%;
  font-size: 18px;
  background: transparent;
  color: ${(props) => props.theme.headingColor.color};
  text-align: center;
`;

const ContactBox = styled.span`
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
    ${smallScreen`
      position: relative;
      top: 15px;
      
    `}
  }
`;

const Intro = () => {
  return (
    <Wrapper>
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
          <a
            style={{ background: "transparent", color: "#6e57e0" }}
            href="https://linkedin.com/in/sanjeev-singh-8feb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="Icon" />
          </a>
          <a
            style={{ background: "transparent", color: "#6e57e0" }}
            href="https://github.com/sanjeev567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="Icon" />
          </a>
          <a
            style={{ background: "transparent", color: "#6e57e0" }}
            href="https://twitter.com/19cs48"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="Icon" />
          </a>
        </Social>
      </Left>

      <Right>
        <Title>Hi, I'm Sanjeev</Title>
        <SubTitle>Full Stack Developer</SubTitle>
        <Desc>
          High level experience in web design and development knowledge,
          producing quality work.
        </Desc>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          spy={true}
          style={{ background: "transparent" }}
        >
          <ContactBox>
            <ContactTitle>Contact Me</ContactTitle>
            <SendIcon className="sendIcon" />
          </ContactBox>
        </Link>
      </Right>
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default Intro;
