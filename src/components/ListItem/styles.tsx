import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 35px;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  transition: 0.3s linear;
  justify-content: space-between;
  width: ${props => props.width};
  background-color: ${AppColors.listItem};

  &:hover {
    transition: 0.3s linear;
    background-color: ${AppColors.listItemHover};
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

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
`;
