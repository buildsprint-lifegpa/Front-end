import React from 'react'
import AppHeader from './AppHeader';
import styled from 'styled-components';

import GpaScore from './GpaScore';
import { PrimaryButton } from './AppButtons';


const DashboardContainer = styled.section`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: #777777;
  padding-bottom: 60px;

  h1 {
    text-align: center;
  }
`;

const ReminderTitle = styled.h2`
        color: #777777;
        max-width: 300px;
        margin: 0 auto;
`;

const BottomContainer = styled.section`
  border-top: 5px solid #596B69;
  border-bottom: 5px solid #596B69;
  text-align: center;
  padding: 30px;
  color: #777777;
`;

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <AppHeader />
        <h1>Hello!</h1>
        <GpaScore />
        <PrimaryButton
          text='Get Started'
        />
      </DashboardContainer>
      <ReminderTitle>Reminder</ReminderTitle>
      <BottomContainer>
        <h2>Want to stay on track?</h2>
        <p>Click the clock to set a reminder</p>
      </BottomContainer>
    </>
  )
}

export default Dashboard
