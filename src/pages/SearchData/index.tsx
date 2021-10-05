import React, { useState } from 'react';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { ListItem } from '../../components/ListItem';
import { ActionButton } from '../../components/ActionButton';
import { DropDownField } from '../../components/DropDownField';

import {
  Container,
  Section,
  SubSection,
  Title,
  SearchDataInput,
  DataListContent,
  DataList,
} from './styles';

// eslint-disable-next-line arrow-body-style
export const SearchData = () => {
  const [isItemFieldActivated, setIsItemFieldActivated] = useState(false);
  const [itemFieldSelected, setItemFieldSelected] = useState('');
  const [isDropFieldActivated, setIsDropFieldActivated] = useState(false);

  const handleIsItemFieldActivated = (title: string) => {
    // eslint-disable-next-line no-unused-expressions
    itemFieldSelected === title
      ? setItemFieldSelected('')
      : setItemFieldSelected(title);

    setIsItemFieldActivated(!isItemFieldActivated);
  };

  const handleDropFieldActivated = () =>
    setIsDropFieldActivated(!isDropFieldActivated);

  return (
    <Container>
      <Navbar />
      <Spacer height={60} />

      <Section>
        <SubSection>
          <Title size={14} weight={700}>
            Empresas cadastradas
          </Title>
          <Spacer height={40} />
          <ListItem
            title='TOTVS'
            width='324px'
            isActivated={itemFieldSelected === 'TOTVS'}
            handleOnClick={handleIsItemFieldActivated}
          />
          <ListItem
            title='GSA'
            width='324px'
            isActivated={itemFieldSelected === 'GSA'}
            handleOnClick={handleIsItemFieldActivated}
          />
        </SubSection>

        <SubSection style={{ flex: 2 }}>
          <Title size={14} weight={700}>
            Dados cadastrados
          </Title>
          <Spacer height={40} />

          <DropDownField
            title={itemFieldSelected}
            isActivated={isDropFieldActivated}
            handleOnClick={handleDropFieldActivated}
          />

          <Spacer height={10} />

          <DataListContent>
            {isDropFieldActivated && (
              <>
                <DataList color='#E6EAEE' style={{ flex: 1 }}>
                  <Title weight={500} size={14}>
                    Cidade
                  </Title>
                </DataList>

                <Spacer width={5} />

                <DataList color='#E6EAEE' style={{ flex: 2 }}>
                  <Title weight={500} size={14}>
                    Kakariko Village
                  </Title>
                </DataList>
              </>
            )}
          </DataListContent>
        </SubSection>

        <SubSection>
          <Title weight={700} size={14}>
            Pesquisar dados
          </Title>

          <Spacer height={40} />
          <SearchDataInput placeholder='Pesquisar por nome' />
          <Spacer height={5} />
          <SearchDataInput placeholder='Pesquisar por CPF' />
          <Spacer height={10} />

          <ActionButton
            title='Pesquisar'
            width='177px'
            handleOnClick={() => {}}
          />
        </SubSection>
      </Section>
    </Container>
  );
};
