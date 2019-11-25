import React from "react";
import styled from "styled-components";
import SkillBar from "./skillBar";
import Enemies from "./enemies";
import Stats from "./stats";

const MainBorder = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

const Main = () => {
  return (
    <MainBorder>
      <InlineDiv>
        <Enemies />
      </InlineDiv>
      <InlineDiv>
        <SkillBar />
      </InlineDiv>
      <InlineDiv>
        <Stats />
      </InlineDiv>
    </MainBorder>
  );
};

export default Main;
