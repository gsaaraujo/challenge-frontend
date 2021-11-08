import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

type WrapperIconProps = {
  isActivated: boolean;
};

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Table = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  max-height: 42px;
  border-collapse: collapse;
`;

export const Title = styled.p`
  font-size: 14px;
  color: ${AppColors.heading100};
`;

export const ListTitle = styled.th`
  font-size: 14px;
  font-weight: bold;
  padding: 12px 15px;
  color: ${AppColors.heading100};
`;

export const CollectionHeader = styled.tr`
  height: 42px;
  text-align: left;
  color: ${AppColors.heading0};
  background-color: ${AppColors.fetchItemListHeader};
  border-bottom: 1px solid ${AppColors.fetchItemListBorder};
`;

export const Collection = styled.tr`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-left: 1px solid ${AppColors.fetchItemListBorder};
  border-right: 1px solid ${AppColors.fetchItemListBorder};
  border-bottom: 1px solid ${AppColors.fetchItemListBorder};

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${AppColors.fetchItemListHover};
  }
`;

export const SubCollection = styled.tr`
  height: 42px;
  cursor: default;
  border-left: 1px solid ${AppColors.fetchItemListBorder};
  border-right: 1px solid ${AppColors.fetchItemListBorder};
  border-bottom: 1px solid ${AppColors.fetchItemListBorder};
`;

export const Item = styled.td`
  padding: 8px 15px;
  height: 42px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);
  }
`;

export const AnimationIcon = styled.div<WrapperIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props =>
    props.isActivated ? 'rotate(-90deg)' : 'rotate(0deg)'};

  transition: 0.2s linear;
`;
