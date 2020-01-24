import React from 'react';
import { View, Button } from 'react-native';

const buttonTitles = [
  'Adresse',
  'Téléphone',
  'Profil',
]

const SwitchMenu = ({ setCurrentMenu }) =>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
    {buttonTitles.map( (title, index) =>
      <Button key={`button${index}`} onPress={setCurrentMenu(index)} title={title} color="#008" style={{ width: '33%' }} />
    )}
  </View>
;

export default SwitchMenu;
