import React from 'react';
import './index.css';

export default function TransactionsFilters() {
  return (
    <div className="filters">
      <label htmlFor="filters">
        choose filters:
        <select name="filters" id="filters">
          <option value="debit">debit</option>
          <option value="credit">credit</option>
          <option value="all">all</option>
        </select>
      </label>
    </div>
  );
}
