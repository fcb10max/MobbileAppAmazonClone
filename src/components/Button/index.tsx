import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const Button = ({ text, onPress } : { text: string; onPress: ()=>void}) => {
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#e47911",
    marginVertical: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#a15e1b",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Button;
