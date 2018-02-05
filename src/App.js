import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import '@styles'

export default class App extends Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <div> Hello from App.js asdf</div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
