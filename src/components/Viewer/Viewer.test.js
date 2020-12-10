import React from 'react';
import { render } from '@testing-library/react';
import Viewer from './Viewer';

const sampleData = [
  {
    color: 'red',
    hex: '#f00',
  },
];

const sampleToView = [
  { value: 'Color', key: 'color' },
  { value: 'Hex Code', key: 'hex' },
];

it('should take a snapshot', () => {
  const { asFragment } = render(<Viewer data={sampleData} toView={sampleToView} />);
  expect(asFragment(<Viewer />)).toMatchSnapshot();
});
