import React, {useState, useEffect} from 'react';
import { Button, Icon, Grid,Form,Tab,Input } from 'semantic-ui-react'
import axios from 'axios'
import { PrimaryButton } from './AppButtons';
import styled from 'styled-components';
import AppHeader from './AppHeader';
import CareerHabits from './Habits/CareerHabits'
import PersonalHabits from './Habits'
import HealthHabits from './Habits/HealthHabit'
import MoneyHabits from './Habits/MoneyHabits'

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

const btnStyle = {
  backgroundColor: "#596B69",
  border: '1px solid #596B69',
  color: '#ffffff'
}


const handleClick =  () => {

  }

const ChooseHabit = ()=> {

//   const [inputValue, setInputValue] = useState("");

//   const changeHandler = event => {
//     setInputValue(event.target.value);
//   };
// const panes = [
//     {
//       menuItem: ,
//       render: () => 
//       <Tab.Pane attached={false}>
//         <PersonalHabits/>
//       </Tab.Pane>,
//     },
//     {
//       menuItem: 'Health',
//       render: () => 
//       <Tab.Pane attached={false}>
//         <HealthHabits/>
//       </Tab.Pane>,
//     },
//     {
//       menuItem: 'Career',
//       render: () => 
//       <Tab.Pane attached={false}>
//         <CareerHabits/>
//       </Tab.Pane>,
//     },
//     {
//         menuItem: 'Money',
//         render: () => 
//         <Tab.Pane attached={false}>
//           <MoneyHabits/>          
//         </Tab.Pane>,
//       }
// ]

  const [cat, setCat] = useState();
  useEffect(() => {
    axios
      .get(`api/categories/`)
      .then(res => {
        setCat(res.data)
        
      })
      .catch(err => console.log(err))
  }, []);

  // console.log(cat.catergoryTitle)
  // const showCategories = cat.
// console.log(cat.categories)

    return(
   
    <>
    <FormHeader>
    <AppHeader/>
    <h3>Let's get down to it!</h3>
    <p>Create a habit.</p>
    </FormHeader>
    <Tab menu={{borderless: true, attached:false,tabular:false}}
    // panes={panes}
    />
    <br></br>
    
    <Button content='Create Habit' onClick={handleClick}/>
    <Input action='Submit' type='text' />
    </>
    )
}

export default ChooseHabit;