import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Button({ buttonTitle }) {
  return (
    <div className="signin-button">{ buttonTitle }</div>
  );
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
};
