/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';
import { ReactComponent as PlusSquare } from '../../assets/icons/plus-square.svg';
import { ReactComponent as MinusSware } from '../../assets/icons/minus-square.svg';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { ListItem } from '../../components/ListItem';
import { ItemField } from '../../components/ItemField';
import { ActionButton } from '../../components/ActionButton';
import { AddRemoveButton } from '../../components/AddRemoveButton';

import {
  Container,
  Section,
  SubSection,
  Title,
  ItemName,
  WrapperIcon,
} from './styles';

export const RegisterData = () => {
  const [isDropDownActivated, setIsDropDownActivated] = useState(false);
  const [isItemFieldActivated, setIsItemFieldActivated] = useState(false);
  const [itemFieldSelected, setItemFieldSelected] = useState('');
  const [qtdItemField, setQtdItemField] = useState<number[]>([1]);

  console.log('a');

  const handleIsDropDownActivated = () =>
    setIsDropDownActivated(!isDropDownActivated);

  const handleIsItemFieldActivated = (title: string) => {
    // eslint-disable-next-line no-unused-expressions
    itemFieldSelected === title
      ? setItemFieldSelected('')
      : setItemFieldSelected(title);

    setIsItemFieldActivated(!isItemFieldActivated);
  };

  const handleQtdItemField = (option: string) => {
    let item: number[] = qtdItemField;

    if (option === 'add') {
      item.push(1);
      setQtdItemField([...item]);
    } else if (option === 'remove' && qtdItemField.length > 1) {
      item.pop();
      setQtdItemField([...item]);
    }
  };

  return (
    <Container>
      <Navbar />

      <Spacer height={30} />

      <Section>
        <SubSection>
          <AddRemoveButton
            isActivated={isDropDownActivated}
            handleOnClick={handleIsDropDownActivated}
          />
          <Spacer height={40} />

          {isDropDownActivated && (
            <>
              <Title size={16}>Cadastrar empresa</Title>
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
            </>
          )}
        </SubSection>

        <SubSection>
          <Spacer height={60} />

          <Title size={14}>Empresas cadastradas</Title>
          <Spacer height={40} />
          <ListItem
            title='TOTVS'
            width='324px'
            isActivated={itemFieldSelected === 'TOTVS'}
            handleOnClick={handleIsItemFieldActivated}
          />
          <ListItem
            title='GSA'
            width='324px'
            isActivated={itemFieldSelected === 'GSA'}
            handleOnClick={handleIsItemFieldActivated}
          />
        </SubSection>

        <SubSection>
          <Spacer height={60} />

          <Title size={14}>Cadastrar dados</Title>
          <Spacer height={40} />

          <div>
            <ItemName>
              <Aperture />
              <Spacer width={10} />

              <Title size={16}>{itemFieldSelected}</Title>
            </ItemName>
            <Spacer height={10} />

            {itemFieldSelected && (
              <>
                <ActionButton
                  title='Adicionar campo'
                  width='160px'
                  handleOnClick={() => handleQtdItemField('add')}
                />
                <Spacer height={20} />

                {qtdItemField.map(each => (
                  <div style={{ display: 'flex', marginBottom: 20 }}>
                    <>
                      <ItemField title='Campo' />
                      <Spacer width={30} />
                      <ItemField title='Value' />
                      <Spacer width={10} />
                      <WrapperIcon onClick={() => handleQtdItemField('remove')}>
                        <MinusSware />
                      </WrapperIcon>
                    </>
                  </div>
                ))}
                <ActionButton
                  title='Cadastrar'
                  width='100%'
                  handleOnClick={() => {}}
                />
              </>
            )}
          </div>
        </SubSection>
      </Section>
    </Container>
  );
};
