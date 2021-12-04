import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNav from './bottomTabNav';


const Router = () => {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
};

export default Router;
