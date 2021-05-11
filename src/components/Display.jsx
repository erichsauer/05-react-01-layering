import React from 'react';
import PropTypes from 'prop-types';

function Display({ color }) {
  return (
    <div style={{ height: 100, width: 100, backgroundColor: color }}></div>
  );
}

Display.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Display;
