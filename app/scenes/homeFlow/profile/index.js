import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class ProfileScene extends Component {

  render() {
      
    return (
      <View style={styles.scene}>
        <Text style={styles.text}>
          Profile Scene
        </Text>
      </View>
    );
  }
}

export default ProfileScene;