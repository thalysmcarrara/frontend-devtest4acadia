import React from 'react';
import { useLocation } from 'react-router-dom';
import SigninForm from '../SigninForm';
import SignUpForm from '../SignupForm';
import './index.css';

export default function SigninModal() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="modal">
      { pathname === '/login' ? <SigninForm /> : <SignUpForm /> }
    </div>
  );
}
