import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'
import styled from 'styled-components'

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


const LogIn = ({ errors, touched, values, status }) => {

  const [user, setUser] = useState({});
  useEffect(() => {
    if (status) {
      return setUser(status)
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
                  name='email'
                  placeholder='Email Address'
                />
                {touched.email && errors.email && <p className='error'>{errors.size}</p>}
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
                  as={Link}
                  to="/Dashboard"
                  color='vk'
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
  mapPropsToValues({ email, password }) {
    // console.log(email, password)
    return {
      email: email || "",
      password: password || "",
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Cannot be an empty field"),
    password: Yup.string().required("Cannot be an empty field")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values)
    setStatus(values)
    resetForm()
    localStorage.setItem('token', values.email)
  }
})(LogIn)

export default SignInPage