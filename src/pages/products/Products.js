import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Text} from 'react-native';
import ProductCard from '../../components/productcard';
import {API_URL} from '@env';
import useFetch from '../../hooks/usefetch';

const Products = () => {
  const {loading, error, response} = useFetch(API_URL);
  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={response} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
