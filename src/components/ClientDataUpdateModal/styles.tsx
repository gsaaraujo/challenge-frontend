import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  size: number;
};

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
  width: 600px;
  height: 100%;
  position: relative;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  background-color: ${AppColors.background};
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.p<TitleProps>`
  position: relative;
  font-size: ${props => props.size}px;
  font-weight: 700;
  color: ${AppColors.heading100};
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  width: 250px;
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

export const Section = styled.form`
  display: flex;
`;

export const SubSection = styled.section`
  flex: 1;
  position: relative;

  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -10px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;

export const ItemName = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  transition: 0.3s linear;
  background-color: ${AppColors.listItem};

  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -10px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;
