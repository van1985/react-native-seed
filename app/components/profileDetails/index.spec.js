import React from 'react';
import renderer from 'react-test-renderer';
import ProfileDetails from './index';

const user = {
  name: 'John',
  tech: 'UI Technology',
  email: 'john.smith@globant.com',
  city: 'Mar del Plata',
  country: 'Argentina',
};

test('renders correctly', () => {
  const tree = renderer.create(<ProfileDetails
    name={user.name}
    tech={user.tech}
    email={user.email}
    city={user.city}
    country={user.country}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
