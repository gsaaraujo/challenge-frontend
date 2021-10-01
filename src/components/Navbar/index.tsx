import React from 'react';

import { useLocation } from 'react-router-dom';

import { AppColors } from '../../constants/app_colors';

import { useAuth } from '../../hooks/useAuth';
import { ProfilePhoto } from '../ProfilePhoto';
import { Spacer } from '../Spacer';

import { Container, Title, NavContent, NavItem, NavLink } from './styles';

export const Navbar = () => {
  const { user } = useAuth();

  const { heading0 } = AppColors;

  const location = useLocation();

  return (
    <Container>
      <ProfilePhoto imageURL={user!.photoUrl} />
      <Spacer width={15} />
      <Title color={heading0} weight={400}>
        Bem vindo, <strong>{user!.name}</strong>
      </Title>

      <Spacer width={75} />

      <NavContent>
        <NavItem>
          <NavLink to='/' isSelected={location.pathname === '/'}>
            <strong>Cadastrar dados</strong>
          </NavLink>
        </NavItem>

        <Spacer width={25} />

        <NavItem>
          <NavLink
            to='/searchData'
            isSelected={location.pathname === '/searchData'}>
            <strong>Pesquisar dados</strong>
          </NavLink>
        </NavItem>
      </NavContent>
    </Container>
  );
};
