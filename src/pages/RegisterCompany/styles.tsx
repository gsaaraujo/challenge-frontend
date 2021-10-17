import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.p`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: ${AppColors.heading100};

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

export const Content = styled.section`
  display: flex;
  flex: 1;
`;

export const Form = styled.div`
  padding-left: 50px;
`;
