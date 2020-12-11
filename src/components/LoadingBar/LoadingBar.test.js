import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingBar from './LoadingBar';

test('renders loading title properly', () => {
  const title = 'Loading ...';
  render(<LoadingBar title={title} />);
  const linkElement = screen.getByText(new RegExp(title));
  expect(linkElement).toBeInTheDocument();
});
