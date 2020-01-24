import React from 'react';
import { View, Text } from 'react-native';

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

const ProfileView = ({ username, dob, registered }) => {
  const birthDate = new Date(dob.date);
  const registeredDate = new Date(registered.date);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Username: {username}</Text>
      <Text style={{ fontSize: 20 }}>Birthday: {months[birthDate.getMonth()]} {birthDate.getDay()}</Text>
      <Text style={{ fontSize: 20 }}>Age: {dob.age}</Text>
      <Text style={{ fontSize: 20 }}>Member since {registeredDate.toLocaleDateString('en-us')}</Text>
    </View>
  );
}

export default ProfileView;
