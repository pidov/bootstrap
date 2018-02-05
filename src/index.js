import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createHashHistory'

import App from './App'
import ErrorBoundary from './ErrorBoundary'
import createStore from './store/createStore'

const history = createHistory()
const store = createStore(history)

const appContainer = document.getElementById('app')

const Home = () => 'Hello from Home'
const MainLayout = () => 'Hello from MainLayout'
const NotFound = () => 'Hello from NotFound'

const routes = [{
  path: '/',
  exact: true,
  component: Home,
  layout: MainLayout
}, {
  component: NotFound
}]

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
  module.hot.accept('./App', () => {
    // unmountComponentAtNode(appContainer)
    render(App)
  })
}
