import React, { useState } from 'react';

import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';

import { useCompany } from '../../hooks/useCompany';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ItemField } from '../../components/ItemField';
import { ActionButton } from '../../components/ActionButton';

import {
  Container,
  Section,
  SubSection,
  Title,
  ItemName,
  Content,
} from './styles';

export const RegisterData = () => {
  const [isDropActivated, setIsDropActivated] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  // const [system, setSystem] = useState('');
  // const [field, setField] = useState('');
  // const [module, setModule] = useState('');

  const { company } = useCompany();

  const handleDropActivated = () => setIsDropActivated(!isDropActivated);

  const handleItemSelected = (title: string) => {
    setItemSelected(title);
    setIsDropActivated(false);
  };

  // const handleOnSubmit = async (event: any) => {
  //   const companyNameEmpty = !companyName.trim().length;
  //   const companyCNPJEmpty = !companyCNPJ.trim().length;
  //   const cnpjNotValid = !cnpjValidation(companyCNPJ);

  //   event.preventDefault();

  //   if (companyNameEmpty || companyCNPJEmpty) {
  //     setWarningMessage('Todos os campos são necessários');
  //   } else if (cnpjNotValid) {
  //     setWarningMessage('CNPJ inválido');
  //   } else {
  //     setWarningMessage('');

  //     try {
  //       await handleAddCompany(companyName, companyCNPJ);
  //       setCompanyName('');
  //       setCompanyCNPJ('');
  //       setCompanyCNPJMask('');
  //       handleSubmited(true);
  //     } catch (error) {
  //       if (JSON.stringify(error).match(/code 403/)) {
  //         setWarningMessage('Empresa já cadastrada');
  //       } else {
  //         setWarningMessage(
  //           'Não foi possível cadastrar, tente novamente mais tarde',
  //         );
  //       }
  //     }
  //   }
  // };

  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar
          title={['Cadastrar empresa', 'Cadastrar dados']}
          path={['/registerCompany', '/registerData']}
        />

        <Section>
          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

            <Title size={16}>Cadastrar dados</Title>
            <Spacer height={40} />

            <>
              <ItemName onClick={handleDropActivated}>
                <Aperture />
                <Spacer width={10} />
                {itemSelected === '' ? (
                  <Title size={16}>Selecione uma empresa</Title>
                ) : (
                  <Title size={16}>{itemSelected}</Title>
                )}
              </ItemName>
              {company &&
                isDropActivated &&
                company!.map(each => (
                  <ItemName onClick={() => handleItemSelected(each.name)}>
                    <Spacer width={35} />
                    <Title size={14}>{each.name}</Title>
                  </ItemName>
                ))}

              <Spacer height={10} />

              <>
                <Spacer height={15} />
                <ItemField title='Sistema' handleOnChange={() => {}} />
                <Spacer height={15} />

                <ItemField
                  title='Proprietário do dado'
                  handleOnChange={() => {}}
                />
                <Spacer height={15} />

                <div style={{ display: 'flex', marginBottom: 20 }}>
                  <>
                    <ItemField title='Campo' handleOnChange={() => {}} />
                    <Spacer width={30} />
                    <ItemField title='Valor' handleOnChange={() => {}} />
                    <Spacer width={10} />
                  </>
                </div>
                <ActionButton
                  title='Cadastrar'
                  width='100%'
                  handleOnClick={() => {}}
                />
              </>
            </>
          </SubSection>
        </Section>
      </Content>
    </Container>
  );
};
