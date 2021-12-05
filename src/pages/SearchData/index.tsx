/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';
import { AppColors } from '../../constants/app_colors';

import { useClientData } from '../../hooks/useClientData';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { SearchItemList } from '../../components/SearchItemList';
import { WarningMessage } from '../../components/WarningMessage';
import { ClientDataFetchItemList } from '../../components/ClientDataFetchItemList';

import { Container, Content, Section, SubSection, Title } from './styles';
import { ClientDataUpdatedModal } from '../../components/ClientDataUpdateModal';
import { Company } from '../../context/companyProvider';
import { ClientData } from '../../context/clientDataProvider';
import { ConfirmModal } from '../../components/ConfirmModal';

// eslint-disable-next-line arrow-body-style
export const SearchData = () => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isUpdateModalShown, setIsUpdateModalShown] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [dataFiltered, setDataFiltered] = useState<[ClientData[]] | null>([[]]);
  const [itemSelected, setItemSelected] = useState<ClientData>(
    {} as ClientData,
  );

  const { clientData, isLoading, handleDeleteClientData } = useClientData();

  useEffect(() => {
    handleFilterText();
  }, [clientData, searchText]);

  const handleFilterText = () => {
    if (clientData) {
      let dataCopy = clientData;
      const regex = new RegExp(searchText, 'i');

      if (searchText !== null && dataCopy !== null) {
        dataCopy = dataCopy.map(each =>
          each.filter(c => c.client.name.match(regex)),
        ) as [ClientData[]];

        setDataFiltered(dataCopy);
      } else {
        setDataFiltered(clientData);
      }
    }
  };

  const handleSearchText = (text: string) => setSearchText(text);

  const handleDeleteModalShown = () =>
    setIsDeleteModalShown(!isDeleteModalShown);

  const handleUpdateModalShown = () =>
    setIsUpdateModalShown(!isUpdateModalShown);

  const handleClientDataSelected = (clientData: ClientData) =>
    setItemSelected(clientData);

  const handleOnConfirmDeleteModal = async () => {
    try {
      await handleDeleteClientData(itemSelected.id);
      handleDeleteModalShown();
    } catch (error) {
      setWarningMessage('Não foi possivel deletar, tente novamente mais tarde');
    }
  };

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

            <Title size={14}>Dados cadastrados</Title>
            <Spacer height={30} />

            <SearchItemList
              title='Procurar dados'
              width='400px'
              placeholder='Procurar por nome do proprietário'
              handleOnChange={handleSearchText}
            />

            <Spacer height={10} />

            <WarningMessage title={warningMessage} />
            <Spacer height={10} />

            {isLoading ? (
              <ReactLoading
                type='spinningBubbles'
                color={AppColors.primary}
                height='5%'
                width='5%'
              />
            ) : (
              <ClientDataFetchItemList
                data={dataFiltered}
                handleDeleteModalShown={handleDeleteModalShown}
                handleUpdateModalShown={handleUpdateModalShown}
                handleItemSelected={handleClientDataSelected}
              />
            )}
          </SubSection>
        </Section>
      </Content>

      {isDeleteModalShown && (
        <ConfirmModal
          handleModalShown={handleDeleteModalShown}
          handleOnConfirmModal={handleOnConfirmDeleteModal}
        />
      )}

      {isUpdateModalShown && (
        <ClientDataUpdatedModal
          handleModalShown={handleUpdateModalShown}
          clientDataSelected={itemSelected}
        />
      )}
    </Container>
  );
};
