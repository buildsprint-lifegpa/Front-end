import React, {useState} from 'react';
import { Button, Icon, Grid,Form,Tab } from 'semantic-ui-react'
// import {Form,Field} from 'formik';
import { PrimaryButton } from './AppButtons';
import styled from 'styled-components';
import AppHeader from './AppHeader';

const FormHeader = styled.header`
display:flex;
flex-direction:column;
justify-content:space-between;
padding:0 0 10px 0;
border: 1px solid black;

h3{
    margin:10px 0 0 0;
}

`;

const Header = styled.header`
  /* width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px; */
`;

// const panes = [
//     {
//       menuItem: 'Personal',
//       render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
//     },
//     {
//       menuItem: 'Health',
//       render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
//     },
//     {
//       menuItem: 'Career',
//       render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
//     },
//     {
//         menuItem: 'Money',
//         render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
//       }
//   ]
function ChooseHabit(){

//   const [inputValue, setInputValue] = useState("");

//   const changeHandler = event => {
//     setInputValue(event.target.value);
//   };


    return(
    //    <Header>
           
    //        <AppHeader/>

    //    <h3>Let's get down to it!</h3>
    //    <p>Create a habit.</p>
    //    <Form>
    //      <FormHeader>
        
            
    //      </FormHeader> 
    //      <PrimaryButton
    //         text='Get Started!'
         
    //       />
    //          <Form.Field>
    //          <input placeholder='Enter Habit' />
    //         </Form.Field> 
    //         <Tab menu={{attached:false,tabular:false}} panes={panes} />    
    //     </Form>
    //     </Header> 

    <FormHeader>
    <AppHeader/>
    <h3>Let's get down to it!</h3>
    <p>Create a habit.</p>
    </FormHeader>
  
    )
}

export default ChooseHabit;