import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import linkStyles from './linkstyles'

// connect view component, store, css modules ...
const connect = (statelessComponent, context = {}) => {
  const ctx = {}
  const reactClass = {}
  Object.keys(statelessComponent).forEach(key => {
    reactClass[key] = statelessComponent[key]
  })
  reactClass.displayName = statelessComponent.name || statelessComponent.displayName
  reactClass.componentWillMount = function() {
    Object.keys(context).forEach(key => {
      const item = context[key]
      ctx[key] = item
      if (item && item.instance === true && typeof item.target === 'function') {
        ctx[key] = new item.target(this.props)
      }
      if (item && item.observable === true) {
        ctx[key] = observable(item.target)
      }
    })
  }
  reactClass.render = function() {
    return linkStyles(statelessComponent({
      ...this.props
    }, ctx, this.context), ctx.styles || {})
  }
  return observer(React.createClass(reactClass))
}

export default connect
