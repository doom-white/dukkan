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
        <Stack.Screen
          name="products"
          component={Products}
          options={{
            headerStyle: {backgroundColor: '#2f3542'},
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
