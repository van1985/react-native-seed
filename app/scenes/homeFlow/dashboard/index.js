import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './styles';

const backgroundBirth = require('../../../assets/background-birthday.png');
const profile = require('../../../assets/silhouette200.png');


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = months[new Date().getMonth()];
const day = new Date().getUTCDate();

const birthdays = ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson'];


class Dashboard extends Component {
  buildAvatar(item) {
    return (
      <Image key={item} style={styles.avatar} source={profile} />
    );
  }

  render() {
    return (
      <View style={styles.dashboard}>
        <View style={styles.dashboardContainer}>
          <Image style={styles.birthDateImg} source={backgroundBirth} />
          <View style={styles.birthDateContainer}>
            {birthdays.map(this.buildAvatar)}
          </View>
          <Text style={styles.textMonth}>
            {month}
          </Text>
          <Text style={styles.textDay}>
            {day}
          </Text>
        </View>
      </View>
    );
  }
}

export default Dashboard;
