/* eslint-disable react/prop-types */
import * as React from 'react';
import { A } from 'hookrouter';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import useStyles from './style';

const Listing = ({ listing }) => {
  const classes = useStyles();
  if (!listing) {
    return null;
  }

  const {
    id, image, title, address, description, price,
  } = listing;

  return (
    <Grid item xs>
      <Paper className={classes.paper}>
        <A className="btn btn-primary" href={`/view/${id}`}>
          <div className="card-image">
            <img className="img-responsive" src={`../../images/${image}`} alt={address} />
          </div>
          <div className="card-header">
            <div className="card-title h5">{title}</div>
            <div className="card-title h6">
            &pound;
              {' '}
              {price}
            </div>
            <div className="card-subtitle text-gray">{address}</div>
          </div>
          <div className="card-body">{description}</div>
          <div className="card-footer">
            Go to property

          </div>
        </A>
      </Paper>
    </Grid>
  );
};

export default Listing;
