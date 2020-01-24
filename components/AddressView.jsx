import React from 'react';
import { View, Text } from 'react-native';
import TextSegment from './TextSegment';

const AddressView = ({ location }) => {
  const {street, city, postcode, country } = location;

  return (
    <View style={{ alignItems: 'center' }}>
      <TextSegment>{street.number}, {street.name}</TextSegment>
      <TextSegment>{postcode} {city}</TextSegment>
      <TextSegment style={{ textTransform: 'uppercase', paddingTop: 10 }}>{country}</TextSegment>
    </View>
  );
}

export default AddressView;
