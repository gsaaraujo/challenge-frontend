import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  display: flex;
  width: 400px;
  height: 180px;
  position: relative;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${AppColors.background};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${AppColors.heading100};
`;

export const Button = styled.button`
  display: flex;
  width: 100px;
  height: 38px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  transition: 0.3s linear;
  color: ${AppColors.buttonTitle};
  background-color: ${AppColors.buttonBackground};

  &:hover {
    background-color: #ffcf41;
    transition: 0.3s linear;
  }
`;

export const Action = styled.div`
  display: flex;
`;
