import React, { useContext } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { List, ListProps, styled } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';

import LoadingCircular from '@components/shared/LoadingCircular';
import CompanyApiContext from '@core/contexts/CompanyApiContext';
import useInfiniteScroll from '@core/hooks/useInfiniteScroll';

import { Company } from '@core/interfaces/company.interface';

import ListItemCompany from './ListCompanyItem';

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4)
}));

const CompanyContainer = styled(List)<ListProps>(({ theme }) => ({
  // backgroundColor: theme.palette.neutrals.white,
  overflow: 'auto',
  width: '100%',
  mixBlendMode: 'multiply',
  '& :nth-of-type(2n+3)': {
    background: theme.palette.neutrals.session,
  },
}));

function ListCompany() {
  const { getAll } = useContext(CompanyApiContext);
  const { companyList, hasMore, getMoreItems, loading } = useInfiniteScroll(getAll);
  const dataLength = (companyList) ? companyList.length : 0;

  return (
    <CompanyContainer>
      {loading ? (
        <LoadingCircular />
      ) : (
        <>
          <Title>Empresas Registradas</Title>
          {dataLength > 0 ? (
            <InfiniteScroll
              dataLength={dataLength}
              next={getMoreItems}
              hasMore={hasMore}
              loader={
                <h1>
                  <LoadingCircular />
                </h1>
              }
              height={dataLength > 7 ? 350 : 'auto'}
              className="scrollbar"
            >
              {companyList.map((company: Company, index) =>
                <ListItemCompany key={company.name} company={company} index={index} />
              )}
            </InfiniteScroll>
          ) : (
            // <AlertEmpty
            //   firstText="No se encontraron resultados"
            //   SecondText="Realiza nueva búsqueda"
            // />
            'No hay resultados'
          )}
        </>
      )}
    </CompanyContainer>

  )
}

export default ListCompany