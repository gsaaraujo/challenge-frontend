import React from 'react';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import { Company } from '../../context/companyProvider';

import {
  Container,
  Title,
  ListTitle,
  CollectionHeader,
  Collection,
  Item,
  IconWrapper,
} from './styles';

type Props = {
  title: string[];
  data: Company[] | null;
  handleModalShown: () => void;
};

// eslint-disable-next-line arrow-body-style
export const FetchItemList = ({ title, data, handleModalShown }: Props) => {
  return (
    <Container>
      <CollectionHeader>
        {title.map(each => (
          <ListTitle>{each}</ListTitle>
        ))}

        <ListTitle />
        <ListTitle />
      </CollectionHeader>
      {data &&
        data.map(company => (
          <Collection>
            <Item>
              <Title>{company.name}</Title>
            </Item>
            <Item>
              <Title>{company.cnpj}</Title>
            </Item>
            <Item>
              <IconWrapper>
                <EditIcon />
              </IconWrapper>
            </Item>
            <Item>
              <IconWrapper onClick={handleModalShown}>
                <TrashIcon />
              </IconWrapper>
            </Item>
          </Collection>
        ))}
    </Container>
  );
};
