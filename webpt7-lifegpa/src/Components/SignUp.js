import React, { useEffect } from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import logo from '../assets/logomark-white.png'
import styled from 'styled-components';



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

function NewUser({ status, touched, history, values }) {
    useEffect(() => {
        if (status) {
            axios
                .post('/api/register', values)
                .then(
                    history.replace('/sign-in')
                )
                .catch(err => {
                    console.log(err);
                });
        }
    }, [status, history])
    const signIn = (
        <a href='/sign-in'>Sign In.</a>
    )
    console.log("Input is being read", touched);
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
                <Form className='form'>

                    <Field className='field'
                        component='input'
                        type='text'
                        name='username'
                        placeholder='User Name'
                    />
                    <br /> <br />
                    <ErrorMessage name='username' />
                    <br /> <br />
                    <Field className='field'
                        component='input'
                        type='text'
                        name='fullname'
                        placeholder='Full Name'
                    />
                    <br /> <br />
                    <ErrorMessage name='fullname' />
                    <br /> <br />
                    <Field className='field'
                        component='input'
                        type='email'
                        name='email'
                        placeholder='Email Address'
                    />
                    <br /> <br />
                    <ErrorMessage name='email' />
                    <br /> <br />
                    <Field className='field'
                        component='input'
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <br /> <br />
                    <ErrorMessage name='password' />
                    <br /> <br />

                    <SubmitContainer>
                        <p>Already have an account? {signIn}</p>
                        <Button
                            type='submit'
                            float='right'
                            style={btnStyle}>Sign Up</Button>
                        <br /> <br />
                    </SubmitContainer>
                </Form>
            </FormContainer>
        </>
    );
}
const FormikSignUp = withFormik({
    mapPropsToValues({ username, fullname, password, email }) {
        return {
            username: username || '',
            fullname: fullname || '',
            password: password || '',
            email: email || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Please enter a username.'),
        fullname: Yup.string()
            .required('Please enter your full name.'),
        email: Yup.string()
            .required('Please enter your email address.'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 chars.')
            .required('Password is required.')
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log('This is the data:', values)
        setStatus(values)
        resetForm()
    }
})(NewUser);

export default FormikSignUp;