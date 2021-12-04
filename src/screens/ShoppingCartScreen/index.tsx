import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const navigation = useNavigation();

  const onCheckout = () => {
    navigation.navigate("AddressScreen")
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text={'Proceed to checkout'}
              onPress={onCheckout}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
