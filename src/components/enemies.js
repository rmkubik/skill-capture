import React from "react";
import styled from "styled-components";
import alienBugImage from "../../assets/images/alien-bug.svg";

const GRID_SIZE = 100;

const Bar = styled.div`
  display: grid;
  grid-template-columns: ${`${GRID_SIZE}px `.repeat(6)};
  grid-gap: 10px;
  margin-bottom: 30px;
`;

const EnemyBorder = styled.div`
  width: ${GRID_SIZE}px;
  height: ${GRID_SIZE}px;
  border: 1px solid black;
  border-radius: 4px;

  &:hover {
    background-color: lightpink;
  }
`;

const Enemy = ({ icon }) => {
  return (
    <EnemyBorder>
      <img src={alienBugImage} />
    </EnemyBorder>
  );
};

const Enemies = () => {
  return (
    <Bar>
      <Enemy />
      <Enemy />
      <Enemy />
      <Enemy />
      <Enemy />
      <Enemy />
    </Bar>
  );
};

export default Enemies;
