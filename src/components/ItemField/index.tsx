import React from 'react';
import { Spacer } from '../Spacer';

import { Container, Title, InputField } from './styles';

type Props = {
  title: string;
  // eslint-disable-next-line react/require-default-props
  width?: string;
  // eslint-disable-next-line no-unused-vars
  handleOnChange: (text: string) => void;
};

export const ItemField = ({ title, width = '100%', handleOnChange }: Props) => (
  <Container width={width}>
    <Title>{title}</Title>
    <Spacer height={5} />
    <InputField onChange={text => handleOnChange(text.target.value)} />
  </Container>
);
