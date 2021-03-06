/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { baseApi } from '../services/api';

export type Company = {
  id: number;
  name: string;
  cnpj: string;
};

type Data = {
  company: Company[] | null;
  isLoading: boolean;
  handleAddCompany: (name: string, cnpj: string) => Promise<void>;
  handleUpdateCompany: (
    id: number,
    name: string,
    cnpj: string,
  ) => Promise<void>;
  handleDeleteCompany: (id: number) => Promise<void>;
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
      throw `${error}`;
    }
  };

  const handleUpdateCompany = async (
    id: number,
    name: string,
    cnpj: string,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.put(`/companies/${id}`, { name, cnpj });
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    }
  };

  const handleDeleteCompany = async (id: number): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.delete(`/company/${id}`);
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    }
  };

  const handleGetAllCompanies = async () => {
    try {
      setIsLoading(true);

      const response: any = await baseApi.get('/companies');

      if (response.data) {
        setCompany(response.data as Company[]);
      }
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CompanyContext.Provider
      value={{
        company,
        isLoading,
        handleAddCompany,
        handleUpdateCompany,
        handleDeleteCompany,
        handleGetAllCompanies,
      }}>
      {children}
    </CompanyContext.Provider>
  );
};
