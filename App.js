import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';

const APICall = () => {
  Axios.get('https://randomuser.me/api/')
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
  ;
}

export default function App() {
  APICall();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
