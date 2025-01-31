import {
  Paper,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AccessTime } from '@mui/icons-material';
import { useState } from 'react';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});
const TourCard = ({ tour }) => {
  const [rating] = useState(tour.rating);
  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={15} square={false}>
          <img src={tour.image} alt={tour.name} className="img" />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={1}>
                {tour.duration} Hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={3}
            >
              <Rating
                name="half-rating-read"
                size="small"
                defaultValue={rating}
                precision={0.5}
                readOnly
              ></Rating>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="h3" marginTop={0}>
                From C {tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
