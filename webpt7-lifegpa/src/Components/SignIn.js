import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'
import styled from 'styled-components'
import axios from 'axios'

import AppHeader from './AppHeader';
import userImage from '../assets/large.png'
import { PrimaryButton } from './AppButtons';


const SignInContainer = styled.section`
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  cursor: auto;

    h1 {
      text-align: center;
      margin: 60px 0;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 20px;

      input {
        width: 100%;
        min-height: 2.2em;
        border: 0.5px solid grey;
        border-radius: 2px;
        margin: 10px 0;
        padding: 5px;
      }
    }
`;


const LogIn = ({ errors, touched, status, history }) => {

  useEffect(() => {
    if (status) {

      axios
        .post('/api/login', status)
        .then(res => {
          let id = res.data.user.id
          localStorage.setItem('id', res.data.user.id)
          localStorage.setItem('submitCounter', 0)
          localStorage.token = res.data.token
          history.push(`/dashboard/${id}`)
        })
        .catch(err => console.log(err))
    }
  }, [status, history])

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
              <PrimaryButton
                text='SIGN IN'
                type='submit'
                margin='5px auto'
                width='100%'
              />
            </Form>
            <p>Don't have an account? {signUpLink}</p>
          </Grid.Column>
        </Grid>
      </SignInContainer>
    </>
  )
}

const SignIn = withFormik({
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

export default SignIn