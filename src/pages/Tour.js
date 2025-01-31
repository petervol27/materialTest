import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ImageCollage from '../components/ImageCollage';
import TourAccordion from '../components/TourAccordion';
import BottomNav from '../components/BottomNav';

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Box sx={{ display: 'flex' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Welcome_to_Fabulous_Las_Vegas.jpg/300px-Welcome_to_Fabulous_Las_Vegas.jpg"
          height={325}
          alt="vegas"
        />
        <ImageCollage />
      </Box>
      <Box marginTop={3} marginBottom={10}>
        <Typography variant="h3" component="h3" marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <TourAccordion />
      </Box>
      <BottomNav />
    </Container>
  );
}

export default Tour;
