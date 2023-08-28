import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Nav from '../Nav';

test('Nav component snapshot', () => {
  const { container } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
