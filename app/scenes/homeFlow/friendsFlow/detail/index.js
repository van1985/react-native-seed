import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';


import PropTypes from 'prop-types';
import styles from './styles';

class FriendDetailScene extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      headerTitle: params.friendName,
      tabBarVisible: false,
    };
  }

  InfoBlock(item) {
    return (
      <View style={styles.detailContainer} key={item.value}>
        <Text style={styles.nameText}>
          {item.name}
        </Text>
        <Text style={styles.valueText}>
          {item.value}
        </Text>
      </View>
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    return (

      <View style={styles.detail}>
        {params.map(this.InfoBlock)}
      </View>
    );
  }
}

FriendDetailScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))),
  }).isRequired,
};

export default FriendDetailScene;
