import React from 'react';
import PropTypes from 'prop-types';

function Display({ color, subliminalMessage }) {
  return (
    <div style={{ height: 100, width: 100, backgroundColor: color }}>
      {subliminalMessage}
    </div>
  );
}

Display.propTypes = {
  color: PropTypes.string.isRequired,
  subliminalMessage: PropTypes.string,
};

export default Display;
