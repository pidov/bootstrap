import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch } from 'react-router-dom'
import LayoutRoute from '@components/LayoutRoute'

import '@styles'

export default class App extends Component {
  render () {
    const { store, history, routes } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <Switch>
            { routes.map(route => <LayoutRoute {...route} key={route} />) }
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}
