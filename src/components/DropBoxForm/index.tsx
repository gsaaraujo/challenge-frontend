import React, { useState } from 'react';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow-down.svg';

import { ActionButton } from '../ActionButton';
import { DropBoxField } from '../DropBoxField';

import { Spacer } from '../Spacer';

import {
  Container,
  Title,
  InputContainer,
  WrapperIcon,
  FieldsContainer,
} from './styles';

type Props = {
  title: string;
};

export const DropBoxForm = ({ title }: Props) => {
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => setIsDropDown(!isDropDown);

  return (
    <Container>
      <InputContainer onClick={handleDropDown}>
        <Title>{title}</Title>

        <WrapperIcon isDropDown={isDropDown}>
          <ArrowDown />
        </WrapperIcon>
      </InputContainer>

      {isDropDown && (
        <FieldsContainer>
          <Spacer height={30} />
          <DropBoxField title='Nome' width='50%' />
          <Spacer height={30} />
          <DropBoxField title='CNPJ' width='50%' />
          <Spacer height={135} />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
            <ActionButton
              title='Cadastrar'
              handleOnSubmit={() => {}}
              width='177px'
            />
          </div>
        </FieldsContainer>
      )}
    </Container>
  );
};
