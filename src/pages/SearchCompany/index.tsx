import React, { useState } from 'react';

import { useCompany } from '../../hooks/useCompany';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ConfirmModal } from '../../components/ConfirmModal';
import { FetchItemList } from '../../components/FetchItemList';

import { Container, Content, Title, Section, SubSection } from './styles';

export const SearchCompany = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalShown = () => setIsModalShown(!isModalShown);

  const { company } = useCompany();

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

            <FetchItemList
              title={['Nome', 'CNPJ']}
              data={company}
              handleModalShown={handleModalShown}
            />
          </SubSection>
        </Section>
      </Content>
      {isModalShown && <ConfirmModal handleModalShown={handleModalShown} />}
    </Container>
  );
};
