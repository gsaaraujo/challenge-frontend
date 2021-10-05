/* eslint-disable react/require-default-props */
import React from 'react';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

import { Container, Title, WrapperIcon } from './styles';

type Props = {
  title: string;
  width?: string;
  isActivated: boolean;
  handleOnClick: () => void;
};

export const DropDownField = ({
  title,
  width = '100%',
  isActivated,
  handleOnClick,
}: Props) => (
  <Container width={width} onClick={handleOnClick}>
    <Title>{title}</Title>
    <WrapperIcon isActivated={isActivated}>
      <ArrowDown />
    </WrapperIcon>
  </Container>
);
