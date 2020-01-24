import React from 'react';
import { Text, View } from 'react-native';

const defaultColor = 'darkgrey';

const PhoneNumber = ({ type, number, color }) =>
  <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
    <Text style={{ color: color || defaultColor, fontSize: 20 }}>{type}: </Text>
    <Text style={{ fontSize: 20 }}>{number}</Text>
  </View>
;

const PhoneView = () =>
  <View style={{ alignItems: 'center' }}>
    <PhoneNumber type="Phone" number="81307892" color="red" />
    <PhoneNumber type="Mobile" number="48067644" />
  </View>
;

export default PhoneView;
