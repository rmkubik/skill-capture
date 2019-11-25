import React from "react";
import styled from "styled-components";
import pointySwordImage from "../../assets/images/pointy-sword.svg";

const Bar = styled.div`
  display: grid;
  grid-template-columns: ${"50px ".repeat(8)};
  grid-gap: 10px;
`;

const SkillBorder = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;

  &:hover {
    background-color: lightblue;
  }
`;

const Skill = ({ icon }) => {
  return (
    <SkillBorder>
      <img src={pointySwordImage} />
    </SkillBorder>
  );
};

const SkillBar = () => {
  return (
    <Bar>
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      <Skill />
      <Skill />
    </Bar>
  );
};

export default SkillBar;
