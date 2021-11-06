/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useClientData } from '../../hooks/useClientData';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { SearchItemList } from '../../components/SearchItemList';
import { WarningMessage } from '../../components/WarningMessage';
import { ClientDataFetchItemList } from '../../components/ClientDataFetchItemList';

import { Container, Content, Section, SubSection, Title } from './styles';

// eslint-disable-next-line arrow-body-style
export const SearchData = () => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isUpdateModalShown, setIsUpdateModalShown] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [searchText, setSearchText] = useState('');

  const { clientData } = useClientData();

  const handleSearchText = (text: string) => setSearchText(text);

  return (
    <Container>
      <Navbar />

      <Content>
        <Sidebar
          title={['Pesquisar empresa', 'Pesquisar dados']}
          path={['/searchCompany', '/searchData']}
        />

        <Section>
          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

            <Title size={14}>Empresas cadastradas</Title>
            <Spacer height={30} />

            <SearchItemList
              title='Procurar empresa'
              placeholder='Procurar por nome'
              handleOnChange={handleSearchText}
            />
            <Spacer height={10} />

            <WarningMessage title={warningMessage} />
            <Spacer height={10} />

            <ClientDataFetchItemList
              data={clientData}
              handleDeleteModalShown={() => {}}
              handleUpdateModalShown={() => {}}
              handleItemSelected={() => {}}
            />
          </SubSection>
        </Section>
      </Content>
    </Container>
  );
};
