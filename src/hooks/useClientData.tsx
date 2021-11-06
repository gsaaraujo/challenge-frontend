import { useContext } from 'react';
import { ClientDataContext } from '../context/clientDataProvider';

export const useClientData = () => {
  const context = useContext(ClientDataContext);

  return context;
};
