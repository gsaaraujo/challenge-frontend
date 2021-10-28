/* eslint-disable no-shadow */
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import defaultUserPhoto from '../assets/images/defaultUserPhoto.jpg';

import { baseApi } from '../services/api';

type User = {
  user: string;
  photoUrl: string;
};

type Data = {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  handleAuthentication: (user: string, password: string) => Promise<void> 
  handleLogOut: () => void;
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
    const userName = localStorage.getItem('User');

    if (userName) {
      setUser({
        user: userName,
        photoUrl: defaultUserPhoto,
      });
    } else {
      setUser(null);
    }

    setIsLoading(false);
  }, [isLoading]);

  const handleAuthentication = async (user: string, password: string): Promise<void>  => {
    try {
      const response = await baseApi.post('/auths', { user, password });

      if(response.status === 200) {
        localStorage.setItem('User', user);
      }

      setIsLoading(true);
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `Error: ${error}`;
    }
  };

  const handleLogOut = () => {
    setIsLoading(true);

    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, handleAuthentication, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
