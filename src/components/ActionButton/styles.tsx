import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  height: 37px;
  display: flex;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  border-radius: 5px;
  align-items: center;
  transition: 0.3s linear;
  justify-content: center;
  width: ${props => props.width};
  color: ${AppColors.buttonTitle};
  background-color: ${AppColors.buttonBackground};

  &:hover {
    background-color: #ffcf41;
    transition: 0.3s linear;
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
