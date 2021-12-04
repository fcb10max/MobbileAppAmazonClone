import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options[0] ? product.options[0] : '',
  );
  const [quantity, setQuantity] = useState(0);

  const route = useRoute()

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={product.id} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from $ {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> $ {product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
      <Button text={"Add to cart"} onPress={() => console.warn("add to cart")} />
      <Button text={"Buy now"} onPress={() => console.warn("Buy now")} />
    </ScrollView>
  );
};

export default ProductScreen;
