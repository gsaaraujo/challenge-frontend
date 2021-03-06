import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  color: string;
};

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  align-items: center;
  padding-right: 20px;
  background-color: ${AppColors.header};
`;

export const Section = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p<TitleProps>`
  position: relative;
  font-size: 14px;
  color: ${props => props.color};

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

export const WarningMessage = styled.p`
  height: 20px;
  font-size: 13px;
  color: ${AppColors.warning};
`;

export const LoginContent = styled.form`
  width: 398px;
  height: 300px;
  padding: 38px;
`;
