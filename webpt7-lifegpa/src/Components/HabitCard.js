import React from 'react'
import { Card, Button } from 'semantic-ui-react';
import { getScore } from './AppUtils';

const HabitCard = (props) => {

  const { habits, categories } = props

  let categoryObj = {}

  categories.map(category => categoryObj[category.id] = category.categoryTitle)


  const habitCards = habits.map(habit => {

    const description = (
      <ul>
        <li>{`Category: ${categoryObj[habit.categoryId]}`}</li>
        <li>{`Habit Score: ${getScore(habits)}`}</li>
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