import React from 'react'

// unfreeze object
const unfreeze = (source) => {
  let target
  if (source.constructor === Array) {
    target = source.map((element) => {
      return element
    })
  } else {
    target = {}
    for (const property in source) {
      if (source.hasOwnProperty(property)) {
        target[property] = source[property]
      }
    }
  }

  Object.setPrototypeOf(target, Object.getPrototypeOf(source))

  return target
}

const parseStyleNames = ({ styleName, clazz }) => {
  let names = []
  if (styleName && typeof styleName === 'string') {
    names = styleName.split(' ')
  }
  if (clazz && typeof clazz === 'string') {
    names = names.concat(clazz.split(' '))
  }
  return names
}

const isArray = (target) => {
  return target && toString.call(target) === '[object Array]'
}

const isIterable = (target) => {
  const ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
  const OLD_ITERATOR_SYMBOL = '@@iterator'
  if (!target) {
    return false
  }
  const iterator = ITERATOR_SYMBOL ? target[ITERATOR_SYMBOL] : target[OLD_ITERATOR_SYMBOL]
  return typeof iterator === 'function'
}

const isObject = (value) => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

// link styles and component
const linkStyles = (element, styles) => {

  if (!isObject(element) || !styles) {
    return element
  }

  let copyElement = element
  let isFrozen = false

  if (Object.isFrozen && Object.isFrozen(copyElement)) {
    isFrozen = true
    copyElement = unfreeze(copyElement)
    copyElement.props = unfreeze(copyElement.props)
  }

  // append styles to className
  const styleNames = parseStyleNames(copyElement.props)

  if (styleNames.length) {
    const className = copyElement.props.className
    const appendStyles = styleNames.map(name => styles[name])
    if (className) {
      copyElement.props.className = [ className ].concat(appendStyles).join(' ')
    } else {
      copyElement.props.className = appendStyles.join(' ')
    }
    // remove props.styleName
    delete copyElement.props.styleName
    delete copyElement.props.clazz
  }

  // children
  const children = copyElement.props.children

  if (React.isValidElement(children)) {
    copyElement.props.children = linkStyles(React.Children.only(children), styles)
  } else if (isArray(children)) {
    copyElement.props.children = children.map(node => {
      if (React.isValidElement(node)) {
        return linkStyles(node, styles)
      }
      return node
    })
  } else if (isIterable(children)) {
    copyElement.props.children = React.Children.map(children, node => {
      if (React.isValidElement(node)) {
        return linkStyles(node, styles)
      }
      return node
    })
  }

  // freeze element
  if (isFrozen) {
    Object.freeze(copyElement.props)
    Object.freeze(copyElement)
  }

  return copyElement
}

export default linkStyles
