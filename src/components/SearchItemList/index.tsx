/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import { Spacer } from '../Spacer';

import { Container, Title, InputContent, InputText } from './styles';

type Props = {
  title: string;
  width?: string;
  placeholder: string;
  handleOnChange: (text: string) => void;
};

export const SearchItemList = ({
  title,
  width,
  placeholder,
  handleOnChange,
}: Props) => {
  return (
    <Container width={width}>
      <Title>{title}</Title>
      <Spacer height={10} />

      <InputContent>
        <InputText
          placeholder={placeholder}
          onChange={text => handleOnChange(text.target.value)}
        />
        <SearchIcon />
      </InputContent>
    </Container>
  );
};
