import React from 'react';
import { Text, View } from 'react-native';
import TextSegment from './TextSegment';

const defaultColor = 'darkgrey';

const PhoneNumber = ({ type, number, color }) =>
  <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
    <TextSegment style={{ color: color || defaultColor }}>{type}: </TextSegment>
    <TextSegment>{number}</TextSegment>
  </View>
;

const PhoneView = ({ phone, cell }) =>
  <View style={{ alignItems: 'center' }}>
    <PhoneNumber type="Phone" number={phone} color="red" />
    <PhoneNumber type="Mobile" number={cell} />
  </View>
;

export default PhoneView;
