import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'


const LogIn = ({ errors, touched, values, status }) => {

  const [user, setUser] = useState({});
  useEffect(() => {
    if (status) {
      return setUser(status)
    }
  }, [status])
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
            content='SIGN IN'
            type='submit'
          />
        </Form>

        <p>Don't have an account? {signUpLink}</p>
      </Grid.Column>
    </Grid>


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
  }
})(LogIn)

export default SignInPage