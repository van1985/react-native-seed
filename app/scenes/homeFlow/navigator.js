import { TabNavigator } from 'react-navigation';
import DashboardScene from './dashboard';
import FriendsFlow from './friendsFlow/navigator';
import ProfileScene from './profile';

export default TabNavigator({
  dashboard: {
    screen: DashboardScene,
    navigationOptions: {
      swipeEnabled: true,
      title: 'Dashboard'
    }
  },
  friends: {
    screen: FriendsFlow,
    navigationOptions: {
      swipeEnabled: true,
      title: 'Friends'
    }
  },
  profile: {
    screen: ProfileScene,
    navigationOptions: {
      swipeEnabled: true,
      title: 'Profile'
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: '#6b52ae',
    },
  }
});