/* eslint-disable react/require-default-props */
import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  width?: string;
  handleOnClick?: () => void;
};

export const ActionButton = ({
  title,
  width = '100%',
  handleOnClick,
}: Props) => (
  <Container onClick={handleOnClick} width={width}>
    {title}
  </Container>
);
