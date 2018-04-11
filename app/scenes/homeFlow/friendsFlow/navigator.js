import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import FriendsListScene from './list';
import FriendDetailsScene from './detail';

export default StackNavigator({
  friendsList: {
    screen: FriendsListScene
  },
  friendDetails: {
    screen: FriendDetailsScene
  }
}, {
  initialRouteName: 'friendsList'
});


