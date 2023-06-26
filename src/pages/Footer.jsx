import { styled } from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { smallScreen } from "../mediaQueries";
const FooterWrapper = styled.div`
  display: flex;
  min-height: 40vh;
  background-color: #6e57e0;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
const Box = styled.div`
  background-color: #6e57e0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  min-height: 30vh;
  margin: auto;
  gap: 30px;
  margin-top: 20px;
  ${smallScreen`
    flex-direction: column;
    
    gap: 5px;
  `}
`;
const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  flex: 1;
  background: transparent;
  ${smallScreen`
   gap: 5px;
  transform: translateY(-25%);

 `}
`;
const Showcase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  gap: 30px;
  flex: 1;
  ${smallScreen`
   
   gap: 15px;
 `}
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;

  flex: 1;
  .socialIcon {
    background: transparent;
    color: #fff;
    font-size: 1.9rem;
  }
`;

const SocialWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  ${smallScreen`
   
   width: 150px;
   position: absolute;
   top: 10px;
   right: 10px;
 `}
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;

  background: transparent;
`;
const Desc = styled.p`
  font-size: 1rem;
  font-weight: 300;
  background: transparent;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <Box>
        <Headline>
          <Title>Sanjeev</Title>
          <Desc>Full Stack Developer</Desc>
        </Headline>
        <Showcase>
          <Desc>Skills</Desc>
          <Desc>Projects</Desc>
          <Desc>Contact</Desc>
        </Showcase>
        <Social>
          <SocialWrapper>
            <a
              style={{ background: "transparent", color: "#6e57e0" }}
              href="https://www.facebook.com/profile.php?id=100008144056536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon className="socialIcon" />
            </a>
            <a
              style={{ background: "transparent", color: "#6e57e0" }}
              href="https://www.instagram.com/sanjeev_8feb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="socialIcon" />
            </a>
            <a
              style={{ background: "transparent", color: "#6e57e0" }}
              href="https://twitter.com/19cs48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="socialIcon" />
            </a>
          </SocialWrapper>
        </Social>
      </Box>
      <Desc>Copyright @2023, All rights reversed</Desc>
    </FooterWrapper>
  );
};

export default Footer;
