import React from 'react';
import { A } from 'hookrouter';

import useStyles from './style';

function HeaderBannerTitle() {
  const classes = useStyles();

  return (
    <A href="/">
      <h1 className={`${classes.title}`}>
        PerfectProperty.com
      </h1>
      <h2 className={classes.subtitle}>Find your home</h2>
    </A>
  );
}

export default HeaderBannerTitle;
