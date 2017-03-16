# mobx-react-connect

Connect react component, mobx store and css module.

**connect( StatelessComponent, Store, CSSModule )**

### Features
- Only stateless component.
- Map observable store to props.
- Easy use of css modules.

### Install
```js
npm install mobx-react-connect --save-dev
```

## Example

### Connect component and store.

Store class

```js
// index.store.js
export default class Store {
  @observable id = 0
  constructor (props) {
    const { id } = props
    this.id = id
  }

  @computed
  get userId () {
    return this.id
  }

  @action.bound
  increase() {
    this.id++
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

### Connect component and CSS Modules

You won't need to set className for element like `className={css.title}` any more.

- Set `styleName` attribute for element. Styles in css module will be combined into `className`.
- Multiple style names is available, like `styleName='wrap title'`.
- `styleName` and `className` can be concurrent and styles will be joined together.

```js
import { connect } from 'mobx-react-connect'
import css from './index.css'

const View = ({ store }) => {
  return (
    <div styleName='green red'></div>
  )
}

export default connect(View, {}, css)
```

`index.css` - Styles for component

```css
.green {
  background-color: green;
}

.red {
  color: red;
}
```

## License
MIT