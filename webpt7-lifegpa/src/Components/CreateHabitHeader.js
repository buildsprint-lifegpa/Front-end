import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logomark-white.png'


const HeaderContainer = styled.section`
  width: 100%;
  background-color: #596B69;
  color: #ffffff;
`;

const SignUpHeader = styled.header`
  width: 100%;
  max-width: 700px;
  padding: 12px;
  margin: 0 auto;  

  .title-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;    

    h2 {
      font-size: 1.8rem;
      font-weight: 1000;
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
      margin: 0;
    }

    .badge {
      width: 60px;
    }
  }
`;

const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
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

const CreateHabitHeader = (props) => {

  return (
    <HeaderContainer>
      <SignUpHeader>
        <Header>
          <HeaderLogo
            src={logo}
            alt='logo'
          />
          <ImageContainer>
            <p>{props.name || ""}</p>
            <UserImage
              src={props.userPhoto}
              alt={props.name}
            />
          </ImageContainer>
        </Header>
        <div className='title-header-container'>
          <div className='title-container'>
            <h2>Let's get down to it!</h2>
            <h3>Choose or create a habit.</h3>
          </div>
        </div>
      </SignUpHeader>
    </HeaderContainer>
  )
}

export default CreateHabitHeader