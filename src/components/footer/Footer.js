import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#7B1FA2',
        padding: '3rem',
        color: '#fff',
      }}
    >
      <Grid container spacing={2} sx={{ marginBottom: '4rem' }}>
        <Grid item xs={6} md={3}>
          <p>
            Study Abroad Consult is an educational consultancy located in
            Atonsu-Kumasi, Ghana.
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <h6 className="footerLink">LINKS</h6>
          <ul className="listStyle">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h6 className="footerLink">LINKS</h6>
          <ul className="listStyle">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h6 className="footerLink">LINKS</h6>
          <ul className="listStyle">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </Grid>
      </Grid>
      <div className="footerRowTwo">
        <p>Copyright © 2023, PayFam. </p>

        <p>Terms of Service | Privacy Policy</p>

        <div className="footerSocials">
          <a
            className="footerWidgetLinks"
            target="_blank"
            href="https://www.instagram.com/payfamhq"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>

          <a
            className="footerWidgetLinks"
            target="_blank"
            href="https://www.twitter.com/payfamhq"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>

          <a
            className="footerWidgetLinks"
            target="_blank"
            href="https://www.t.me/Payfamhq"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
          </a>

          <a
            className="footerWidgetLinks"
            target="_blank"
            href="https://www.linkedin.com/company/payfam"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            className="footerWidgetLinks"
            target="_blank"
            href="https://www.youtube.com/channel/UCWtSNaoWQMhxTwZXTScInrQ"
            rel="noopener noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </Box>
  );
}

export default Footer;
