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

const StatsBorder = styled.div`
  p {
    margin: 0;
  }
`;

const Stats = ({ hp, name }) => {
  return (
    <StatsBorder>
      <p>{name}</p>
      <p>
        {hp.current}/{hp.max}
      </p>
    </StatsBorder>
  );
};

const Enemy = ({ icon }) => {
  return (
    <div>
      <EnemyBorder>
        <img src={alienBugImage} />
      </EnemyBorder>
      <Stats hp={{ max: 10, current: 10 }} name="Enemy Name" />
    </div>
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
