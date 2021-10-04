/* eslint-disable arrow-body-style */
/* eslint-disable react/require-default-props */
import React from 'react';

import { ReactComponent as PlusSquare } from '../../assets/icons/plus-square.svg';
import { ReactComponent as MinusSware } from '../../assets/icons/minus-square.svg';

import { Container, Title } from './styles';

type Props = {
  title: string;
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
  // const [isDropActivated, setIsDropActivated] = useState(false);

  // const handleDropsActivated = () => setIsDropActivated(!isDropActivated);

  return (
    <Container
      width={width}
      onClick={() => {
        handleOnClick(title);
        // handleDropsActivated();
      }}>
      <Title>{title}</Title>
      {isActivated ? <MinusSware /> : <PlusSquare />}
    </Container>
  );
};
