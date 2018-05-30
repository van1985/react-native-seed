import React from 'react';
import renderer from 'react-test-renderer';
import FriendsFlow from './index';


test('renders correctly', () => {
  const tree = renderer.create(<FriendsFlow />).toJSON();
  expect(tree).toMatchSnapshot();
});
