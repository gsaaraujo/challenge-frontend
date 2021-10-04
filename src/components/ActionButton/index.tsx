import React from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  // eslint-disable-next-line react/require-default-props
  width?: string;
  handleOnClick: () => void;
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
