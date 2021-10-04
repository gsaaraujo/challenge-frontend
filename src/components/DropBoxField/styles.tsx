import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width};
`;

export const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 20px;
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
