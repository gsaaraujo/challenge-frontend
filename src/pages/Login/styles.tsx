import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  color: string;
  weight: number;
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
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;

export const WarningMessage = styled.p`
  height: 20px;
  font-size: 13px;
  font-weight: 700;
  color: ${AppColors.warning};
`;

export const LoginContent = styled.form`
  width: 398px;
  height: 300px;
  padding: 38px;
  border-radius: 10px;
  box-shadow: 0 0 10px ${AppColors.primary};
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 37px;
  font-weight: 700;
  border-radius: 20px;
  color: ${AppColors.buttonTitle};
  background-color: ${AppColors.buttonBackground};
`;
