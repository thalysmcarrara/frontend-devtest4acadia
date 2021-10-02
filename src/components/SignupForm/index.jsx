import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RedirectLink from '../RedirectLink';
import close from '../../assets/close.svg';
import closeAlert from '../../assets/closealert.svg';
import './index.css';

const initialValue = {
  name: '',
  email: '',
  password: '',
};

export default function SigninForm() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState(initialValue);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('https://apidevtest4cadia.herokuapp.com/register', formData).then((response) => {
      const { user } = response.data;
      localStorage.setItem('user', user);
      history.push('/');
    }).catch((err) => {
      const { message } = err.response.data;
      setError(message);
    });
  };

  const handleClose = () => {
    history.push('/');
  };

  const handleCloseAlert = () => {
    setError('');
  };

  return (
    <div className="wrapper">
      <button
        type="button"
        id="button-close"
        onClick={ handleClose }
      >
        <img id="close" src={ close } alt="close modal" />
      </button>
      <div className="content">
        <h1>Sign Up</h1>

        <div className={ error !== '' ? 'unfill' : 'fill' } />

        <div
          className="alert"
          style={ { display: `${error !== '' ? 'block' : 'none'}` } }
        >
          <button
            id="button-close"
            type="button"
            onClick={ handleCloseAlert }
          >
            <img className="close-alert" src={ closeAlert } alt="close alert" />
          </button>
          {error !== '' ? error : '' }
        </div>

        <form onSubmit={ handleSubmit }>
          <label htmlFor="name">
            <input
              className="input-background"
              onChange={ handleChange }
              required
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </label>

          <label htmlFor="email">
            <input
              className="input-background"
              onChange={ handleChange }
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </label>

          <label htmlFor="password">
            <input
              className="input-background"
              onChange={ handleChange }
              required
              type="password"
              name="password"
              id="password"
              minLength="8"
              placeholder="Password"
            />
          </label>

          <RedirectLink path="/login" text="already have an account?" />

          <button id="submit-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
