# mobx-react-connect
Connect react component and mobx store.

### Features
- No need inject and Provider.
- Instantiate store class with component props.
- Map stores to props.

### Install
```js
npm install mobx-react-connect --save-dev
```

## Example

Store class

```js
// index.store.js
class Store {
  @observable id = 0
  constructor (props) {
    const { id } = props
    this.id = id
  }

  @computed
  get userId () {
    return this.id
  }

  @action
  increase = () => {
    this.id++
  }
}

// store entry.
export default (props) => {
  // instantiate store with props.
  const store = new Store(props)
  // map to props
  return {
    store
  }
}
```

React component.

```js
// index.js
import { connect } from 'mobx-react-connect'
import Store from './index.store'

// functional component
const HelloView = ({ store }) => {
  return (
    <h1>hello buddy. { store.userId } <a onClick={store.increase}>next</a></h1>
  )
}

export default connect(HelloView, Store)
```

Instantiate component.

```js
import HelloView from './index'

<HelloView id={2} />
```

## License
MIT