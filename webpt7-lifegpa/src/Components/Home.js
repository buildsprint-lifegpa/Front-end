import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import logo from '../assets/Secondary Logo - CLR@2x.png'

const HomeContainer = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 0 auto;
  img {
    max-width: 250px;
    margin-top: 80px;
  }

  h3 {
    margin: 0 auto;

  }

  .button {
    width: 200px;
  }
`;

const br = `\n`

const Home = () => {

  return (
    <HomeContainer>
      <img src={logo} alt='logo'></img>
      <h3>Welcome to a new you!</h3>
      <Button
        content='JOIN NOW!'
        as={Link}
        to='/sign-up'
      />
      <Button
        content='SIGN IN'
        as={Link}
        exact
        to='/sign-in'
      />
      <p>Want to learn more about LifeGPA?</p>
      <p>Take a little scroll through our delightful features.</p>
    </HomeContainer>
  )
}

export default Home