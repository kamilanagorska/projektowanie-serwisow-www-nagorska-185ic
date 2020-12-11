import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//musialam zainstalowac icons
export default function SimpleAccordion() {

  return (
    <div style={{backgroundColor: '#f0f2f2', width: '70%', margin: 'auto'}}>
      <Accordion style={{backgroundColor: '#f7f7f7'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>It's safe!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We try our best to make this website safe. Our moderators works really hard and control everything what's going on here. 
            We check every report and permanently block IP of people who broke rules.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#edf0f0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>It's free!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This page is 100% free. You will not spend any money using our website. We also don't have any paid premium membership. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor: '#e3e8e8'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>It's easy!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Finding friends is so easy here. Just try to use our chat. Fullfill information about you and your potencial friends and click "Chat". 
            You will be connected with somebody, who meets your requirements. You can also check out all users on this website to find person who is interesting for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}