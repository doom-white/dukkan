import React from 'react';
import {FlatList, View, Text, Pressable} from 'react-native';
import useFetch from '../../hooks/usefetch';
import {API_URL} from '@env';
import styles from './Category.style';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

const Category = ({navigation}) => {
  const {loading, error, response} = useFetch(`${API_URL}/categories`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleSelectCategory = item => {
    navigation.navigate('products', item);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>CATEGORIES ({response.length})</Text>
      </View>
      <FlatList
        data={response}
        renderItem={({item}) => (
          <Pressable onPress={() => handleSelectCategory(item)}>
            <View style={styles.contaier}>
              <Text style={styles.text}>{item}</Text>
            </View>
          </Pressable>
        )}
        numColumns="2"
      />
    </View>
  );
};

export default Category;
