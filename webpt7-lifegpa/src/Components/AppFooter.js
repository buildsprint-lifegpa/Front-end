import React from 'react'
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const NavFooter = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const AppFooter = () => {

  return (
    <NavFooter>
      <Icon
        name="chart pie"
        size="big"
        color="#777777"
      />
      <Icon
        name="pencil alternate"
        size="big"
      />
      <Icon
        name="check square"
        size="big"
      />
      <Icon
        name="share alternate"
        size="big"
      />
      <Icon
        name="content"
        size="big"
      />
    </NavFooter>
  )
}

export default AppFooter