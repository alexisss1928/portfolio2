import styled from 'styled-components';
import JarabitoExample from '../assets/jarabito01_vert.jpeg';
import DoctorCompanionExample from '../assets/doctorcompanion01_vert.jpeg';
import AlDiaExample from '../assets/aldia01_vert.jpeg';
import ShrinkExample from '../assets/shrinkinator01_vert.jpeg';
import OldPortfolio from '../assets/previous_portfolio.jpeg';

const Wrapper = styled.div`
  .title {
    margin-bottom: 40px;
  }

  div > * {
    margin: 0;
  }

  h2 {
    font-size: 40px;
    color: #f49200;
    line-height: 40px;
  }
`;

const ExperienceBox = styled.div`
  display: flex;
  border-radius: 5px;
  position: relative;

  & > div {
    width: 50%;
    height: 400px;
  }

  .imageExample {
    box-shadow: 10px 10px 20px #183339;
    transform: scale(0.8);
    border-radius: 5px;
    position: relative;
    background-color: #00bb77;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    img {
      position: absolute;
      border-radius: 5px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .info {
    position: relative;

    .infoWrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      p {
        margin: 0;
      }

      .appName {
        font-size: 22px;
        font-weight: 700;
      }

      .appDescription {
        color: #adadad;
        font-size: 14px;
        font-weight: 300;
      }

      .buttonsBox {
        display: flex;
        gap: 20px;
      }
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

    .buttonLiveDemo {
      background-color: #f49200;
      color: #14697c;

      &:hover {
        filter: opacity(0.8);
      }
    }
  }
`;

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      imageExample: JarabitoExample,
      name: 'Jarabito',
      description:
        'Jarabito is a pediatric dose calculator app that helps you find the right dose of medicine for children based on their weight.',
      repo: 'https://github.com/alexisss1928/jarabito',
      demo: 'https://jarabito-build.netlify.app/index.html',
    },
    {
      id: 2,
      imageExample: DoctorCompanionExample,
      name: 'DoctorCompanion',
      description:
        'DoctorCompanion is an app that helps doctors to plan and print budgets for their patients.',
      repo: 'https://github.com/alexisss1928/budget-generator',
      demo: 'https://budget-generator.netlify.app/',
    },
    {
      id: 3,
      imageExample: AlDiaExample,
      name: 'AlDia prospect generator',
      description:
        'The app is designed to store client data in a Google Sheet and send it via WhatsApp.',
      repo: 'https://github.com/alexisss1928/aldia-prospect',
      demo: 'https://aldia-prospect-generator.netlify.app/',
    },
    {
      id: 4,
      imageExample: ShrinkExample,
      name: 'Shrink-Inator',
      description:
        'The webapp helps you shorten long URLs with ease! The app uses the Bitly API to shorten URLs and make them more manageable.',
      repo: 'https://github.com/alexisss1928/URLshortener',
      demo: 'https://shrink-inator.netlify.app/',
    },
    {
      id: 5,
      imageExample: OldPortfolio,
      name: 'Previous Portfolio',
      description: 'My first attemp of a portfolio',
      repo: 'https://github.com/alexisss1928/portfolio',
      demo: 'https://alexisdev.netlify.app/',
    },
  ];
  return (
    <Wrapper>
      <div id="projects" style={{ height: '40px' }}></div>
      <div className="title">
        <p>PROJECTS</p>
        <h2>Let me show some of my personal projects...</h2>
      </div>
      {projectsData.map((project) => {
        return (
          <ExperienceBox
            key={project.id}
            style={{ flexDirection: project.id % 2 ? null : 'row-reverse' }}
          >
            <div className="imageExample">
              <img
                src={project.imageExample}
                alt=""
                style={
                  project.imageExample.includes('_vert')
                    ? { height: '80%' }
                    : { width: '80%' }
                }
              />
            </div>
            <div className="info">
              <div className="infoWrapper">
                <p className="appName">{project.name}</p>
                <p className="appDescription">{project.description}</p>
                <div className="buttonsBox">
                  <a href={project.demo} target="_blank">
                    <button className="buttonLiveDemo">Demo</button>
                  </a>
                  <a href={project.repo} target="_blank">
                    <button>Github</button>
                  </a>
                </div>
              </div>
            </div>
          </ExperienceBox>
        );
      })}
    </Wrapper>
  );
};

export default Projects;
