import React from 'react';
import loremipsum from './loremipsum';
import './index.css';

export default function HomeContent() {
  return (
    <main>
      <section className="image-section" />
      <section className="text-section">
        <p>{ loremipsum }</p>
      </section>
    </main>
  );
}
