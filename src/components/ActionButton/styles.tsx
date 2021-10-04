import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

export const Container = styled.button<ContainerProps>`
  width: ${props => props.width};
  height: 37px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
  color: ${AppColors.buttonTitle};
  background-color: ${AppColors.buttonBackground};

  &:hover {
    background-color: #ffcf41;
  }
`;
