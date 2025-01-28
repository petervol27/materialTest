import './App.css';
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import TourCard from './components/TourCard';
import Grid from '@mui/material/Grid2';
import SearchAppBar from './components/SearchAppBar';
import cities from './data.json';
function App() {
  return (
    <div>
      <SearchAppBar />
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
        {/* <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid> */}
      </Container>
    </div>
  );
}

export default App;
