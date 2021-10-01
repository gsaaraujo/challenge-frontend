import React, { useState } from 'react';

import noUser from '../../assets/images/no-user.jpg';

import { AppColors } from '../../constants/app_colors';

import { Spacer } from '../../components/Spacer';
import { InputUser } from '../../components/InputUser';
import { Footer } from '../../components/Footer/styles';
import { ProfilePhoto } from '../../components/ProfilePhoto';

import {
  Container,
  Header,
  Title,
  WarningMessage,
  Section,
  LoginContent,
  LoginButton,
} from './styles';

export const Login = () => {
  const [warningMessage, setWarningMessage] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { heading100, heading0 } = AppColors;

  const handleUser = (title: string) => setUser(title);
  const handlePassword = (title: string) => setPassword(title);

  const handleSubmit = () => {
    const userEmpty = !user.trim().length;
    const passwordEmpty = !password.trim().length;

    if (userEmpty) {
      setWarningMessage('Campo usuário é necessário');
    } else if (passwordEmpty) {
      setWarningMessage('Campo senha é necessário');
    }

    if (userEmpty && passwordEmpty) {
      setWarningMessage('Campos usuario e senha são necessarios');
    }

    if (user === 'admin' && password === 'admin') {
      //
    } else {
      setWarningMessage('Usuário ou senha inválidos');
    }
  };

  return (
    <Container>
      <Header>
        <ProfilePhoto imageURL={noUser} />

        <Spacer width={15} />
        <Title color={heading0} weight={400}>
          Faça o Login para continuar ...
        </Title>
      </Header>

      <Section>
        <LoginContent>
          <Title color={heading100} weight={700}>
            Usuário
          </Title>
          <InputUser handleOnChange={handleUser} />

          <Spacer height={20} />

          <Title color={heading100} weight={700}>
            Senha
          </Title>
          <InputUser isPassword handleOnChange={handlePassword} />

          <Spacer height={10} />
          <WarningMessage>{warningMessage}</WarningMessage>
          <Spacer height={45} />

          <LoginButton onClick={handleSubmit}>Entrar</LoginButton>
        </LoginContent>
      </Section>

      <Footer />
    </Container>
  );
};
