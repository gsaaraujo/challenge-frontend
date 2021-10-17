import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  position: relative;
  top: 10px;
  left: 55px;
  width: 220px;
  height: 77px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: flex-end;
  transition: 0.3s linear;
  background-color: ${AppColors.primary};

  animation-name: dropDown;
  animation-duration: 0.3s;

  @keyframes dropDown {
    from {
      height: 50px;
    }
    to {
      height: 77px;
    }
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading0};
`;

export const NavLink = styled.div`
  width: 100%;
  display: flex;
  border-radius: 5px;
  padding: 20px 10px;
  align-items: center;
  transition: 0.2s linear;
  border-top: 2px solid ${AppColors.hoverMenuItem};

  &:hover {
    transition: 0.2s linear;
    background-color: ${AppColors.hoverMenuItem};
  }
`;
