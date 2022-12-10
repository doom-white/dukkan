import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor: 'yellow',
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  innerContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 17,
    flex: 1,
    padding: 7,
    justifyContent: 'center',
    overflow: 'scroll',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  desc: {
    fontSize: 19,
    textAlign: 'justify',
    marginTop: 15,
  },
  price: {
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  priceContainer: {
    // backgroundColor: 'green',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#2ed573',
    width: 150,
    padding: 10,
    borderRadius: 7,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#f1f2f6',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'blue',
    paddingVertical: 5,
  },
});
