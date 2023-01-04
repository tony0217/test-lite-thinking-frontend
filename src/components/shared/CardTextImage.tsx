import React from 'react';

import { StaticImageData } from 'next/image';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function CardTextImage({
  img,
  title,
  subtitle,
  ml,
  mr,
  md
}: CardTextImageProps) {
  return (
    <Grid item xs={12} md={md} ml={ml} mr={mr}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 150, height: 190, display: { xs: 'none', sm: 'block' } }}
            image={img.src}
            alt={title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h1" color="primary" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body1" paragraph>
              {subtitle}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

interface CardTextImageProps {
  title: string;
  subtitle: string;
  img: StaticImageData;
  md: number;
  ml?: number | string;
  mr?: number | string;
}

export default CardTextImage;