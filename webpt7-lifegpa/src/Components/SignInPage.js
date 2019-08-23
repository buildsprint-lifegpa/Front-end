import React from 'react'
import * as Yup from 'yup'
import { Button, Icon } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'


const SignInPage = () => {

  const signUpLink = (
    <a href='#'>Sign Up.</a>
  )

  return (

    <section className="sign-up-form">
      <h4>Logo</h4>
      <Icon
        name='user circle'
      />
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
      <Button
        content='SIGN IN'
      />
      <p>Don't have an account? {signUpLink}</p>
    </section >

  )
}

export default SignInPage