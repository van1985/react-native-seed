import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class Demo extends Component {

  static navigationOptions = {
    title: 'Demo'
  }

  render() {
      
    return (
      <View style={styles.scene}>
        <Text style={styles.text}>
          Demo Scene
        </Text>
      </View>
    );
  }
}

export default Demo;