import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import TouchableList from '../../../../components/touchableList';

import styles from './styles';

const friends = [
  {
    label: 'Noam Chomsky'
  },
  {
    label: 'René Descartes'
  },
  {
    label: 'Aristotle'
  },
  {
    label: 'Thomas Huxley'
  },
  {
    label: 'Alan Turing'
  }
];

class FriendListScene extends Component {

  static navigationOptions = {
    header: null  
  }

  onFriendPress = (friend) => {
    this.props.navigation.navigate(
      'friendDetails',
      {
        friendName: friend.label
      }
    )
  }

  render() {
      
    return (
      <View style={styles.scene}>
        <TouchableList
          data={friends}
          onPress={this.onFriendPress}
        />
      </View>
    );
  }
}

export default FriendListScene;