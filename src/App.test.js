import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders zepto ai', () => {
  render(<App />);
  const linkElement = screen.getByText(/zepto ai/i);
  expect(linkElement).toBeInTheDocument();
});
