import React from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const NavFooter = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
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