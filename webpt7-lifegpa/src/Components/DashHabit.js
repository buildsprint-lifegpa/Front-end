import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

const DashHabit = (props) => {

  return (
    <Form>
      <Form.Field
        control={Checkbox}
        label={{ children: `${props.habit}` }}
      />
    </Form>
  )
}

export default DashHabit