/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { ReactComponent as Exit } from '../../assets/icons/x-circle.svg';
import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';

import { useCompany } from '../../hooks/useCompany';
import { useClientData } from '../../hooks/useClientData';

import { Company } from '../../context/companyProvider';
import { ClientData } from '../../context/clientDataProvider';

import { Spacer } from '../Spacer';
import { ItemField } from '../ItemField';
import { WarningMessage } from '../WarningMessage';

import { ActionButton } from '../ActionButton';

import {
  Container,
  Content,
  Title,
  WrapperIcon,
  Section,
  ItemName,
  SubSection,
} from './styles';

type Props = {
  clientDataSelected: ClientData;
  handleModalShown: () => void;
};

export const ClientDataUpdatedModal = ({
  clientDataSelected,
  handleModalShown,
}: Props) => {
  const [isDropActivated, setIsDropActivated] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const { clientData, handleAddClientData } = useClientData();
  const { company } = useCompany();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ClientData>();

  const handleOnSubmit = async (data: ClientData) => {
    if (itemSelected === '') {
      setWarningMessage('Todos os campos são necessários');
    } else {
      try {
        data.company.name = itemSelected;
        // await handleAddClientData(data);
      } catch (error) {
        setWarningMessage(
          'Não foi possível atualizar, tente novamente mais tarde',
        );
      }
    }
  };

  const handleDropActivated = () => setIsDropActivated(!isDropActivated);

  const handleItemSelected = (title: string) => {
    setItemSelected(title);
    setIsDropActivated(false);
  };

  return (
    <Container>
      <Content>
        <WrapperIcon>
          <Exit onClick={handleModalShown} />
        </WrapperIcon>
        <Section onSubmit={handleSubmit(handleOnSubmit)}>
          <SubSection>
            <Spacer height={30} />

            <Title size={16}>Atualizar dados</Title>
            <Spacer height={30} />

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
                  defaultValue={clientDataSelected.syystem.name}
                  props={{ ...register('syystem', { required: true }) }}
                />
                <Spacer height={15} />

                <ItemField
                  title='Proprietário do dado'
                  defaultValue={clientDataSelected.client.name}
                  props={register('client', { required: true })}
                />

                <Spacer height={15} />

                <ItemField
                  title='Origem'
                  defaultValue={clientDataSelected.module}
                  props={register('module', { required: true })}
                />

                <Spacer height={15} />

                <div style={{ display: 'flex', marginBottom: 20 }}>
                  <>
                    <ItemField
                      title='Campo'
                      defaultValue={clientDataSelected.label}
                      props={register('label', { required: true })}
                    />
                    <Spacer width={30} />
                    <ItemField
                      title='Valor'
                      defaultValue={clientDataSelected.value}
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

                <ActionButton title='Atualizar' width='100%' />
              </>
            </>
          </SubSection>
        </Section>
      </Content>
    </Container>
  );
};
