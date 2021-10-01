import React from 'react';

type Props = {
  imageURL: string;
};

export const ProfilePhoto = ({ imageURL }: Props) => (
  <>
    <img
      src={imageURL}
      alt='noUser'
      width={34}
      height={34}
      style={{
        borderRadius: 17,
        border: '3px solid #FFFFFF',
        objectFit: 'cover',
      }}
    />
  </>
);
