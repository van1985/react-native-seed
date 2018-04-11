import { TabNavigator } from 'react-navigation';
import DashboardScene from './dashboard';
import FriendsScene from './friends';
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
    screen: FriendsScene,
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