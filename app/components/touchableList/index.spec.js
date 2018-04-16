import React from 'react';
import TouchableList from './index';

import renderer from 'react-test-renderer';

const sampleData = [
  {
    label: 'test'
  },
  {
    label: 'test2'
  }
];

test('renders correctly', () => {
  const tree = renderer.create(
    <TouchableList
      data={sampleData}
      onPress={()=>{}}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});