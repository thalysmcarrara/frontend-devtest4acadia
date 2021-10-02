import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import close from '../../assets/close.svg';
import closeAlert from '../../assets/closealert.svg';
import './index.css';

const initialValue = {
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
    axios.post('https://apidevtest4cadia.herokuapp.com/login', formData).then((response) => {
      console.log(response);
      const { token } = response.data;
      localStorage.setItem('token', token);
      history.push('/dashboard');
    }).catch((err) => {
      console.log(err.response);
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
        <h1>SignIn</h1>

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
          <label htmlFor="email">
            <input
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
              onChange={ handleChange }
              required
              type="password"
              name="password"
              id="password"
              minLength="8"
              placeholder="Password"
            />
          </label>

          <p className="question-text"><span>Dont have an account?</span></p>

          <button id="submit-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
