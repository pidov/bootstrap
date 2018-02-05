import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const appContainer = document.getElementById('app')

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
