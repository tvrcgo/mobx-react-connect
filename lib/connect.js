import React, { Component } from 'react'
import { observer } from 'mobx-react'

// connect view component and store
const connect = (View, Store) => {
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
      const ObView = observer(View)
      return (
        <ObView {...this.props} store={this.store} />
      )
    }
  })
}

export default connect
