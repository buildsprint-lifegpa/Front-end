import React, { useState, useEffect } from 'react'
import AppHeader from './AppHeader';
import styled from 'styled-components';
import axios from 'axios'
import { Link } from 'react-router-dom';

import GpaScore from './GpaScore';
import { PrimaryButton } from './AppButtons';
import userImage from '../assets/large.png'
import AppFooter from './AppFooter';
import HabitCheckboxes from './HabitCheckboxes';



const ScoreContainer = styled.section`
  max-width: 80%;
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


const Dashboard = () => {

  const id = localStorage.id
  const [user, setUser] = useState();
  const [counter, setCounter] = useState(0)


  const submitCounter = () => {
    setCounter(counter + 1)
    console.log("submitCounter", counter)
  }

  const checkBoxObj = {}

  useEffect(() => {
    axios
      .get(`api/users/habits/${id}`)
      .then(res => {
        console.log("useEffect", counter)
        setUser(res.data)
      })
      .catch(err => console.log("Dashboard: UseEffect: 64", err))
  }, [counter]);


  if (!user)
    return <div>Loading...</div>

  console.log('dashboard 66', counter)
  return (
    <>
      <AppHeader
        name={user.fullname}
        userPhoto={user.userImgUrl || userImage}
      />
      <ScoreContainer>
        <h1>Hi {user.username}!</h1>
        <GpaScore
          habits={user.habits}
          counter={counter} />
        <Link
          to={`/dashboard/${user.id}/user-habits`}>
          <PrimaryButton
            text='View Habits'
          />
        </Link>
      </ScoreContainer>
      <HabitTitle>What did you do today?</HabitTitle>
      <HabitCheckboxes
        habits={user.habits}
        submitCounter={submitCounter}
        checkBoxObj={checkBoxObj}
      />
      <AppFooter />
    </>
  )
}

export default Dashboard
