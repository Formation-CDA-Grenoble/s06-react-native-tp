import React from 'react';
import { Text } from 'react-native';

const TextSegment = (props) =>
  <Text {...props} style={[props.style, { fontSize: 20 }]}>{props.children}</Text>
;

export default TextSegment;
