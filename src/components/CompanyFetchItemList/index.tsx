/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import { Company } from '../../context/companyProvider';

import { Spacer } from '../Spacer';

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
  data: Company[] | null;
  handleDeleteModalShown: () => void;
  handleUpdateModalShown: () => void;
  handleItemSelected: (id: number) => void;
};

// eslint-disable-next-line arrow-body-style
export const CompanyFetchItemList = ({
  data,
  handleDeleteModalShown,
  handleUpdateModalShown,
  handleItemSelected,
}: Props) => {
  return (
    <Container>
      <tbody>
        <CollectionHeader>
          <ListTitle>Nome</ListTitle>
          <ListTitle>CNPJ</ListTitle>

          <ListTitle />
          <ListTitle />
        </CollectionHeader>
        {data === null || data!.length === 0 ? (
          <Collection>
            <Item>
              <Title>------------</Title>
            </Item>
            <Item>
              {data === null ? (
                <Title>Não foi possível buscar empresas</Title>
              ) : (
                <Title>Nenhuma empresa cadastrada</Title>
              )}
            </Item>
          </Collection>
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
                <IconWrapper onClick={handleUpdateModalShown}>
                  <EditIcon onClick={() => handleItemSelected(company.id)} />
                </IconWrapper>
              </Item>
              <Item>
                <IconWrapper onClick={handleDeleteModalShown}>
                  <TrashIcon onClick={() => handleItemSelected(company.id)} />
                </IconWrapper>
              </Item>
            </Collection>
          ))
        )}
      </tbody>
    </Container>
  );
};
