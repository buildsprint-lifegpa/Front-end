import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = () => {

  return (
    <div className='home-page'>
      <h1>LifeGPA</h1>
      <Button
        content='JOIN NOW!'
        as={Link}
        to='/sign-up'
      />
      <Button
        content='SIGN IN'
        as={Link}
        exact
        to='/sign-in'
      />
    </div>
  )
}

export default Home