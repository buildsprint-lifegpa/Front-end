import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Form, Button, Icon, Grid } from 'semantic-ui-react'
import { Field, withFormik, Formik } from 'formik'
import styled from 'styled-components'

const SignInContainer = styled.section`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

    header {
      margin-top: 20px;
    }

    h1 {
      text-align: center;
      margin: 60px 0;
    }

    form {
      margin-bottom: 20px;
    }
`;

const LogInHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;


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
    <SignInContainer>
      <Grid className="sign-in-form">
        <Grid.Column>
          <LogInHeader>
            <h4>Logo</h4>
            <Icon
              name='user circle'
              size="huge"
              color='grey'
            />
          </LogInHeader>
          <h1>Welcome Back!</h1>
          <Formik>
            <Form>
              <Form.Input fluid name='email' placeholder='Email' as={Field} />
              {touched.email && errors.email && <p className='error'>{errors.email}</p>}
              <Form.Input fluid name='password' placeholder='Password' as={Field} />
              {touched.email && errors.password && <p className='error'>{errors.password}</p>}
              <Button fluid type='submit' content='SIGN IN' />
            </Form>
          </Formik>
          <p>Don't have an account? {signUpLink}</p>
        </Grid.Column>
      </Grid>
    </SignInContainer>

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