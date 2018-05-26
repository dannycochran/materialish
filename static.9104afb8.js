(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://jamesplease.github.io/materialish/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = exports.CodeManager = exports.Editor = exports.Markdown = undefined;

var _markdown = __webpack_require__(43);

var _markdown2 = _interopRequireDefault(_markdown);

var _editor = __webpack_require__(46);

var _editor2 = _interopRequireDefault(_editor);

var _codeManager = __webpack_require__(48);

var _codeManager2 = _interopRequireDefault(_codeManager);

var _preview = __webpack_require__(49);

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Markdown = _markdown2.default;
exports.Editor = _editor2.default;
exports.CodeManager = _codeManager2.default;
exports.Preview = _preview2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("materialish/icons");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-lowlight");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = exports.Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var homeMarkdown = this.props.homeMarkdown;


      return _react2.default.createElement(_docComponents.Markdown, { markdownText: homeMarkdown });
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Home);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fetch-dedupe");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconsCatalog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(5);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _iconsData = __webpack_require__(51);

var _iconsData2 = _interopRequireDefault(_iconsData);

var _reactStatic = __webpack_require__(2);

__webpack_require__(52);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconsCatalog = exports.IconsCatalog = function (_Component) {
  _inherits(IconsCatalog, _Component);

  function IconsCatalog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconsCatalog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconsCatalog.__proto__ || Object.getPrototypeOf(IconsCatalog)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      query: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconsCatalog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var query = this.state.query;


      var lowercaseQuery = query.toLowerCase();

      var filteredComponents = _iconsData2.default.icons.filter(function (icon) {
        if (!icon.iconName || !icon.iconClass) {
          return false;
        }
        return icon.iconName.toLowerCase().includes(lowercaseQuery) || icon.iconClass.toLowerCase().includes(lowercaseQuery);
      });

      return _react2.default.createElement(
        'div',
        { className: 'iconsCatalog' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader iconsCatalog_primaryHeader' },
          'Icons Catalog'
        ),
        _react2.default.createElement('input', {
          className: 'iconsCatalog_searchInput',
          autoComplete: 'off',
          autoFocus: true,
          inputMode: 'text',
          spellCheck: 'false',
          type: 'text',
          placeholder: 'Filter icons',
          value: query,
          onChange: function onChange(e) {
            return _this2.setState({ query: e.currentTarget.value });
          }
        }),
        _react2.default.createElement(
          'p',
          { className: 'iconsCatalog_count' },
          'Displaying ',
          _react2.default.createElement(
            'b',
            null,
            filteredComponents.length
          ),
          ' of',
          ' ',
          _react2.default.createElement(
            'b',
            null,
            _iconsData2.default.count
          ),
          ' icons.'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'iconsCatalog_iconList' },
          filteredComponents.map(function (icon, index) {
            var Comp = MaterialishIcons[icon.iconClass];
            return _react2.default.createElement(
              'div',
              {
                className: 'iconsCatalog_icon',
                key: icon.iconName + '-' + index },
              _react2.default.createElement(Comp, { size: '1.4rem' }),
              _react2.default.createElement(
                'span',
                { className: 'iconsCatalog_iconClass' },
                icon.iconClass
              )
            );
          })
        )
      );
    }
  }]);

  return IconsCatalog;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(IconsCatalog);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialish = __webpack_require__(15);

var Materialish = _interopRequireWildcard(_materialish);

var _icons = __webpack_require__(5);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(4);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var demoScope = _extends({
  React: _react2.default,
  Component: _react.Component,
  Fragment: _react.Fragment,
  PropTypes: _propTypes2.default
}, Materialish, MaterialishIcons);

var Usage = exports.Usage = function (_Component) {
  _inherits(Usage, _Component);

  function Usage() {
    _classCallCheck(this, Usage);

    return _possibleConstructorReturn(this, (Usage.__proto__ || Object.getPrototypeOf(Usage)).apply(this, arguments));
  }

  _createClass(Usage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          markdown = _props.markdown,
          example = _props.example;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Using Icons'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Each icon provided by Materialish is an individual React Component. Because the components render SVG, so you do not need to import a CSS file to use the icons.'
        ),
        _react2.default.createElement(
          _docComponents.CodeManager,
          { code: example },
          function (_ref) {
            var code = _ref.code,
                handleCodeChange = _ref.handleCodeChange;
            return _react2.default.createElement(
              _react.Fragment,
              null,
              code && _react2.default.createElement(_docComponents.Preview, {
                className: 'componentDoc_preview',
                code: code,
                scope: demoScope
              }),
              _react2.default.createElement(
                'div',
                { className: 'componentDoc_note' },
                _react2.default.createElement(
                  'span',
                  { className: 'componentDoc_noteEmoji' },
                  '\uD83D\uDE4C'
                ),
                ' Heads up! This code is editable. The preview above will update to reflect your changes.'
              ),
              _react2.default.createElement(_docComponents.Editor, {
                className: 'componentDoc_editor',
                theme: 'oceanic-next',
                codeText: code,
                onChange: handleCodeChange
              })
            );
          }
        ),
        _react2.default.createElement(_docComponents.Markdown, { markdownText: markdown })
      );
    }
  }]);

  return Usage;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Usage);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("materialish");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = exports.Icons = function (_Component) {
  _inherits(Icons, _Component);

  function Icons() {
    _classCallCheck(this, Icons);

    return _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).apply(this, arguments));
  }

  _createClass(Icons, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Icons'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              {
                href: 'https://material.io/tools/icons/?style=baseline',
                className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Design Icons Docs'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              {
                href: 'https://github.com/google/material-design-icons',
                className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Designs Icons GitHub Repository'
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Material Design includes a collection of icons. Materialish exports these icons as individual React components for you to use in your applications.'
        ),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'ul',
          { className: 'icons_links' },
          _react2.default.createElement(
            'li',
            { className: 'icons_link' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/icons/usage' },
              'Usage'
            ),
            ': Learn how to import and use icons in your application'
          ),
          _react2.default.createElement(
            'li',
            { className: 'icons_link' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/icons/catalog' },
              'Catalog'
            ),
            ': View and search the icon collection'
          )
        )
      );
    }
  }]);

  return Icons;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Icons);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDoc = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialish = __webpack_require__(15);

