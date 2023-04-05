import * as React from 'react';
import { Typography, Box, Container } from '@mui/material';

function AboutSection() {
  return (
    <React.Fragment>
      <Container sx={{ marginBottom: '4rem' }}>
        <Typography variant="h3" align="center" sx={{ paddingBottom: '2rem' }}>
          About
        </Typography>
        <Typography align="center" sx={{ width: '70%', margin: 'auto' }}>
          Jose Heritage Consult is an educational consultancy located in
          Atonsu-Kumasi, Ghana. Our office is 6.6 Kilometers from the Kwame
          Nkrumah University of Science and Technology. The team is made up of
          experienced consultants who have been educated, lived, and
          participated in international conferences in countries such as United
          States, United Kingdom, Australia, Canada, Israel, Ireland, Mexico,
          South Africa, and Ghana. The team has been recruiting students to
          universities and colleges in Western countries for the past 10+ years.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default AboutSection;
