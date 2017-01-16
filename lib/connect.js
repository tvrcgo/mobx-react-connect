import React, { Component } from 'react'
import { observer } from 'mobx-react'

// connect view component and store
const connect = (View, Store) => {
  return observer(class ViewComponent extends Component {
    constructor (props) {
      super(props)
      // init store with props
      this.store = typeof Store === 'function' ? Store(this.props) : Store
    }
    render () {
      View = observer(View)
      return (
        <View {...this.props} {...this.store} />
      )
    }
  })
}

export default connect
