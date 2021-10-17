import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${props => props.width};

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

export const InputField = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 20px;
  transition: 0.3s linear;
  border: 2px solid ${AppColors.inputBorder};

  &:hover {
    transition: 0.3s linear;
    border-color: ${AppColors.hover};
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${AppColors.heading100};
`;
