import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logomark - full color.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Header = styled.header`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
  color: #777777;
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
      <Link to='/'>
        <HeaderLogo
          src={logo}
          alt='logo'
        />
      </Link>
      <ImageContainer>
        <p>{props.name || ""}</p>
        <UserImage
          src={props.userPhoto}
          alt={props.name}
        />
      </ImageContainer>
    </Header>
  )
}

export default AppHeader