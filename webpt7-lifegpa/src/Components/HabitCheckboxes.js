import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import { PrimaryButton } from './AppButtons';



const HabitForm = () => {

  const [habits, setHabits] = useState([]);
  console.log("SampleForm: 11", habits);

  useEffect(() => {
    axios.get('/api/users/habits/1')
      .then(res => {
        setHabits(res.data.habits)
      })
      .catch(err => console.log("SamplForm: useEffect: 18", err))
  }, []);

  if (!habits)
    return (
      <div>Loading...</div>
    )

  const habitCheckboxes = habits.map(habit => {

    return (
      <label key={habit.id}>
        <Field
          type="checkbox"
          name={habit.habitTitle}
        />
        {habit.habitTitle}
        <span className="checkmark" />
      </label>
    )
  })

  return (
    <div className="animal-form">
      <Form className="checkboxes">
        {habitCheckboxes}
        <PrimaryButton
          className="update-btn"
          text="Update"
          fontSize="1rem"
          width="200px"
          margin="0 auto 20px auto"
          type='submit'
        />
      </Form>
    </div>
  );
};

const HabitCheckboxes = withFormik({

  handleSubmit(values, { resetForm }) {

    console.log("SampleForm: handleSubmit: 75", values)
    resetForm()
  }
})(HabitForm);

export default HabitCheckboxes;