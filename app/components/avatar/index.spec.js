import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './index';

test('renders correctly', () => {
  const tree = renderer.create(<Avatar
    width={60}
    height={60}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
