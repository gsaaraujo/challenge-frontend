import React from 'react';

import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg';

import { useAuth } from '../../hooks/useAuth';
import { Spacer } from '../Spacer';

import { Container, Title, NavLink } from './styles';

// eslint-disable-next-line arrow-body-style
export const DropLogOut = () => {
  const { handleLogOut } = useAuth();

  return (
    <Container onClick={handleLogOut}>
      <NavLink>
        <LogOutIcon />
        <Spacer width={10} />
        <Title>Deslogar</Title>
      </NavLink>
    </Container>
  );
};
