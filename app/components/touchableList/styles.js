import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    height: 90,
    padding: 18,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer: {
    paddingLeft: 40,
    paddingTop: 5,
    flex: 1,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  valueText: {
    color: '#FFFFFF',
    paddingTop: 4,
  },
  arrowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  arrowImg: {
    width: 30,
    height: 30,
  },
});
