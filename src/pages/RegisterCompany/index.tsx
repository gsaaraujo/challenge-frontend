/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import { useCompany } from '../../hooks/useCompany';

import { cnpjValidation } from '../../utils/cnpjValidation';

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
  const [companyCNPJMask, setCompanyCNPJMask] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  const { handleAddCompany } = useCompany();

  const handleCompanyName = (name: string) => setCompanyName(name.trim());

  const handleCompanyCNPJ = (cnpj: string) => {
    let cnpjCopy = cnpj;

    cnpjCopy = cnpjCopy.replace(/\D/g, '');
    cnpjCopy = cnpjCopy.replace(/^(\d{2})(\d)/, '$1.$2');
    cnpjCopy = cnpjCopy.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    cnpjCopy = cnpjCopy.replace(/\.(\d{3})(\d)/, '.$1/$2');
    cnpjCopy = cnpjCopy.replace(/(\d{4})(\d)/, '$1-$2');

    setCompanyCNPJMask(cnpjCopy);

    cnpjCopy = cnpjCopy.replace(/[^\d]+/g, '');
    setCompanyCNPJ(cnpjCopy);
  };

  const handleSubmited = (state: boolean) => setIsSubmited(state);

  const handleOnSubmit = async () => {
    const companyNameEmpty = !companyName.trim().length;
    const companyCNPJEmpty = !companyCNPJ.trim().length;
    const cnpjNotValid = !cnpjValidation(companyCNPJ);

    if (companyNameEmpty || companyCNPJEmpty) {
      setWarningMessage('Todos os campos são necessários');
    } else if (cnpjNotValid) {
      setWarningMessage('CNPJ inválido');
    } else {
      setWarningMessage('');

      try {
        await handleAddCompany(companyName, companyCNPJ);
        setCompanyName('');
        setCompanyCNPJ('');
        setCompanyCNPJMask('');
        handleSubmited(true);
      } catch (error) {
        if (JSON.stringify(error).match(/code 403/)) {
          setWarningMessage('Empresa já cadastrada');
        } else {
          setWarningMessage(
            'Não foi possível cadastrar, tente novamente mais tarde',
          );
        }
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
              value={companyCNPJMask}
              maxLength={18}
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
