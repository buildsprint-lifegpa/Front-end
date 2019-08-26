import React from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Icon, Grid } from 'semantic-ui-react'
import {withFormik,Form,Field} from 'formik';
import styled from 'styled-components';

const Wrapper = styled.section`
max-width:100%;
h2{
    margin-bottom:25px;
    text-align:center;
}
i{
    width:400px;
    margin-left:5px;
    align-self:center;
}
.form{
    display:flex;
    flex-direction: column;
}
.errors{
    margin:10px 0;
    color:white;
    background-color:red;
    padding:5px;

}
.button{

    width:150px;
    align-self:center;
    background-color: red;
    padding:20px;
}
p{
   font-size:1.25rem;
    vertical-align:middle;
    text-align:center;

}
`;

const SignUpHeader =styled.header`
display:flex;
flex-direction: column;
align-items:center;
margin: 10px auto;

`;

const Inputs = styled.section`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
.field{
   
   width:200px;
   border-radius:10px;
   text-align:center;
}

`;

function NewUser({errors,touched}){

    const signIn=(
        <a href='/sign-in'>Sign In.</a>
    )
    console.log("Input is being read", touched);

    return(
    <Wrapper>
        <Grid className='sign-up-form'>
           
            <Grid.Column>

            <SignUpHeader>
                
            <Icon
            name='user circle outline'
            size='big'
            />
            <h2>Welcome to a new you!</h2>
          
            </SignUpHeader>
         
            <Form className='form'>
             <Inputs>
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
  </Inputs>
                <Button
                type='submit'
                content='Sign Up'
                as={Link}
                to='/choose-habit'
                />
                <br/> <br/>

                <p>Already have an account? {signIn}</p>
               
            </Form>  
        
     </Grid.Column>
    </Grid>
  </Wrapper>
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
    
    handleSubmit(values, { setStatus,resetForm }) {
        axios
       
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            console.log(values)
            setStatus(res.data)
            resetForm()
          })
          .catch(err => console.log(err.response));
      }

})(NewUser);

export default FormikSignUp;