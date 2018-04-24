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

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.scene}>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Full Name:
          </Text>
          <Text style={styles.text}>
            {params.friendName}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Telephone:
          </Text>
          <Text style={styles.text}>
            {params.friendTelephone}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
 fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Position:
          </Text>
          <Text style={styles.text}>
            {params.friendTechnology}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
 fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Seniority:
          </Text>
          <Text style={styles.text}>
            {params.friendSeniority}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          City:
          </Text>
          <Text style={styles.text}>
            {params.friendCity}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          State:
          </Text>
          <Text style={styles.text}>
            {params.friendState}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
 fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Country:
          </Text>
          <Text style={styles.text}>
            {params.friendCountry}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          birthdate:
          </Text>
          <Text style={styles.text}>
            {params.friendBirthdate}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Legal ID:
          </Text>
          <Text style={styles.text}>
            {params.friendLegalId}
          </Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={{
fontWeight: 'bold', fontSize: 16, color: '#FFFFFF', marginRight: 10,
}}
          >
          Studio:
          </Text>
          <Text style={styles.text}>
            {params.friendStudio}
          </Text>
        </View>
      </View>
    );
  }
}

FriendDetailScene.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.func.isRequired,
  }).isRequired,
};

export default FriendDetailScene;
