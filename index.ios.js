import {
  AppRegistry,
} from 'react-native';

import appComponent from './app';

console.log(appComponent)
AppRegistry.registerComponent('rn_poc', () => appComponent);