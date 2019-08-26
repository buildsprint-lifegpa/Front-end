import React from 'react'
import styled from 'styled-components';

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
    <ScoreRing>
      <p className='score'>85</p>
      <p className='score-text'>Your LifeGPA</p>
    </ScoreRing>
  )
}

export default GpaScore