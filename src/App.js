import './App.css';
import * as React from 'react';
import { AppBar, Container } from '@mui/material';
import TourCard from './components/TourCard';
import Grid from '@mui/material/Grid2';
import SearchAppBar from './components/SearchAppBar';
function App() {
  return (
    <div>
      <SearchAppBar />
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
