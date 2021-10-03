import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.button`
  width: 100%;
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
