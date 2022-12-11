import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/products';
import Detail from './pages/detail';
import Category from './pages/categories/Category';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="categories"
          component={Category}
          options={{
            contentStyle: {backgroundColor: '#747d8c'},
            headerTintColor: '#f1f2f6',
            headerTitleStyle: {color: '#f1f2f6'},
          }}
        />
        <Stack.Screen
          name="products"
          component={Products}
          options={{
            headerTintColor: '#f1f2f6',
            headerTitleStyle: {color: '#f1f2f6'},
          }}
        />
        <Stack.Screen name="details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
