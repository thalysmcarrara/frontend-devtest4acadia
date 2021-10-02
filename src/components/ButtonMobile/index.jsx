import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

export default function ButtonMobile({ buttonTitle, styleClass, handleOpenClose }) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/login');
  };

  return (
    <button
      type="button"
      className={ styleClass }
      onClick={ handleClick }
      style={ { display: `${handleOpenClose ? 'inline-block' : 'none'}` } }
    >
      { buttonTitle }
    </button>
  );
}

ButtonMobile.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
  handleOpenClose: PropTypes.bool.isRequired,
};
