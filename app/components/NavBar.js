'use strict';

import React,{Component} from 'react';
import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
  style: {
      color: '#ff0000'
  }
};

var styles = {
    backgroundColor: '#ff0000',
};

export default class NavBar extends Component {
  render () {
    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
        return (
            <NavigationBar
              title={titleConfig}
              rightButton={rightButtonConfig}
              style={styles}
              containerStyle={styles}
            />
        );  
    }
}