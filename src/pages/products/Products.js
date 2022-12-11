import React from 'react';
import {FlatList, View, Text, Pressable} from 'react-native';
import ProductCard from '../../components/productcard';
import {API_URL} from '@env';
import useFetch from '../../hooks/usefetch';
import Loading from '../../components/loading';
import Error from '../../components/error';
import styles from './Products.style';

const Products = ({navigation, route}) => {
  const category = route.params;
  const {loading, error, response} = useFetch(
    `${API_URL}/category/${category}`,
  );

  const handleProductSelect = id => {
    navigation.navigate('details', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Geri</Text>
        </Pressable>
        <Text style={styles.text}>
          {category.toUpperCase()} ({response.length})
        </Text>
      </View>
      <FlatList
        data={response}
        renderItem={renderProduct}
        style={styles.container}
      />
    </View>
  );
};

export default Products;
