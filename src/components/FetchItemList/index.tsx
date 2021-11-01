/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
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
import { Spacer } from '../Spacer';

type Props = {
  title: string[];
  data: Company[] | null;
  handleModalShown: () => void;
  handleCompanySelected: (name: string) => void;
};

// eslint-disable-next-line arrow-body-style
export const FetchItemList = ({
  title,
  data,
  handleModalShown,
  handleCompanySelected,
}: Props) => {
  return (
    <Container>
      <CollectionHeader>
        {title.map(each => (
          <ListTitle>{each}</ListTitle>
        ))}

        <ListTitle />
        <ListTitle />
      </CollectionHeader>
      {data === null || data!.length === 0 ? (
        <>
          <Collection>
            <Item>
              <Title>Nenhuma empresa cadastrada</Title>
            </Item>
          </Collection>
        </>
      ) : (
        data!.map(company => (
          <Collection>
            <Item>
              <Title>{company.name}</Title>
            </Item>
            <Item>
              <Title>{company.cnpj}</Title>
            </Item>
            <Item>
              <IconWrapper>
                <EditIcon onClick={() => handleCompanySelected(company.name)} />
              </IconWrapper>
            </Item>
            <Item>
              <IconWrapper onClick={handleModalShown}>
                <TrashIcon
                  onClick={() => handleCompanySelected(company.name)}
                />
              </IconWrapper>
            </Item>
          </Collection>
        ))
      )}
    </Container>
  );
};
