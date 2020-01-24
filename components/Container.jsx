import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

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
      <Text>{person.name.first}</Text>
    );
  }
}

export default Container;
