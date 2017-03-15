import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import linkStyles from './linkstyles'

// connect view component, store and css modules
const connect = (statelessComponent, Store, styles) => {
  const reactClass = {}
  Object.keys(statelessComponent).forEach(key => {
    reactClass[key] = statelessComponent[key]
  })
  reactClass.displayName = statelessComponent.name || statelessComponent.displayName
  reactClass.componentWillMount = function() {
    this.store = typeof Store === 'function' ? new Store(this.props) : observable(Store)
  }
  reactClass.render = function() {
    return linkStyles(statelessComponent({
      ...this.props,
      store: this.store
    }, this.context), styles)
  }
  return observer(React.createClass(reactClass))
}

export default connect
