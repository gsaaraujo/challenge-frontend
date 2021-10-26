import React from 'react';

import { useLocation } from 'react-router-dom';

import { ReactComponent as Box } from '../../assets/icons/box.svg';
import { ReactComponent as Layers } from '../../assets/icons/layers.svg';

import { Spacer } from '../Spacer';

import { Container, Title, NavContent, NavItem, NavLink } from './styles';

type Props = {
  title: string[];
  path: string[];
};

export const Sidebar = ({ path, title }: Props) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Container>
      <Spacer height={25} />

      <NavContent>
        <NavItem>
          <NavLink to={path[0]} isSelected={location.pathname === path[0]}>
            <Spacer width={10} />
            <Layers />
            <Spacer width={10} />
            <Title>{title[0]}</Title>
          </NavLink>

          <Spacer height={10} />

          <NavLink to={path[1]} isSelected={location.pathname === path[1]}>
            <Spacer width={10} />
            <Box />
            <Spacer width={10} />
            <Title>{title[1]}</Title>
          </NavLink>
        </NavItem>
      </NavContent>
    </Container>
  );
};
