import React, { useState } from 'react';

import { ReactComponent as PlusSquare } from '../../assets/icons/plus-square.svg';
import { ReactComponent as MinusSware } from '../../assets/icons/minus-square.svg';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { DropBoxItem } from '../../components/DropBoxItem';

import { Container, Section, Form, Field, Title, AddItem } from './styles';

// eslint-disable-next-line arrow-body-style
export const RegisterData = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFormVisible = (e: any) => {
    e.preventDefault();

    setIsFormVisible(!isFormVisible);
  };

  return (
    <Container>
      <Navbar />

      <Section>
        <Spacer height={30} />

        <AddItem onClick={handleFormVisible}>
          {isFormVisible ? <MinusSware /> : <PlusSquare />}
          <Spacer width={5} />
          {isFormVisible ? <Title>Remover</Title> : <Title>Adicionar</Title>}
        </AddItem>

        <Spacer height={30} />

        <Form onSubmit={handleFormVisible}>
          <Field>{isFormVisible && <DropBoxItem title='Empresa' />}</Field>

          <Spacer width={30} />

          <Field>{/* <DropBoxItem title='Sistema' /> */}</Field>
        </Form>
      </Section>
    </Container>
  );
};
