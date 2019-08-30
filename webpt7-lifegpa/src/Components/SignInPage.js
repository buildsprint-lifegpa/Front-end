import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'
import styled from 'styled-components'
import axios from 'axios'

import AppHeader from './AppHeader';
import userImage from '../assets/large.png'

// import { user } from '../dummyData';

const SignInContainer = styled.section`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  cursor: auto;

    h1 {
      text-align: center;
      margin: 60px 0;
    }

    form {
      margin-bottom: 20px;

      input {
        width: 100%;
        min-height: 2.2em;
        border: 0.5px solid grey;
        border-radius: 2px;
        margin: 10px 0;
        padding: 5px;
      }

      .button {
        margin-top: 10px;
      }
    }
`;

const btnStyle = {
  backgroundColor: "#596B69",
  border: '1px solid #596B69',
  color: '#ffffff'
}


const LogIn = ({ errors, touched, status, history }) => {



  useEffect(() => {
    if (status) {

      axios
        .post('/api/login', status)
        .then(res => {
          let id = res.data.user.id
          localStorage.setItem('id', res.data.user.id)
          localStorage.token = res.data.token
          history.push(`/dashboard/${id}`)
        })
        .catch(err => console.log(err))
    }
  }, [status])

  const signUpLink = (
    <Link to='/sign-up' className='sign-up-link'>Sign Up.</Link>
  )

  return (
    <>
      <AppHeader
        userPhoto={userImage} />
      <SignInContainer>
        <Grid className="sign-in-form">
          <Grid.Column>
            <h1>Welcome Back!</h1>
            <Grid.Column>
              <Form>
                <Field
                  component='input'
                  type='text'
                  name='username'
                  placeholder='User Name'
                />
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                <Field
                  component='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Button
                  fluid
                  primary
                  style={btnStyle}
                  content='SIGN IN'
                  type='submit'
                />
              </Form>
            </Grid.Column>
            <p>Don't have an account? {signUpLink}</p>
          </Grid.Column>
        </Grid>
      </SignInContainer>
    </>
  )
}

const SignInPage = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Cannot be an empty field"),
    password: Yup.string().required("Cannot be an empty field")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    setStatus(values)
    resetForm()
  }
})(LogIn)

export default SignInPage