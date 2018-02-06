import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class LayoutRoute extends Component {
  render () {
    const { props } = this
    const { component: Component, layout: Layout, ...rest } = props

    return (
      <Route {...rest} render={routeProps => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )} />
    )
  }
}
