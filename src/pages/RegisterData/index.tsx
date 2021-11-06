/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';

import { useCompany } from '../../hooks/useCompany';
import { useClientData } from '../../hooks/useClientData';

import { ClientData } from '../../context/clientDataProvider';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ItemField } from '../../components/ItemField';
import { ActionButton } from '../../components/ActionButton';
import { WarningMessage } from '../../components/WarningMessage';
import { DataSubmitedMsg } from '../../components/DataSubmitedMsg';

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
  const [warningMessage, setWarningMessage] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);

  const { handleAddClientData } = useClientData();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ClientData>();

  const { company } = useCompany();

  const handleDropActivated = () => setIsDropActivated(!isDropActivated);

  const handleSubmited = (state: boolean) => setIsSubmited(state);

  const handleItemSelected = (title: string) => {
    setItemSelected(title);
    setIsDropActivated(false);
  };

  const handleOnSubmit = async (data: ClientData) => {
    if (itemSelected === '') {
      setWarningMessage('Todos os campos são necessários');
    } else {
      try {
        data.company.name = itemSelected;
        await handleAddClientData(data);
        handleSubmited(true);
      } catch (error) {
        setWarningMessage(
          'Não foi possível cadastrar, tente novamente mais tarde',
        );
      }
    }
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar
          title={['Cadastrar empresa', 'Cadastrar dados']}
          path={['/registerCompany', '/registerData']}
        />

        {isSubmited ? (
          <div style={{ marginLeft: 50 }}>
            <Spacer height={50} />
            <DataSubmitedMsg handleOnClick={handleSubmited} />
          </div>
        ) : (
          <Section onSubmit={handleSubmit(handleOnSubmit)}>
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
                  company!.map((each, index) => (
                    <ItemName
                      key={index}
                      onClick={() => handleItemSelected(each.name)}>
                      <Spacer width={35} />
                      <Title size={14}>{each.name}</Title>
                    </ItemName>
                  ))}

                <Spacer height={10} />

                <>
                  <Spacer height={15} />
                  <ItemField
                    title='Sistema'
                    props={{ ...register('syystem', { required: true }) }}
                  />
                  <Spacer height={15} />

                  <ItemField
                    title='Proprietário do dado'
                    props={register('client', { required: true })}
                  />

                  <Spacer height={15} />

                  <ItemField
                    title='Origem'
                    props={register('module', { required: true })}
                  />

                  <Spacer height={15} />

                  <div style={{ display: 'flex', marginBottom: 20 }}>
                    <>
                      <ItemField
                        title='Campo'
                        props={register('label', { required: true })}
                      />
                      <Spacer width={30} />
                      <ItemField
                        title='Valor'
                        props={register('value', { required: true })}
                      />
                      <Spacer width={10} />
                    </>
                  </div>
                  {((errors.syystem ||
                    errors.client ||
                    errors.module ||
                    errors.label ||
                    errors.value) && (
                    <WarningMessage title='Todos os campos são necessário' />
                  )) || <WarningMessage title={warningMessage} />}

                  <Spacer height={25} />

                  <ActionButton title='Cadastrar' width='100%' />
                </>
              </>
            </SubSection>
          </Section>
        )}
      </Content>
    </Container>
  );
};
