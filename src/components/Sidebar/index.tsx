import React from 'react';

import { useLocation } from 'react-router-dom';

import { ReactComponent as Box } from '../../assets/icons/box.svg';
import { ReactComponent as Layers } from '../../assets/icons/layers.svg';

import { Spacer } from '../Spacer';

import { Container, Title, NavContent, NavItem, NavLink } from './styles';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Container>
      <Spacer height={25} />

      <NavContent>
        <NavItem>
          <NavLink
            to='/registerCompany'
            isSelected={location.pathname === '/registerCompany'}>
            <Spacer width={10} />
            <Layers />
            <Spacer width={10} />
            <Title>Cadastrar empresa</Title>
          </NavLink>

          <Spacer height={10} />

          <NavLink
            to='/registerData'
            isSelected={location.pathname === '/registerData'}>
            <Spacer width={10} />
            <Box />
            <Spacer width={10} />
            <Title>Cadastrar dados</Title>
          </NavLink>
        </NavItem>
      </NavContent>
    </Container>
  );
};
