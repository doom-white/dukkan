import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import ProductCard from '../../components/productcard';
import {API_URL} from '@env';
import useFetch from '../../hooks/usefetch';
import Loading from '../../components/loading';
import Error from '../../components/error';

const Products = () => {
  const {loading, error, response} = useFetch(API_URL);
  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={response} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
