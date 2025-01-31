import React from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function TourAccordion() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How long is the tour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          That depends on how long you wanna go
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Cancellation Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Can't you fool should've thought about it before
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Pricing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Premium: 150$ a day , Poor : 25$ a day
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default TourAccordion;
