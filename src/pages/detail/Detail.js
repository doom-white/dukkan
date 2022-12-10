import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {API_URL} from '@env';
import Loading from '../../components/loading';
import Error from '../../components/error';
import useFetch from '../../hooks/usefetch';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;

  const {loading, error, response} = useFetch(`${API_URL}/${id}`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: response.image}} style={styles.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{response.title}</Text>
        <Text style={styles.desc}>{response.description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{response.price} ₺</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={null} style={styles.button}>
          <Text style={styles.buttonText}>Sepete Ekle!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Detail;
