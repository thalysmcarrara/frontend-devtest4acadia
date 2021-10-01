import React from 'react';
import SigninModal from '../../components/SigninModal';
import Header from '../../components/Header';
import HomeContent from '../../components/HomeContent';

export default function Login() {
  return (
    <>
      <SigninModal />
      <Header />
      <HomeContent />
    </>
  );
}
