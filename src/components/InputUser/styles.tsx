import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  height: 37px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  border-radius: 10px;
  padding-right: 20px;
  transition: 0.3s linear;
  border: 2px solid ${AppColors.placeholer};

  &:hover {
    transition: 0.3s linear;
    border-color: ${AppColors.hover};
  }
`;

export const ActionIcon = styled.div`
  padding-top: 5px;
`;
