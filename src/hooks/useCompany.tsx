import { useContext } from 'react';
import { CompanyContext } from '../context/companyProvider';

export const useCompany = () => {
  const context = useContext(CompanyContext);

  return context;
};
