import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; 
import Section1 from '../Section1'; 

test('Section1 component snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Section1 />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
