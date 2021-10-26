import React from 'react';

import { Container, Title } from './styles';

type Props = {
  title: string;
};

// eslint-disable-next-line arrow-body-style
export const WarningMessage = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
