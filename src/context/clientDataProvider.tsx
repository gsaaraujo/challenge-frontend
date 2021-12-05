/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { baseApi } from '../services/api';

type Client = {
  name: string;
};

export type Company = {
  name: string;
  cnpj: string;
};

type Syystem = {
  name: string;
};

export type ClientData = {
  id: number;
  company: Company;
  client: Client;
  syystem: Syystem;
  label: string;
  value: string;
  module: string;
};

type Data = {
  clientData: [ClientData[]] | null;
  isLoading: boolean;
  handleAddClientData: (data: ClientData) => Promise<void>;
  handleUpdateClientData: (
    id: number,
    name: string,
    cnpj: string,
  ) => Promise<void>;
  handleDeleteClientData: (id: number) => Promise<void>;
  handleGetAllClientsData: () => void;
};

type Props = {
  children: ReactNode;
};

export const ClientDataContext = createContext<Data>({} as Data);

export const ClientDataProvider = ({ children }: Props) => {
  // eslint-disable-next-line no-unused-vars
  const [clientData, setClientData] = useState<[ClientData[]] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleGetAllClientsData();

    setIsLoading(false);
  }, [isLoading]);

  const handleAddClientData = async (data: ClientData): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.post('/clientData', data);
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    }
  };

  const handleUpdateClientData = async (
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

  const handleDeleteClientData = async (id: number): Promise<void> => {
    try {
      setIsLoading(true);

      await baseApi.delete(`/clientData/${id}`);
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    }
  };

  const handleGetAllClientsData = async () => {
    try {
      setIsLoading(true);
      await baseApi.get('/lgpdApi');
      const response: any = await baseApi.get('/clientsData');

      const { length } = Object.keys(response.data);
      const newArray = [];

      for (let x = 1; x <= length; x++) {
        newArray.push(response.data[String(x)]);
      }

      if (newArray) {
        setClientData(newArray as [ClientData[]]);
      }
    } catch (error) {
      // eslint-disable-next-line no-throw-literal
      throw `${error}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ClientDataContext.Provider
      value={{
        clientData,
        isLoading,
        handleAddClientData,
        handleUpdateClientData,
        handleDeleteClientData,
        handleGetAllClientsData,
      }}>
      {children}
    </ClientDataContext.Provider>
  );
};
