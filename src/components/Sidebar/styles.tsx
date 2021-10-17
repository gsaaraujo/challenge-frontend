import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppColors } from '../../constants/app_colors';

type NavLinkProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  width: 240px;
  height: 100%;
  background-color: #f8f9fa;
  border-right: 0.5px solid ${AppColors.listItem};
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const NavContent = styled.ul`
  display: flex;
  flex: 1;
`;

export const NavItem = styled.li`
  border-radius: 10px;
  padding: 8px 10px 6px;
  transition: 0.3s linear;
`;

export const NavLink = styled(Link)<NavLinkProps>`
  width: 210px;
  height: 40px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  align-items: center;
  transition: 0.3s linear;
  background-color: ${props =>
    props.isSelected ? AppColors.selected : AppColors.sideMenu};

  color: ${props =>
    props.isSelected ? AppColors.selected : AppColors.sideMenu};

  &:hover {
    transition: 0.3s linear;
    background-color: ${AppColors.selected};
  }
`;
