import styled from 'styled-components';

import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  width: 150px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;

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
  font-size: 16px;
  font-weight: 700;
  color: ${AppColors.heading100};
`;
