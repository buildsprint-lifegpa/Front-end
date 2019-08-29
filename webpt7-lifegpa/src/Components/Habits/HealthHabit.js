import React from 'react'

import {Button,Form} from 'semantic-ui-react'

export default function HealthHabits() {

    return (
        <>
        <Form.Group>
        <Form.Radio
            label='Small'
         />
         <Form.Radio
            label='Small'
         />
         <Form.Radio
            label='Small'
         />
        </Form.Group>
        <Form.Group>
        <Form.Radio
            label='Small'
         />
         <Form.Radio
            label='Small'
         />
         <Form.Radio
            label='Small'
         />
         <Button>Done</Button>
           {/* <Button
                  fluid
                  primary
                  style={btnStyle}
                  content='DONE'
                  type='submit'
                /> */}

           </Form.Group>

        </>
    )

}