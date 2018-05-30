import React from 'react';
import renderer from 'react-test-renderer';
import SkillDetails from './index';

const skill = {
  Name: 'John',
  percentage: '80',
};

test('renders correctly', () => {
  const tree = renderer.create(<SkillDetails
    percentage={skill.percentage}
    skillName={skill.name}
    key={skill.name}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
