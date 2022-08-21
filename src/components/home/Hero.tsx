import React from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography, { TypographyProps } from '@mui/material/Typography';

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutrals.white,
  marginBottom: theme.spacing(4)
}));

const MoreBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4),
  '&:hover': {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.primary.main,
  }
}));

function Hero() {
  return (
    <Grid item md={12} pb={18}>
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <Title>
          Lite Thinking
        </Title>
        <Typography variant="body1" sx={{ backgroundColor: '#000000' }} paragraph>
          Servicios y soluciones innovadoras para un mundo digital.
          Somos una Startup digital liderada por un equipo innovador con más de 15 años de experiencia y enfocada en servicios de capacitación y certificación TI, desarrollo e implementación de soluciones tecnológicas, servicios de consultoría, reclutamiento especializado y Staff Augmentation / Outsourcing TI.
        </Typography>
        <MoreBtn
          sx={{ borderRadius: 0 }}
          variant="contained"
          href="https://litethinking.com/lite-thinking"
        >
          Ver más
        </MoreBtn>
      </Box>
    </Grid>
  )
}

export default Hero;