import React, { useState } from 'react';
import styled from 'styled-components';
import useMouse from '@react-hook/mouse-position';

import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';

import Linkedin from '../src/assets/linkedin.svg';
import Github from '../src/assets/github.svg';
import Mail from '../src/assets/mail.svg';
import Whatsapp from '../src/assets/whatsapp.svg';
import Logo from '../src/assets/logo.png';
import EN from '../src/assets/icons/EN.png';
import ES from '../src/assets/icons/ES.png';
import CV_ES from '../src/assets/Alexis_Salcedo_Frontend_Spa.pdf';
import CV_EN from '../src/assets/Alexis_Salcedo_Frontend_Eng.pdf';

const MainWrapper = styled.div``;

const Container = styled.div`
  width: 100vw;
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
height: 100vh;
position: relative;

  .hero {
    max-width: 400px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .contact {
  * {
    margin-bottom: 40px;
  }

position: absolute;
right: 0;
text-align: center;

.contact__line {
display: block;
  width: 2px;
  height: 20vh;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
}

    img{
      display: block;
      cursor: pointer;
      transition: .2s;

      &:hover {
      transform: scale(1.3);
      }
    }
  }

  .salute {
    font-family: 'Life Savers', serif;
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-weight: 300;
    line-height: 20px;
  }

  h2 {
    font-size: 46px;
    margin: 0;
    line-height: 50px;
    font-weight: 400;
  }

  .accent {
    color: #f49200;
  }

  .getResumeBox {
  display: flex;
   gap: 10px;

  button {
    width: 100%;
    height: 40px;
    border: solid 1px #f49200;
    color: #f49200;
    font-weight: 700;
    background-color: transparent;
    border-radius: 5px;;
    margin-top: 10px;
    cursor: pointer;
    padding: 10px;

    &:hover {
    background-color: #f49200;
    color: #14697c;
    }
  }

  .getResumeBox_language{
   display: flex;
   gap: 10px;
   transition: .5s;
    
   & > a > button {
   height: 40px;
   padding: 5px;
   overflow: hidden;

   img {
   width: 30%;
   }
   }}
  }

  

  ul {
    list-style-type: none;

    li {
    margin-top: 20px;
    position: relative;
    cursor: pointer;
    transition: .2s;

      a {
        color:#fff;
        text-decoration: none;
      }

    &:hover {
    padding-left: 20px;
    }

     &:hover a {
    color: #f49200;
    }

    &:hover:after {
    background-color: #f49200;
    width: 50px;
    }
  }

  li:after {
  content:'';
  position: absolute;
  top: 50%;
  left: -40px;
  width: 30px;
  height: 2px;
  background-color: #fff;
  transition: .2s;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  position: relative;
  left: -15px;
  bottom: -10px;

  img {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 500px;
  height: 500px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  position: absolute;
  z-index: 999;
  border-radius: 50%;
  pointer-events: none;
`;

function App() {
  const [showCVLanguages, setShowCVLanguages] = useState(false);
  const ref = React.useRef(null);
  const mousePosition = useMouse(ref);

  return (
    <MainWrapper ref={ref}>
      <Container>
        <Box
          style={{ top: mousePosition.y - 250, left: mousePosition.x - 250 }}
        ></Box>
        {/* <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer> */}
        <Wrapper>
          <div className="hero">
            <LogoContainer>
              <img src={Logo} alt="" />
            </LogoContainer>
            <p className="salute">Hi my name is</p>
            <h2>
              Alexis <span className="accent">Salcedo</span>
            </h2>
            <p>
              <span className="accent">Frontend developer</span> who likes to
              built visually appealing sites, with a flow that final users
              enjoy. On the technical side codes fluid , responsive design with
              cross-browser compatibility. Troubleshooter and quick learner.
            </p>
            <div className="getResumeBox">
              <button
                onClick={() => setShowCVLanguages(!showCVLanguages)}
                style={{
                  background: `${showCVLanguages ? '#f49200' : 'transparent'}`,
                  color: `${showCVLanguages ? '#fff' : '#f49200'}`,
                }}
              >
                Get my resume
              </button>
              <div
                className="getResumeBox_language"
                style={{ filter: `opacity(${showCVLanguages ? '1' : '0'})` }}
              >
                <a href={CV_ES} target="_blank">
                  <button>
                    <img src={ES} alt="" />
                  </button>
                </a>
                <a href={CV_EN} target="_blank">
                  <button>
                    <img src={EN} alt="" />
                  </button>
                </a>
              </div>
            </div>
            <ul>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <span className="contact__line"></span>
            <a href="https://github.com/alexisss1928" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ale6jss/" target="_blank">
              <img src={Linkedin} alt="" />
            </a>
            <a href="https://wa.me/584120202737" target="_blank">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="mailto:ale6jss@gmail.com" target="_blank">
              <img src={Mail} alt="" />
            </a>
          </div>
        </Wrapper>
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </Container>
    </MainWrapper>
  );
}

export default App;
