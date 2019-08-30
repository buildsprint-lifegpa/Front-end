import React, { useState, useEffect } from 'react'
import AppHeader from './AppHeader';
import styled from 'styled-components';
import axios from 'axios'
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
  padding-bottom: 20%;

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

const Dashboard = (props) => {

  const id = localStorage.id
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`api/users/habits/${id}`)
      .then(res => {
        setUser(res.data)
      })
  }, []);

  const updateHabitsHandler = (e, { value }) => {
    console.log('update')
  }




  if (!user)
    return <div>Loading...</div>

  // const [, set] = useState();


  const listHabits = user.habits.map(habit => {

    return (
      <DashHabit
        key={habit.id}
        habit={habit.habitTitle}
        name={habit.habitTitle}
        value='x'
        // checked={value === 'x'}
        onClick={console.log("Dashboard 97: checkbox")}
      />
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
          <Link to={`/dashboard/${user.id}/user-habits`}>
            <PrimaryButton
              text='View Habits'
            />
          </Link>
        </ScoreContainer>
      </DashboardContainer>
      <HabitTitle>What did you do today?</HabitTitle>
      <HabitContainer>
        <Form className="habit-list">
          {listHabits}
        </Form>
        <PrimaryButton
          text="Update"
          fontSize="1rem"
          width="200px"
          margin="0 auto 20px auto"
          onClick={console.log("Dashboard 131: clicked")}
        />
      </HabitContainer>
      <AppFooter />
    </>
  )
}

export default Dashboard
