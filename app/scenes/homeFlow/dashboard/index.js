import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
} from 'react-native';


const backgroundBirth = require('../../../assets/background-birthday.png');
const profile = require('../../../assets/silhouette200.png');


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month = months[new Date().getMonth()];
const day = new Date().getUTCDate();

const buildAvatar = () => ( // eslint-disable-line
  <Image
    style={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
    source={profile}
  />
);

const Dashboard = () => (
  <View style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#efefef',
      }}
  >
    <View style={{
          margin: 50,
          backgroundColor: '#FFFFFF',
          flex: 1,
          }}
    >

      <Image
        style={{
              width: Platform.OS === 'ios' ? 280 : 315,
              height: 120,
            }}
        source={backgroundBirth}
      />
      {/* Birthdays Block */}
      <View style={{
                          paddingLeft: 20,
                          paddingRight: 20,
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          marginTop: 20,
            }}
      >
        <Image
          style={{
              width: Platform.OS === 'ios' ? 50 : 60,
              height: Platform.OS === 'ios' ? 50 : 60,
              borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
      </View>
      {/* Birthdays Block */}
      <View style={{
                          paddingLeft: 20,
                          paddingRight: 20,
                          height: 60,
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          marginTop: 20,
            }}
      >
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
      </View>
      {/* Birthdays Block */}
      <View style={{
                          paddingLeft: 20,
                          paddingRight: 20,
                          height: 60,
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          marginTop: 20,
                          alignItems: 'flex-start',
            }}
      >
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />
      </View>
      {/* Birthdays Block */}
      <View style={{
                          paddingLeft: 20,
                          paddingRight: 20,
                          height: 60,
                          flexWrap: 'wrap',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          marginTop: 20,
                          alignItems: 'flex-start',
            }}
      >
        <Image
          style={{
            width: Platform.OS === 'ios' ? 50 : 60,
            height: Platform.OS === 'ios' ? 50 : 60,
            borderRadius: Platform.OS === 'ios' ? 25 : 30,
            }}
          source={profile}
        />

      </View>


    </View>
    <Text style={{
          top: 70,
          left: Platform.OS === 'ios' ? 160 : 180,
          fontSize: 25,
          position: 'absolute',
          color: '#FFFFFF',
          backgroundColor: 'transparent',
        }}
    >
      {month}
    </Text>
    <Text style={{
          top: 100,
          left: Platform.OS === 'ios' ? 165 : 185,
          position: 'absolute',
          fontSize: 40,
          fontWeight: 'bold',
          color: '#FFFFFF',
          backgroundColor: 'transparent',
        }}
    >
      {day}
    </Text>
  </View>
);

export default Dashboard;
