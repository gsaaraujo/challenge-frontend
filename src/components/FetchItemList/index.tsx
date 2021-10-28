import React from 'react';
import { Company } from '../../context/companyProvider';

import { Container, Title, Collection, Item } from './styles';

type Props = {
  data: Company[] | null;
};

// eslint-disable-next-line arrow-body-style
export const FetchItemList = ({ data }: Props) => {
  return (
    <Container>
      <Collection>
        {data === null ? (
          <Title>Nenhuma empresa cadastrada</Title>
        ) : (
          data.map(company => (
            <Item>
              <Title>{company.name}</Title>
            </Item>
          ))
        )}
      </Collection>
    </Container>
  );
};
