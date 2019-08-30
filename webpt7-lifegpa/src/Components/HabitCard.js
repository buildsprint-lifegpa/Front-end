import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react';
import axios from 'axios'

const HabitCard = (props) => {

  const [habits, setHabits] = useState();
  const [categories, setCategories] = useState();

  const id = localStorage.id

  useEffect(() => {
    axios.get(`/api/users/habits/${id}`)
      .then(res => {
        setHabits(res.data.habits)
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    axios.get(`/api/users/categories/${id}`)
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
  }, []);

  if (!habits || !categories)
    return (
      <div>Loading...</div>
    )

  let categoryObj = {}

  categories.map(category => categoryObj[category.id] = category.categoryTitle)


  const habitCards = habits.map(habit => {

    const points = () => {
      let points = 0
      let count = 0
      habits.map(habit => {
        habit.history.split('').map(day => {
          count++
          if (day === 'x') {
            points++
          }
        })
      })
      return Math.floor((points / count) * 100)
    }

    const description = (
      <ul>
        <li>{`Category: ${categoryObj[habit.categoryId]}`}</li>
        <li>{`Habit Score: ${points()}`}</li>
      </ul>
    )

    const extra = (
      <button onClick={props.clicked}>Delete Habit</button>
    )

    return (
      <Card
        key={habit.id}
        header={habit.habitTitle}
        description={description}
        extra={extra}
      />
    )
  })

  return (
    <div>{habitCards}</div>

  )
}

export default HabitCard