import React from 'react';

import { Container } from './styles';

type Props = {
  imageURL: string;
};

export const ProfilePhoto = ({ imageURL }: Props) => (
  <Container>
    <img
      src={imageURL}
      alt='noUser'
      width={32}
      height={32}
      style={{ borderRadius: 16, borderWidth: 2, borderColor: 'white' }}
    />
  </Container>
);
