/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';

import { Company } from '../../context/companyProvider';
import { ClientData } from '../../context/clientDataProvider';

import { Spacer } from '../Spacer';

import {
  Container,
  Table,
  Title,
  ListTitle,
  CollectionHeader,
  Collection,
  SubCollection,
  Item,
  IconWrapper,
  AnimationIcon,
} from './styles';

type Props = {
  data: [ClientData[]] | null;
  handleDeleteModalShown: () => void;
  handleUpdateModalShown: () => void;
  handleItemSelected: (clientData: ClientData) => void;
};

// eslint-disable-next-line arrow-body-style
export const ClientDataFetchItemList = ({
  data,
  handleDeleteModalShown,
  handleUpdateModalShown,
  handleItemSelected,
}: Props) => {
  const [isDropedDown, setIsDropedDown] = useState(false);
  const [dropDownSelected, setDropDownSelected] = useState('');

  const handleDropDownSelected = (selected: string) => {
    dropDownSelected === selected
      ? setDropDownSelected('')
      : setDropDownSelected(selected);

    setIsDropedDown(!isDropedDown);
  };

  return (
    <Container>
      <Table>
        <tbody>
          <CollectionHeader>
            <ListTitle>Empresa</ListTitle>
            <ListTitle>Sistema</ListTitle>
            <ListTitle>Proprietário do dado</ListTitle>

            <ListTitle />
          </CollectionHeader>
          {data === null ? (
            <Collection>
              <Item>
                {data === null ? (
                  <Title>
                    Não foi possível <br />
                    buscar os dados
                  </Title>
                ) : (
                  <Title>
                    Nenhum dado
                    <br /> cadastrado
                  </Title>
                )}
              </Item>
            </Collection>
          ) : (
            data.map((clientData: ClientData[], index: number) => (
              <>
                <Collection
                  key={index}
                  onClick={() => handleDropDownSelected(String(index))}>
                  <Item>
                    <Title>{clientData[0].company.name}</Title>
                  </Item>
                  <Item>
                    <Title>{clientData[0].syystem.name}</Title>
                  </Item>
                  <Item>
                    <Title>{clientData[0].client.name}</Title>
                  </Item>

                  <Item>
                    <AnimationIcon
                      isActivated={dropDownSelected === String(index)}>
                      <ArrowDown />
                    </AnimationIcon>
                  </Item>
                </Collection>
              </>
            ))
          )}
        </tbody>
      </Table>

      <Spacer width={20} />

      <Table>
        <tbody>
          <CollectionHeader>
            <ListTitle>Origem</ListTitle>
            <ListTitle>Campo</ListTitle>
            <ListTitle>Valor</ListTitle>

            <ListTitle />
            <ListTitle />
          </CollectionHeader>

          {data === null ? (
            <Collection>
              <Item>
                {data === null ? (
                  <Title>
                    Não foi possível <br />
                    buscar os dados
                  </Title>
                ) : (
                  <Title>
                    Nenhum dado <br />
                    cadastrado
                  </Title>
                )}
              </Item>
            </Collection>
          ) : (
            data!.map((clientData, index) =>
              clientData.map(data => (
                <>
                  {dropDownSelected === String(index) && (
                    <SubCollection key={data.id}>
                      <Item>
                        <Title>{data.module}</Title>
                      </Item>
                      <Item>
                        <Title>{data.label}</Title>
                      </Item>
                      <Item>
                        <Title>{data.value}</Title>
                      </Item>
                      <Item>
                        <IconWrapper onClick={handleUpdateModalShown}>
                          <EditIcon onClick={() => handleItemSelected(data)} />
                        </IconWrapper>
                      </Item>
                      <Item>
                        <IconWrapper onClick={handleDeleteModalShown}>
                          <TrashIcon onClick={() => handleItemSelected(data)} />
                        </IconWrapper>
                      </Item>
                    </SubCollection>
                  )}
                </>
              )),
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
};
