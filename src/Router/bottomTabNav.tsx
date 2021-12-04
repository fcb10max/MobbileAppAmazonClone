import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911',
        tabBarActiveBackgroundColor: "#ddd",
        headerShown: false,
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProductScreen}
        name="User"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="Cart"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProductScreen}
        name="More"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
