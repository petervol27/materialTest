import React, { useState } from 'react';
import { BottomNavigation, Paper } from '@mui/material';
import TourModal from './TourModal';

function BottomNav() {
  const [value, setValue] = useState('');

  return (
    <>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <TourModal />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default BottomNav;
