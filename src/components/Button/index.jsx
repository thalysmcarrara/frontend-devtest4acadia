import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

export default function Button({ buttonTitle, styleClass }) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  return (
    <button
      type="button"
      className={ styleClass }
      onClick={ handleClick }
    >
      { buttonTitle }
    </button>
  );
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
};
