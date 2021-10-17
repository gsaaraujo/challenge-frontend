import React, { useState } from 'react';

import { ReactComponent as Aperture } from '../../assets/icons/aperture.svg';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ListItem } from '../../components/ListItem';
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
  const [isItemFieldActivated, setIsItemFieldActivated] = useState(false);
  const [itemFieldSelected, setItemFieldSelected] = useState(
    'Selecione uma empresa',
  );

  const handleIsItemFieldActivated = (title: string) => {
    // eslint-disable-next-line no-unused-expressions
    itemFieldSelected === title
      ? setItemFieldSelected('Selecione uma empresa')
      : setItemFieldSelected(title);

    setIsItemFieldActivated(!isItemFieldActivated);
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar />

        <Section>
          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

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

          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

            <Title size={14}>Cadastrar dados</Title>
            <Spacer height={40} />

            <>
              <ItemName>
                <Aperture />
                <Spacer width={10} />

                <Title size={16}>{itemFieldSelected}</Title>
              </ItemName>
              <Spacer height={10} />

              <>
                <Spacer height={15} />
                <ItemField title='Sistema' />
                <Spacer height={15} />

                <ItemField title='Proprietário do dado' />
                <Spacer height={15} />

                <div style={{ display: 'flex', marginBottom: 20 }}>
                  <>
                    <ItemField title='Campo' />
                    <Spacer width={30} />
                    <ItemField title='Value' />
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
