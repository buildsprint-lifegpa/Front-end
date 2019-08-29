import React from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const NavFooter = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  /* border-top: 5px solid #596B69; */

`;

const iconColor = {
  color: '#777777',
}

const AppFooter = () => {

  return (
    <NavFooter>
      <Icon
        name="chart pie"
        size="big"
        style={iconColor}
      />
      <Icon
        name="pencil alternate"
        size="big"
        style={iconColor}
      />
      <Icon
        name="check square"
        size="big"
        style={iconColor}
      />
      <Icon
        name="share alternate"
        size="big"
        style={iconColor}
      />
      <Icon
        name="content"
        size="big"
        style={iconColor}
      />
    </NavFooter>
  )
}

export default AppFooter