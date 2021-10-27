import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { FetchItemList } from '../../components/FetchItemList';

import { Container, Content, Title, Section, SubSection } from './styles';

// eslint-disable-next-line arrow-body-style
export const SearchCompany = () => {
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

            <Title size={14}>Pesquisar empresas</Title>
            <Spacer height={40} />

            <FetchItemList />
          </SubSection>
        </Section>
      </Content>
    </Container>
  );
};
