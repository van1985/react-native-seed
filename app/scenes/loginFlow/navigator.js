import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import WelcomeScene from './welcome';
import LoginScene from './login';

export default StackNavigator({
  welcome: {
    screen: WelcomeScene
  },
  login: {
    screen: LoginScene
  }
}, {
  initialRouteName: 'welcome'
});


