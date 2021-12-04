import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const AddressScreen = () => {
  const countries = countryList.getData();

  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('Please fill in the fullname field');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in the phone number field');
      return;
    }
    if (!address) {
      Alert.alert('Please fill in the address field');
      return;
    }
    if (!city) {
      Alert.alert('Please fill in the city field');
      return;
    }

    console.warn('Success checkout');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={{backgroundColor: 'white'}}>
            {countries.map(country => (
              <Picker.Item
                value={country.code}
                label={country.name}
                key={country.code}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last name)</Text>
          <TextInput
            placeholder={'Full Name'}
            style={styles.input}
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            placeholder={'Phone number'}
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            placeholder={'Address'}
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder={'City'}
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text={'Checkout'} onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
