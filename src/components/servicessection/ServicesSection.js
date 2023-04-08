import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import BannerImage from '@/assets/images/bannerImg.jpg';
import collegeImage from '@/assets/images/collegeSelection.jpg';
import visaImage from '@/assets/images/visa.jpg';
import campusImage from '@/assets/images/campus.jpg';

function ServicesSection() {
  return (
    <Container sx={{ marginBottom: '4rem' }}>
      <h2 className="formTitle">Services Offered</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',

              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={collegeImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              School Selection & Scholarship Application
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              With the great number of educational institutions in the United
              States, we bring you the best and the best only! We guide you to
              choose and apply to your dream school. We present to you schools
              that are within the scope of your academic goals and career paths.
              We take into consideration the school’s reputation and
              representation, graduation percentage, and tuition flexibility and
              affordability.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={visaImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              Assistance With Visa Application
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              How do you prep adequately for your visa interview and what comes
              after that? We won’t keep you wondering.. we prepare you
              adequately for your visa interview and all that comes next. We
              will engage you in several one on one visa interview preparations
              prior to your D-day. After your visa is granted,we continue to be
              your source of guide and prepare you for your pre arrival process
              .
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={campusImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              On/Off Campus Accommodation
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              Imagine being in a new environment without any friends or guide
              and nowhere to stay? You’re like a street rat beaten by rain. This
              is what we avoid at Go Abroad Consult when it comes to you because
              matter. With the changing weather and the dangers associated with
              severe weather storms, we do not want you to be house hunting when
              upon your arrival.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesSection;
