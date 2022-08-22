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
  backgroundColor: 'grey.800',
  color: '#fff',
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
            title="Visión"
            subtitle="Ser la mejor empresa ágil y adaptable del sector TI en América Latina con servicios y soluciones orientadas en superar la carencia de habilidades empresariales."
            img={vision}
            mr="auto"
            md={5}
          />
          <CardTextImage
            title="Mision"
            subtitle=" Ayudamos a líderes y empresas a enfrentar los desafíos actuales y futuros. Fomentamos la transformación cultural hacia la agilidad y la adaptabilidad. Transformamos personas en agentes de cambio con impacto positivo..."
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