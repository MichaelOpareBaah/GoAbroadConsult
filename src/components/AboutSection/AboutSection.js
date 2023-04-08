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
          Go Abroad Consult is an educational study abroad consult that
          specializes in helping students pursue their academic goals and career
          in the United States. We provide first hand US based curriculum
          guidance, school selection and application, intensive visa interview
          preparation, pre and post arrival preparation, and all the necessary
          Steps and guidance you will need to settle in the United States as an
          international student. We are bound by a team of committed specialized
          education analysts, professors, admission recruiters, visa consulting
          agents and financial deputies who make your sure your transition to
          the United states is hassle free and as smooth as it can be!. We are
          known to be one of the best recruiting team and and educational
          consultants in the state of Wisconsin. Out reputable records speak for
          itself. Our office is in Wisconsin and You can find us on all social
          media platforms . Just give us a call to schedule a free academic
          consulting
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default AboutSection;
