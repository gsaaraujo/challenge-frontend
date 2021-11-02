/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';

import { ReactComponent as Exit } from '../../assets/icons/x-circle.svg';

import { useCompany } from '../../hooks/useCompany';

import { Spacer } from '../Spacer';
import { ItemField } from '../ItemField';
import { WarningMessage } from '../WarningMessage';

import { cnpjValidation } from '../../utils/cnpjValidation';

import {
  Container,
  Content,
  Title,
  Button,
  Action,
  WrapperIcon,
} from './styles';

type Props = {
  companySelected: number;
  handleModalShown: () => void;
};

export const CompanyUpdateModal = ({
  companySelected,
  handleModalShown,
}: Props) => {
  const [warningMessage, setWarningMessage] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyCNPJ, setCompanyCNPJ] = useState('');
  const [companyCNPJMask, setCompanyCNPJMask] = useState('');

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  const { handleUpdateCompany } = useCompany();

  const handleCompanyName = (name: string) => setCompanyName(name);

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

  const handleOnConfirmUpdateModal = async (event: any) => {
    const companyNameEmpty = !companyName.trim().length;
    const companyCNPJEmpty = !companyCNPJ.trim().length;
    const cnpjNotValid = !cnpjValidation(companyCNPJ);

    event.preventDefault();

    if (companyNameEmpty || companyCNPJEmpty) {
      setWarningMessage('Todos os campos são necessários');
    } else if (cnpjNotValid) {
      setWarningMessage('CNPJ inválido');
    } else {
      setWarningMessage('');

      try {
        await handleUpdateCompany(
          companySelected,
          companyName.trim(),
          companyCNPJ.trim(),
        );

        setCompanyName('');
        setCompanyCNPJ('');
        setCompanyCNPJMask('');

        handleModalShown();
      } catch (error) {
        if (JSON.stringify(error).match(/code 403/)) {
          setWarningMessage('Empresa já cadastrada');
        } else {
          setWarningMessage(
            'Não foi possível atualizar, tente novamente mais tarde',
          );
        }
      }
    }
  };

  return (
    <Container>
      <animated.div style={props}>
        <Content onSubmit={event => handleOnConfirmUpdateModal(event)}>
          <WrapperIcon>
            <Exit onClick={handleModalShown} />
          </WrapperIcon>

          <Title>Atualizar dados</Title>
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

          <Action>
            <Button>Atualizar dados</Button>
          </Action>
        </Content>
      </animated.div>
    </Container>
  );
};
