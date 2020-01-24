import React from 'react';
import { View, Text } from 'react-native';
import TextSegment from './TextSegment';

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
      <TextSegment>Username: {username}</TextSegment>
      <TextSegment>Birthday: {months[birthDate.getMonth()]} {birthDate.getDay()}</TextSegment>
      <TextSegment>Age: {dob.age}</TextSegment>
      <TextSegment>Member since {registeredDate.toLocaleDateString('en-us')}</TextSegment>
    </View>
  );
}

export default ProfileView;
