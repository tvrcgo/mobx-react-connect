!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("mobx"),require("mobx-react")):"function"==typeof define&&define.amd?define(["react","mobx","mobx-react"],t):"object"==typeof exports?exports.mobxReactConnect=t(require("react"),require("mobx"),require("mobx-react")):e.mobxReactConnect=t(e.React,e.mobx,e.mobxReact)}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(0),s=n(f),l=r(3),p=r(4),b=r(2),d=n(b),y=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,p.observer)(function(n){function f(e){o(this,f);var t=u(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,e));return t.store={},t}return i(f,n),a(f,[{key:"componentWillMount",value:function(){this.store="function"==typeof t?new t(this.props):(0,l.observable)(t)}},{key:"render",value:function(){var t=(0,p.observer)(function(t){return(0,d.default)(e(t),r)});return s.default.createElement(t,c({},this.props,{store:this.store}))}}]),f}(f.Component))};t.default=y},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),u=n(o),i=function(e){var t=void 0;if(e.constructor===Array)t=e.map(function(e){return e});else{t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),t},c=function(e){var t=e.styleName,r=[];return t&&"string"==typeof t&&(r=t.split(" ")),r},a=function(e){return e&&"[object Array]"===toString.call(e)},f=function(e){var t="function"==typeof Symbol&&Symbol.iterator;return!!e&&"function"==typeof(t?e[t]:e["@@iterator"])},s=function e(t,r){var n=t,o=!1;Object.isFrozen&&Object.isFrozen(n)&&(o=!0,n=i(n),n.props=i(n.props));var s=c(n.props);if(s.length){var l=n.props.className,p=s.map(function(e){return r[e]});n.props.className=l?[l].concat(p).join(" "):p.join(" "),delete n.props.styleName}var b=n.props.children;return u.default.isValidElement(b)?n.props.children=e(u.default.Children.only(b),r):(a(b)||f(b))&&(n.props.children=u.default.Children.map(b,function(t){return u.default.isValidElement(t)?e(t,r):t})),o&&(Object.freeze(n.props),Object.freeze(n)),n};t.default=s},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.connect=void 0;var o=r(1),u=n(o);t.connect=u.default}])});