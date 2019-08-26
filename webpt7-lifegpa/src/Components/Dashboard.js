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

  h1 {
    text-align: center;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <AppHeader />
      <h1>Hello!</h1>
      <GpaScore />
      <PrimaryButton
        text='Get Started'
      />
    </DashboardContainer>
  )
}

export default Dashboard
