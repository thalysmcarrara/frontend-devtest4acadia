import React from 'react';
import './index.css';

export default function TransactionsContent() {
  return (
    <div className="transactions-container">
      <h1>Transactions</h1>

      <ul id="transaction-list">
        <li className="transaction-card debit" />
        <li className="transaction-card credit" />
        <li className="transaction-card debit" />
        <li className="transaction-card credit" />
        <li className="transaction-card credit" />
        <li className="transaction-card debit" />
      </ul>
    </div>
  );
}
