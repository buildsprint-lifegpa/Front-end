import React from 'react'
import * as Yup from 'yup'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Formik, Form, Field, withFormik } from 'formik'


const SignInPage = () => {

  const signUpLink = (
    <a href='#'>Sign Up.</a>
  )

  return (

    <Grid className="sign-up-form">
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