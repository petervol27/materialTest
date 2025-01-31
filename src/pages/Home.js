import { Container, Typography } from '@mui/material';
import TourCard from '../components/TourCard';
import Grid from '@mui/material/Grid2';
import * as React from 'react';
import cities from '../data.json';

function Home() {
  return (
    <Container sx={{ marginY: 5 }}>
      {cities.map((city, index) => {
        return (
          <React.Fragment key={index}>
            <Typography
              variant="h4"
              component="h4"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => {
                return <TourCard tour={tour} key={tour.id} />;
              })}
            </Grid>
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Home;
