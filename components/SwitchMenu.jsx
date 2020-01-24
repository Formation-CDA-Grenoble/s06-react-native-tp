import React from 'react';
import { View, Button } from 'react-native';

const SwitchMenu = () =>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20 }}>
    <Button title="Adresse" color="#008" style={{ width: '33%' }}/>
    <Button title="Téléphone" color="#008" style={{ width: '33%' }} />
    <Button title="Profil" color="#008" style={{ width: '33%' }} />
  </View>
;

export default SwitchMenu;
