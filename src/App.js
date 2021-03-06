
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configStore from './config/configStore'
import Root from './Root'

export default class App extends Component {
  render() {
    return (
      <Provider store={configStore}>
        <Root />
      </Provider>
    );
  }
}
