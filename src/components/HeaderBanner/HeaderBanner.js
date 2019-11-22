import React from 'react';
import Grid from '@material-ui/core/Grid';

import HeaderBannerTitle from './HeaderBannerTitle';

import useStyles from './style';


function MainTitleBanner() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item>
          <HeaderBannerTitle />
        </Grid>
      </Grid>
    </header>
  );
}

export default MainTitleBanner;
