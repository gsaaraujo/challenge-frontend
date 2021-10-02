import React from 'react';

type Props = {
  imageURL: string;
};

export const ProfilePhoto = ({ imageURL }: Props) => (
  <>
    <img
      src={imageURL}
      alt='noUser'
      width={40}
      height={40}
      style={{
        borderRadius: 20,
        border: '3px solid #FFFFFF',
        objectFit: 'cover',
      }}
    />
  </>
);
