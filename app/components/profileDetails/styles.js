import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  profile: {
    backgroundColor: '#333333',
    height: 200,
  },
  profileContainer: {
    paddingTop: 40,
    paddingLeft: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  detailContainer: {
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColorDetails: {
    color: '#ffffff',
  },
  fontSizeName: {
    fontSize: 22,
  },
  fontSizeDetails: {
    fontSize: 18,
  },
  paddingDetails: {
    paddingBottom: 5,
  },
});
