import React from 'react';
import TransactionsFilters from '../TransactionsFilters';
import TransactionsContent from '../TransactionsContent';
import './index.css';

export default function DashboardContent() {
  return (
    <main id="main-dashboard">
      <section id="container">
        <TransactionsFilters />
        <TransactionsContent />
      </section>
    </main>
  );
}
