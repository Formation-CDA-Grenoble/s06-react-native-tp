import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';
import MainView from './MainView';
import PhoneView from './PhoneView';
import AddressView from './AddressView';
import ProfileView from './ProfileView';
import SwitchMenu from './SwitchMenu';

class Container extends Component {
  state = {
    data: null,
    currentMenu: 0,
  };

  componentDidMount = () => {
    Axios.get('https://randomuser.me/api/?results=10')
    .then(response =>
      this.setState({ data: response.data })
    )
    .catch(error => console.error(error));
  }

  setCurrentMenu = (index) => () => {
    this.setState({ currentMenu: index });
  }

  render = () => {
    const { data, currentMenu } = this.state;

    if (data === null) {
      return <Text>Loading...</Text>
    }

    const person = data.results[0];

    let subScreen;
    switch (currentMenu) {
      case 0:
        subScreen = <AddressView location={person.location} />;
        break;
      case 1:
        subScreen = <PhoneView phone={person.phone} cell={person.cell} />;
        break;
      case 2:
        subScreen = <ProfileView username={person.login.username} dob={person.dob} registered={person.registered} />
        break;
      default:
        subScreen = null;
    }

    return (
      <View>
        <MainView name={person.name} picture={person.picture} />
        <SwitchMenu setCurrentMenu={this.setCurrentMenu} />
        {subScreen}
      </View>
    );
  }
}

export default Container;
