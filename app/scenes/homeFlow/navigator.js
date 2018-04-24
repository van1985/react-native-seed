import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import DashboardScene from './dashboard';
import FriendsFlow from './friendsFlow/navigator';
import ProfileScene from './profile';

export default TabNavigator(
  {
    dashboard: {
      screen: DashboardScene,
      navigationOptions: {
        swipeEnabled: true,
        title: 'Dashboard',
      },
    },
    friends: {
      screen: FriendsFlow,
      navigationOptions: {
        swipeEnabled: true,
        title: 'Team Board',
      },
    },
    profile: {
      screen: ProfileScene,
      navigationOptions: {
        swipeEnabled: true,
        title: 'Profile',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#B2CE38',
        paddingBottom: Platform.OS === 'ios' ? 15 : 0,
      },
    },
  },
);
