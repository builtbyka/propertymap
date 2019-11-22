import React from 'react';

import Listing from '../../components/Listings/Listing';
import Filter from '../../components/Filter/Filter';

import useStyles from './style';
// context
import {
  PropertyListingsProvider,
  PropertyListingsConsumer,
} from '../../context/PropertyListingsProvider';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Filter />
      <PropertyListingsProvider>
        <PropertyListingsConsumer>

          {({ propertyListings }) => (
            <div className={classes.root}>
              {propertyListings.map((listing) => (
                <Listing key={listing.id} listing={listing} />
              ))}
            </div>
          )}

        </PropertyListingsConsumer>
      </PropertyListingsProvider>
    </div>
  );
};


export default LandingPage;
