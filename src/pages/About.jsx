import { styled } from "styled-components";
import AboutImg from "../assets/sanjeev.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

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
  padding-left: 10px;
  background: transparent;
  color: ${(props) => props.theme.color};
`;
const Para1 = styled.p`
  align-self: flex-start;
  padding-left: 15px;
  margin-bottom: 80px;
  color: #555;
  background: transparent;
  color: ${(props) => props.theme.color};
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
  color: ${(props) => props.theme.color};
`;

const AchivePara = styled.p`
  color: #555;
  background: transparent;
  color: ${(props) => props.theme.color};
`;

const DownloadCv = styled.span`
  align-self: flex-start;
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
`;
const About = () => {
  return (
    <Wrapper>
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
            <DownloadCv>
              Download CV{" "}
              <FileDownloadOutlinedIcon style={{ background: "transparent" }} />
            </DownloadCv>
          </Achievements>
        </WrapperItems>
      </WrapperItem>
      <KeyboardArrowDownIcon className="arrowDown" />
    </Wrapper>
  );
};

export default About;
