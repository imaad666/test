import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('App')).toBeInTheDocument();
  });

  it('handles changes', () => {
    const { getByText, getByRole } = render(<App />);
    const button = getByRole('button');
    fireEvent.click(button);
    waitFor(() => expect(getByText('Updated')).toBeInTheDocument());
  });
});
