import React from 'react'
import { Form } from 'semantic-ui-react'

const DashHabit = (props) => {

  return (
    <Form.Checkbox
      name={props.name}
      value={props.value}
      checked={props.checked}
      label={{ children: `${props.habit}` }}
      size="large"
      onChange={props.changed}
    />
  )
}

export default DashHabit

