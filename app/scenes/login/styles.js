import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  view_logo: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logo: {
    width: 300,
    height: 85,
    resizeMode: 'stretch',
  },

  view_login_button: {
    paddingTop: 150,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  login_button: {
    backgroundColor: '#B2CE38',
    width: 360,
    height: 60,
    borderRadius: 10,
    position: 'absolute',
    bottom: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  login_text: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  terms_button: {
    position: 'absolute',
    bottom: 60,
  },

  terms_text: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

});
