import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  position: relative;
  width: 130px;
  height: 40px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  background-color: ${AppColors.primary};
  border: 1px solid ${AppColors.background};

  animation-name: fadeIn;
  animation-duration: 0.1s;

  &:hover {
    opacity: 0.8;
    transition: 0.1s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      top: -5px;
    }
    to {
      top: 0px;
    }
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading0};
`;
