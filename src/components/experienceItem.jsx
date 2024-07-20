import React from 'react';
import useMouse from '@react-hook/mouse-position';
import styled from 'styled-components';

const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 20px #183339;
  height: 400px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  padding: 30px;
  transform: scale(0.8);

  .header {
    width: 40%;
    p {
      line-height: 0;
    }

    .header_companyName {
      color: #f49200;
      font-size: 32px;
      line-height: 30px;
      font-weight: 700;
      margin: 0;
    }

    .header_charge {
      font-weight: 300;
      color: #adadad;
    }

    .header_id {
      font-size: 170px;
      font-weight: 700;
      color: #f49200;
      position: absolute;
      right: 40px;
      top: -90px;
    }
  }

  .description {
    max-width: 40%;
    font-size: 16px;
  }

  .tags {
    margin: 20px 0px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 40%;

    span {
      font-size: 14px;
      background-color: #f4920063;
      padding: 3px 10px;
      border-radius: 20px;
    }
  }

  img {
    width: 70%;
    position: absolute;
    border-radius: 5px;
    right: -130px;
    bottom: -10px;
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
  border-radius: 50%;
`;

const ExperienceItem = ({ experience }) => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref);

  return (
    <ExperienceBox
      style={{
        backgroundColor: experience.backgroundColor,
      }}
      ref={ref}
    >
      {/* <Box style={{ top: mouse.y - 200, left: mouse.x - 200 }}></Box> */}
      <div className="header">
        <p className="header_companyName">{experience.company}</p>
        <p className="header_charge">{experience.charge}</p>
        <p className="header_id">.{experience.id}</p>
      </div>
      <div className="description">{experience.description}</div>
      <div style={{ flexGrow: '1' }}></div>
      <div className="tags">
        {experience.tech_stack.map((tech, index) => {
          return <span key={index}>{tech}</span>;
        })}
      </div>
      <img src={experience.example_img} alt="" />
    </ExperienceBox>
  );
};

export default ExperienceItem;
