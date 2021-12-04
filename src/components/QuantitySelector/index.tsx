import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const QuantitySelector = ({quantity, setQuantity}:{quantity: number, setQuantity: Function}) => {

  const onMinus = () => {
    if (quantity === 0) return;
    setQuantity((prevAmount: number) => prevAmount - 1);
  };
  const onPlus = () => {
    setQuantity((prevAmount: number) => prevAmount + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    width: 130,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3"
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    color: "#007eb9",
  },
})

export default QuantitySelector;
