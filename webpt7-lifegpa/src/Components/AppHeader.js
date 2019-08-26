import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import logo from '../assets/logomark - full color.png'
import userPhoto from '../assets/large.png'


const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
`;

const ImageContainer = styled.aside`
  display: flex;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
`;

const AppHeader = (props) => {

  return (
    <Header>
      <img src={logo} alt='logo'></img>
      <ImageContainer>
        <p>{props.name || "Full Name"}</p>
        {/* <img src={props.userPhoto} alt={props.name}></img> */}
        <UserImage
          src={props.userPhoto}
          alt={props.name}
        />
      </ImageContainer>
    </Header>
  )
}

export default AppHeader