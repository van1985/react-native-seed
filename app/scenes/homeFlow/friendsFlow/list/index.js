import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TouchableList from '../../../../components/touchableList';

import styles from './styles';

const friends = [
  {
    label: 'Noam Chomsky',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',

  },
  {
    label: 'René Descartes',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Aristotle',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Thomas Huxley',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Alan Turing',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Albert Einstein',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Pablo Picasso',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
  {
    label: 'Neil Amstrong',
    telephone: '45678532',
    email: 'n.chomsky@globant.com',
    technology: 'Web UI Developer',
    seniority: 'SSr',
    city: 'Mar del Plata',
    state: 'Buenos Aires',
    country: 'Argentina',
    birthdate: '02/12/1985',
    legalId: '29001090',
    studio: 'UI Engineering',
  },
];

class FriendListScene extends Component {
  static navigationOptions = {
    header: null,
  }

  onFriendPress = (friend) => {
    this.props.navigation.navigate(
      'friendDetails',
      {
        friendName: friend.label,
        friendTelephone: friend.telephone,
        friendEmail: friend.email,
        friendTechnology: friend.technology,
        friendSeniority: friend.seniority,
        friendCity: friend.city,
        friendState: friend.state,
        friendCountry: friend.country,
        friendBirthdate: friend.birthdate,
        friendLegalId: friend.legalId,
        friendStudio: friend.studio,
      },
    );
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

FriendListScene.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


export default FriendListScene;
