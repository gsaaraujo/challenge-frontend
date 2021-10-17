import React, { useState } from 'react';

import { Spacer } from '../Spacer';

import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';

import { Container, Title, Field } from './styles';

type Props = {
  // eslint-disable-next-line react/require-default-props
  width?: string;
};

export const ListItem = ({ width = '100%' }: Props) => {
  const [isDropActivated, setIsDropActivated] = useState(false);

  const handleDropActivated = () => setIsDropActivated(!isDropActivated);

  return (
    <Container width={width} onClick={handleDropActivated}>
      <Aperture />
      <Spacer width={20} />

      <Title>Selectione uma empresa </Title>
      <Field />
    </Container>
  );
};
