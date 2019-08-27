import React from 'react'
import { Form, Icon, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import logo from '../assets/logomark-white.png'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.section`
  width: 100%;
  background-color: #596B69;
  color: #ffffff;
`;

const SignUpHeader = styled.header`
  width: 100%;
  max-width: 700px;
  padding: 12px;
  margin: 0 auto;  

  .title-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;    

    h2 {
      font-size: 1.8rem;
      font-weight: 1000;
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
      margin: 0;
    }

    .badge {
      width: 60px;
    }
  }
`;

const FormContainer = styled.section`
  /* border: 1px solid black; */
  margin: 15%;
  color: #596B69;
`;

const SubmitContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content:space-between;
  padding: 10px;
  flex-wrap: wrap;

  p {
    font-size: 0.5rem;
  }
`;

const btnStyle = {
  backgroundColor: "#596B69",
  border: '1px solid #596B69',
  color: '#ffffff'
}


const SignUp = () => {


  return (
    <>
      <HeaderContainer>
        <SignUpHeader>
          <img src={logo} alt="logo"></img>
          <div className='title-header-container'>
            <div className='title-container'>
              <h2>Welcome to a new you!</h2>
              <h3>Get ready to level up your life.</h3>
            </div>
            <img className='badge' src="https://trello-attachments.s3.amazonaws.com/5d5c8362c4dc8659339f2bab/5d5f3da3caa0995590c4f955/c1cf71a7e3b4917cd2a82f4313437a19/badge-white.png" alt='badge'></img>
          </div>
        </SignUpHeader>
      </HeaderContainer>
      <FormContainer>
        <Form>
          <Form.Input
            icon='play'
            placeholder='Full Name'
          />
          <Form.Input
            icon='play'
            placeholder='Email Address'
          />
          <Form.Input
            icon='play'
            placeholder='Password'
          />
          <SubmitContainer>
            <p>Already have an account? <Link to='/sign-in'>Click Here</Link></p>
            <Button
              type='submit'
              float='right'
              style={btnStyle}>Sign Up</Button>
          </SubmitContainer>
        </Form>
      </FormContainer>
    </>
  )
}

export default SignUp