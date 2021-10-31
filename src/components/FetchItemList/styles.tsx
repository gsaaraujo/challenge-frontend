import styled from 'styled-components';
import { AppColors } from '../../constants/app_colors';

export const Container = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
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
  text-align: left;
  color: ${AppColors.heading0};
  background-color: ${AppColors.fetchItemListHeader};
  border-bottom: 1px solid ${AppColors.fetchItemListBorder};
`;

export const Collection = styled.tr`
  transition: all 0.3s ease-in-out;

  border-left: 1px solid ${AppColors.fetchItemListBorder};
  border-right: 1px solid ${AppColors.fetchItemListBorder};
  border-bottom: 1px solid ${AppColors.fetchItemListBorder};

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${AppColors.fetchItemListHover};
  }
`;

export const Item = styled.td`
  padding: 8px 15px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);
  }
`;
