import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';

test('renders App component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('New Page')).toBeInTheDocument();
});
