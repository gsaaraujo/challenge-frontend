import React, { createContext, ReactNode, useEffect, useState } from 'react';

import defaultUserPhoto from '../assets/images/defaultUserPhoto.jpg';

type User = {
  name: string;
  photoUrl: string;
};

type Data = {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  handleAuthentication: (name: string) => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<Data>({} as Data);

// eslint-disable-next-line arrow-body-style
export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem('Name');

    if (userName) {
      setUser({
        name: userName,
        photoUrl: defaultUserPhoto,
      });
    }

    setIsLoading(false);
  }, [isLoading]);

  const handleAuthentication = (name: string) => {
    setIsLoading(true);

    localStorage.setItem('Name', name);
  };

  return (
    <AuthContext.Provider value={{ user, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};
