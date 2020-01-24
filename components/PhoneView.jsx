import React from 'react';
import { Text, View } from 'react-native';

const defaultColor = 'darkgrey';

const PhoneNumber = ({ type, number, color }) =>
  <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
    <Text style={{ color: color || defaultColor, fontSize: 20 }}>{type}: </Text>
    <Text style={{ fontSize: 20 }}>{number}</Text>
  </View>
;

const PhoneView = ({ phone, cell }) =>
  <View style={{ alignItems: 'center' }}>
    <PhoneNumber type="Phone" number={phone} color="red" />
    <PhoneNumber type="Mobile" number={cell} />
  </View>
;

export default PhoneView;
