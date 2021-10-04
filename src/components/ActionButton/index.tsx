/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  width?: string;
  handleOnSubmit: (e: any) => void;
};

export const ActionButton = ({
  title,
  width = '100%',
  handleOnSubmit,
}: Props) => (
  <Container type='submit' onSubmit={handleOnSubmit} width={width}>
    {title}
  </Container>
);
