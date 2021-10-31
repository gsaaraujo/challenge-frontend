/* eslint-disable arrow-body-style */
import React from 'react';

import { useSpring, animated } from 'react-spring';

import { ReactComponent as Exit } from '../../assets/icons/x-circle.svg';

import { Spacer } from '../Spacer';

import {
  Container,
  Content,
  Title,
  Button,
  Action,
  WrapperIcon,
} from './styles';

type Props = {
  handleModalShown: () => void;
};

export const ConfirmModal = ({ handleModalShown }: Props) => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <Container>
      <animated.div style={props}>
        <Content>
          <WrapperIcon>
            <Exit onClick={handleModalShown} />
          </WrapperIcon>
          <Title>Deseja mesmo excluir ?</Title>
          <Spacer height={30} />

          <Action>
            <Button onClick={handleModalShown}>Sim</Button>
            <Spacer width={20} />
            <Button onClick={handleModalShown}>Não</Button>
          </Action>
        </Content>
      </animated.div>
    </Container>
  );
};
