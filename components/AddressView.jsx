import React from 'react';
import { View, Text } from 'react-native';

const AddressView = ({ location }) => {
  const {street, city, postcode, country } = location;

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>{street.number}, {street.name}</Text>
      <Text style={{ fontSize: 20 }}>{postcode} {city}</Text>
      <Text style={{ fontSize: 20, textTransform: 'uppercase', paddingTop: 10 }}>{country}</Text>
    </View>
  );
}

export default AddressView;
