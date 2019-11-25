import React from "react";
import styled from "styled-components";
import SkillBar from "./skillBar";
import Enemies from "./enemies";

const MainBorder = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
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
    </MainBorder>
  );
};

export default Main;
