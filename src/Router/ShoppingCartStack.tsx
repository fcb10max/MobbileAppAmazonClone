import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ShoppingCartScreen} name="ShoppingCartScreen" options={{title: "Shopping Cart"}} />
      <Stack.Screen component={AddressScreen} name="AddressScreen" options={{title: "Address"}} />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
