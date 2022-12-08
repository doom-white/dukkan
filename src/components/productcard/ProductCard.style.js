import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    backgroundColor: 'white',
    resizeMode: 'contain',
  },
  bodyContainer: {
    // backgroundColor: 'red',
    flex: 1,
    padding: 7,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  price: {
    textAlign: 'right',
    color: 'black',
    fontSize: 17,
  },
});
