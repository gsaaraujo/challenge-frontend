/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Spacer } from '../Spacer';

import { Container, Title, InputField } from './styles';

type Props = {
  title: string;
  value?: string;
  width?: string;
  maxLength?: number;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  handleOnChange?: (text: string) => void;
  props?: any;
};

export const ItemField = ({
  title,
  value,
  maxLength = 40,
  width = '100%',
  defaultValue = '',
  handleOnChange = () => {},
  props,
}: Props) => {
  return (
    <Container width={width}>
      <Title>{title}</Title>
      <Spacer height={5} />
      <InputField
        {...props}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        onChange={text => handleOnChange(text.target.value)}
      />
    </Container>
  );
};
