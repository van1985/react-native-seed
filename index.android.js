import { AppRegistry } from 'react-native';

import appComponent from './app/index';

console.log('appcomponent ', appComponent);

AppRegistry.registerComponent('rn_poc', () => appComponent);
