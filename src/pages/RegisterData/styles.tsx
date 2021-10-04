import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
`;

export const Field = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const AddItem = styled.div`
  width: 150px;
  display: flex;
  cursor: pointer;
  align-items: center;

  transition: 0.2s linear;

  &:hover {
    transition: 0.2s linear;
    color: ${AppColors.hoverMenuItem};
  }
`;
