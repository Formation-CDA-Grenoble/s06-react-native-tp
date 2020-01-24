import React from 'react';
import { Text, View } from 'react-native';

const PhoneView = () =>
  <View style={{ alignItems: 'center' }}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: 'darkgrey', fontSize: 20 }}>Phone: </Text>
      <Text style={{ fontSize: 20 }}>81307892</Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: 'darkgrey', fontSize: 20 }}>Mobile: </Text>
      <Text style={{ fontSize: 20 }}>48067644</Text>
    </View>
  </View>
;

export default PhoneView;
