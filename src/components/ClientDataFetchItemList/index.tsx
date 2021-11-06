/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';

import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import { Company } from '../../context/companyProvider';
import { ClientData } from '../../context/clientDataProvider';

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
  data: ClientData[] | null;
  handleDeleteModalShown: () => void;
  handleUpdateModalShown: () => void;
  handleItemSelected: (id: number) => void;
};

// eslint-disable-next-line arrow-body-style
export const ClientDataFetchItemList = ({
  data,
  handleDeleteModalShown,
  handleUpdateModalShown,
  handleItemSelected,
}: Props) => {
  return (
    <Container>
      <tbody>
        <CollectionHeader>
          <ListTitle>Empresa</ListTitle>
          <ListTitle>Sistema</ListTitle>
          <ListTitle>Proprietário do dado</ListTitle>
          <ListTitle>Origem</ListTitle>
          <ListTitle>Campo</ListTitle>
          <ListTitle>Valor</ListTitle>

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
          data!.map((clientData, index) => (
            <Collection key={index}>
              <Item>
                <Title>{clientData.company.name}</Title>
              </Item>
              <Item>
                <Title>{clientData.syystem.name}</Title>
              </Item>
              <Item>
                <Title>{clientData.client.name}</Title>
              </Item>
              <Item>
                <Title>{clientData.module}</Title>
              </Item>
              <Item>
                <Title>{clientData.label}</Title>
              </Item>
              <Item>
                <Title>{clientData.value}</Title>
              </Item>
              <Item>
                <IconWrapper onClick={handleUpdateModalShown}>
                  <EditIcon onClick={() => {}} />
                </IconWrapper>
              </Item>
              <Item>
                <IconWrapper onClick={handleDeleteModalShown}>
                  <TrashIcon onClick={() => {}} />
                </IconWrapper>
              </Item>
            </Collection>
          ))
        )}
      </tbody>
    </Container>
  );
};
