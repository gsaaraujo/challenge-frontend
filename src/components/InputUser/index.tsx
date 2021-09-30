import React, { useState } from 'react';

import userIcon from '../../assets/icons/user.svg';
import eyeOnIcon from '../../assets/icons/eye-on.svg';
import eyeOffIcon from '../../assets/icons/eye-off.svg';

import { Container, ActionIcon } from './styles';

type Props = {
  // eslint-disable-next-line react/require-default-props
  isPassword?: boolean;
};

export const InputUser = ({ isPassword = false }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

  const handleIsPasswordVisible = () =>
    setIsPasswordVisible(!isPasswordVisible);

  return (
    <Container>
      <input type={isPasswordVisible ? 'password' : 'text'} maxLength={30} />

      {isPassword ? (
        <ActionIcon onClick={handleIsPasswordVisible}>
          <img
            src={isPasswordVisible ? eyeOffIcon : eyeOnIcon}
            alt='eyeOnIcon'
            width={24}
            height={24}
          />
        </ActionIcon>
      ) : (
        <img src={userIcon} alt='userIcon' width={24} height={24} />
      )}
    </Container>
  );
};
