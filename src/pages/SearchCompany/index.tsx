import React, { useState } from 'react';

import { useCompany } from '../../hooks/useCompany';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ConfirmModal } from '../../components/ConfirmModal';
import { FetchItemList } from '../../components/FetchItemList';

import { Container, Content, Title, Section, SubSection } from './styles';
import { WarningMessage } from '../../components/WarningMessage';

export const SearchCompany = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [companySelected, setCompanySelected] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const { company, handleDeleteCompany } = useCompany();

  const handleModalShown = () => setIsModalShown(!isModalShown);

  const handleCompanySelected = (name: string) => setCompanySelected(name);

  const handleOnConfirmModal = async () => {
    try {
      await handleDeleteCompany(companySelected);
      handleModalShown();
    } catch (error) {
      setWarningMessage('Não foi possivel deletar, tente novamente mais tarde');
    }
  };

  return (
    <Container>
      <Navbar />

      <Content>
        <Sidebar
          title={['Pesquisar empresa', 'Pesquisar sistema']}
          path={['/searchCompany', '/searchData']}
        />

        <Section>
          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

            <Title size={14}>Empresas cadastradas</Title>
            <Spacer height={20} />

            <WarningMessage title={warningMessage} />
            <Spacer height={10} />

            <FetchItemList
              title={['Nome', 'CNPJ']}
              data={company}
              handleModalShown={handleModalShown}
              handleCompanySelected={handleCompanySelected}
            />
          </SubSection>
        </Section>
      </Content>
      {isModalShown && (
        <ConfirmModal
          handleModalShown={handleModalShown}
          handleOnConfirmModal={handleOnConfirmModal}
        />
      )}
    </Container>
  );
};
