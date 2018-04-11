import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwitchNavigator } from 'react-navigation';
import LoginScene from '../scenes/login';
import HomeFlow from '../scenes/homeFlow/navigator';

/**
 * Main Stack Navigation. Used to display the app header
 */
export default SwitchNavigator({
  login: {
    screen: LoginScene
  },
  home: {
    screen: HomeFlow
  }
}, {
  initialRouteName: 'login',
  headerMode: 'none'
});


