import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TouchableList from '../../../../components/touchableList';

import styles from './styles';

const friends = [
  [
    {
      name: 'Full Name',
      value: 'Noam Chomsky',
    },
    {
      name: 'Telephone',
      value: '45678532',
    },
    {
      name: 'Email',
      value: 'n.chomsky@globant.com',
    },
    {
      name: 'Technology',
      value: 'Web UI Developer',
    },
    {
      name: 'Seniority',
      value: 'SSr',
    },
    {
      name: 'City',
      value: 'Mar del Plata',
    },
    {
      name: 'State',
      value: 'Buenos Aires',
    },
    {
      name: 'Country',
      value: 'Aargentina',
    },
    {
      name: 'Birthdate',
      value: '02/12/1985',
    },
    {
      name: 'Legal ID',
      value: '29001090',
    },
    {
      name: 'Studio',
      value: 'UI Engineering',
    },
  ],
  [
    {
      name: 'Full Name',
      value: 'René Descartes',
    },
    {
      name: 'Telephone',
      value: '45678532',
    },
    {
      name: 'Email',
      value: 'n.chomsky@globant.com',
    },
    {
      name: 'Technology',
      value: 'Web UI Developer',
    },
    {
      name: 'Seniority',
      value: 'SSr',
    },
    {
      name: 'City',
      value: 'Mar del Plata',
    },
    {
      name: 'State',
      value: 'Buenos Aires',
    },
    {
      name: 'Country',
      value: 'Aargentina',
    },
    {
      name: 'Birthdate',
      value: '02/12/1985',
    },
    {
      name: 'Legal ID',
      value: '29001090',
    },
    {
      name: 'Studio',
      value: 'UI Engineering',
    },
  ],
  [
    {
      name: 'Full Name',
      value: 'Aristotle',
    },
    {
      name: 'Telephone',
      value: '45678532',
    },
    {
      name: 'Email',
      value: 'n.chomsky@globant.com',
    },
    {
      name: 'Technology',
      value: 'Web UI Developer',
    },
    {
      name: 'Seniority',
      value: 'SSr',
    },
    {
      name: 'City',
      value: 'Mar del Plata',
    },
    {
      name: 'State',
      value: 'Buenos Aires',
    },
    {
      name: 'Country',
      value: 'Aargentina',
    },
    {
      name: 'Birthdate',
      value: '02/12/1985',
    },
    {
      name: 'Legal ID',
      value: '29001090',
    },
    {
      name: 'Studio',
      value: 'UI Engineering',
    },
  ],

];

class FriendListScene extends Component {
  static navigationOptions = {
    header: null,
  }

  onFriendPress = (friend) => {
    this.props.navigation.navigate(
      'friendDetails',
      friend,
    );
  }

  render() {
    return (
      <View style={styles.list}>
        <TouchableList
          data={friends}
          onPress={this.onFriendPress}
        />
      </View>
    );
  }
}

FriendListScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default FriendListScene;
