import React from 'react'
import styled from 'styled-components';

import { userHabits } from '../dummyData';

const habitList = userHabits[0].habits

const points = () => {
  let points = 0
  let count = 0
  habitList.map(habit => {
    points += habit.completionPoints
    count++
  })
  return points / count
}

let ringColor = points()

const numColor = (points) => {
  return points > 85 ? 'green'
    : points > 70 ? 'yellow'
      : 'red'
}


const scoreColor = {
  borderColor: numColor(ringColor)
}
console.log(points(), scoreColor)


const GpaScore = () => {


  const ScoreRing = styled.section`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 180px;
    border: 10px solid grey;
    border-radius: 50%;
    margin: 0 auto;

    .score {
      font-size: 6rem;
      margin: 0 auto;
    }
    .score-text {
      text-align: center;
    }
  `;

  return (
    <ScoreRing style={scoreColor}>
      <p className='score'>{points()}</p>
      <p className='score-text'>Your LifeGPA</p>
    </ScoreRing>
  )
}

export default GpaScore