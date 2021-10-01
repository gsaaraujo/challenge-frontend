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
  height: 50px;
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
  font-weight: ${props => props.weight};
`;

export const NavContent = styled.ul`
  display: flex;
  flex: 1;
`;

export const NavItem = styled.li`
  padding: 8px 10px 6px;
  border-radius: 20px;
  border-bottom-width: 5px;
  transition: 0.2s linear;

  &:hover {
    transition: 0.2s linear;
    background-color: ${AppColors.hoverMenuItem};
  }
`;

export const NavLink = styled(Link)<NavLinkProps>`
  opacity: 1;
  font-size: 16px;
  padding-bottom: 10px;
  color: ${AppColors.heading0};
  border-bottom: 2px solid
    ${props => (props.isSelected ? AppColors.background : AppColors.primary)};
`;
