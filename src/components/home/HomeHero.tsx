import React from 'react';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography, { TypographyProps } from '@mui/material/Typography';

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.primary.main,
  background: theme.palette.text.primary,
  marginBottom: theme.spacing(4),
  width: 300
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

function HomeHero() {
  return (
    <Grid item md={12} pb={13}>
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <Title>
        Positive Thinking
        </Title>
        <Typography variant="body1" sx={{ backgroundColor: '#000000' }} paragraph>
          We believe collaboration betters the world.

          Our coworkers share knowledge with our clients in order to unlock their untapped potential.

          We grow our clients’ business by leveraging technologies, delivering solutions and creating experiences to produce better outcomes and results that matter.
        </Typography>
        <MoreBtn
          sx={{ borderRadius: 0 }}
          variant="contained"
          href="https://positivethinking.tech/"
        >
          See more
        </MoreBtn>
      </Box>
    </Grid>
  )
}

export default HomeHero;