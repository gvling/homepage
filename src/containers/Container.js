import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HideAppBar from '../components/AppBar';
import ZoomingCard from '../components/ZoomingCard';
import SimpleExpanPanel from '../components/Panel';
import { CardContents1, CardContents2 } from '../assets/text/Contents';
import IMG_BG from '../assets/images/gvling.jpg';
import IMG_BG_GRAY from '../assets/images/gvling_bw.jpg';


export default function CardContainer() {
  // TODO: card update card contents
  return (
    <React.Fragment>
      <CssBaseline />
      <HideAppBar />
      <Container maxWidth="xl">
        <Typography component="div" style={{ height: '100vh' }}>
          <CssBaseline />
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <ZoomingCard
                title="Gvling"
                image={IMG_BG}
                height="100%"
                contents={CardContents1}
              />
            </Grid>
            <Grid item xs={6}>
              <ZoomingCard
                title="Gvling2"
                image={IMG_BG_GRAY}
                height="100%"
                contents={CardContents2}
              />
            </Grid>
            <Grid item xs={6}>
              <SimpleExpanPanel />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
