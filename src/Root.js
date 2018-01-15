import React, { Component } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import Login from './container/login/Login'

class Root extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene
            key='login'
            component={Login}
            hideNavBar
          />
        </Stack>
      </Router>
    )
  }
}

export default Root