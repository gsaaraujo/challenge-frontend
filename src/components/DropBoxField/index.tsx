import React from 'react';
import { Spacer } from '../Spacer';

import { Container, Title, InputField } from './styles';

type Props = {
  title: string;
  // eslint-disable-next-line react/require-default-props
  width?: string;
};

export const DropBoxField = ({ title, width = '100%' }: Props) => (
  <Container width={width}>
    <Title>{title}</Title>
    <Spacer height={5} />
    <InputField />
  </Container>
);
