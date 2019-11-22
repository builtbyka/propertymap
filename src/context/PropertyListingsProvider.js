import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import data from '../data/listings.json';

const DefaultState = {
  propertyListings: [],
};

const PropertyListingsContext = React.createContext(DefaultState);

export const PropertyListingsConsumer = PropertyListingsContext.Consumer;

export const PropertyListingsProvider = (props) => {
  const { children } = props;
  const [propertyListings, setProperties] = useState([]);
  if (propertyListings.length < 1) {
    setProperties(data);
  }

  return (
    <PropertyListingsContext.Provider
      value={{
        propertyListings,
      }}
    >
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {children}
      </Grid>
    </PropertyListingsContext.Provider>
  );
};

PropertyListingsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

// export class PropertyListingsProvider extends React.Component {
//     state = DefaultState

//     componentDidMount() {
//       fetch('./data/listings.json')
//         .then(res => res.json())
//         .then(res => {
//           this.setState({ propertyListings: res })
//         })
//     }

//     render() {
//       const { children } = this.props
//       const { propertyListings } = this.state

//       return (
//         <PropertyListingsContext.Provider
//           value={{
//             propertyListings
//           }}
//         >
//           {children}
//         </PropertyListingsContext.Provider>
//       )
//     }
//   }
