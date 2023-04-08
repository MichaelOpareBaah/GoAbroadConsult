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
            We want your transition from your home country to the United States
            as easily as it can be, hassle free, affordable, and meaningful.
            With so many universities and colleges to choose from and each with
            its own complex admission processes, we understand that the study
            abroad process can be quite tedious and frustrated. However, our
            motive is to take on your burden and make it ours. We take you along
            with the process so everything makes sense to you. We want to see
            you succeed and bring your imagination to light!. To make your
            transition to the US affordable and seamlessly easy is our ultimate
            goal.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
            Our History
          </Typography>
          <Typography variant="body1" sx={{ padding: '10px' }}>
            GO ABROAD CONSULT has been The backbone, Foundation, Bacon of hope,
            To a lot of International students abroad We started as a free study
            abroad consulting firm Which has now grown to be one of the best
            consulting agencies for International students who strive to pursue
            any form of higher education in the United States. Go Abroad Consult
            strive to provide academic guidance of any form right from the
            start! from the choice of school program, carreer guidance, tuition
            affordability, and inflexibility all the way to working in the US
            after graduating 🎓
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
