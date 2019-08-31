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

const HabitContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: #D3D3D3;
  border-bottom: 4px solid #596B69;
  margin: 0 auto;

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
  }, [id]);



  if (!user)
    return <div>Loading...</div>

  return (
    <>
      <AppHeader
        name={user.fullname}
        userPhoto={user.userImgUrl || userImage}
      />
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
      <HabitTitle>What did you do today?</HabitTitle>
      <HabitContainer>
        <HabitCheckboxes />
      </HabitContainer>
      <AppFooter />
    </>
  )
}

export default Dashboard
