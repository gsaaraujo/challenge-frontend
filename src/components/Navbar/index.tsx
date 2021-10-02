import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as DatabaseIcon } from '../../assets/icons/database.svg';

import { AppColors } from '../../constants/app_colors';

import { Spacer } from '../Spacer';
import { DropLogOut } from '../DropLogOut';
import { useAuth } from '../../hooks/useAuth';
import { ProfilePhoto } from '../ProfilePhoto';

import {
  Container,
  DropLogOutContent,
  ActionButton,
  Title,
  NavContent,
  NavItem,
  NavLink,
} from './styles';

export const Navbar = () => {
  const [isLogOutVisible, setIsLogOutVisible] = useState(false);

  const { user } = useAuth();
  const location = useLocation();

  const { selected, notSelected, heading0 } = AppColors;

  const handleIsLogOutVisible = () => setIsLogOutVisible(!isLogOutVisible);

  return (
    <Container>
      <ActionButton onClick={handleIsLogOutVisible}>
        <ProfilePhoto imageURL={user!.photoUrl} />
      </ActionButton>
      <Spacer width={15} />
      <Title color={heading0} weight={400}>
        Bem vindo, <strong>{user!.name}</strong>
      </Title>

      <Spacer width={75} />

      <DropLogOutContent>{isLogOutVisible && <DropLogOut />}</DropLogOutContent>

      <NavContent>
        <NavItem>
          <NavLink to='/' isSelected={location.pathname === '/'}>
            <DatabaseIcon
              stroke={location.pathname === '/' ? selected : notSelected}
            />
            <Spacer height={3} />
            Cadastrar
          </NavLink>
        </NavItem>

        <Spacer width={16} />

        <NavItem>
          <NavLink
            to='/searchData'
            isSelected={location.pathname === '/searchData'}>
            <SearchIcon
              stroke={
                location.pathname === '/searchData' ? selected : notSelected
              }
            />
            <Spacer height={3} />
            Pesquisar
          </NavLink>
        </NavItem>
      </NavContent>
    </Container>
  );
};
