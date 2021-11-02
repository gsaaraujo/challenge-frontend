import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';

import { Container } from './styles';

// eslint-disable-next-line arrow-body-style
export const SearchData = () => {
  return (
    <Container>
      <Navbar />

      <Sidebar
        title={['Pesquisar empresa', 'Pesquisar dados']}
        path={['/searchCompany', '/searchData']}
      />
    </Container>
  );
};