var Materialish = _interopRequireWildcard(_materialish);

var _icons = __webpack_require__(5);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(4);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(54);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var demoScope = _extends({
  React: _react2.default,
  Component: _react.Component,
  Fragment: _react.Fragment,
  PropTypes: _propTypes2.default
}, Materialish, MaterialishIcons);

var rootSourceUrl = 'https://github.com/jamesplease/materialish/tree/master/src/';

var ComponentDoc = exports.ComponentDoc = function (_Component) {
  _inherits(ComponentDoc, _Component);

  function ComponentDoc() {
    _classCallCheck(this, ComponentDoc);

    return _possibleConstructorReturn(this, (ComponentDoc.__proto__ || Object.getPrototypeOf(ComponentDoc)).apply(this, arguments));
  }

  _createClass(ComponentDoc, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          markdown = _props.markdown,
          example = _props.example;
      var name = component.name,
          description = component.description,
          componentKey = component.componentKey,
          sourceLink = component.sourceLink,
          materialDocsLink = component.materialDocsLink;


      var sourceLinkToUse = sourceLink ? sourceLink : '' + rootSourceUrl + componentKey;

      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          name
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: sourceLinkToUse, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-code' }),
              ' View Source'
            )
          ),
          materialDocsLink && _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Docs'
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          description
        ),
        _react2.default.createElement(
          _docComponents.CodeManager,
          { code: example },
          function (_ref) {
            var code = _ref.code,
                handleCodeChange = _ref.handleCodeChange;
            return _react2.default.createElement(
              _react.Fragment,
              null,
              code && _react2.default.createElement(_docComponents.Preview, {
                className: 'componentDoc_preview',
                code: code,
                scope: demoScope
              }),
              _react2.default.createElement(
                'div',
                { className: 'componentDoc_note' },
                _react2.default.createElement(
                  'span',
                  { className: 'componentDoc_noteEmoji' },
                  '\uD83D\uDE4C'
                ),
                ' Heads up! This code is editable. The preview above will update to reflect your changes.'
              ),
              _react2.default.createElement(_docComponents.Editor, {
                className: 'componentDoc_editor',
                theme: 'oceanic-next',
                codeText: code,
                onChange: handleCodeChange
              })
            );
          }
        ),
        _react2.default.createElement(_docComponents.Markdown, { markdownText: markdown })
      );
    }
  }]);

  return ComponentDoc;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(ComponentDoc);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).apply(this, arguments));
  }

  _createClass(Components, [{
    key: 'render',
    value: function render() {
      var components = this.props.components;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader' },
          'Components'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Materialish is a collection of React components. Select the component you would like to read more about.'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'components_list' },
          components.map(function (component) {
            return _react2.default.createElement(
              'li',
              { key: component.componentKey, className: 'components_listItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/components/' + component.url },
                component.name
              )
            );
          })
        )
      );
    }
  }]);

  return Components;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Components);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          { className: "primaryHeader" },
          "Not Found"
        ),
        _react2.default.createElement(
          "p",
          { className: "paragraph" },
          "\uD83D\uDE48 This page could not be found."
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(32);

var _app = __webpack_require__(34);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This export is used for static rendering
exports.default = _app2.default;


if (typeof document !== 'undefined') {
  _reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('root'));
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ":root{--maxAppWidth:1200px;--standardContentPadding:20px;--appBodyPadding:40px;--navWidth:300px;--headerHeight:65px;--appTopPadding:30px;--mainColor:#6045f5;--mt-baseFontSize:16px}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}body,html{background-color:#fff;margin:0;padding:0;font-family:Roboto,sans-serif}#root,.app_body,body,html{min-height:calc(100vh - var(--headerHeight))}.contents{max-width:var(--maxAppWidth);padding:0 var(--standardContentPadding);margin:0 auto}ul{margin:0;padding:0;list-style:none}a{text-decoration:none}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "body{font-size:1rem;-webkit-font-smoothing:antialiased}.markdown h1,.markdown h2,.primaryHeader,.secondaryHeader{color:var(--mainColor);font-weight:400;-webkit-font-smoothing:antialiased;padding:0}.markdown h1,.primaryHeader{margin:45px 0 30px;font-size:2.3rem}.markdown h1:first-child,.primaryHeader:first-child{margin-top:25px}.markdown h2,.secondaryHeader{margin:80px 0 20px;font-size:1.6rem}a{color:var(--mainColor)}.markdown code,.markdown pre{background-color:#f0f5ff}.hljs{color:#000}.markdown pre{padding:13px 10px;color:#514056;border-radius:2px;font-size:1.2rem;line-height:1.4}.markdown p,.paragraph{line-height:1.7}", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}.cm-animate-fat-cursor,.cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-webkit-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:\"\"}span.CodeMirror-selectedtext{background:none}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CodeMirror{padding:30px 10px;font-size:1.25rem}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "body{cursor:default}code{cursor:text}a,button,input[type=button],input[type=checkbox],input[type=radio],input[type=submit]{cursor:pointer}button[disabled],input[disabled]{cursor:default}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".markdown table{width:100%}.markdown th{font-weight:700;text-align:left}.markdown td,.markdown th{padding:7px 10px}.markdown td:first-child,.markdown th:first-child{padding-left:0}.markdown td:first-child,.markdown td:nth-child(2){font-family:monospace}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactLowlight = __webpack_require__(7);

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

var _javascript = __webpack_require__(28);

var _javascript2 = _interopRequireDefault(_javascript);

__webpack_require__(29);

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This allows us to use the JS mode of CodeMirror

// This themes the highlighted syntax within Markdown as a GitHub Gist.
// There are two separate types of code that this documentation
// supports.
//
// 1. Code blocks within imported Markdown files
// 2. Code files that can be executed and modified with the
//   in-browser text editor
//
// For the first use case, a few libraries are used:
//
// - React Markdown: this parses the Markdown files. Note that
//   this library is not configured in this file.
// - React Lowlight: this adds syntax highlighting support to
//   React Markdown
// - Highlight.js: This is the actual syntax highlighting used
//   by Lowlight
//
//
// And in the second use case, CodeMirror is used.
//
// This file configures all of these libraries

if (typeof navigator !== 'undefined') {
  __webpack_require__(31).default;
}

// This registers JavaScript as a language for Highlight.js.


// Oceanic Next is the theme that we use for CodeMirror
_reactLowlight2.default.registerLanguage('js', _javascript2.default);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".hljs{display:block;background:#fff;padding:.5em;color:#333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-emphasis,.hljs-quote,.hljs-string,.hljs-strong,.hljs-template-variable,.hljs-variable{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol{color:#0086b3}.hljs-name,.hljs-section{color:#63a35c}.hljs-tag{color:#333}.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title{color:#795da3}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".cm-s-oceanic-next.CodeMirror{background:#304148;color:#f8f8f2}.cm-s-oceanic-next div.CodeMirror-selected{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-line::selection,.cm-s-oceanic-next .CodeMirror-line>span::selection,.cm-s-oceanic-next .CodeMirror-line>span>span::selection{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-line::-moz-selection,.cm-s-oceanic-next .CodeMirror-line>span::-moz-selection,.cm-s-oceanic-next .CodeMirror-line>span>span::-moz-selection{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-gutters{background:#304148;border-right:10px}.cm-s-oceanic-next .CodeMirror-guttermarker{color:#fff}.cm-s-oceanic-next .CodeMirror-guttermarker-subtle,.cm-s-oceanic-next .CodeMirror-linenumber{color:#d0d0d0}.cm-s-oceanic-next .CodeMirror-cursor{border-left:1px solid #f8f8f0}.cm-s-oceanic-next span.cm-comment{color:#65737e}.cm-s-oceanic-next span.cm-atom{color:#c594c5}.cm-s-oceanic-next span.cm-number{color:#f99157}.cm-s-oceanic-next span.cm-property{color:#99c794}.cm-s-oceanic-next span.cm-attribute,.cm-s-oceanic-next span.cm-keyword{color:#c594c5}.cm-s-oceanic-next span.cm-builtin{color:#66d9ef}.cm-s-oceanic-next span.cm-string{color:#99c794}.cm-s-oceanic-next span.cm-variable,.cm-s-oceanic-next span.cm-variable-2,.cm-s-oceanic-next span.cm-variable-3{color:#f8f8f2}.cm-s-oceanic-next span.cm-def{color:#69c}.cm-s-oceanic-next span.cm-bracket{color:#5fb3b3}.cm-s-oceanic-next span.cm-header,.cm-s-oceanic-next span.cm-link,.cm-s-oceanic-next span.cm-tag{color:#c594c5}.cm-s-oceanic-next span.cm-error{background:#c594c5;color:#f8f8f0}.cm-s-oceanic-next .CodeMirror-activeline-background{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-matchingbracket{text-decoration:underline;color:#fff!important}", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/javascript/javascript");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mt-avatar{--_mt-avatar-backgroundColor:var(--mt-avatar-backgroundColor,#ccc);--_mt-avatar-color:var(--mt-avatar-color,#333);font-size:var(--mt-baseFontSize,1rem);font-family:var(--mt-fontFamily,\"Roboto\");width:5em;height:5em;overflow:hidden;border-radius:50%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--_mt-avatar-backgroundColor);color:var(--_mt-avatar-color);vertical-align:middle}.mt-avatar_image{width:100%;height:100%}.mt-avatar_initials{font-size:3em;width:100%;text-align:center}.mt-button{--_mt-button-backgroundColor:var(--mt-button-backgroundColor,var(--mt-mainColor,#2196f3));--_mt-button-textColor:var(--mt-button-textColor,#fff);--_mt-button-disabledTextColor:var(--mt-button-disabledTextColor,rgba(0,0,0,.38));all:initial;font-family:var(--mt-fontFamily,\"Roboto\");-webkit-font-smoothing:antialiased;font-size:var(--mt-baseFontSize,1rem);font-weight:500;letter-spacing:.04em;text-decoration:none;text-transform:uppercase;will-change:transform,opacity;display:inline-block;position:relative;min-width:4em;padding:.55em 1em;border:none;outline:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:.2em;cursor:pointer;white-space:nowrap;background-color:var(--_mt-button-backgroundColor);color:var(--_mt-button-textColor)}.mt-button:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff;pointer-events:none;opacity:0;will-change:opacity;-webkit-transition:opacity .1s ease-in-out;-o-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;z-index:-1}.mt-button:focus:before,.mt-button:hover:before{opacity:.3}.mt-button:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.38);cursor:default;pointer-events:none}.mt-button-compact{padding:.55em .5em}.mt-button-raised{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mt-button-raised:disabled{-webkit-box-shadow:none;box-shadow:none}.mt-button-flat,.mt-button-stroked{background-color:transparent;color:var(--_mt-button-backgroundColor)}.mt-button-flat:before,.mt-button-stroked:before{background-color:var(--_mt-button-backgroundColor)}.mt-button-flat:focus:before,.mt-button-flat:hover:before,.mt-button-stroked:focus:before,.mt-button-stroked:hover:before{opacity:.1}.mt-button-stroked{border:.15em solid var(--_mt-button-backgroundColor)}.mt-button-flat:disabled,.mt-button-stroked:disabled{color:var(--_mt-button-disabledTextColor);border-color:var(--_mt-button-disabledTextColor)}.mt-button-flat .mt-ripple:after,.mt-button-stroked .mt-ripple:after{background-color:var(--_mt-button-backgroundColor)}.mt-checkbox{--_mt-checkbox-backgroundColor:var(--mt-checkbox-backgroundColor,var(--mt-mainColor,#2196f3));--_mt-checkbox-tickColor:var(--mt-checkbox-tickColor,#fff);--_mt-checkbox-focusColor:var(--mt-checkbox-focusColor,#e8e8e8);position:relative;font-size:var(--mt-baseFontSize,1rem);cursor:pointer;display:inline-block;vertical-align:bottom;margin:2px;-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:0}.mt-checkbox_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20}.mt-checkbox_checkbox{width:1em;height:1em;border-radius:.15em;position:relative;overflow:hidden;-webkit-box-shadow:inset 0 0 0 .12em #6d6c6c;box-shadow:inset 0 0 0 .12em #6d6c6c;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.mt-checkbox_checkbox:before{top:0;left:0;right:0;bottom:0;background-color:var(--_mt-checkbox-backgroundColor);border-radius:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.mt-checkbox_checkbox:after,.mt-checkbox_checkbox:before{content:\"\";position:absolute;will-change:transform;-webkit-transition:-webkit-transform .2s ease-in;transition:-webkit-transform .2s ease-in;-o-transition:transform .2s ease-in;transition:transform .2s ease-in;transition:transform .2s ease-in,-webkit-transform .2s ease-in;z-index:3}.mt-checkbox_checkbox:after{top:.2em;left:.35em;right:.35em;bottom:.2em;border:.12em solid var(--_mt-checkbox-tickColor);border-top:none;border-left:none;-webkit-transform:translateZ(0) rotate(45deg) scale(0);transform:translateZ(0) rotate(45deg) scale(0)}.mt-checkbox_input:checked+.mt-checkbox_checkbox:before{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2)}.mt-checkbox_input:checked+.mt-checkbox_checkbox:after{-webkit-transform:translate3d(0,-.05em,0) rotate(45deg) scale(1);transform:translate3d(0,-.05em,0) rotate(45deg) scale(1)}.mt-checkbox_focus{position:absolute;top:-.3em;left:-.3em;right:-.3em;bottom:-.3em;z-index:-1;border-radius:50%;pointer-events:none;overflow:hidden}.mt-checkbox_focus:before{background-color:var(--_mt-checkbox-backgroundColor)}.mt-checkbox_focus:after,.mt-checkbox_focus:before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;will-change:opacity;-webkit-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.mt-checkbox_focus:after{background-color:var(--_mt-checkbox-focusColor)}.mt-checkbox_input:focus+.mt-checkbox_checkbox+.mt-checkbox_focus:after{opacity:1}.mt-checkbox_input:focus:checked+.mt-checkbox_checkbox+.mt-checkbox_focus:after{opacity:0}.mt-checkbox_input:focus:checked+.mt-checkbox_checkbox+.mt-checkbox_focus:before{opacity:.3}.mt-checkbox_input:disabled{cursor:not-allowed}.mt-checkbox_input:disabled+.mt-checkbox_checkbox{-webkit-box-shadow:inset 0 0 0 .12em #ccc,0 0 0 2px #ccc!important;box-shadow:inset 0 0 0 .12em #ccc,0 0 0 2px #ccc!important}.mt-checkbox_input:disabled:checked{cursor:not-allowed}.mt-checkbox_input:disabled:checked+.mt-checkbox_checkbox:before{background-color:var(--_mt-checkbox-focusColor)}.mt-ripple{--_mt-ripple-spread:var(--mt-ripple-spread,4);--_mt-ripple-color:var(--mt-ripple-color,#fff);--_mt-ripple-top:var(--mt-ripple-top,50%);--_mt-ripple-left:var(--mt-ripple-left,50%);all:initial;font-size:inherit;display:block;top:0;bottom:0;left:0;right:0;overflow:hidden}.mt-ripple,.mt-ripple:after{position:absolute;pointer-events:none}.mt-ripple:after{content:\"\";top:var(--_mt-ripple-top);left:var(--_mt-ripple-left);margin-top:-10px;margin-left:-10px;width:1.25em;height:1.25em;border-radius:200%;background-color:var(--_mt-ripple-color);will-change:transform;opacity:0}.mt-ripple-active:after{-webkit-animation:ripple .9s;animation:ripple .9s}@-webkit-keyframes ripple{0%{opacity:.5;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(calc(3 * var(--_mt-ripple-spread)));transform:scale(calc(3 * var(--_mt-ripple-spread)));opacity:0}}@keyframes ripple{0%{opacity:.5;-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(calc(3 * var(--_mt-ripple-spread)));transform:scale(calc(3 * var(--_mt-ripple-spread)));opacity:0}}.mt-switch{--_mt-switch-backgroundColor:var(--mt-switch-backgroundColor,#979696);--_mt-switch-backgroundColorActive:var(--mt-switch-backgroundColorActive,#b0cfe9);--_mt-switch-backgroundColorDisabled:var(--mt-switch-backgroundColorDisabled,#d9d9d9);--_mt-switch-knobColor:var(--mt-switch-knobColor,#fafafa);--_mt-switch-knobColorActive:var(--mt-switch-knobColorActive,var(--mt-mainColor,#2196f3));--_mt-switch-knobColorDisabled:var(--mt-switch-knobColorDisabled,#979696);--_mt-switch-focusColorActive:var(--mt-switch-focusColorActive,var(--_mt-switch-knobColorActive));--_mt-switch-focusColor:var(--mt-switch-focusColor,var(--_mt-switch-knobColorDisabled));font-size:var(--mt-baseFontSize,1rem);display:-ms-inline-flexbox;display:inline-flex;height:1.25em;-ms-flex-align:center;align-items:center;position:relative;z-index:0}.mt-switch_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20;-webkit-transform:translateZ(0);transform:translateZ(0)}.mt-switch_switch{width:2em;height:.8em;background:-webkit-gradient(linear,left top,right top,from(var(--_mt-switch-backgroundColorActive)),color-stop(50%,var(--_mt-switch-backgroundColorActive)),color-stop(50%,var(--_mt-switch-backgroundColor)),to(var(--_mt-switch-backgroundColor)));background:-webkit-linear-gradient(left,var(--_mt-switch-backgroundColorActive),var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 0,var(--_mt-switch-backgroundColor));background:-o-linear-gradient(left,var(--_mt-switch-backgroundColorActive) 0,var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 50%,var(--_mt-switch-backgroundColor) 100%);background:linear-gradient(90deg,var(--_mt-switch-backgroundColorActive) 0,var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 0,var(--_mt-switch-backgroundColor));border-radius:.8em;position:static}.mt-switch_switch:after,.mt-switch_switch:before{content:\"\";display:inline-block;width:1.25em;height:1.25em;border-radius:50%;background-color:var(--_mt-switch-knobColor);position:absolute;top:0;left:0;will-change:transform;-webkit-transition:-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-o-transition:transform 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mt-switch_switch:after{background-color:var(--_mt-switch-knobColorActive);opacity:0;will-change:opacity;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-o-transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1)}.mt-switch_input:checked+.mt-switch_switch:after,.mt-switch_input:checked+.mt-switch_switch:before{-webkit-transform:translateX(.75em);-ms-transform:translateX(.75em);transform:translateX(.75em);-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center}.mt-switch_input:checked+.mt-switch_switch:after{opacity:1}.mt-switch_input:disabled+.mt-switch_switch{background:var(--_mt-switch-backgroundColorDisabled)}.mt-switch_input:disabled+.mt-switch_switch:after,.mt-switch_input:disabled+.mt-switch_switch:before{background-color:var(--_mt-switch-knobColorDisabled)}.mt-switch_focus{position:absolute;top:-.3em;bottom:-.3em;left:-.3em;right:-.3em;z-index:-1;opacity:.2;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);will-change:transform;-webkit-transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);-o-transition:transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1)}.mt-switch_focus:after,.mt-switch_focus:before{content:\"\";position:absolute;display:block;top:0;right:0;bottom:0;left:0;background-color:var(--_mt-switch-focusColor);border-radius:1em}.mt-switch_focus:after{background-color:var(--_mt-switch-focusColorActive);opacity:0;will-change:opacity}.mt-switch_input:focus+.mt-switch_switch+.mt-switch_focus{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.mt-switch_input:focus:checked+.mt-switch_switch+.mt-switch_focus:after{opacity:1}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactStaticRoutes = __webpack_require__(35);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(56);

var _header = __webpack_require__(57);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(60);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(65);

var _footer2 = _interopRequireDefault(_footer);

var _noScroll = __webpack_require__(67);

var _noScroll2 = _interopRequireDefault(_noScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMenuOpen: false
    }, _this.onToggleMenu = function () {
      var isMenuOpen = _this.state.isMenuOpen;


      _noScroll2.default.toggle();

      _this.setState({ isMenuOpen: !isMenuOpen });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var isMenuOpen = this.state.isMenuOpen;

      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_header2.default, { onToggleMenu: this.onToggleMenu }),
          _react2.default.createElement(
            'div',
            { className: 'app_body' },
            _react2.default.createElement(_nav2.default, { isMenuOpen: isMenuOpen, onToggleMenu: this.onToggleMenu }),
            _react2.default.createElement(
              'div',
              { className: 'app_bodyContents' },
              _react2.default.createElement(_reactStaticRoutes2.default, null),
              _react2.default.createElement(_footer2.default, null)
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(36);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(37);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(38);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _reactUniversalComponent = __webpack_require__(39);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/home/index',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/home/index', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/home/index');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/home/index';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons/catalog',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/icons/catalog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons/catalog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/icons/catalog';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons/usage',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/icons/usage', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons/usage');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/icons/usage';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/icons', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/icons';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/component-doc',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/components/component-doc', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/component-doc');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/components/component-doc';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/index',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/components/index', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/index');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/components/index';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/common/404',
  file: '/Users/jmeas/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/common/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/common/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/common/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 6

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(40);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(41);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(42);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = __webpack_require__(44);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _fetchDedupe = __webpack_require__(12);

var _codeHighlighter = __webpack_require__(45);

var _codeHighlighter2 = _interopRequireDefault(_codeHighlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_Component) {
  _inherits(Markdown, _Component);

  function Markdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Markdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      markdownText: null
    }, _this.fetchMarkdown = function (props) {
      var _ref2 = props || _this.props,
          markdownUrl = _ref2.markdownUrl;

      (0, _fetchDedupe.fetchDedupe)(markdownUrl, { responseType: "text" }).then(function (res) {
        _this.setState({
          markdownText: res.data
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Markdown, [{
    key: "render",
    value: function render() {
      var markdownText = this.props.markdownText || this.state.markdownText;

      if (!markdownText) {
        return null;
      }

      return _react2.default.createElement(_reactMarkdown2.default, {
        source: markdownText,
        className: "markdown",
        renderers: {
          code: _codeHighlighter2.default
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.markdownUrl) {
        this.fetchMarkdown();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.markdownUrl !== nextProps.markdownUrl) {
        this.fetchMarkdown(nextProps);
      }
    }
  }]);

  return Markdown;
}(_react.Component);

exports.default = Markdown;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLowlight = __webpack_require__(7);

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeHighlighter = function (_Component) {
  _inherits(CodeHighlighter, _Component);

  function CodeHighlighter() {
    _classCallCheck(this, CodeHighlighter);

    return _possibleConstructorReturn(this, (CodeHighlighter.__proto__ || Object.getPrototypeOf(CodeHighlighter)).apply(this, arguments));
  }

  _createClass(CodeHighlighter, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          language = _props.language,
          value = _props.value,
          inline = _props.inline;


      return _react2.default.createElement(_reactLowlight2.default, { language: language || "js", value: value, inline: inline });
    }
  }]);

  return CodeHighlighter;
}(_react.Component);

exports.default = CodeHighlighter;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeMirror = void 0;
if (typeof document !== 'undefined') {
  CodeMirror = __webpack_require__(47);
}

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function () {
      if (!_this.props.readOnly && _this.props.onChange) {
        _this.props.onChange(_this.editor.getValue());
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!CodeMirror) {
        return;
      }

      this.editor = CodeMirror.fromTextArea(this.refs.editor, {
        mode: "javascript",
        lineNumbers: this.props.lineNumbers,
        smartIndent: false,
        tabSize: this.props.tabSize,
        matchBrackets: true,
        theme: this.props.theme,
        readOnly: this.props.readOnly
      });

      this.editor.on("change", this.handleChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.readOnly) {
        this.editor.setValue(this.props.codeText);
      }
    }
  }, {
    key: "setCode",
    value: function setCode(code) {
      this.editor.getDoc().setValue(code);
      this.handleChange();
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        "div",
        { className: className },
        _react2.default.createElement("textarea", { ref: "editor", defaultValue: this.props.codeText })
      );
    }
  }]);

  return Editor;
}(_react2.default.Component);

Editor.propTypes = {
  className: _propTypes2.default.string,
  codeText: _propTypes2.default.string,
  lineNumbers: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  readOnly: _propTypes2.default.bool,
  tabSize: _propTypes2.default.number,
  theme: _propTypes2.default.string
};
Editor.defaultProps = {
  className: "",
  lineNumbers: false,
  readOnly: false,
  tabSize: 2,
  theme: "oceanic-next"
};
exports.default = Editor;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fetchDedupe = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeManager = function (_React$Component) {
  _inherits(CodeManager, _React$Component);

  function CodeManager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeManager.__proto__ || Object.getPrototypeOf(CodeManager)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      code: null
    }, _this.handleCodeChange = function (code) {
      _this.setState({ code: code });
    }, _this.fetchCode = function (props) {
      var _ref2 = props || _this.props,
          codeTextUrl = _ref2.codeTextUrl;

      (0, _fetchDedupe.fetchDedupe)(codeTextUrl, { responseType: 'text' }).then(function (res) {
        _this.setState({
          code: res.data
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeManager, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var code = this.state.code;


      if (code === null) {
        return null;
      }

      return children({
        code: code,
        handleCodeChange: this.handleCodeChange
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.codeTextUrl !== nextProps.codeTextUrl) {
        if (nextProps.codeTextUrl) {
          this.fetchCode(nextProps);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.codeTextUrl) {
        this.fetchCode();
      } else if (this.props.code) {
        this.setState({
          code: this.props.code
        });
      }
    }
  }]);

  return CodeManager;
}(_react2.default.Component);

CodeManager.propTypes = {
  codeTextUrl: _propTypes2.default.string
};
CodeManager.defaultProps = {
  codeTextUrl: null
};
exports.default = CodeManager;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _standalone = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ERROR_TIMEOUT = 500;

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    var _ref,
        _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Preview);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Preview.__proto__ || Object.getPrototypeOf(Preview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null
    }, _this.setTimeout = function () {
      clearTimeout(_this.timeoutID);
      _this.timeoutID = setTimeout.apply(undefined, _arguments);
    }, _this.compileCode = function () {
      var code = '\n      (function (' + Object.keys(_this.props.scope).join(", ") + ', mountNode) {\n        ' + _this.props.code + '\n      });';

      return (0, _standalone.transform)(code, {
        presets: ['es2017', 'stage-3', 'react']
      }).code;
    }, _this.buildScope = function (mountNode) {
      return Object.keys(_this.props.scope).map(function (key) {
        return _this.props.scope[key];
      }).concat(mountNode);
    }, _this.executeCode = function () {
      var mountNode = _this.refs.mount;
      var scope = _this.buildScope(mountNode);

      try {
        _reactDom2.default.unmountComponentAtNode(mountNode);
      } catch (e) {
        console.error(e);
      }

      try {
        _reactDom2.default.render(eval(_this.compileCode()).apply(undefined, _toConsumableArray(scope)), mountNode);
        if (_this.state.error) {
          _this.setState({ error: null });
        }
      } catch (err) {
        _this.setTimeout(function () {
          _this.setState({ error: err.toString() });
        }, ERROR_TIMEOUT);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.executeCode();
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      clearTimeout(this.timeoutID);
      if (this.props.code !== prevProps.code) {
        this.executeCode();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        'div',
        { className: className },
        this.state.error !== null ? _react2.default.createElement(
          'span',
          null,
          this.state.error
        ) : null,
        _react2.default.createElement('div', { ref: 'mount' })
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  className: _propTypes2.default.string,
  code: _propTypes2.default.string.isRequired,
  scope: _propTypes2.default.object
};
Preview.defaultProps = {
  className: "",
  scope: { React: _react2.default, Component: _react.Component }
};
exports.default = Preview;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("materialish/icons-data.json");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".iconsCatalog_searchInput{padding:10px 15px;width:350px;border:1px solid #ddd;border-radius:3px;font-family:Roboto;font-size:1rem;outline:none;margin-bottom:10px}.iconsCatalog_searchInput:focus{border:1px solid var(--mainColor)}.iconsCatalog_count{margin-bottom:70px}.iconsCatalog_icon{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;z-index:0;position:relative;border-radius:5px;padding:15px}.iconsCatalog_icon:after{content:\"\";background-color:#f2f2f2;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;opacity:0;border-radius:inherit;will-change:opacity;-webkit-transition:opacity .15s ease-in-out;-o-transition:opacity .15s ease-in-out;transition:opacity .15s ease-in-out}.iconsCatalog_icon:hover:after{opacity:1}.iconsCatalog_icon>svg{margin-bottom:10px}.iconsCatalog_iconList{display:grid;grid-column-gap:20px;grid-row-gap:50px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.iconsCatalog_iconClass{display:block;text-align:center;width:100%;font-size:.75rem;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}@media (max-width:650px){.iconsCatalog_searchInput{width:100%}.iconsCatalog_count{text-align:center}}", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".icons_links{margin-top:40px}.icons_link{margin-bottom:20px}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".componentDoc{--mt-navigation-backgroundColor:transparent;--mt-navigation-textColor:#757575;--mt-navigation-activeIndicatorColor:var(--mainColor)}.componentDoc_links{margin:0;padding:0;margin-bottom:25px;list-style:none;display:-ms-flexbox;display:flex}.primaryHeader.componentDoc_primaryHeader{margin-bottom:20px}.componentDoc_linkItem{margin-left:35px}.componentDoc_linkItem:first-child{margin-left:0}.componentDoc_linkAnchor{font-size:.9rem;text-decoration:none;color:#af99de}.componentDoc_linkAnchor:hover{color:#817894}.componentDoc_icon{display:inline-block;margin-right:3px}.componentDoc .mt-navigation{border-bottom:1px solid #ddd}.componentDoc_noteEmoji{font-size:1.2rem}.componentDoc_note{margin:0;padding:10px 20px;font-size:.9rem;font-weight:500;border-bottom:1px solid #4d585e;background-color:#314048;color:#c5c7c8}.componentDoc_preview{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-height:150px;background-color:#f2f2f2;border-radius:5px 5px 0 0;margin-top:50px}", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".components_list{margin-top:30px}.components_listItem{margin-bottom:15px}", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".app_bodyContents{--bodyPadding:40px;width:calc(100% - var(--navWidth));min-height:calc(100vh - var(--headerHeight));margin:var(--headerHeight) 0 0 var(--navWidth);padding:var(--appTopPadding) var(--bodyPadding) 0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.app_bodyContents>*{width:100%;max-width:calc(var(--maxAppWidth) - var(--navWidth));margin:0 auto;-ms-flex:1 1;flex:1 1}.app_bodyContents>:first-child{margin-bottom:100px}@media (max-width:1000px){.app_bodyContents{--bodyPadding:20px;margin-left:0;width:100%}.app_bodyContents>*{width:100%;max-width:none;margin:0}}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

__webpack_require__(58);

var _materialishLogo = __webpack_require__(59);

var _materialishLogo2 = _interopRequireDefault(_materialishLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var onToggleMenu = this.props.onToggleMenu;


      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement('i', { className: 'zmdi zmdi-menu header_navToggle', onClick: onToggleMenu }),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          _react2.default.createElement('img', { src: _materialishLogo2.default, className: 'materialishLogo' })
        ),
        _react2.default.createElement(
          'h1',
          { className: 'header_appName' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'header_appLink' },
            'Materialish'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            href: 'https://github.com/jamesplease/materialish',
            className: 'header_githubLink' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-github' })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".header{background-color:var(--mainColor);height:var(--headerHeight);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0 var(--standardContentPadding);position:fixed;top:0;z-index:1500}.header_appName{margin:0;padding:0;font-size:1.2rem;-webkit-font-smoothing:antialiased}.header_appLink{color:#fff;text-decoration:none;font-weight:400}.materialishLogo{width:33px;position:relative;margin-right:10px}.header .header_navToggle{color:#fff;margin-right:15px;font-size:1.2rem;display:none}.header_githubLink{margin-left:auto;font-size:1.5rem;color:#fff}@media (max-width:1000px){.header .header_navToggle{display:block}}", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNDUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTI4LjY0IDJsMTUuMzY0IDI1LjY2NGgtMzAuNzN6Ii8+PHBhdGggZD0iTTE2LjY0IDJsMTUuMzY0IDI1LjY2NEgxLjI3NHoiLz48L2c+PC9zdmc+"

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(61);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactStatic = __webpack_require__(2);

var _overlay = __webpack_require__(62);

var _overlay2 = _interopRequireDefault(_overlay);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = exports.Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.onNavigate = function () {
      var _this$props = _this.props,
          isMenuOpen = _this$props.isMenuOpen,
          onToggleMenu = _this$props.onToggleMenu;


      if (isMenuOpen) {
        onToggleMenu();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          components = _props.components,
          isMenuOpen = _props.isMenuOpen,
          onToggleMenu = _props.onToggleMenu;

      // This ensures that the components appear in the navigation in
      // alphabetical order

      var sortedComponentsData = Array.from(components).sort(function (a, b) {
        if (a.componentKey === b.componentKey) {
          return 0;
        }

        return a.componentKey < b.componentKey ? -1 : 1;
      });

      var navClassnames = (0, _classnames2.default)('nav', {
        'nav-open': isMenuOpen
      });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'nav',
          { className: navClassnames },
          _react2.default.createElement(
            'ul',
            { className: 'nav_navList' },
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Introduction'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/icons',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Icons'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav_navSubList' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/icons/usage',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Usage'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/icons/catalog',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Catalog'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/components',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Components'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav_navSubList' },
                sortedComponentsData.map(function (component) {
                  return _react2.default.createElement(
                    'li',
                    { className: 'nav_navSubListItem', key: component.name },
                    _react2.default.createElement(
                      _reactStatic.Link,
                      {
                        exact: true,
                        to: '/components/' + component.url,
                        className: 'nav_navLink',
                        onClick: _this2.onNavigate },
                      component.name
                    )
                  );
                })
              )
            )
          )
        ),
        _react2.default.createElement(_overlay2.default, { active: isMenuOpen, onClick: onToggleMenu })
      );
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = (0, _reactStatic.withSiteData)(Nav);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          onClick = _props.onClick;

      return _react2.default.createElement('div', {
        className: 'overlay ' + (active ? 'overlay-active' : ''),
        onClick: onClick
      });
    }
  }]);

  return Overlay;
}(_react.Component);

