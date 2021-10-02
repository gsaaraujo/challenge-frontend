import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  position: relative;
  width: 220px;
  height: 140px;
  display: flex;
  cursor: pointer;
  padding: 20px 10px;
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
      height: 140px;
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
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;
