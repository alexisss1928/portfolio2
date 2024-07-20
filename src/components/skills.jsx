import styled from 'styled-components';
import HTML from '../assets/skillsIcons/html.png';
import CSS from '../assets/skillsIcons/css.svg';
import JS from '../assets/skillsIcons/js.svg';
import TS from '../assets/skillsIcons/typescript.svg';
import React from '../assets/skillsIcons/react.svg';
import Next from '../assets/skillsIcons/next.svg';
import Axios from '../assets/skillsIcons/axios.svg';
import StyledComponents from '../assets/skillsIcons/styledcomponents.svg';
import MaterialUI from '../assets/skillsIcons/materialui.svg';
import Bootstrap from '../assets/skillsIcons/bootstrap.svg';
import Tailwind from '../assets/skillsIcons/tailwind.svg';
import Storybook from '../assets/skillsIcons/storybook.svg';
import Jest from '../assets/skillsIcons/jest.svg';
import Vitest from '../assets/skillsIcons/vitest.svg';
// import Vscode from '../assets/skillsIcons/vscode.svg';
import Git from '../assets/skillsIcons/git.svg';
// import Github from '../assets/skillsIcons/github.png';
// import Gitlab from '../assets/skillsIcons/gitlab.svg';
import Figma from '../assets/skillsIcons/figma.svg';
import Photoshop from '../assets/skillsIcons/photoshop.svg';
import Strapi from '../assets/skillsIcons/strapi.svg';
import Python from '../assets/skillsIcons/python.svg';
import Django from '../assets/skillsIcons/django.svg';
import Node from '../assets/skillsIcons/node.svg';
import Express from '../assets/skillsIcons/express.svg';

const Wrapper = styled.div`
  margin-bottom: 80px;

  .title {
    margin-bottom: 40px;
  }

  .title > * {
    margin: 0;
  }

  h2 {
    font-size: 40px;
    color: #f49200;
    line-height: 40px;
  }
`;

const IconSkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 45px 10px;

  .iconWrapper {
    place-self: center;
    text-align: center;
  }

  .icon {
    margin: 0 auto;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Skills = () => {
  const mySkills = [
    {
      id: 1,
      name: 'HTML',
      icon: HTML,
    },
    {
      id: 2,
      name: 'CSS',
      icon: CSS,
    },
    {
      id: 3,
      name: 'Javascript',
      icon: JS,
    },
    {
      id: 4,
      name: 'Typescript',
      icon: TS,
    },
    {
      id: 5,
      name: 'React',
      icon: React,
    },
    {
      id: 6,
      name: 'Next',
      icon: Next,
    },
    {
      id: 7,
      name: 'Axios',
      icon: Axios,
    },
    {
      id: 8,
      name: 'StyledComponents',
      icon: StyledComponents,
    },
    {
      id: 9,
      name: 'MaterialUI',
      icon: MaterialUI,
    },
    {
      id: 10,
      name: 'Bootstrap',
      icon: Bootstrap,
    },
    {
      id: 11,
      name: 'Tailwind',
      icon: Tailwind,
    },
    {
      id: 12,
      name: 'Storybook',
      icon: Storybook,
    },
    {
      id: 13,
      name: 'Jest',
      icon: Jest,
    },
    {
      id: 14,
      name: 'Vitest',
      icon: Vitest,
    },
    {
      id: 16,
      name: 'Git',
      icon: Git,
    },
    {
      id: 19,
      name: 'Figma',
      icon: Figma,
    },
    {
      id: 20,
      name: 'Photoshop',
      icon: Photoshop,
    },
    {
      id: 21,
      name: 'Strapi',
      icon: Strapi,
    },
    {
      id: 22,
      name: 'Python',
      icon: Python,
    },
    {
      id: 23,
      name: 'Django',
      icon: Django,
    },
    {
      id: 24,
      name: 'Node',
      icon: Node,
    },
    {
      id: 25,
      name: 'Express',
      icon: Express,
    },
  ];

  /* const mySkillsBackup = [
    {
      id: 1,
      name: 'HTML',
      icon: HTML,
    },
    {
      id: 2,
      name: 'CSS',
      icon: CSS,
    },
    {
      id: 3,
      name: 'Javascript',
      icon: JS,
    },
    {
      id: 4,
      name: 'Typescript',
      icon: TS,
    },
    {
      id: 5,
      name: 'React',
      icon: React,
    },
    {
      id: 6,
      name: 'Next',
      icon: Next,
    },
    {
      id: 7,
      name: 'Axios',
      icon: Axios,
    },
    {
      id: 8,
      name: 'StyledComponents',
      icon: StyledComponents,
    },
    {
      id: 9,
      name: 'MaterialUI',
      icon: MaterialUI,
    },
    {
      id: 10,
      name: 'Bootstrap',
      icon: Bootstrap,
    },
    {
      id: 11,
      name: 'Tailwind',
      icon: Tailwind,
    },
    {
      id: 12,
      name: 'Storybook',
      icon: Storybook,
    },
    {
      id: 13,
      name: 'Jest',
      icon: Jest,
    },
    {
      id: 14,
      name: 'Vitest',
      icon: Vitest,
    },
    {
      id: 15,
      name: 'Vscode',
      icon: Vscode,
    },
    {
      id: 16,
      name: 'Git',
      icon: Git,
    },
    {
      id: 17,
      name: 'Github',
      icon: Github,
    },
    {
      id: 18,
      name: 'Gitlab',
      icon: Gitlab,
    },
    {
      id: 19,
      name: 'Figma',
      icon: Figma,
    },
    {
      id: 20,
      name: 'Photoshop',
      icon: Photoshop,
    },
    {
      id: 21,
      name: 'Strapi',
      icon: Strapi,
    },
    {
      id: 22,
      name: 'Python',
      icon: Python,
    },
    {
      id: 23,
      name: 'Django',
      icon: Django,
    },
    {
      id: 24,
      name: 'Node',
      icon: Node,
    },
    {
      id: 25,
      name: 'Express',
      icon: Express,
    },
  ]; */
  return (
    <Wrapper>
      <div id="skills" style={{ height: '40px' }}></div>
      <div className="title">
        <p>SKILLS</p>
        <h2>{`Technologies I've worked with`}</h2>
      </div>
      <IconSkillsWrapper>
        {mySkills.slice(0, 18).map((skill) => {
          return (
            <div className="iconWrapper" key={skill.id}>
              <div className="icon">
                <img src={skill.icon} alt="" />
              </div>
              <p>{skill.name}</p>
            </div>
          );
        })}
      </IconSkillsWrapper>
      <h3>Some knowledge in...</h3>
      <IconSkillsWrapper>
        {mySkills.slice(18, 22).map((skill) => {
          return (
            <div className="iconWrapper" key={skill.id}>
              <div className="icon">
                <img src={skill.icon} alt="" />
              </div>
              <p>{skill.name}</p>
            </div>
          );
        })}
      </IconSkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
