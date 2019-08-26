import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import logo from '../assets/logomark - full color.png'



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;

const AppHeader = () => {

  return (
    <Header>
      <img src={logo} alt='logo'></img>
      <Icon
        name='user circle'
        size="huge"
        color='grey'
      />
    </Header>
  )
}

export default AppHeader