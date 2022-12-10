import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ced6e0',
    backgroundColor: '#a4b0be',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 7,
  },
  image: {
    width: 100,
    minHeight: 100,
    backgroundColor: 'white',
    resizeMode: 'contain',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
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
    textAlign: 'center',
    backgroundColor: '#2f3542',
    borderRadius: 7,
    padding: 5,
    color: '#f1f2f6',
    fontSize: 17,
    width: 80,
  },
  priceContainer: {
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
  },
});
