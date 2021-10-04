/* eslint-disable arrow-body-style */
import React from 'react';

import { ReactComponent as PlusSquare } from '../../assets/icons/plus-square.svg';
import { ReactComponent as MinusSware } from '../../assets/icons/minus-square.svg';

import { Spacer } from '../Spacer';

import { Container, Title } from './styles';

type Props = {
  isActivated: boolean;
  handleOnClick: () => void;
};

export const AddRemoveButton = ({ isActivated, handleOnClick }: Props) => {
  return (
    <Container onClick={handleOnClick}>
      {isActivated ? <MinusSware /> : <PlusSquare />}
      <Spacer width={5} />
      <Title>{isActivated ? 'Remover' : 'Adicionar'}</Title>
    </Container>
  );
};
