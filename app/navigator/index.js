import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import HomeScene from '../scenes/home';
import DemoScene from '../scenes/demo';

/**
 * Main Stack Navigation. Used to display the app header
 */
export default StackNavigator({
  home: {
    screen: HomeScene
  },
  demo: {
    screen: DemoScene
  }
}, {
  initialRouteName: 'home'
});
