import React, { useState, useEffect } from 'react'
import AppHeader from './AppHeader';
import styled from 'styled-components';
import axios from 'axios'

import GpaScore from './GpaScore';
import { PrimaryButton } from './AppButtons';
import userImage from '../assets/large.png'
import DashHabit from './DashHabit';
import AppFooter from './AppFooter';



const DashboardContainer = styled.section`
  
`;
const ScoreContainer = styled.section`
  max-width: 80%;
  /* height: 55vh; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  color: #777777;
  padding-bottom: 10%;

  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const HabitTitle = styled.h2`
        color: #777777;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        border-bottom: 4px solid #596B69;
        padding: 2%;

`;

const HabitContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: #D3D3D3;
  border-bottom: 4px solid #596B69;
  margin: 0 auto;

  .habit-list {
    text-align: left;
    margin: 0 auto;
    padding: 20px;
  }
`;

const Dashboard = () => {

  const id = localStorage.id
  const [user, setUser] = useState();


  useEffect(() => {
    axios
      .get(`api/users/habits/${id}`)
      .then(res => {
        setUser(res.data)
      })
  }, []);



  if (!user)
    return <div>Loading...</div>

  console.log(user.habits)
  const listHabits = user.habits.map(habit => {

    return (
      <DashHabit
        key={habit.id}
        habit={habit.habitTitle} />
    )
  })


  return (
    <>
      <AppHeader
        name={user.fullname}
        userPhoto={user.userImgUrl || userImage}
      />
      <DashboardContainer className="here-i-am">
        <ScoreContainer>
          <h1>Hi {user.username}!</h1>
          <GpaScore
            habits={user.habits} />
          <PrimaryButton
            text='View Habits'
          />
        </ScoreContainer>
      </DashboardContainer>
      <HabitTitle>What did you do today?</HabitTitle>
      <HabitContainer>
        <div className="habit-list">
          {listHabits}
        </div>
        <PrimaryButton
          text="Submit Accomplishments"
          fontSize="0.8rem"
          width="200px"
          margin="0 auto 20px auto"
        />

      </HabitContainer>
      <AppFooter />
    </>
  )
}

export default Dashboard
