import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; 
import Section2 from '../Section2'; 

test('Section2 component snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Section2 />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
