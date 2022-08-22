import React from 'react';

import { styled } from '@mui/material';
import Grid, { GridProps } from '@mui/material/Grid';
import Fade from '@mui/material/Fade';

import RegisterForm from './RegisterForm';

const ContainerTable = styled(Grid)<GridProps>(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
}));

function RegisterMain() {
  return (
    <Fade in timeout={350} >
      <ContainerTable container>
        <RegisterForm />
      </ContainerTable>
    </Fade>

  );
}

export default RegisterMain;