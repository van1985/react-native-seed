import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class Demo extends Component {

  render() {
      
    return (
      <View style={styles.scene}>
        <Text style={styles.text}>
          Dashboard Scene
        </Text>
      </View>
    );
  }
}

export default Demo;