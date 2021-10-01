import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  border-radius: 20px;
  padding-right: 20px;
  transition: 0.3s linear;
  border: 2px solid ${AppColors.placeholer};

  &:hover {
    transition: 0.3s linear;
    border-color: ${AppColors.hover};
  }

  @media screen and (max-width: 576px) {
    height: 30px;
  }
`;

export const ActionIcon = styled.div``;
