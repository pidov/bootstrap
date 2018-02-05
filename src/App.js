import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from './store/createStore'

import '@styles'

const history = createHistory()
const store = createStore(history)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <div> Hello from App.js asdf</div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

