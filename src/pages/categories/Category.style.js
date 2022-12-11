import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  contaier: {
    backgroundColor: '#2f3542',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2.17,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f1f2f6',
    fontSize: 21,
    fontWeight: 'bold',
  },
  headerContainer: {
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
