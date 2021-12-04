import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {View, TextInput, SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: () => void;
}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={18} style={{margin: 5}} />
        <TextInput
          onChangeText={setSearchValue}
          value={searchValue}
          style={{height: 40}}
          placeholder="Search"
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{title: 'Home'}}
      >{() => <HomeScreen searchValue={searchValue} />}</Stack.Screen>
      <Stack.Screen
        component={ProductScreen}
        name="ProductDetails"
        options={{title: 'Product'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
