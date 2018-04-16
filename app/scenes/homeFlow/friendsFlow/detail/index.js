import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './styles';

class FriendDetailScene extends Component {

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params;

    return {
      headerTitle: params.friendName,
      tabBarVisible: false
    }
  }

  render() {
    const params = this.props.navigation.state.params;
    return (
      <View style={styles.scene}>
        <Text style={styles.text}>
          {params.friendName} Details
        </Text>
      </View>
    );
  }
}

export default FriendDetailScene;