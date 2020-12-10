import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

it('should be enabled', () => {
  const { getByTestId } = render(<Button disabled={false} />);
  expect(getByTestId('app-button')).not.toHaveAttribute('disabled');
});

it('should be disbaled', () => {
  const { getByTestId } = render(<Button disabled />);
  expect(getByTestId('app-button')).toHaveAttribute('disabled');
});

it('should call onClick', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Button onClick={onClick} />);
  fireEvent.click(getByTestId('app-button'));
  expect(onClick).toHaveBeenCalled();
});

it('should have value', () => {
  const { getByTestId } = render(<Button value="Click Me" />);
  expect(getByTestId('app-button')).toHaveTextContent('Click Me');
});
