/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { baseApi } from '../services/api';

export type Company = {
  name: string;
  cnpj: string;
};

type Data = {
  company: Company[] | null;
  handleAddCompany: (name: string, cnpj: string) => Promise<void>;
  handleDeleteCompany: (name: string) => Promise<void>;
  handleGetAllCompanies: () => void;
};

type Props = {
  children: ReactNode;
};

export const CompanyContext = createContext<Data>({} as Data);

export const CompanyProvider = ({ children }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [company, setCompany] = useState<Company[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetAllCompanies();

    setIsLoading(false);
  }, [isLoading]);

  const handleAddCompany = async (
    name: string,
    cnpj: string,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.post('/company', { name, cnpj });
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `Error: ${error}`;
    }
  };

  const handleDeleteCompany = async (name: string): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.delete(`/company/${name}`);
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `Error: ${error}`;
    }
  };

  const handleGetAllCompanies = async () => {
    try {
      setIsLoading(true);

      const response: any = await baseApi.get('/companies');

      if (response.data) {
        setCompany(response.data.data as Company[]);
      }
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `Error: ${error}`;
    }
  };

  return (
    <CompanyContext.Provider
      value={{
        company,
        handleAddCompany,
        handleDeleteCompany,
        handleGetAllCompanies,
      }}>
      {children}
    </CompanyContext.Provider>
  );
};
