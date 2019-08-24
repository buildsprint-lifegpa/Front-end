import React from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import { Button, Icon, Grid } from 'semantic-ui-react'
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';

function NewUser({errors,touched}){

    const signIn=(
        <a href='/sign-in'>Sign In.</a>
    )
    console.log("Input is being read", touched);

    return(

        <Grid className='sign-up-form'>
            <Grid.Column>
            <Icon
            name='user circle outline'
            size='big'
            />
            <h4>Welcome to a new you!</h4>

        <div className='onboarding'>

        
            <Form className='form'>
                
                
                <Field className='field'
                       component='input'
                       type='text' 
                       name='name' 
                       placeholder='Full Name'
                />
                {touched.name && errors.name && ( <p className='errors'>
                {errors.name}</p>)}
               <br/> <br/>
               
               
                <Field className='field'
                       component='input'
                       type='text' 
                       name='email' 
                       placeholder='Email Address'
                />
                {touched.email && errors.email && (<p className='errors'>
                {errors.email}</p>)}
                <br/> <br/>
                
                
                <Field className='field'
                       component='input'
                       type='password' 
                       name='password' 
                       placeholder='Password'
                />
                {touched.password && errors.password && (<p className='errors'>
                {errors.password}</p>)}

                <br/> <br/>

                <Button type='submit'content='Sign Up'/>
                <br/> <br/>

                <p>Already have an account? {signIn}</p>

            </Form>  
        </div>
     </Grid.Column>
    </Grid>

    );
}
const FormikSignUp = withFormik({
    mapPropsToValues({name,password,email}){
        return{
            name: name || '',
            password: password || '',
            email: email || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
       .required('Please enter your full name.'),
        email: Yup.string()
        .required('Please enter your email address.'),
        password: Yup.string()
        .min(6,'Password must be at least 6 chars.')
        .required('Password is required.')
    }),
    
    handleSubmit(values, { setStatus }) {
        axios
          // values is our object with all our data on it.
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log(values)
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
      }

})(NewUser);

export default FormikSignUp;