import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type WrapperIconPros = {
  isDropDown: boolean;
};

export const Container = styled.div`
  position: relative;
  width: 100%;

  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -30px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${AppColors.inputBorder};
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const WrapperIcon = styled.div<WrapperIconPros>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.isDropDown ? 'rotate(-180deg)' : 'rotate(0deg)'};
  background-color: ${AppColors.background};

  transition: 0.3s linear;
`;

export const FieldsContainer = styled.div`
  position: relative;
  animation-name: dropDown;
  animation-duration: 0.6s;

  @keyframes dropDown {
    from {
      opacity: 0;
      top: -30px;
    }
    to {
      opacity: 1;
      top: 0px;
    }
  }
`;
