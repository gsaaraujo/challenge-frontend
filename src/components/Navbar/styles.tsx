import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  size: number;
  color: string;
  weight: number;
};

type NavLinkProps = {
  isSelected: boolean;
};

export const Container = styled.nav`
  z-index: 100;
  width: 100%;
  height: 72px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  padding-right: 20px;
  background-color: ${AppColors.header};
  box-shadow: 0 0.5rem 1rem rgba(33, 37, 45, 0.15);
`;

export const ActionButton = styled.div`
  cursor: pointer;
  padding-top: 3px;
`;

export const DropLogOutContent = styled.div`
  position: absolute;
  top: 50px;
`;

export const Title = styled.p<TitleProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
`;

export const NavContent = styled.ul`
  display: flex;
  flex: 1;
`;

export const NavItem = styled.li`
  border-radius: 10px;
  padding: 8px 10px 6px;
  border-bottom-width: 5px;
  transition: 0.3s linear;

  &:hover {
    transition: 0.3s linear;
    background-color: ${AppColors.hoverMenuItem};
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  display: flex;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${props =>
    props.isSelected ? AppColors.selected : AppColors.notSelected};
`;
