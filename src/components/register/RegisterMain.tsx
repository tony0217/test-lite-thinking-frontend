import React from 'react';

import { styled } from '@mui/material';
import Grid, { GridProps } from '@mui/material/Grid';
import Typography, { TypographyProps } from '@mui/material/Typography';

const ContainerTable = styled(Grid)<GridProps>(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: theme.spacing(12),
}));

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4)
}));

function RegisterMain() {
  return (
    <ContainerTable container>
      RegisterMain
    </ContainerTable>
  );
}

export default RegisterMain;