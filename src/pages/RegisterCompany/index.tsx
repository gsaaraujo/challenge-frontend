/* eslint-disable arrow-body-style */
import React from 'react';

import { Spacer } from '../../components/Spacer';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { ItemField } from '../../components/ItemField';
import { ActionButton } from '../../components/ActionButton';

import { Container, Title, Content, Form } from './styles';

export const RegisterCompany = () => {
  return (
    <Container>
      <Navbar />

      <Content>
        <Sidebar />

        <Form>
          <Spacer height={50} />

          <Title>Cadastrar empresa</Title>
          <Spacer height={30} />

          <ItemField title='Nome' width='324px' />
          <Spacer height={30} />
          <ItemField title='CNPJ' width='324px' />
          <Spacer height={35} />

          <div>
            <ActionButton
              title='Cadastrar'
              width='324px'
              handleOnClick={() => {}}
            />
          </div>
        </Form>
      </Content>
    </Container>
  );
};
