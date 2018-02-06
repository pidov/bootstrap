import React, { Component } from 'react'
import autobind from 'react-autobind'

export default class Widget extends Component {
  constructor (props) {
    super(props)

    autobind(this)
  }

  render () {
    return (
      <div className='page container-fluid'>
        <div className='row app-titlebar'>
          <div className='col-9'>
            <p className='app-header'> Page title </p>
          </div>
          <div className='col-3'>
            <div className='titlebar-btn-group'>
              <i className='connect-icon connect-icon-action connect-icon-1 connect-icon-minimize' />
              <i className='connect-icon connect-icon-action connect-icon-1 connect-icon-maximize' />
              <i className='connect-icon connect-icon-action connect-icon-1 connect-icon-close' />
            </div>
          </div>
        </div>
        <div className='row app-page-content'>
          { this.props.children }
        </div>
        <div className='row app-footer app-btn-group'>
          Footer area
        </div>
      </div>
    )
  }
}
