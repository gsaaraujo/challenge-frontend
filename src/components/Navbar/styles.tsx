import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  color: string;
  weight: number;
};

type NavLinkProps = {
  isSelected: boolean;
};

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 72px;
  padding-left: 20px;
  align-items: center;
  padding-right: 20px;
  background-color: ${AppColors.header};
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
  font-size: 16px;
  color: ${props => props.color};
`;

export const NavContent = styled.ul`
  display: flex;
  flex: 1;
`;

export const NavItem = styled.li`
  padding: 8px 10px 6px;
  border-radius: 20px;
  border-bottom-width: 5px;

  &:hover {
    opacity: 0.8;
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
