import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer, unmountComponentAtNode } from 'react-hot-loader'
import createHistory from 'history/createHashHistory'

import App from '@common/App'
import ErrorBoundary from '@common/ErrorBoundary'
import createStore from '@store/createStore'
import routes from './router'

const history = createHistory()
const store = createStore(history)

const appContainer = document.getElementById('app')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <ErrorBoundary>
        <Component store={store} history={history} routes={routes} />
      </ErrorBoundary>
    </AppContainer>,
    appContainer
  )
}

render(App)

if (module.hot) {
  module.hot.accept('@common/App', () => {
    unmountComponentAtNode(appContainer)
    render(App)
  })
}
