import { styled } from "styled-components";
import AboutImg from "../assets/sanjeev.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import resume from "../assets/resumeL.pdf";
import { smallScreen, mediumScreen } from "../mediaQueries";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  border-bottom: 1px solid #ccc;
  position: relative;
  background: ${(props) => props.theme.background};

  .arrowDown {
    position: absolute;
    bottom: 5%;
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

const Head1 = styled.h1`
  align-self: flex-start;
  /* padding-left: 10px; */
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;
const Para1 = styled.p`
  align-self: flex-start;
  position: absolute;
  top: 70px;
  left: 20px;
  color: #555;
  background: transparent;
  color: ${(props) => props.theme.paraColor.color};
`;
const WrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
  padding: 20px;
  background: transparent;
  color: ${(props) => props.theme.color};
  ${smallScreen`
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  gap: 10px;
  padding-top: 0;
  padding-bottom: 0;

  `}
`;
const WrapperItems = styled.div`
  flex: 1;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  background: transparent;
  color: ${(props) => props.theme.color};
  ${smallScreen`
    padding: 0 20px;
    position: relative;
    top: -50px;

  `}
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  background: #6e57e0;
  border-radius: 50%;
  border: 1px solid #ccc;
  object-fit: cover;
`;

const DescPara = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #555;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const Achievements = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const AchiveSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 2px solid cyan; */
  text-align: center;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const AchiveHeading = styled.h1`
  color: #333;
  background: transparent;
  color: ${(props) => props.theme.headingColor.color};
`;

const AchivePara = styled.p`
  color: #555;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const DownloadCv = styled.span`
  background: #6e57e0;
  color: #fff;
  position: absolute;
  bottom: -88px;
  left: 10px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 20px;
  ${smallScreen`
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: fit-content;
    transform: translate(60%, 140%)

  `}
`;
const About = () => {
  return (
    <Wrapper id="about">
      <Head1>About Me</Head1>
      <Para1>My Introduction</Para1>
      <WrapperItem>
        <WrapperItems>
          <Img src={AboutImg} alt="ImgErr" />
        </WrapperItems>
        <WrapperItems>
          <DescPara>
            Web developer, with extensive knowledge and years of experPience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </DescPara>
          <Achievements>
            <AchiveSpan>
              <AchiveHeading>08+</AchiveHeading>
              <AchivePara>Years experience</AchivePara>
            </AchiveSpan>
            <AchiveSpan>
              <AchiveHeading>20+</AchiveHeading>
              <AchivePara>Project Completed</AchivePara>
            </AchiveSpan>
            <AchiveSpan>
              <AchiveHeading>05+</AchiveHeading>
              <AchivePara>Company Worked</AchivePara>
            </AchiveSpan>
            <a href={resume} download>
              <DownloadCv>
                Download CV
                <FileDownloadOutlinedIcon
                  style={{ background: "transparent" }}
                />
              </DownloadCv>
            </a>
          </Achievements>
        </WrapperItems>
      </WrapperItem>
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default About;
