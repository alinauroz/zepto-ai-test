import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders activity screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Activity/);
  expect(linkElement).toBeInTheDocument();
});
