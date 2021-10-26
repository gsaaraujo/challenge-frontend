/* eslint-disable arrow-body-style */
import React from 'react';

import { ActionButton } from '../ActionButton';
import { Spacer } from '../Spacer';

import { Container, Title } from './styles';

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleOnClick: (state: boolean) => void;
};

export const DataSubmitedMsg = ({ handleOnClick }: Props) => {
  return (
    <Container>
      <Title>Enviado com sucesso !</Title>
      <Spacer height={20} />
      <ActionButton title='Voltar' handleOnClick={() => handleOnClick(false)} />
    </Container>
  );
};
