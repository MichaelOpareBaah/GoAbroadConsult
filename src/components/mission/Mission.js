import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

import Image from 'next/image';
import BannerImage from '@/assets/images/bannerImg.jpg';

function Mission() {
  return (
    <Container sx={{ marginBottom: '4rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={BannerImage} height={400} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ padding: '10px' }}>
            With so many college choices available and the wide variety among
            the institutions that can be found across the World, it is easy to
            become overwhelmed. Let’s face it, given the competition for getting
            into college, the rising costs of a college education, and the fact
            that there is not just one college that is right for you, the
            college search and selection process can be downright scary.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
            Our History
          </Typography>
          <Typography variant="body1" sx={{ padding: '10px' }}>
            With so many college choices available and the wide variety among
            the institutions that can be found across the World, it is easy to
            become overwhelmed. Let’s face it, given the competition for getting
            into college, the rising costs of a college education, and the fact
            that there is not just one college that is right for you, the
            college search and selection process can be downright scary.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={BannerImage} height={400} alt="" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Mission;
