import React from 'react';
import {FlatList} from 'react-native';
import ProductCard from '../../components/productcard';
import {API_URL} from '@env';
import useFetch from '../../hooks/usefetch';
import Loading from '../../components/loading';
import Error from '../../components/error';
import styles from './Products.style';

const Products = ({navigation}) => {
  const {loading, error, response} = useFetch(API_URL);

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
    <FlatList
      data={response}
      renderItem={renderProduct}
      style={styles.container}
    />
  );
};

export default Products;