exports.default = Overlay;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".overlay{position:fixed;top:0;left:0;bottom:0;right:0;background:#000;opacity:0;pointer-events:none;-webkit-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;will-change:opacity;z-index:1000}.overlay-active{opacity:.65;pointer-events:all}", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".nav{width:var(--navWidth);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;min-height:calc(100% - var(--headerHeight));padding-top:var(--appTopPadding);border-right:1px solid #e1dfe6;position:fixed;left:0;top:var(--headerHeight);height:calc(100% - var(--headerHeight));overflow-y:scroll;overscroll-behavior:contain;background:#fff}.nav_navList,.nav_navSubList{list-style:none;margin:0;padding:0}.nav_navListItem{margin-bottom:15px}.nav_navList{width:var(--navWidth);margin:0;padding:0}.nav_navLink,.nav_navSectionLink{color:#222;text-decoration:none}.nav_navSectionLink{font-size:1.15rem;font-weight:400;padding:13px var(--standardContentPadding);-webkit-font-smoothing:antialiased;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;position:relative}.nav_navLink:after,.nav_navSectionLink:after{content:\"\";display:block;top:0;left:0;right:0;bottom:0;position:absolute;z-index:-1;background:#f5f5f5;opacity:0;will-change:opacity;-webkit-transition:opacity .1s ease-in-out;-o-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}.nav_navLink.active:after,.nav_navLink:hover:after,.nav_navSectionLink.active:after,.nav_navSectionLink:hover:after{opacity:1}.nav_navLink{display:block;font-size:.9rem;padding:13px calc(var(--standardContentPadding) + 25px);-webkit-font-smoothing:antialiased;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#616161;position:relative;z-index:0}@media (max-width:1000px){.nav{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);will-change:transform;-webkit-transition:-webkit-transform .25s cubic-bezier(.215,.61,.355,1);transition:-webkit-transform .25s cubic-bezier(.215,.61,.355,1);-o-transition:transform .25s cubic-bezier(.215,.61,.355,1);transition:transform .25s cubic-bezier(.215,.61,.355,1);transition:transform .25s cubic-bezier(.215,.61,.355,1),-webkit-transform .25s cubic-bezier(.215,.61,.355,1);z-index:4000}.nav-open{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}@media (max-width:650px){.nav_navSectionLink{font-size:1.15rem}.nav_navLink{font-size:1rem}}", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'span',
          { className: 'footer_licenseText' },
          'Materialish is licensed under the',
          ' ',
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/jamesplease/materialish/blob/master/LICENSE',
              className: 'footer_licenseLink' },
            'MIT License'
          ),
          '.'
        ),
        _react2.default.createElement(
          'span',
          { className: 'footer_licenseTextShort' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-globe footer_icon' }),
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/jamesplease/materialish/blob/master/LICENSE',
              className: 'footer_licenseLink footer_licenseLink-short' },
            'MIT License'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'footer_githubLink',
            href: 'https://github.com/jamesplease/materialish' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-github footer_icon' }),
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'footer_githubLinkText' },
            'View Project on GitHub'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".footer{margin-top:auto;-ms-flex:0 0 80px;flex:0 0 80px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:1px solid #e1dfe7;color:#999;font-size:.85rem}.footer_licenseIcon{display:inline-block;margin:0 3px 0 6px}.footer_licenseLink-short{color:inherit}.footer_githubLink{margin-left:auto;color:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.footer_icon{font-size:1.3rem;margin-right:5px}.footer_licenseTextShort{display:none}@media (max-width:650px){.footer_licenseText{display:none}.footer_licenseTextShort{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}}", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("no-scroll");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.9104afb8.js.map