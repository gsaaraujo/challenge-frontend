/* eslint-disable react/require-default-props */
import React from 'react';
import { Spacer } from '../Spacer';

import { Container, Title, InputField } from './styles';

type Props = {
  title: string;
  value?: string;
  width?: string;
  maxLength?: number;
  // eslint-disable-next-line no-unused-vars
  handleOnChange: (text: string) => void;
};

export const ItemField = ({
  title,
  value,
  maxLength = 40,
  width = '100%',
  handleOnChange,
}: Props) => (
  <Container width={width}>
    <Title>{title}</Title>
    <Spacer height={5} />
    <InputField
      value={value}
      maxLength={maxLength}
      onChange={text => handleOnChange(text.target.value)}
    />
  </Container>
);
