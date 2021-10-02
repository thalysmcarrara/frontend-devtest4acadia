import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

export default function RedirectSignup({ path, text }) {
  return (
    <Link to={ path }>
      <p className="question-text">
        <span>{text}</span>
      </p>
    </Link>
  );
}

RedirectSignup.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
