/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

import { Container, Title, WrapperIcon } from './styles';

type Props = {
  title: string;
  width?: string;
};

export const DropDownField = ({ title, width = '100%' }: Props) => {
  const [isDropActivated, setIsDropActivated] = useState(false);

  const handleDropsActivated = () => setIsDropActivated(!isDropActivated);

  return (
    <Container width={width} onClick={handleDropsActivated}>
      <Title>{title}</Title>
      <WrapperIcon isActivated={isDropActivated}>
        <ArrowDown />
      </WrapperIcon>
    </Container>
  );
};
