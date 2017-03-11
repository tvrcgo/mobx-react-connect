import React, { Component } from 'react'
import { observer } from 'mobx-react'
import linkStyles from './linkstyles'

// connect view component, store and css modules
const connect = (View, Store, styles = {}) => {
  return observer(class ViewComponent extends Component {
    constructor (props) {
      super(props)
      this.store = {}
    }
    componentWillMount() {
      // init store with props
      this.store = typeof Store === 'function' ? new Store(this.props) : observable(Store)
    }
    render () {
      const ObView = observer((props) => {
        // Wrap stateless component for easy use of css modules
        return linkStyles(View(props), styles)
      })
      return (
        <ObView {...this.props} store={this.store} />
      )
    }
  })
}

export default connect
