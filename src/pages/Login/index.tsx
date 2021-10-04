import React, { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { AppColors } from '../../constants/app_colors';

import { Spacer } from '../../components/Spacer';
import { InputUser } from '../../components/InputUser';
import { Footer } from '../../components/Footer';
import { ActionButton } from '../../components/ActionButton';

import {
  Container,
  Header,
  Title,
  WarningMessage,
  Section,
  LoginContent,
} from './styles';

export const Login = () => {
  const [warningMessage, setWarningMessage] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { heading100 } = AppColors;

  const { handleAuthentication } = useAuth();

  const handleUser = (title: string) => setUser(title);
  const handlePassword = (title: string) => setPassword(title);

  const handleSubmit = () => {
    const userEmpty = !user.trim().length;
    const passwordEmpty = !password.trim().length;

    if (userEmpty && passwordEmpty) {
      setWarningMessage('Campos usuário e senha são necessários');
    } else if (userEmpty) {
      setWarningMessage('Campo usuário é necessário');
    } else if (passwordEmpty) {
      setWarningMessage('Campo senha é necessário');
    } else if (user === 'admin' && password === 'admin') {
      handleAuthentication('Gabriel Araujo');
    } else {
      setWarningMessage('Usuário ou senha inválidos');
    }
  };

  return (
    <Container>
      <Header />

      <Section>
        <LoginContent onSubmit={handleSubmit}>
          <Title color={heading100}>Usuário</Title>
          <Spacer height={5} />

          <InputUser handleOnChange={handleUser} />

          <Spacer height={20} />

          <Title color={heading100}>Senha</Title>
          <Spacer height={5} />

          <InputUser isPassword handleOnChange={handlePassword} />

          <Spacer height={10} />
          <WarningMessage>{warningMessage}</WarningMessage>
          <Spacer height={25} />

          <ActionButton title='Entrar' handleOnClick={handleSubmit} />
        </LoginContent>
      </Section>

      <Footer />
    </Container>
  );
};
