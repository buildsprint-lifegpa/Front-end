import React from "react";
import { Form, Field, withFormik } from "formik";
import styled from 'styled-components'
import axios from 'axios'

import { PrimaryButton } from './AppButtons';

const CheckBoxContainer = styled.div`
  width: 50%;
  max-width:200px;
  display: flex;
  flex-direction:column;
  margin: 0 auto;

  .checkboxes {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }
`;



const HabitForm = (props) => {

  const habitCheckboxes = props.habits.map(habit => {

    props.checkBoxObj[habit.habitTitle] = false

    return (
      <label key={habit.id}>
        <Field
          id={habit.id}
          type="checkbox"
          name={habit.habitTitle}
        />
        {habit.habitTitle}
        <span className="checkmark" />
      </label>
    )
  })


  return (
    <CheckBoxContainer>
      <Form className="checkboxes">
        {habitCheckboxes}
        <PrimaryButton
          className="update-btn"
          text="Update"
          fontSize="1rem"
          width="150px"
          margin="20px auto 20px auto"
          type='submit'
        />
      </Form>
    </CheckBoxContainer>
  );
};


const HabitCheckboxes = withFormik({

  mapPropsToValues({ submitCounter, habits, ...checkBoxObj }) {
    return {
      ...checkBoxObj,
      submitCounter: submitCounter,
      habits: habits
    }
  },

  handleSubmit(values, { resetForm }) {

    values.submitCounter()

    //Go through the data stored in the form object
    for (let key in values)
      //find the checkboxes by locating the boolean values
      if (typeof values[key] === "boolean") {
        //loop over the habits in props
        values.habits.map(habit => {
          //if the habitTitle matches the checkbox key
          if (habit.habitTitle === key) {
            // load the  obj with the required habit info for the api call
            let updateObj = {
              habitTitle: habit.habitTitle,
              categoryId: habit.categoryId,
              userId: habit.userId
            }
            // if true add 'x' to history
            if (!!values[key]) {
              updateObj.history = habit.history.concat('x')
              axios.put(`/api/habits/${habit.id}`, updateObj)
                .then(res => console.log(res))
                .catch(err => console.log(err))
              // if false add ' ' to history
            } else {
              updateObj.history = habit.history.concat(' ')
              axios.put(`/api/habits/${habit.id}`, updateObj)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            }
          }
        })
      }
    console.log("HabitForm: handleSubmit: 106", values, values.checkBoxObj)
    resetForm()
  }
})(HabitForm);

export default HabitCheckboxes;