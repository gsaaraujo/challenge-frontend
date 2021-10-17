import React from 'react';

import { ReactComponent as PlusSquare } from '../../assets/icons/plus-square.svg';
import { ReactComponent as MinusSware } from '../../assets/icons/minus-square.svg';

import { AppColors } from '../../constants/app_colors';

import { Container, Title } from './styles';

type Props = {
  title: string;
  // eslint-disable-next-line react/require-default-props
  width?: string;
  isActivated: boolean;
  // eslint-disable-next-line no-unused-vars
  handleOnClick: (title: string) => void;
};

export const ListItem = ({
  title,
  width = '100%',
  isActivated,
  handleOnClick,
}: Props) => {
  const { selected, notSelected } = AppColors;

  return (
    <Container
      width={width}
      backgroundColor={isActivated ? selected : notSelected}
      onClick={() => {
        handleOnClick(title);
      }}>
      <Title>{title}</Title>
      {isActivated ? <MinusSware /> : <PlusSquare />}
    </Container>
  );
};
