/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import { useCompany } from '../../hooks/useCompany';

import { Spacer } from '../../components/Spacer';
import { Navbar } from '../../components/Navbar';
import { Sidebar } from '../../components/Sidebar';
import { ItemField } from '../../components/ItemField';
import { ActionButton } from '../../components/ActionButton';
import { DataSubmitedMsg } from '../../components/DataSubmitedMsg';
import { WarningMessage } from '../../components/WarningMessage';

import { Container, Title, Content, Form } from './styles';

export const RegisterCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyCNPJ, setCompanyCNPJ] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const { handleAddCompany } = useCompany();

  const handleCompanyName = (name: string) => setCompanyName(name);
  const handleCompanyCNPJ = (cnpj: string) => setCompanyCNPJ(cnpj);
  const handleSubmited = (state: boolean) => setIsSubmited(state);

  const handleOnSubmit = async () => {
    const companyNameEmpty = !companyName.trim().length;
    const companyCNPJEmpty = !companyCNPJ.trim().length;

    if (companyNameEmpty || companyCNPJEmpty) {
      setWarningMessage('Todos os campos são necessários');
    } else {
      setWarningMessage('');

      try {
        await handleAddCompany(companyName.trim(), companyCNPJ.trim());
        handleSubmited(true);
      } catch (error) {
        setWarningMessage(
          'Não foi possível cadastrar, tente novamente mais tarde',
        );
      } finally {
        setCompanyName('');
        setCompanyCNPJ('');
      }
    }
  };

  return (
    <Container>
      <Navbar />

      <Content>
        <Sidebar
          title={['Cadastrar empresa', 'Cadastrar sistema']}
          path={['/registerCompany', '/registerData']}
        />

        {isSubmited ? (
          <div style={{ marginLeft: 50 }}>
            <Spacer height={50} />
            <DataSubmitedMsg handleOnClick={handleSubmited} />
          </div>
        ) : (
          <Form>
            <Spacer height={50} />

            <Title>Cadastrar empresa</Title>
            <Spacer height={30} />

            <ItemField
              title='Nome'
              width='324px'
              handleOnChange={handleCompanyName}
            />
            <Spacer height={15} />
            <ItemField
              title='CNPJ'
              width='324px'
              handleOnChange={handleCompanyCNPJ}
            />
            <Spacer height={5} />
            <WarningMessage title={warningMessage} />
            <Spacer height={35} />

            <div>
              <ActionButton
                title='Cadastrar'
                width='324px'
                handleOnClick={handleOnSubmit}
              />
            </div>
          </Form>
        )}
      </Content>
    </Container>
  );
};
