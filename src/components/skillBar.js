import React, { useState } from "react";
import styled from "styled-components";
import pointySwordImage from "../../assets/images/pointy-sword.svg";
import checkedShieldImage from "../../assets/images/checked-shield.svg";

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

const SkillList = {
  sword: {
    icon: pointySwordImage
  },
  block: {
    icon: checkedShieldImage
  }
};

const Skill = ({ skillKey }) => {
  return (
    <SkillBorder>
      {SkillList[skillKey] && <img src={SkillList[skillKey].icon} />}
    </SkillBorder>
  );
};

const defaultSkills = Array(8).fill("");
defaultSkills[0] = "sword";
defaultSkills[1] = "block";

const SkillBar = () => {
  const [skills, setSkills] = useState(defaultSkills);

  return (
    <Bar>
      {skills.map((skill, index) => (
        <Skill key={index} skillKey={skill} />
      ))}
    </Bar>
  );
};

export default SkillBar;
