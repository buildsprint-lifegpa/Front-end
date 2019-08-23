import React, {useState} from 'react';
import {withFormik,Form,Field} from 'formik';

function NewUser(){

    // const [user,SetUser] = useState([]);

    // const handleChange = event => {
    //     setName(event.target.value);
    //   };
    

    return(

        <div className='onboarding'>

            <Form className='form'>

                <Field className='field'
                       component='input'
                       type='text' 
                       name='name' 
                       placeholder='Full Name'
                />
                <Field className='field'
                       component='input'
                       type='text' 
                       name='email' 
                       placeholder='Email Address'
                />

                <Field className='field'
                       component='input'
                       type='password' 
                       name='password' 
                       placeholder='Password'
                />

                <button type='submit'>Sign Up</button>
                
            </Form>  
        </div>



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
    handleSubmit(values){
        console.log(values);
    }
})(NewUser);

export default FormikSignUp;