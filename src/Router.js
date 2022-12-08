import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/products';
import Detail from './pages/detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
