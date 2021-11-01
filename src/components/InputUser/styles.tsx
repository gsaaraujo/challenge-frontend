import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  position: relative;
  height: 37px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  border-radius: 5px;
  padding-right: 20px;
  transition: 0.3s linear;
  border: 2px solid ${AppColors.inputBorder};

  &:hover {
    transition: 0.3s linear;
    border-color: ${AppColors.inputBorderHover};
  }

  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -20px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;

export const ActionIcon = styled.div`
  padding-top: 5px;
`;
