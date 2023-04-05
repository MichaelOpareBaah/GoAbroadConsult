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
      <Typography variant="h3" align="center" sx={{ paddingBottom: '2rem' }}>
        Services Offered
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
              border: '1px solid #800000',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={collegeImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              College Selection & Scholarship Application
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              With so many college choices available and the wide variety among
              the institutions that can be found across the World, it is easy to
              become overwhelmed. Let’s face it, given the competition for
              getting into college, the rising costs of a college education, and
              the fact that there is not just one college that is right for you,
              the college search and selection process can be downright scary.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
              border: '1px solid #800000',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={visaImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              Assistance With Visa Application
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              With so many college choices available and the wide variety among
              the institutions that can be found across the World, it is easy to
              become overwhelmed. Let’s face it, given the competition for
              getting into college, the rising costs of a college education, and
              the fact that there is not just one college that is right for you,
              the college search and selection process can be downright scary.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
              border: '1px solid #800000',
              overflow: 'hidden',
              objectFit: 'cover',
            }}
          >
            <Image src={campusImage} height={300} alt="" />
            <Typography variant="h5" align="center" sx={{ padding: '1rem' }}>
              On/Off Campus Accommodation
            </Typography>
            <Typography variant="body1" sx={{ padding: '10px' }}>
              With so many college choices available and the wide variety among
              the institutions that can be found across the World, it is easy to
              become overwhelmed. Let’s face it, given the competition for
              getting into college, the rising costs of a college education, and
              the fact that there is not just one college that is right for you,
              the college search and selection process can be downright scary.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServicesSection;
