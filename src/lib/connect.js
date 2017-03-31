import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import linkStyles from './linkstyles'

// connect view component, stores, css modules
const connect = (statelessComponent, stores = {}, styles = {}) => {
  const ctx = {}
  const reactClass = {}
  Object.keys(statelessComponent).forEach(key => {
    reactClass[key] = statelessComponent[key]
  })
  reactClass.displayName = statelessComponent.name || statelessComponent.displayName
  reactClass.componentWillMount = function() {
    Object.keys(stores).forEach(key => {
      const item = stores[key]
      ctx[key] = item
      if (item && typeof item === 'function') {
        ctx[key] = new item(this.props)
      }
      if (item && typeof item === 'object') {
        ctx[key] = observable(item)
      }
    })
  }
  reactClass.render = function() {
    return linkStyles(statelessComponent({
      ...this.props
    }, ctx, this.context), styles)
  }
  return observer(React.createClass(reactClass))
}

export default connect
