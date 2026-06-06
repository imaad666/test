import React from 'react';
import { Link } from 'react-router-dom';
import { apiLinks } from './helpers/api';

function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new-page">New Page</Link></li>
      </ul>
      <p>API Links:</p>
      <ul>
        {Object.keys(apiLinks).map((key) => (
          <li key={key}>{key}: {apiLinks[key]}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewPage;
