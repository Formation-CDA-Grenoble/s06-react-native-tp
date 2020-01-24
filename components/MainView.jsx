import React from 'react';
import { Image, Text, View } from 'react-native';

const IMAGE_SIZE = 100;

const MainView = () =>
  <View style={{alignItems: 'center', paddingTop: 40, paddingBottom: 40,}}>
    <Image
      style={{width: IMAGE_SIZE, height: IMAGE_SIZE}}
      source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
    />
    <Text style={{fontSize: 25, paddingTop: 20, paddingBottom: 20}}>Nom de la personne</Text>
  </View>
;

export default MainView;
