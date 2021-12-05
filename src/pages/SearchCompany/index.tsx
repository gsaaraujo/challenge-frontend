/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';

import ReactLoading from 'react-loading';
import { AppColors } from '../../constants/app_colors';

import { useCompany } from '../../hooks/useCompany';
import { Company } from '../../context/companyProvider';

import { Navbar } from '../../components/Navbar';
import { Spacer } from '../../components/Spacer';
import { Sidebar } from '../../components/Sidebar';
import { ConfirmModal } from '../../components/ConfirmModal';
import { SearchItemList } from '../../components/SearchItemList';
import { WarningMessage } from '../../components/WarningMessage';
import { CompanyUpdateModal } from '../../components/CompanyUpdateModal';
import { CompanyFetchItemList } from '../../components/CompanyFetchItemList';

import { Container, Content, Title, Section, SubSection } from './styles';

export const SearchCompany = () => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isUpdateModalShown, setIsUpdateModalShown] = useState(false);
  const [companySelected, setCompanySelected] = useState<Company>(
    {} as Company,
  );
  const [warningMessage, setWarningMessage] = useState('');
  const [searchText, setSearchText] = useState('');
  const [companyFiltered, setCompanyFiltered] = useState<Company[] | null>([]);

  const { company, isLoading, handleDeleteCompany } = useCompany();

  useEffect(() => {
    handleFilterText();
  }, [company, searchText]);

  const handleFilterText = () => {
    if (company) {
      company.forEach(each => {
        each.cnpj = each.cnpj.replace(
          /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5',
        );
      });

      let companyCopy = company;
      const regex = new RegExp(searchText, 'i');

      if (searchText && companyCopy !== null) {
        companyCopy = companyCopy.filter(each => each.name.match(regex));

        setCompanyFiltered(companyCopy);
      } else {
        setCompanyFiltered(company);
      }
    }
  };

  const handleDeleteModalShown = () =>
    setIsDeleteModalShown(!isDeleteModalShown);

  const handleUpdateModalShown = () =>
    setIsUpdateModalShown(!isUpdateModalShown);

  const handleCompanySelected = (company: Company) =>
    setCompanySelected(company);

  const handleSearchText = (text: string) => setSearchText(text);

  const handleOnConfirmDeleteModal = async () => {
    try {
      await handleDeleteCompany(companySelected.id);
      handleDeleteModalShown();
    } catch (error) {
      setWarningMessage('Não foi possivel deletar, tente novamente mais tarde');
    }
  };

  return (
    <Container>
      <Navbar />

      <Content>
        <Sidebar
          title={['Pesquisar empresa', 'Pesquisar dados']}
          path={['/searchCompany', '/searchData']}
        />

        <Section>
          <Spacer width={50} />

          <SubSection>
            <Spacer height={50} />

            <Title size={14}>Empresas cadastradas</Title>
            <Spacer height={30} />

            <SearchItemList
              title='Procurar empresa'
              placeholder='Procurar por nome'
              handleOnChange={handleSearchText}
            />
            <Spacer height={10} />

            <WarningMessage title={warningMessage} />
            <Spacer height={10} />

            {isLoading ? (
              <ReactLoading
                type='spinningBubbles'
                color={AppColors.primary}
                height='15%'
                width='15%'
              />
            ) : (
              <CompanyFetchItemList
                data={companyFiltered}
                handleDeleteModalShown={handleDeleteModalShown}
                handleUpdateModalShown={handleUpdateModalShown}
                handleItemSelected={handleCompanySelected}
              />
            )}
          </SubSection>
        </Section>
      </Content>

      {isDeleteModalShown && (
        <ConfirmModal
          handleModalShown={handleDeleteModalShown}
          handleOnConfirmModal={handleOnConfirmDeleteModal}
        />
      )}

      {isUpdateModalShown && (
        <CompanyUpdateModal
          handleModalShown={handleUpdateModalShown}
          companySelected={companySelected}
        />
      )}
    </Container>
  );
};
