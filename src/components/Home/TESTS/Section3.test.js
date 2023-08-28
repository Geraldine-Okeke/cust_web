import React from 'react';
import renderer from 'react-test-renderer';
import Section3 from '../Section3'; 

test('Section3 component snapshot', () => {
  const component = renderer.create(<Section3 />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
