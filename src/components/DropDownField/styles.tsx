import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

type WrapperIconProps = {
  isActivated: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 35px;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  padding-left: 20px;
  align-items: center;
  padding-right: 20px;
  width: ${props => props.width};
  justify-content: space-between;
  border: 2px solid ${AppColors.inputBorder};

  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -30px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const WrapperIcon = styled.div<WrapperIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.isActivated ? 'rotate(-180deg)' : 'rotate(0deg)'};

  transition: 0.3s linear;
`;
