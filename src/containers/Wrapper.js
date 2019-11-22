import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

// components
import HeaderBanner from '../components/HeaderBanner/HeaderBanner';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <main style={{ margin: 'auto' }}>
      <CssBaseline />
      <HeaderBanner />
      {children}
    </main>
  );
};

Wrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Wrapper;
