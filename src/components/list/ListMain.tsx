import React from 'react';

import { styled } from '@mui/material';
import Grid, { GridProps } from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

import ListCompany from './ListCompany';

const ContainerTable = styled(Grid)<GridProps>(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: theme.spacing(12),
}));


function ListMain() {

  return (
    <Fade in timeout={350}>
      <ContainerTable container>
        <ListCompany />
      </ContainerTable>
    </Fade>

  );
}

export default ListMain;