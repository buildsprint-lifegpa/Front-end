import React from 'react'
import styled from 'styled-components';

import { getScore } from './AppUtils';


const ScoreRing = styled.section`
display: flex;
flex-direction: column;
width: 180px;
height: 180px;
border: 10px solid grey;
border-radius: 50%;
margin: 0 auto;

.score {
  font-size: 5rem;
  margin: 0 auto;
  padding-top: 15px;
}
.score-text {
  text-align: center;
}
`;


const GpaScore = (props) => {

  const habits = props.habits

  const numColor = (points) => {
    return points > 85 ? 'green'
      : points > 69 ? 'yellow'
        : 'red'
  }

  const scoreColor = {
    borderColor: numColor(getScore(habits))
  }

  return (
    <ScoreRing style={scoreColor}>
      <p className='score'>{getScore(habits)}</p>
      <p className='score-text'>Your LifeGPA</p>
    </ScoreRing>
  )
}

export default GpaScore