import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import close from '../../assets/close.svg';
import './index.css';

const initialValue = {
  email: '',
  password: '',
};

export default function SigninForm() {
  const [formData, setFormData] = useState(initialValue);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('localhost:3001/login', formData).then((response) => {
      console.log(response);
    });
  };

  const handleClose = () => {
    history.push('/');
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
        <div className="alert" />
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
