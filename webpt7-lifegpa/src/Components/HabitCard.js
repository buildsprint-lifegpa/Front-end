import React from 'react'
import { Card, Button } from 'semantic-ui-react';

const HabitCard = (props) => {

  const { habits, categories } = props

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

    return (
      <Card
        key={habit.id}
        header={habit.habitTitle}
        description={description}
        extra={<Button content="Delete Habit" onClick={() => props.clicked} />}
      />
    )
  })

  return (
    <div>{habitCards}</div>

  )
}

export default HabitCard