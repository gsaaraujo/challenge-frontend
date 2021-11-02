import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  size: number;
};

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const Section = styled.section`
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

export const Title = styled.p<TitleProps>`
  position: relative;
  font-size: ${props => props.size}px;
  font-weight: 700;
  color: ${AppColors.heading100};
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

export const WrapperIcon = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 20px;
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
