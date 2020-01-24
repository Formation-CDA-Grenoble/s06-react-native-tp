import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';
import MainView from './MainView';
import PhoneView from './PhoneView';
import AddressView from './AddressView';
import ProfileView from './ProfileView';

class Container extends Component {
  state = {
    data: null,
  };

  componentDidMount = () => {
    Axios.get('https://randomuser.me/api/')
    .then(response =>
      this.setState({ data: response.data })
    )
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <Text>Loading...</Text>
    }

    const person = data.results[0];

    return (
      <View>
        <MainView name={person.name} picture={person.picture} />
        <AddressView location={person.location} />
      </View>
    );
  }
}

export default Container;
