!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("mobx"),require("mobx-react")):"function"==typeof define&&define.amd?define(["react","mobx","mobx-react"],t):"object"==typeof exports?exports.mobxReactConnect=t(require("react"),require("mobx"),require("mobx-react")):e.mobxReactConnect=t(e.React,e.mobx,e.mobxReact)}(this,function(e,t,o){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,o){t.exports=e},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=o(0),i=r(c),f=o(3),a=o(4),l=o(2),p=r(l),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],r={},c={};return Object.keys(e).forEach(function(t){c[t]=e[t]}),c.displayName=e.name||e.displayName,c.componentWillMount=function(){var e=this;Object.keys(t).forEach(function(o){var n=t[o];r[o]=n,n&&"function"==typeof n&&(r[o]=new n(e.props)),n&&"object"===(void 0===n?"undefined":u(n))&&(r[o]=(0,f.observable)(n))})},c.render=function(){return(0,p.default)(e(n({},this.props),r,this.context),o||{})},(0,a.observer)(i.default.createClass(c))};t.default=s},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=o(0),c=r(u),i=function(e){var t=void 0;if(e.constructor===Array)t=e.map(function(e){return e});else{t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),t},f=function(e){var t=e.styleName,o=e.clazz,r=[];return t&&"string"==typeof t&&(r=t.split(" ")),o&&"string"==typeof o&&(r=r.concat(o.split(" "))),r},a=function(e){return e&&"[object Array]"===toString.call(e)},l=function(e){var t="function"==typeof Symbol&&Symbol.iterator;return!!e&&"function"==typeof(t?e[t]:e["@@iterator"])},p=function(e){var t=void 0===e?"undefined":n(e);return null!=e&&("object"===t||"function"===t)},s=function e(t,o){if(!p(t)||!o)return t;var r=t,n=!1;Object.isFrozen&&Object.isFrozen(r)&&(n=!0,r=i(r),r.props=i(r.props));var u=f(r.props);if(u.length){var s=r.props.className,y=u.map(function(e){return o[e]});r.props.className=s?[s].concat(y).join(" "):y.join(" "),delete r.props.styleName,delete r.props.clazz}var d=r.props.children;return c.default.isValidElement(d)?r.props.children=e(c.default.Children.only(d),o):a(d)?r.props.children=d.map(function(t){return c.default.isValidElement(t)?e(t,o):t}):l(d)&&(r.props.children=c.default.Children.map(d,function(t){return c.default.isValidElement(t)?e(t,o):t})),n&&(Object.freeze(r.props),Object.freeze(r)),r};t.default=s},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.connect=void 0;var n=o(1),u=r(n);t.connect=u.default}])});