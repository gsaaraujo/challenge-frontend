/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

import { Spacer } from '../Spacer';

import { Container, Title, InputContent, InputText } from './styles';

type Props = {
  title: string;
  placeholder: string;
  handleOnChange: (text: string) => void;
};

export const SearchItemList = ({
  title,
  placeholder,
  handleOnChange,
}: Props) => {
  return (
    <Container>
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
