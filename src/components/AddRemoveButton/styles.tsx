import styled from 'styled-components';

import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  width: 150px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${AppColors.heading100};
`;
