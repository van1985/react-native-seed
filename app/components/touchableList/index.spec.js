import React from 'react';
import renderer from 'react-test-renderer';
import TouchableList from './index';


const sampleData =
[
  [
    {
      name: 'Full Name',
      value: 'Noam Chomsky',
    },
    {
      name: 'Technology',
      value: 'Web UI Developer',
    },
  ],
  [
    {
      name: 'Full Name',
      value: 'Noam Chomsky',
    },
    {
      name: 'Technology',
      value: 'Web UI Developer',
    },
  ],
];

test('renders correctly', () => {
  const mockCallBack = jest.fn();
  const tree = renderer.create(<TouchableList
    data={sampleData}
    onPress={() => { mockCallBack; }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
