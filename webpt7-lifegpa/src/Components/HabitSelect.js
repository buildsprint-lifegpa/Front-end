import React from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import {Form} from 'formik';
import styled from 'styled-components';

const FormHeader = styled.section`
display:flex;
margin-top:100px;
justify-content:center;

h2{
    margin:0;
}
i{
    margin:5px 0 0 0;
    
}
`;
function ChooseHabit(){

    return(

       <Form>
           <FormHeader>
        <Icon
            name='angle left'
            size='large'
            />
            <h2>Choose A Habit(s)</h2>
             </FormHeader>
        </Form>
    )
}

export default ChooseHabit;