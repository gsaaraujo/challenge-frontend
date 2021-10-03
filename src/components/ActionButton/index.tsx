import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  // eslint-disable-next-line no-unused-vars
  handleOnSubmit: (e: any) => void;
};

export const ActionButton = ({ title, handleOnSubmit }: Props) => (
  <Container type='submit' onSubmit={handleOnSubmit}>
    {title}
  </Container>
);
