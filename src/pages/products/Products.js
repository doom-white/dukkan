import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import ProductCard from '../../components/productcard';
import axios from 'axios';
import {API_URL} from '@env';
import styles from './Products.style';

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const {data} = await axios.get(API_URL);
    setProductData(data);
  };
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView>
      <FlatList data={productData} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
