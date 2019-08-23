import React from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Formik, Form, Field, withFormik } from 'formik'


const SignInPage = () => {

  const signUpLink = (
    <Link to='/sign-up'>Sign Up.</Link>
  )

  return (

    <Grid className="sign-in-form">
      <Grid.Column>
        <h4>Logo</h4>
        <Icon
          name='user circle'
          size="large"
        />
        <h1>Welcome Back!</h1>
        <Formik>
          <Form>
            <Field
              component='input'
              type='text'
              name='email'
              placeholder='Email Address'
            />
            <Field
              component='input'
              type='password'
              name='password'
              placeholder='Password'
            />
          </Form>
        </Formik>
        <Button
          content='SIGN IN'
        />
        <p>Don't have an account? {signUpLink}</p>
      </Grid.Column>
    </Grid>


  )
}

export default SignInPage