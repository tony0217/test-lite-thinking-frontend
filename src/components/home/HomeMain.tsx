import React from 'react';

import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Fade from '@mui/material/Fade';


import CardTextImage from '@components/shared/CardTextImage';
import banner from '@assets/img/Banner-Lite-Thinking.jpg';
import mision from '@assets/img/mision.jpg';
import vision from '@assets/img/vision.jpg';

import HomeHero from './HomeHero';

const Container = styled(Paper)<PaperProps>(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-center',
  alignItems: 'flex-center',
  margin: theme.spacing(12, 0),
  height: theme.spacing(350 / 6),
  color: '#fff',
  backgroundColor: 'yellow',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${banner.src})`,
}));

function HomeMain() {

  return (
    <Fade in timeout={350}>
      <Container>
        <Grid container>
          <HomeHero />
          <CardTextImage
            title="Our vision"
            subtitle="We are part of an independent global tech group that delivers end-to-end tech solutions through a global delivery model."
            img={vision}
            mr="auto"
            md={5}
          />
          <CardTextImage
            title="Our values"
            subtitle="Commitment , Collaboration , Evolution, Positive Thinking"
            img={mision}
            md={6}
            ml="auto"
          />
        </Grid>
      </Container>
    </Fade >
  );
}

export default HomeMain;