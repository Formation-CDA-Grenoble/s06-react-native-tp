import React from 'react';
import { Image, Text, View } from 'react-native';

const IMAGE_SIZE = 120;

const MainView = ({ name, picture }) =>
  <View style={{alignItems: 'center', paddingTop: 40, paddingBottom: 40,}}>
    <Image
      style={{width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: IMAGE_SIZE / 2}}
      source={{uri: picture.large}}
    />
    <Text style={{fontSize: 25, paddingTop: 20, paddingBottom: 20}}>
      {name.first} {name.last}
    </Text>
  </View>
;

export default MainView;
