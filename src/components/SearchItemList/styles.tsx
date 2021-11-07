import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type ContainerProps = {
  width?: string;
};

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width || '100%'};
  height: 60px;
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const InputContent = styled.div`
  display: flex;
  height: 38px;
  border-radius: 5px;
  padding-right: 10px;
  align-items: center;
  transition: 0.3s linear;
  border: 1px solid ${AppColors.inputBorder};

  &:hover {
    transition: 0.3s linear;
    border: 1px solid ${AppColors.inputBorderHover};
  }
`;

export const InputText = styled.input`
  height: 38px;
  padding-left: 10px;
  border-radius: 5px;
`;
