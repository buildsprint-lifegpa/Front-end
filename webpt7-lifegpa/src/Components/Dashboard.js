import React from 'react'
import AppHeader from './AppHeader';
import styled from 'styled-components';

import GpaScore from './GpaScore';
import { PrimaryButton } from './AppButtons';
import { user } from '../dummyData';
import userImage from '../assets/large.png'


const DashboardContainer = styled.section`
  height: 80vh;
`;
const ScoreContainer = styled.section`
  max-width: 80%;
  height: 55vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: #777777;
  padding: 5%;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const ReminderTitle = styled.h2`
        color: #777777;
        max-width: 300px;
        margin-left: 10%;
        position: fixed;
        bottom: 180px;
`;

const BottomContainer = styled.section`
  width: 100%;
  border-top: 5px solid #596B69;
  border-bottom: 5px solid #596B69;
  text-align: center;
  padding: 16px;
  color: #D3D3D3;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  position: fixed;
  bottom: 80px;

`;


const Dashboard = () => {
  return (
    <>
      <AppHeader
        name={user[0].fullname}
        userPhoto={user[0].userImgUrl || userImage}
      />
      <DashboardContainer className="here-i-am">
        <ScoreContainer>
          <h1> Hello!</h1>
          <GpaScore />
          <PrimaryButton
            text='Get Started!'
          />
        </ScoreContainer>
        <ReminderTitle>Reminder</ReminderTitle>
        <BottomContainer>
          <h2>Want to stay on track?</h2>
          <p>Click the clock to set a reminder</p>
        </BottomContainer>
      </DashboardContainer>
    </>
  )
}

export default Dashboard
