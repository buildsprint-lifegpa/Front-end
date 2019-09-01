import React from "react";
import { Form, Field, withFormik } from "formik";
import styled from 'styled-components'

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

  .update-btn {}

`;


const HabitForm = (props) => {

  const habitCheckboxes = props.habits.map(habit => {

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


// const id = localStorage.id

// const habits = () => {
//   useEffect(() => {
//     axios.get(`/api/habits/${id}`)
//       .then(res => res.data.categories)
//       .catch(err => console.log("Dashboard: useEffect: 59", err))
//   }, [id])
// }
const HabitCheckboxes = withFormik({

  handleSubmit(values, { resetForm }) {

    console.log("HabitCheckboxes: handleSubmit: 62", values)
    // console.log(habits)
    // for (key in values) {
    //   axios.put(`/api/habits/${id}`)
    // }
    resetForm()
  }
})(HabitForm);

export default HabitCheckboxes;