import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  align-items: center;
  justify-content: center;
  background-color: ${AppColors.background};
`;
