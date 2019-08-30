import React from 'react'
import styled from 'styled-components';


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

  const habitList = props.habits

  const points = () => {
    let points = 0
    let count = 0
    habitList.map(habit => {
      habit.history.split('').map(day => {
        count++
        if (day === 'x') {
          points++
        }
      })
    })
    return Math.floor((points / count) * 100)
  }

  const numColor = (points) => {
    return points > 85 ? 'green'
      : points > 69 ? 'yellow'
        : 'red'
  }

  const scoreColor = {
    borderColor: numColor(points())
  }


  return (
    <ScoreRing style={scoreColor}>
      <p className='score'>{points()}</p>
      <p className='score-text'>Your LifeGPA</p>
    </ScoreRing>
  )
}

export default GpaScore