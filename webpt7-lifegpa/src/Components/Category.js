import React, {useState, useEffect} from 'react';
import { Button, Icon, Grid,Form,Tab,Input } from 'semantic-ui-react'
import axios from 'axios'
import { PrimaryButton } from './AppButtons';
import styled from 'styled-components';
import AppHeader from './AppHeader';

import Habits from './Habits'



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


const CategorySelect = () =>{

    // const [cat,setCat] = useState([]);

 

    // useEffect(()=>{
    //     axios
    //     .get(`api/categories/`)
    //     .then(res =>{
    //         console.log(res.data)
           
    //         setCat(res.data)
            
    //     })
        
    // },[]);

    // const catTabs = cat.map((categories,idx) =>{
        
    //     return (
    //        <div key={idx}>
    //        <br></br>

    //      <Tab.Pane id={idx}>
    //       {categories.categoryTitle}
    //     </Tab.Pane> 
    //        <br></br>

    //        <Habits 
    //        />

    //        <br></br>

    //        <Button content= 'Done'/>
    //        </div>
               
           
          
    //     )
    // })
    
    
    return(
   
        <>
        <FormHeader>
        <AppHeader/>
        <h3>Let's get down to it!</h3>
        <p>Create a habit.</p>
        </FormHeader>
        <br></br>
    
        <Habits/>

        <PrimaryButton text='Submit'/>
     

        <br></br>
        
        <PrimaryButton text='Create Habit'/>

        <br></br>
        
        <Input action='Submit' onClick={clickHandler()} type='text' />
        </>
        
        )
}
export default CategorySelect