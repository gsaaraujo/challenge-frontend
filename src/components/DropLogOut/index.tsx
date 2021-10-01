import React from 'react';

import { useAuth } from '../../hooks/useAuth';

import { Container, Title } from './styles';

// eslint-disable-next-line arrow-body-style
export const DropLogOut = () => {
  const { handleLogOut } = useAuth();

  return (
    <Container onClick={handleLogOut}>
      <Title>Log Out</Title>
    </Container>
  );
};
