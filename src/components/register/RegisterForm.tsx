import React from 'react';

import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ApartmentIcon from '@mui/icons-material/Apartment';

import RegisterFomInputs from './RegisterFomInputs';

const ContentImage = styled(Grid)<GridProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage: 'url(https://source.unsplash.com/random)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
}));

const ContentForm = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(4, 4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

function RegisterForm() {

  return (
    <Grid container sx={{ height: 450, p: 15, }}>
      <ContentImage item xs={false} sm={4} md={5} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <ContentForm >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }}>
            <ApartmentIcon />
          </Avatar>
          <Typography component="h1">
            Registrar Empresa
          </Typography>
          <RegisterFomInputs />
        </ContentForm>
      </Grid>
    </Grid>
  )
}


export default RegisterForm;