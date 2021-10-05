import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type TitleProps = {
  size: number;
  weight: number;
};

type DataListProps = {
  color: string;
};

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.p<TitleProps>`
  position: relative;
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
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

export const Section = styled.section`
  display: flex;
`;

export const SubSection = styled.section`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SearchDataInput = styled.input`
  position: relative;
  width: 231px;
  height: 35px;
  font-size: 14px;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  transition: 0.3s linear;
  color: ${AppColors.heading100};
  border: 2px solid ${AppColors.inputBorder};

  &:hover {
    transition: 0.3s linear;
    border-color: ${AppColors.hover};
  }

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

export const DataListContent = styled.div`
  display: flex;
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

export const DataList = styled.div<DataListProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  background-color: ${props => props.color};

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
