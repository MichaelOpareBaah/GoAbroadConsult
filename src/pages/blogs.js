import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Container, Grid } from '@mui/material';
import collegeImage from '@/assets/images/collegeSelection.jpg';
import Image from 'next/image';

function blogs() {
  return (
    <Box>
      <Grid
        container
        spacing={5}
        sx={{ border: '1px solid red', margin: 'auto' }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '20rem',
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
      </Grid>
    </Box>
  );
}

export default blogs;
