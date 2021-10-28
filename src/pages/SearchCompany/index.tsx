/* eslint-disable no-unused-vars */
import React from 'react';

import { useCompany } from '../../hooks/useCompany';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { FetchItemList } from '../../components/FetchItemList';

import { Container, Content, Title, Section, SubSection } from './styles';

export const SearchCompany = () => {
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
            <Spacer height={40} />

            <FetchItemList data={company} />
          </SubSection>
        </Section>
      </Content>
    </Container>
  );
};
