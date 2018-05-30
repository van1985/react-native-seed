import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: Platform.OS === 'ios' ? 50 : 60,
    height: Platform.OS === 'ios' ? 50 : 60,
    borderRadius: Platform.OS === 'ios' ? 25 : 30,
  },
  dashboard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  dashboardContainer: {
    margin: 50,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  birthDateContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  birthDateImg: {
    width: Platform.OS === 'ios' ? 280 : 315,
    height: 120,
  },
  textDay: {
    top: 50,
    left: Platform.OS === 'ios' ? 125 : 145,
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  textMonth: {
    top: 20,
    left: Platform.OS === 'ios' ? 120 : 140,
    fontSize: 25,
    position: 'absolute',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
});
