import styled from 'styled-components';
import Whatsapp from '../assets/icons/whatsapp-fill.svg';
import Mail from '../assets/icons/mail-fill.svg';
import Linkedin from '../assets/icons/skill-icons_linkedin.png';
import Github from '../assets/skillsIcons/github.png';

import Logo from '../assets/logo.png';

const Wrapper = styled.div`
  h3 {
    font-size: 26px;
    color: #f49200;
    line-height: 0px;
  }
`;

const FooterWrapper = styled.div`
  border-radius: 50px 50px 0 0;
  background-color: #15485352;
  padding: 20px;
  text-align: center;

  .contactDataBox {
    display: flex;
    margin-top: 40px;

    & > div {
      width: 50%;
      transform: scale(0.9);
    }
  }

  .contactForm {
    padding: 20px;
  }

  .contactDataBox_data {
    text-align: left;
    padding: 20px 40px;
    box-sizing: border-box;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        text-decoration: underline;
      }
    }

    img {
      width: 30px;
      position: relative;
      top: 8px;
      margin-right: 10px;
    }
  }

  .contactDataBox_title {
    color: #f49200;
    font-size: 22px;
    font-weight: 900;
    margin: 0;
  }

  .contactDataBox_description {
    margin: 0;
  }

  .formWrapper {
    width: 80%;
    background-image: linear-gradient(110deg, #145b6b 0%, #14697c 100%);
    border-radius: 10px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;

    label {
      display: none;
    }

    input,
    textarea {
      resize: none;
      border: none;
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      background-color: #17505c;
      margin: 5px;
      width: 90%;
    }

    button {
      border: solid 1px #f49200;
      color: #f49200;
      font-weight: 700;
      background-color: transparent;
      border-radius: 5px;
      padding: 10px 20px;
      margin-top: 10px;
      cursor: pointer;

      &:hover {
        background-color: #f49200;
        color: #14697c;
      }
    }
  }

  hr {
    margin: 40px 0 25px 0;
  }
`;

const FooterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logoContainer {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .rrddContainer {
    width: 30px;
    height: 30px;

    img {
      width: 100%;
    }
  }

  .footer-rrdd {
    display: flex;
    gap: 20px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <h3>Contact me</h3>
        <div className="contactDataBox">
          <div className="contactDataBox_data">
            <p className="contactDataBox_title">Drop me a message</p>
            <p className="contactDataBox_description">
              {`I'll be happy to answer you in a moment`}
            </p>
            <p>
              <a href="https://wa.me/584120202737" target="_blank">
                <img src={Whatsapp} alt="" />
                +584120202737
              </a>
            </p>
            <p>
              <a href="mailto:ale6jss@gmail.com" target="_blank">
                <img src={Mail} alt="" />
                ale6jss@gmail.com
              </a>
            </p>
          </div>
          <div className="contactForm">
            <div className="formWrapper">
              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <textarea placeholder="Message" rows={5}></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <FooterBar>
          <div className="logoContainer">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-rrdd">
            <a
              href="https://www.linkedin.com/in/ale6jss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rrddContainer">
                <img src={Linkedin} alt="" />
              </div>
            </a>
            <a
              href="https://github.com/alexisss1928"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rrddContainer">
                <img src={Github} alt="" />
              </div>
            </a>
          </div>
        </FooterBar>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;
