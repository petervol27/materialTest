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
const TourCard = () => {
  const [stars, setStars] = useState(4.5);
  return (
    <Grid size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={15} square={false}>
          <img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQmorYOw9A5WSMjVWP4GLfe0JW50BTGjR-L4nFLfI-BI1JO6r2mzrkR5iAC1T0feJaYMnjk-8Rlj1U8H_kg49jJ8uZVc91P6xYIDuCZVg"
            alt="niagra falls"
            className="img"
          />
          <Box paddingX={1}>
            <Typography component="h2" variant="subtitle1">
              Immerse into the Falls
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={1}>
                5 Hours
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
                defaultValue={stars}
                precision={0.5}
                readOnly
              ></Rating>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {stars}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="h3" marginTop={0}>
                From C $147
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
