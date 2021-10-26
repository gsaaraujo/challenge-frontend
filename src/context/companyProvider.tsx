import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { baseApi } from '../services/api';

type Company = {
  name: string;
  cnpj: string;
};

type Data = {
  company: Company | null;
  // eslint-disable-next-line no-unused-vars
  handleAddCompany: (name: string, cnpj: string) => Promise<void>;
};

type Props = {
  children: ReactNode;
};

export const CompanyContext = createContext<Data>({} as Data);

export const CompanyProvider = ({ children }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  const handleAddCompany = async (
    name: string,
    cnpj: string,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.post('/companies', { name, cnpj });
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `Error: ${error}`;
    }
  };

  return (
    <CompanyContext.Provider value={{ company, handleAddCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
