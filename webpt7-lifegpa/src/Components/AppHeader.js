import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import logo from '../assets/logomark - full color.png'
import userPhoto from '../assets/large.png'


const Header = styled.header`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
`;

const HeaderLogo = styled.img`
  width: 60px;
  height: 60px;
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
      <HeaderLogo
        src={logo}
        alt='logo'
      />
      <ImageContainer>
        <p>{props.name || ""}</p>
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