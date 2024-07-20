import styled from 'styled-components';
import ExperienceItem from './experienceItem';
import AyuntamientoExample from '../assets/ayuntamiento01.jpeg';
import GoChallengeExample from '../assets/goExample01.jpeg';
import MentorExample from '../assets/mentor01.jpeg.jpg';
import CvExample from '../assets/cvExample01.jpeg';

const Wrapper = styled.div`
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

/* const ExperienceWrapper = styled.div`
  margin: 60px 0;

  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #f49200;

    a {
      color: #f49200;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .tags {
    margin: 20px 0px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    span {
      background-color: #f4920063;
      padding: 5px 10px;
      border-radius: 20px;
    }
  }
`; */

const experienceData = [
  {
    id: 1,
    company: 'Knowledge Labs, S.A.P.I. de C.V.',
    charge: 'Front End Developer - UX/UI',
    period: '04/24 – Present',
    description:
      'Developed a platform for uploading, handling, controlling and supervising files for the municipality of Culiacán, worked mainly with React and Tailwind.',
    tech_stack: [
      'react',
      'tailwind',
      'axios',
      'vscode',
      'github',
      'git',
      'css',
      'netlify',
      'storybook',
      'vitest',
    ],
    example_img: AyuntamientoExample,
    backgroundColor: '#3d408b',
  },
  {
    id: 2,
    company: 'Spiral Media Labs',
    charge: 'Front End Developer - UX/UI',
    period: '05/22 – 05/23',
    description:
      'I was responsible for creating a sports betting web application for GoChallenge in Mexico which included an administrative dashboard and the user area for challenging/betting.',
    tech_stack: [
      'react',
      'styled components',
      'axios',
      'vscode',
      'gitlab',
      'git',
      'css',
      'netlify',
    ],
    example_img: GoChallengeExample,
    backgroundColor: '#293541',
  },
  {
    id: 3,
    company: 'Hackademy / British Council',
    charge: 'Front End Mentor',
    period: '01/22 – 08/22',
    description:
      'I guide aspiring and junior developers in essential skills and tools to build modern, interactive web applications. Providing guidance, feedback, and support on topics such as JavaScript, CSS, Styled Components, React, Git, and Axios.',
    tech_stack: [
      'html',
      'css',
      'react',
      'styled components',
      'axios',
      'vscode',
      'github',
      'git',
      'css',
    ],
    example_img: MentorExample,
    backgroundColor: '#230859',
  },
  {
    id: 4,
    company: 'Hackademy',
    charge: 'Front End Developer - UX/UI',
    period: '06/21 – 08/22',
    description:
      'I developed and maintained two different web applications. The first helped users manage their resumes (CVs) and link them to relevant vacancies from various companies. The second app functioned as a hub for tech bootcamps, allowing users to explore, compare, and sign up for bootcamps aligned with their interests and goals.',
    tech_stack: [
      'html',
      'css',
      'react',
      'styled',
      'axios',
      'vscode',
      'github',
      'git',
      'css',
      'strapi',
      'next',
    ],
    example_img: CvExample,
    backgroundColor: '#2f81a6',
  },
];

const Experience = () => {
  return (
    <Wrapper>
      <div id="experience" style={{ height: '40px' }}></div>
      <div className="title">
        <p>EXPERIENCE</p>
        <h2>{`Some companies I've worked with...`}</h2>
      </div>

      {/* Modelo 01 para experiencia */}
      {/* {experienceData.map((experience) => {
        return (
          <ExperienceWrapper key={experience.id}>
            <div className="header">
              <p>
                <a>{experience.company}</a> - {experience.charge}
              </p>
              <p>{experience.period}</p>
            </div>
            <p>{experience.description}</p>
            <div className="tags">
              {experience.tech_stack.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </div>
          </ExperienceWrapper>
        );
      })} */}

      {/* Modelo 02 para experiencia */}
      {experienceData.map((experience) => {
        return <ExperienceItem key={experience.id} experience={experience} />;
      })}
    </Wrapper>
  );
};

export default Experience;
