import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

import SkillDetails from '../../../components/skillDetails';
import ProfileDetails from '../../../components/profileDetails';

// Harcoded
const profileResponse = {
  name: 'John Doe',
  tech: 'Web UI Developer',
  email: 'john.doe@globant.com',
  city: 'Mar del Plata',
  country: 'Argentina',
  skills: [
    {
      name: 'Javascript',
      percentage: 70,
    },
    {
      name: 'ES6',
      percentage: 20,
    },
    {
      name: 'Webpack',
      percentage: 25,
    },
    {
      name: 'ReactJS',
      percentage: 75,
    },
    {
      name: 'Redux',
      percentage: 60,
    },
  ],
};

class ProfileScene extends Component {
  buildSkillsBlock(item) {
    return (
      <SkillDetails percentage={item.percentage} skillName={item.name} key={item.name} />
    );
  }

  render() {
    return (
      <View style={styles.profile}>
        <ProfileDetails
          name={profileResponse.name}
          tech={profileResponse.tech}
          email={profileResponse.email}
          city={profileResponse.city}
          country={profileResponse.country}
        />
        <View />
        <View style={styles.profileContainer}>
          <Text style={styles.text}>
            {profileResponse.name.toUpperCase()} ALSO KNOWS
          </Text>
          {profileResponse.skills.map(this.buildSkillsBlock)}
        </View>
      </View>
    );
  }
}

export default ProfileScene;
