import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import BannerImage from '@/assets/images/bannerImg.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Banner() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '4rem' }}>
      <marquee width="90%" direction="right" height="30px">
        Join our upcoming zoom webiner on the 1st Of April, 2023. Zoom link
        below.👇👇
      </marquee>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ overflow: 'hidden' }}>
          <Image src={BannerImage} height={600} alt="" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Item
            sx={{
              height: '600px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4">
              Welcome To Study Abroad Consult
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#000',
                marginBottom: '3rem',
              }}
            >
              TRACK YOUR APPLICATION
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#000' }}>
              <a
                className="footerWidgetLinks"
                target="_blank"
                href="https://calendly.com/michaelopare63/30min"
                rel="noopener noreferrer"
              >
                SCHEDULE AN APPOINTMENT
              </a>
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
