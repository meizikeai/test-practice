(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file"],{

/***/ "./client/components/layout/index.js":
/*!*******************************************!*\
  !*** ./client/components/layout/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

__webpack_require__(/*! ../reset.css */ "./client/components/reset.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Layout = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this;

    (0, _classCallCheck2["default"])(this, Layout);
    _this = _super.call(this);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
    }
  }]);
  return Layout;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes["default"].node
};
var _default = Layout;
exports["default"] = _default;

/***/ }),

/***/ "./client/components/popup-min-layer/index.css":
/*!*****************************************************!*\
  !*** ./client/components/popup-min-layer/index.css ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/components/popup-min-layer/index.js":
/*!****************************************************!*\
  !*** ./client/components/popup-min-layer/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _parseInt2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

__webpack_require__(/*! ./index.css */ "./client/components/popup-min-layer/index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var popupMinLayerScrollTop = 0;

var PopupMinLayer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PopupMinLayer, _Component);

  var _super = _createSuper(PopupMinLayer);

  function PopupMinLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PopupMinLayer);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentWillUnmount", function () {// clearTimeout(this.timer)
    });
    var show = _this.props.show;
    _this.state = {
      show: show
    };
    return _this;
  }

  (0, _createClass2["default"])(PopupMinLayer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!nextState.show) {
        var node = this.props.node;

        _reactDom["default"].unmountComponentAtNode(node);

        document.body.removeChild(node);
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var show = this.state.show;
      var _this$props = this.props,
          content = _this$props.content,
          height = _this$props.height,
          layer = _this$props.layer,
          model = _this$props.model;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "model-mini-layer",
        style: {
          display: show ? null : 'none'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "layer"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content"
      }, content)), layer ? /*#__PURE__*/_react["default"].createElement("div", {
        className: model ? 'layer-back white' : 'layer-back black',
        style: {
          height: "".concat(height, "px")
        }
      }) : '');
    }
  }]);
  return PopupMinLayer;
}(_react.Component);
/**
 * 获取滚动条位置
 */


(0, _defineProperty2["default"])(PopupMinLayer, "propTypes", {
  content: _propTypes["default"].string,
  height: _propTypes["default"].number,
  layer: _propTypes["default"].bool,
  model: _propTypes["default"].bool,
  node: _propTypes["default"].object,
  show: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(PopupMinLayer, "defaultProps", {
  content: '',
  layer: true,
  model: true,
  show: true
});

var getScrollTop = function getScrollTop() {
  var total = document.body.scrollTop + document.documentElement.scrollTop;
  return (0, _parseInt2["default"])(total, 10);
};
/**
 * 设置滚动条位置
 * @param {number} top 位置
 */


var setScrollTop = function setScrollTop(top) {
  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;
};
/**
 * disableScroll 禁止滚动条
 */


function disableScroll() {
  popupMinLayerScrollTop = getScrollTop();
  var toastNode = document.querySelector('.toast-model-mini');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  if (toastNode) {
    toastNode.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * restartScroll 放开滚动条
 */


function restartScroll() {
  var toastNode = document.querySelector('.toast-model-mini');
  var marker = document.querySelector('.toast-marker');

  if (!marker) {
    document.documentElement.style.overflow = 'inherit';
    document.body.style.overflow = 'inherit';
    setScrollTop(popupMinLayerScrollTop);
  }

  if (toastNode) {
    toastNode.removeEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  }
}
/**
 * 创建一个节点〜
 */


function createToast() {
  var toast = document.createElement('div');
  toast.setAttribute('id', "toast-".concat(Math.floor(Math.random() * 10000000)));
  toast.setAttribute('class', 'toast-model-mini');
  document.body.appendChild(toast);
  return toast;
}

var _default = {
  show: function show(options) {
    var content = options.content,
        callback = options.callback,
        duration = options.duration,
        layer = options.layer,
        model = options.model;
    var toast = createToast();

    if (!duration) {
      duration = 2000;
    } else if (typeof duration !== 'number') {
      duration = 2000;
    }

    (0, _setTimeout2["default"])(function () {
      restartScroll();

      _reactDom["default"].unmountComponentAtNode(toast);

      document.body.removeChild(toast);

      if (typeof callback === 'function') {
        callback();
      }
    }, duration);

    _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(PopupMinLayer, {
      content: content,
      height: document.body.clientHeight,
      layer: layer,
      model: model,
      node: toast
    }), toast);

    disableScroll();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "./client/components/reset.css":
/*!*************************************!*\
  !*** ./client/components/reset.css ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/pages/file/index.css":
/*!*************************************!*\
  !*** ./client/pages/file/index.css ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/pages/file/index.js":
/*!************************************!*\
  !*** ./client/pages/file/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime-corejs3/helpers/typeof */ "./node_modules/@babel/runtime-corejs3/helpers/typeof.js");

var _Reflect$construct = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/reflect/construct */ "./node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js");

var _WeakMap = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/weak-map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/weak-map.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs3/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/inherits */ "./node_modules/@babel/runtime-corejs3/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs3/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs3/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _layout = _interopRequireDefault(__webpack_require__(/*! ../../components/layout */ "./client/components/layout/index.js"));

var _util = __webpack_require__(/*! ./util */ "./client/pages/file/util.js");

__webpack_require__(/*! ./index.css */ "./client/pages/file/index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var layoutArgs = {
  bodyMaxWidth: 425,
  designWidth: 750
};
var upload = window.CONFIG.upload;

var App = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      (0, _util.handleRestartDefault)();

      _this.check.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (f) {
      var file = f[0];

      if (file) {
        upload.file = file;
        (0, _util.prepareFile)(file);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleState", function () {
      var pass = _this.state.pass;

      if (pass) {
        upload.state = 'stop';

        _this.setState({
          pass: false
        });

        _this.file.innerHTML = 'START';
        return false;
      }

      if (!pass) {
        upload.state = 'start';

        _this.setState({
          pass: true
        });

        _this.file.innerHTML = 'STOP';

        if (upload.file) {
          (0, _util.prepareFile)(upload.file);
        }

        return false;
      }
    });
    _this.state = {
      pass: true
    };
    return _this;
  } // componentDidMount() { }


  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_layout["default"], layoutArgs, /*#__PURE__*/_react["default"].createElement("div", {
        className: "demo"
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        className: "title"
      }, "upload file"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "descr"
      }, "A upload file and want to look for a girlfriend..."), /*#__PURE__*/_react["default"].createElement("div", {
        className: "upload"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "one",
        id: "one"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "list"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "topic"
      }, "\u6821\u9A8C\u6587\u4EF6\u8FDB\u5EA6"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "check"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "extract",
        style: {
          width: '0%'
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, "0%"))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "one",
        id: "two"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "list"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "topic"
      }, "\u4E0A\u4F20\u6587\u4EF6\u8FDB\u5EA6"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "check"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "upload",
        style: {
          width: '0%'
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, "0%"))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "one",
        id: "three"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "list"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "topic"
      }, "\u4E0A\u4F20\u6587\u4EF6\u7ED3\u679C"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "check"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: "jump",
        href: "",
        target: "_blank"
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "submit"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "check-file",
        type: "file",
        ref: function ref(e) {
          _this2.check = e;
        },
        onChange: function onChange(e) {
          return _this2.handleChange(e.target.files);
        }
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: "click-file",
        type: "button",
        onClick: this.handleClick
      }, "Click This"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "click-state",
        ref: function ref(e) {
          _this2.file = e;
        },
        onClick: this.handleState,
        role: "presentation"
      }, "STOP"))));
    }
  }]);
  return App;
}(_react.Component);

var config = window.CONFIG || {};
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, config), document.querySelector('#app'));

/***/ }),

/***/ "./client/pages/file/util.js":
/*!***********************************!*\
  !*** ./client/pages/file/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs3/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.prepareFile = prepareFile;
exports.handleRestartDefault = handleRestartDefault;

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js"));

var _slice = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"));

var _includes = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js"));

var _concat = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/asyncToGenerator.js"));

var _sparkMd = _interopRequireDefault(__webpack_require__(/*! spark-md5 */ "./node_modules/spark-md5/spark-md5.js"));

var _popupMinLayer = _interopRequireDefault(__webpack_require__(/*! ../../components/popup-min-layer */ "./client/components/popup-min-layer/index.js"));

var isUpload = 0;

function prepareFile(_x) {
  return _prepareFile.apply(this, arguments);
}

function _prepareFile() {
  _prepareFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
    var inFileType, token, result, state;
    return _regenerator["default"].wrap(function _callee$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // 第零步：检查类型
            inFileType = testFileType(file.type);

            if (!inFileType) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", false);

          case 3:
            _context6.next = 5;
            return extractFile(file);

          case 5:
            token = _context6.sent;
            _context6.next = 8;
            return checkFile({
              file: file,
              token: token
            });

          case 8:
            result = _context6.sent;

            if (!(result.code === 200)) {
              _context6.next = 14;
              break;
            }

            handleRealUploaded(result.file);

            _popupMinLayer["default"].show({
              content: 'ha-ha，极速上传成功！'
            });

            console.log('---');
            return _context6.abrupt("return", false);

          case 14:
            _context6.next = 16;
            return sliceAndUploadFile({
              file: file,
              token: token,
              list: result.chunk
            });

          case 16:
            state = _context6.sent;

            if (!state) {
              _context6.next = 19;
              break;
            }

            return _context6.abrupt("return", false);

          case 19:
            _context6.next = 21;
            return queryFile({
              file: file,
              token: token
            });

          case 21:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee);
  }));
  return _prepareFile.apply(this, arguments);
}

function extractFile(file) {
  var one = document.querySelector('#one');
  one.style.display = 'block';
  var extract = one.querySelector('#extract');
  var extractText = extract.querySelector('p');
  return new _promise["default"](function (resolve, reject) {
    var blobSlice = (0, _slice["default"])(File.prototype) || File.prototype.mozSlice || File.prototype.webkitSlice;
    var chunkSize = getThunkSize();
    var chunks = 100;
    var spark = new _sparkMd["default"].ArrayBuffer();
    var fileReader = new FileReader();
    var currentChunk = 0;

    fileReader.onload = function (e) {
      spark.append(e.target.result);
      currentChunk += 1;

      if (currentChunk < chunks) {
        handleProceedNext({
          blobSlice: blobSlice,
          chunkSize: chunkSize,
          currentChunk: currentChunk,
          extract: extract,
          extractText: extractText,
          file: file,
          fileReader: fileReader
        });
      } else {
        resolve(spark.end());
        console.log('1. extract file finished.');
      }
    };

    fileReader.onerror = function () {
      console.error('something is error.');
      reject();
    };

    handleProceedNext({
      blobSlice: blobSlice,
      chunkSize: chunkSize,
      currentChunk: currentChunk,
      extract: extract,
      extractText: extractText,
      file: file,
      fileReader: fileReader
    });
  });
}

function checkFile(_x2) {
  return _checkFile.apply(this, arguments);
}

function _checkFile() {
  _checkFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref) {
    var _context7;

    var file, token, inFileType, result;
    return _regenerator["default"].wrap(function _callee2$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            file = _ref.file, token = _ref.token;
            inFileType = testFileType(file.type);

            if (!inFileType) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", false);

          case 4:
            result = {};
            _context8.next = 7;
            return fetch((0, _concat["default"])(_context7 = "/upload/file/check?token=".concat(token, "&type=")).call(_context7, file.type), {
              method: "get"
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              result = res;
              console.log('2. check file finished.');
            })["catch"](function (error) {
              console.log(error);
            });

          case 7:
            return _context8.abrupt("return", result);

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee2);
  }));
  return _checkFile.apply(this, arguments);
}

function sliceAndUploadFile(_x3) {
  return _sliceAndUploadFile.apply(this, arguments);
}

function _sliceAndUploadFile() {
  _sliceAndUploadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref2) {
    var file, token, list, chunkSize, chunks, two, uploadNode, uploadText, stackArray, i, exit, result;
    return _regenerator["default"].wrap(function _callee3$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            file = _ref2.file, token = _ref2.token, list = _ref2.list;
            isUpload = list.length;
            chunkSize = getThunkSize();
            chunks = Math.ceil(file.size / chunkSize);
            two = document.querySelector('#two');
            two.style.display = 'block';
            uploadNode = document.querySelector('#upload');
            uploadText = uploadNode.querySelector('p'); // 方法一
            // 使用循环上传（有多少就发多少请求）
            // for (let i = 0; i < chunks; i++) {
            //   const exit = list.includes(`${i}`)
            //   if (!exit) {
            //     await uploadFile({ file, key: i, token, chunks })
            //     isUpload += 1
            //     const radio = Math.floor((isUpload / chunks) * 100)
            //     upload.style.width = `${radio}%`
            //     uploadText.innerHTML = `${radio}%`
            //   }
            // }
            // 方法二
            // 使用队列，发完一个请求再进行下一个

            stackArray = [];

            for (i = 0; i < chunks; i++) {
              exit = (0, _includes["default"])(list).call(list, "".concat(i));

              if (!exit) {
                stackArray.push(i);
              }
            }

            _context9.next = 12;
            return handleStack({
              stack: stackArray,
              file: file,
              token: token,
              chunks: chunks,
              uploadNode: uploadNode,
              uploadText: uploadText
            });

          case 12:
            result = _context9.sent;

            if (result === 'stop') {
              console.log('3. upload file is stop.');
            } else {
              console.log('3. slice and upload file finished.');
            }

            return _context9.abrupt("return", result);

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee3);
  }));
  return _sliceAndUploadFile.apply(this, arguments);
}

function handleStack(_x4) {
  return _handleStack.apply(this, arguments);
}

function _handleStack() {
  _handleStack = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref3) {
    var stack, file, token, chunks, uploadNode, uploadText, upload;
    return _regenerator["default"].wrap(function _callee5$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            stack = _ref3.stack, file = _ref3.file, token = _ref3.token, chunks = _ref3.chunks, uploadNode = _ref3.uploadNode, uploadText = _ref3.uploadText;

            if (!(stack.length <= 0)) {
              _context11.next = 4;
              break;
            }

            isUpload = 0;
            return _context11.abrupt("return", false);

          case 4:
            _context11.next = 6;
            return uploadFile({
              file: file,
              key: stack[0],
              token: token,
              chunks: chunks,
              callback: function () {
                var _callback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(res) {
                  var _upload, radio;

                  return _regenerator["default"].wrap(function _callee4$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          if (!(res.code === 200)) {
                            _context10.next = 13;
                            break;
                          }

                          _upload = window.CONFIG.upload;

                          if (!(_upload.state === 'start')) {
                            _context10.next = 12;
                            break;
                          }

                          isUpload += 1;
                          radio = Math.floor(isUpload / chunks * 100);
                          uploadNode.style.width = "".concat(radio, "%");
                          uploadText.innerHTML = "".concat(radio, "%");
                          stack.shift();
                          _context10.next = 10;
                          return handleStack({
                            stack: stack,
                            file: file,
                            token: token,
                            chunks: chunks,
                            uploadNode: uploadNode,
                            uploadText: uploadText
                          });

                        case 10:
                          _context10.next = 13;
                          break;

                        case 12:
                          stack = [];

                        case 13:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee4);
                }));

                function callback(_x7) {
                  return _callback.apply(this, arguments);
                }

                return callback;
              }()
            });

          case 6:
            upload = window.CONFIG.upload;

            if (!(upload.state === 'stop')) {
              _context11.next = 11;
              break;
            }

            return _context11.abrupt("return", true);

          case 11:
            if (!(upload.state === 'start')) {
              _context11.next = 13;
              break;
            }

            return _context11.abrupt("return", false);

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee5);
  }));
  return _handleStack.apply(this, arguments);
}

function uploadFile(_x5) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_ref4) {
    var file, key, token, chunks, callback, chunkSize, end, form;
    return _regenerator["default"].wrap(function _callee7$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            file = _ref4.file, key = _ref4.key, token = _ref4.token, chunks = _ref4.chunks, callback = _ref4.callback;
            chunkSize = getThunkSize();
            end = (key + 1) * chunkSize >= file.size ? file.size : (key + 1) * chunkSize;
            form = new FormData();
            form.append('data', (0, _slice["default"])(file).call(file, key * chunkSize, end));
            form.append('total', chunks);
            form.append('index', key);
            form.append('token', token);
            _context13.next = 10;
            return fetch("/upload/file/upload", {
              method: 'post',
              body: form
            }).then(function (res) {
              return res.json();
            }).then( /*#__PURE__*/function () {
              var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(res) {
                return _regenerator["default"].wrap(function _callee6$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return callback(res);

                      case 2:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x8) {
                return _ref7.apply(this, arguments);
              };
            }())["catch"](function (error) {
              console.error(error);
            });

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee7);
  }));
  return _uploadFile.apply(this, arguments);
}

function queryFile(_x6) {
  return _queryFile.apply(this, arguments);
}

function _queryFile() {
  _queryFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(_ref5) {
    var _context14;

    var file, token, inFileType;
    return _regenerator["default"].wrap(function _callee8$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            file = _ref5.file, token = _ref5.token;
            inFileType = testFileType(file.type);

            if (!inFileType) {
              _context15.next = 4;
              break;
            }

            return _context15.abrupt("return", false);

          case 4:
            _context15.next = 6;
            return fetch((0, _concat["default"])(_context14 = "/upload/file/merge?token=".concat(token, "&type=")).call(_context14, file.type), {
              method: 'get'
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              handleRealUploaded(res.file);
              console.log('4. query file finished.');
              console.log('---');
            });

          case 6:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee8);
  }));
  return _queryFile.apply(this, arguments);
}

function getThunkSize() {
  // return 5 * 1024 * 1024
  return 50 * 1024;
}

function testFileType(type) {
  var res = matchFileType(type);

  if (!res) {
    _popupMinLayer["default"].show({
      content: "ha-ha\uFF0C\u4E0D\u80FD\u4E0A\u4F20\uFF08".concat(type, "\uFF09\u683C\u5F0F\uFF01"),
      duration: 3000
    });

    return true;
  } else {
    return false;
  }
}

function matchFileType(type) {
  var _context;

  // .pdf
  // .pptx
  // .xlsx
  // .docx
  // .mp3
  // .wav
  // .gif
  // .jpg
  // .png
  // .webp
  // .mp4
  return (0, _includes["default"])(_context = ['application/pdf', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'audio/mp3', 'audio/wav', 'image/gif', 'image/jpeg', 'image/png', 'image/webp', 'video/mp4']).call(_context, type);
}

function handleRealUploaded(file) {
  var _context2, _context3, _context4, _context5;

  var three = document.querySelector('#three');
  three.style.display = 'block';
  var check = three.querySelector('.jump');
  check.innerHTML = (0, _concat["default"])(_context2 = (0, _concat["default"])(_context3 = "".concat(location.protocol, "//")).call(_context3, location.host, "/")).call(_context2, file);
  check.href = (0, _concat["default"])(_context4 = (0, _concat["default"])(_context5 = "".concat(location.protocol, "//")).call(_context5, location.host, "/")).call(_context4, file);
}

function handleRestartDefault() {
  var one = document.querySelector('#one');
  one.style.display = 'none';
  var extract = one.querySelector('#extract');
  extract.style.width = '0%';
  var extractText = extract.querySelector('p');
  extractText.innerHTML = '0%';
  var two = document.querySelector('#two');
  two.style.display = 'none';
  var upload = document.querySelector('#upload');
  upload.style.width = '0%';
  var uploadText = upload.querySelector('p');
  uploadText.style.innerHTML = '0%';
  var three = document.querySelector('#three');
  three.style.display = 'none';
  var check = three.querySelector('.jump');
  check.innerHTML = '';
  check.href = '';
}

function handleProceedNext(_ref6) {
  var blobSlice = _ref6.blobSlice,
      chunkSize = _ref6.chunkSize,
      currentChunk = _ref6.currentChunk,
      extract = _ref6.extract,
      extractText = _ref6.extractText,
      file = _ref6.file,
      fileReader = _ref6.fileReader;
  var start = currentChunk * chunkSize;
  var end = start + chunkSize >= file.size ? file.size : start + chunkSize;
  fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
  extract.style.width = "".concat(currentChunk + 1, "%");
  extractText.innerHTML = "".concat(currentChunk + 1, "%");
}

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!****************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference vendors_c62a3df83ad963edb047 ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendors_c62a3df83ad963edb047 */ "dll-reference vendors_c62a3df83ad963edb047"))(7);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendors_c62a3df83ad963edb047 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendors_c62a3df83ad963edb047 */ "dll-reference vendors_c62a3df83ad963edb047"))(19);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendors_c62a3df83ad963edb047 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendors_c62a3df83ad963edb047 */ "dll-reference vendors_c62a3df83ad963edb047"))(0);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!**********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendors_c62a3df83ad963edb047 ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendors_c62a3df83ad963edb047 */ "dll-reference vendors_c62a3df83ad963edb047"))(25);

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/whatwg-fetch/fetch.js from dll-reference vendors_c62a3df83ad963edb047 ***!
  \******************************************************************************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendors_c62a3df83ad963edb047 */ "dll-reference vendors_c62a3df83ad963edb047"))(29);

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi core-js/es/map core-js/es/set ./client/pages/file/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/map */"./node_modules/core-js/es/map/index.js");
__webpack_require__(/*! core-js/es/set */"./node_modules/core-js/es/set/index.js");
module.exports = __webpack_require__(/*! /Users/qinxikun/Documents/github.com/test-practice/client/pages/file/index.js */"./client/pages/file/index.js");


/***/ }),

/***/ "dll-reference vendors_c62a3df83ad963edb047":
/*!***********************************************!*\
  !*** external "vendors_c62a3df83ad963edb047" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendors_c62a3df83ad963edb047;

/***/ })

},[[0,"runtime~file","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyL2luZGV4LmNzcz82N2UwIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3BvcHVwLW1pbi1sYXllci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9yZXNldC5jc3M/YjM0NSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvZmlsZS9pbmRleC5jc3M/NzM1OCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvcGFnZXMvZmlsZS91dGlsLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3XCIiXSwibmFtZXMiOlsiTGF5b3V0Iiwic3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInBvcHVwTWluTGF5ZXJTY3JvbGxUb3AiLCJQb3B1cE1pbkxheWVyIiwic2hvdyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIlJlYWN0RE9NIiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiY29udGVudCIsImhlaWdodCIsImxheWVyIiwibW9kZWwiLCJkaXNwbGF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImdldFNjcm9sbFRvcCIsInRvdGFsIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0U2Nyb2xsVG9wIiwidG9wIiwiZGlzYWJsZVNjcm9sbCIsInRvYXN0Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXN0YXJ0U2Nyb2xsIiwibWFya2VyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRvYXN0IiwidG9hc3QiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kQ2hpbGQiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInJlbmRlciIsImNsaWVudEhlaWdodCIsImxheW91dEFyZ3MiLCJib2R5TWF4V2lkdGgiLCJkZXNpZ25XaWR0aCIsInVwbG9hZCIsIndpbmRvdyIsIkNPTkZJRyIsIkFwcCIsImNoZWNrIiwiY2xpY2siLCJmIiwiZmlsZSIsInBhc3MiLCJzZXRTdGF0ZSIsImlubmVySFRNTCIsIndpZHRoIiwiZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVTdGF0ZSIsImNvbmZpZyIsImlzVXBsb2FkIiwicHJlcGFyZUZpbGUiLCJpbkZpbGVUeXBlIiwidGVzdEZpbGVUeXBlIiwidHlwZSIsImV4dHJhY3RGaWxlIiwidG9rZW4iLCJjaGVja0ZpbGUiLCJyZXN1bHQiLCJjb2RlIiwiaGFuZGxlUmVhbFVwbG9hZGVkIiwiY29uc29sZSIsImxvZyIsInNsaWNlQW5kVXBsb2FkRmlsZSIsImxpc3QiLCJjaHVuayIsInF1ZXJ5RmlsZSIsIm9uZSIsImV4dHJhY3QiLCJleHRyYWN0VGV4dCIsInJlc29sdmUiLCJyZWplY3QiLCJibG9iU2xpY2UiLCJGaWxlIiwicHJvdG90eXBlIiwibW96U2xpY2UiLCJ3ZWJraXRTbGljZSIsImNodW5rU2l6ZSIsImdldFRodW5rU2l6ZSIsImNodW5rcyIsInNwYXJrIiwiU3BhcmtNRDUiLCJBcnJheUJ1ZmZlciIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwiY3VycmVudENodW5rIiwib25sb2FkIiwiYXBwZW5kIiwiaGFuZGxlUHJvY2VlZE5leHQiLCJlbmQiLCJvbmVycm9yIiwiZXJyb3IiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwibGVuZ3RoIiwiY2VpbCIsInNpemUiLCJ0d28iLCJ1cGxvYWROb2RlIiwidXBsb2FkVGV4dCIsInN0YWNrQXJyYXkiLCJpIiwiZXhpdCIsInB1c2giLCJoYW5kbGVTdGFjayIsInN0YWNrIiwidXBsb2FkRmlsZSIsImtleSIsInJhZGlvIiwic2hpZnQiLCJmb3JtIiwiRm9ybURhdGEiLCJtYXRjaEZpbGVUeXBlIiwidGhyZWUiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsImhyZWYiLCJoYW5kbGVSZXN0YXJ0RGVmYXVsdCIsInN0YXJ0IiwicmVhZEFzQXJyYXlCdWZmZXIiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUdpQyxLQUFLLEdBQUc3QyxTQUFSLElBQXFCdkMsSUFBSSxDQUFDNkQsSUFBMUIsR0FBaUM3RCxJQUFJLENBQUM2RCxJQUF0QyxHQUE2Q3VCLEtBQUssR0FBRzdDLFNBQWpFO0FBRUFNLFlBQVUsQ0FBQ3dDLGlCQUFYLENBQTZCbkQsU0FBUyxDQUFDb0QsSUFBVixDQUFldEYsSUFBZixFQUFxQm9GLEtBQXJCLEVBQTRCakMsR0FBNUIsQ0FBN0I7QUFFQXJCLFNBQU8sQ0FBQzdELEtBQVIsQ0FBY21DLEtBQWQsYUFBeUIyQyxZQUFZLEdBQUcsQ0FBeEM7QUFDQWhCLGFBQVcsQ0FBQzVCLFNBQVosYUFBMkI0QyxZQUFZLEdBQUcsQ0FBMUM7QUFDRCxDOzs7Ozs7Ozs7OztBQ3RWRCwwSTs7Ozs7Ozs7Ozs7QUNBQSwySTs7Ozs7Ozs7Ozs7QUNBQSwwSTs7Ozs7Ozs7Ozs7QUNBQSwySTs7Ozs7Ozs7Ozs7QUNBQSwySTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6ImZpbGV+NDM0MDkyNTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0ICcuLi9yZXNldC5jc3MnXG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57Y2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD5cbiAgfVxufVxuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyoqXG4gKiDnroDljZXmj5DnpLrmoYbmqKHniYhcbiAqIOWPguaVsOivtOaYju+8mlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQg5o+Q56S65YaF5a65XG4gKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24g6Ieq5Yqo5YWz6Zet55qE5pe26Ze077yM6buY6K6kMjAwMFxuICogQHBhcmFtIHtCb29sZWFufSBsYXllciDpgI/mmI7lurbmoaPmmK/kuI3mmK/lh7rnjrBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbW9kZWwg6buRL+eZvVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sg5Zue6LCDXG4gKiDkvb/nlKjmlrnlvI/vvJpcbiAqIFBvcHVwTWluTGF5ZXIuc2hvdyh7XG4gKiAgY29udGVudDogJ+ivt+i+k+WFpeS9k+mqjOeggScsXG4gKiAgZHVyYXRpb246IDIwMDAsXG4gKiAgbGF5ZXI6IGZhbHNlLFxuICogIG1vZGVsOiBmYWxzZSxcbiAqICBjYWxsYmFjazogKCkgPT4geyB9LFxuICogfSlcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICcuL2luZGV4LmNzcydcblxubGV0IHBvcHVwTWluTGF5ZXJTY3JvbGxUb3AgPSAwXG5cbmNsYXNzIFBvcHVwTWluTGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxheWVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb2RlbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9kZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29udGVudDogJycsXG4gICAgbGF5ZXI6IHRydWUsXG4gICAgbW9kZWw6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3csXG4gICAgfVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKCFuZXh0U3RhdGUuc2hvdykge1xuICAgICAgY29uc3QgeyBub2RlIH0gPSB0aGlzLnByb3BzXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKG5vZGUpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG4gICAgLy8gY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb250ZW50LCBoZWlnaHQsIGxheWVyLCBtb2RlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kZWwtbWluaS1sYXllcicgc3R5bGU9e3sgZGlzcGxheTogc2hvdyA/IG51bGwgOiAnbm9uZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYXllcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPntjb250ZW50fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xheWVyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlbCA/ICdsYXllci1iYWNrIHdoaXRlJyA6ICdsYXllci1iYWNrIGJsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICovXG5jb25zdCBnZXRTY3JvbGxUb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIHJldHVybiBwYXJzZUludCh0b3RhbCwgMTApXG59XG5cbi8qKlxuICog6K6+572u5rua5Yqo5p2h5L2N572uXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIOS9jee9rlxuICovXG5jb25zdCBzZXRTY3JvbGxUb3AgPSAodG9wKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdG9wXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB0b3Bcbn1cblxuLyoqXG4gKiBkaXNhYmxlU2Nyb2xsIOemgeatoua7muWKqOadoVxuICovXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICBwb3B1cE1pbkxheWVyU2Nyb2xsVG9wID0gZ2V0U2Nyb2xsVG9wKClcblxuICBjb25zdCB0b2FzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbW9kZWwtbWluaScpXG5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgaWYgKHRvYXN0Tm9kZSkge1xuICAgIHRvYXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogcmVzdGFydFNjcm9sbCDmlL7lvIDmu5rliqjmnaFcbiAqL1xuZnVuY3Rpb24gcmVzdGFydFNjcm9sbCgpIHtcbiAgY29uc3QgdG9hc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LW1vZGVsLW1pbmknKVxuICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtbWFya2VyJylcbiAgaWYgKCFtYXJrZXIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaW5oZXJpdCdcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2luaGVyaXQnXG5cbiAgICBzZXRTY3JvbGxUb3AocG9wdXBNaW5MYXllclNjcm9sbFRvcClcbiAgfVxuXG4gIGlmICh0b2FzdE5vZGUpIHtcbiAgICB0b2FzdE5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIOWIm+W7uuS4gOS4quiKgueCueOAnFxuICovXG5mdW5jdGlvbiBjcmVhdGVUb2FzdCgpIHtcbiAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2FzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvYXN0LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApfWApXG4gIHRvYXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9hc3QtbW9kZWwtbWluaScpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpXG4gIHJldHVybiB0b2FzdFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNob3cob3B0aW9ucykge1xuICAgIGxldCB7IGNvbnRlbnQsIGNhbGxiYWNrLCBkdXJhdGlvbiwgbGF5ZXIsIG1vZGVsIH0gPSBvcHRpb25zXG4gICAgY29uc3QgdG9hc3QgPSBjcmVhdGVUb2FzdCgpXG5cbiAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IDIwMDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgIGR1cmF0aW9uID0gMjAwMFxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzdGFydFNjcm9sbCgpXG5cbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodG9hc3QpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRvYXN0KVxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24pXG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UG9wdXBNaW5MYXllciBjb250ZW50PXtjb250ZW50fSBoZWlnaHQ9e2RvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0fSBsYXllcj17bGF5ZXJ9IG1vZGVsPXttb2RlbH0gbm9kZT17dG9hc3R9IC8+LFxuICAgICAgdG9hc3RcbiAgICApXG5cbiAgICBkaXNhYmxlU2Nyb2xsKClcbiAgfSxcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBwcmVwYXJlRmlsZSwgaGFuZGxlUmVzdGFydERlZmF1bHQgfSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCAnLi9pbmRleC5jc3MnXG5cbmNvbnN0IGxheW91dEFyZ3MgPSB7XG4gIGJvZHlNYXhXaWR0aDogNDI1LFxuICBkZXNpZ25XaWR0aDogNzUwLFxufVxuXG5jb25zdCB7IHVwbG9hZCB9ID0gd2luZG93LkNPTkZJR1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYXNzOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkgeyB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGFuZGxlUmVzdGFydERlZmF1bHQoKVxuICAgIHRoaXMuY2hlY2suY2xpY2soKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGYpID0+IHtcbiAgICBjb25zdCBmaWxlID0gZlswXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICB1cGxvYWQuZmlsZSA9IGZpbGVcbiAgICAgIHByZXBhcmVGaWxlKGZpbGUpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYXNzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAocGFzcykge1xuICAgICAgdXBsb2FkLnN0YXRlID0gJ3N0b3AnXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFzczogZmFsc2UgfSlcbiAgICAgIHRoaXMuZmlsZS5pbm5lckhUTUwgPSAnU1RBUlQnXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghcGFzcykge1xuICAgICAgdXBsb2FkLnN0YXRlID0gJ3N0YXJ0J1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3M6IHRydWUgfSlcbiAgICAgIHRoaXMuZmlsZS5pbm5lckhUTUwgPSAnU1RPUCdcblxuICAgICAgaWYgKHVwbG9hZC5maWxlKSB7XG4gICAgICAgIHByZXBhcmVGaWxlKHVwbG9hZC5maWxlKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLmxheW91dEFyZ3N9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVtbyc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPnVwbG9hZCBmaWxlPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyJz5BIHVwbG9hZCBmaWxlIGFuZCB3YW50IHRvIGxvb2sgZm9yIGEgZ2lybGZyaWVuZC4uLjwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGxvYWQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29uZScgaWQ9J29uZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RvcGljJz7moKHpqozmlofku7bov5vluqY8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2V4dHJhY3QnIHN0eWxlPXt7IHdpZHRoOiAnMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICA8cD4wJTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb25lJyBpZD0ndHdvJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndG9waWMnPuS4iuS8oOaWh+S7tui/m+W6pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2snPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ndXBsb2FkJyBzdHlsZT17eyB3aWR0aDogJzAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHA+MCU8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J29uZScgaWQ9J3RocmVlJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndG9waWMnPuS4iuS8oOaWh+S7tue7k+aenDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2snPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdqdW1wJyBocmVmPScnIHRhcmdldD0nX2JsYW5rJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N1Ym1pdCc+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1maWxlJ1xuICAgICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgICByZWY9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVjayA9IGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLnRhcmdldC5maWxlcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NsaWNrLWZpbGUnIHR5cGU9J2J1dHRvbicgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgIENsaWNrIFRoaXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NsaWNrLXN0YXRlJ1xuICAgICAgICAgICAgICByZWY9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXRlfVxuICAgICAgICAgICAgICByb2xlPSdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNUT1BcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBjb25maWcgPSB3aW5kb3cuQ09ORklHIHx8IHt9XG5yZW5kZXIoPEFwcCB7Li4uY29uZmlnfSAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKVxuIiwiaW1wb3J0IFNwYXJrTUQ1IGZyb20gJ3NwYXJrLW1kNSdcbmltcG9ydCBQb3B1cE1pbkxheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9wdXAtbWluLWxheWVyJ1xuXG5sZXQgaXNVcGxvYWQgPSAwXG5cbmFzeW5jIGZ1bmN0aW9uIHByZXBhcmVGaWxlKGZpbGUpIHtcbiAgLy8g56ys6Zu25q2l77ya5qOA5p+l57G75Z6LXG4gIGNvbnN0IGluRmlsZVR5cGUgPSB0ZXN0RmlsZVR5cGUoZmlsZS50eXBlKVxuXG4gIGlmIChpbkZpbGVUeXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyDnrKzkuIDmraXvvJrmj5Dlj5bmlofku7ZcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBleHRyYWN0RmlsZShmaWxlKVxuXG4gIC8vIOesrOS6jOatpe+8muWMuemFjeaWh+S7tlxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaGVja0ZpbGUoeyBmaWxlLCB0b2tlbiB9KVxuXG4gIGlmIChyZXN1bHQuY29kZSA9PT0gMjAwKSB7XG4gICAgaGFuZGxlUmVhbFVwbG9hZGVkKHJlc3VsdC5maWxlKVxuICAgIFBvcHVwTWluTGF5ZXIuc2hvdyh7IGNvbnRlbnQ6ICdoYS1oYe+8jOaegemAn+S4iuS8oOaIkOWKn++8gScgfSlcbiAgICBjb25zb2xlLmxvZygnLS0tJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIOesrOS4ieatpe+8muajgOafpeS4iuS8oFxuICBjb25zdCBzdGF0ZSA9IGF3YWl0IHNsaWNlQW5kVXBsb2FkRmlsZSh7IGZpbGUsIHRva2VuLCBsaXN0OiByZXN1bHQuY2h1bmsgfSlcbiAgaWYgKHN0YXRlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyDnrKzlm5vmraXvvJrmn6Xor6LnirbmgIFcbiAgYXdhaXQgcXVlcnlGaWxlKHsgZmlsZSwgdG9rZW4gfSlcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEZpbGUoZmlsZSkge1xuICBjb25zdCBvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25lJylcbiAgb25lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgY29uc3QgZXh0cmFjdCA9IG9uZS5xdWVyeVNlbGVjdG9yKCcjZXh0cmFjdCcpXG4gIGNvbnN0IGV4dHJhY3RUZXh0ID0gZXh0cmFjdC5xdWVyeVNlbGVjdG9yKCdwJylcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGJsb2JTbGljZSA9IEZpbGUucHJvdG90eXBlLnNsaWNlIHx8IEZpbGUucHJvdG90eXBlLm1velNsaWNlIHx8IEZpbGUucHJvdG90eXBlLndlYmtpdFNsaWNlXG4gICAgY29uc3QgY2h1bmtTaXplID0gZ2V0VGh1bmtTaXplKClcbiAgICBjb25zdCBjaHVua3MgPSAxMDBcbiAgICBjb25zdCBzcGFyayA9IG5ldyBTcGFya01ENS5BcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgIGxldCBjdXJyZW50Q2h1bmsgPSAwXG5cbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICBzcGFyay5hcHBlbmQoZS50YXJnZXQucmVzdWx0KVxuICAgICAgY3VycmVudENodW5rICs9IDFcblxuICAgICAgaWYgKGN1cnJlbnRDaHVuayA8IGNodW5rcykge1xuICAgICAgICBoYW5kbGVQcm9jZWVkTmV4dCh7XG4gICAgICAgICAgYmxvYlNsaWNlLFxuICAgICAgICAgIGNodW5rU2l6ZSxcbiAgICAgICAgICBjdXJyZW50Q2h1bmssXG4gICAgICAgICAgZXh0cmFjdCxcbiAgICAgICAgICBleHRyYWN0VGV4dCxcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIGZpbGVSZWFkZXIsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHNwYXJrLmVuZCgpKVxuICAgICAgICBjb25zb2xlLmxvZygnMS4gZXh0cmFjdCBmaWxlIGZpbmlzaGVkLicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsZVJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignc29tZXRoaW5nIGlzIGVycm9yLicpXG4gICAgICByZWplY3QoKVxuICAgIH1cblxuICAgIGhhbmRsZVByb2NlZWROZXh0KHtcbiAgICAgIGJsb2JTbGljZSxcbiAgICAgIGNodW5rU2l6ZSxcbiAgICAgIGN1cnJlbnRDaHVuayxcbiAgICAgIGV4dHJhY3QsXG4gICAgICBleHRyYWN0VGV4dCxcbiAgICAgIGZpbGUsXG4gICAgICBmaWxlUmVhZGVyLFxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRmlsZSh7IGZpbGUsIHRva2VuIH0pIHtcbiAgY29uc3QgaW5GaWxlVHlwZSA9IHRlc3RGaWxlVHlwZShmaWxlLnR5cGUpXG5cbiAgaWYgKGluRmlsZVR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGxldCByZXN1bHQgPSB7fVxuXG4gIGF3YWl0IGZldGNoKGAvdXBsb2FkL2ZpbGUvY2hlY2s/dG9rZW49JHt0b2tlbn0mdHlwZT0ke2ZpbGUudHlwZX1gLCB7XG4gICAgbWV0aG9kOiBgZ2V0YCxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJlc3VsdCA9IHJlc1xuICAgICAgY29uc29sZS5sb2coJzIuIGNoZWNrIGZpbGUgZmluaXNoZWQuJylcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5hc3luYyBmdW5jdGlvbiBzbGljZUFuZFVwbG9hZEZpbGUoeyBmaWxlLCB0b2tlbiwgbGlzdCB9KSB7XG4gIGlzVXBsb2FkID0gbGlzdC5sZW5ndGhcbiAgY29uc3QgY2h1bmtTaXplID0gZ2V0VGh1bmtTaXplKClcbiAgY29uc3QgY2h1bmtzID0gTWF0aC5jZWlsKGZpbGUuc2l6ZSAvIGNodW5rU2l6ZSlcblxuICBjb25zdCB0d28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdvJylcbiAgdHdvLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG5cbiAgY29uc3QgdXBsb2FkTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKVxuICBjb25zdCB1cGxvYWRUZXh0ID0gdXBsb2FkTm9kZS5xdWVyeVNlbGVjdG9yKCdwJylcblxuICAvLyDmlrnms5XkuIBcbiAgLy8g5L2/55So5b6q546v5LiK5Lyg77yI5pyJ5aSa5bCR5bCx5Y+R5aSa5bCR6K+35rGC77yJXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2h1bmtzOyBpKyspIHtcbiAgLy8gICBjb25zdCBleGl0ID0gbGlzdC5pbmNsdWRlcyhgJHtpfWApXG4gIC8vICAgaWYgKCFleGl0KSB7XG4gIC8vICAgICBhd2FpdCB1cGxvYWRGaWxlKHsgZmlsZSwga2V5OiBpLCB0b2tlbiwgY2h1bmtzIH0pXG5cbiAgLy8gICAgIGlzVXBsb2FkICs9IDFcblxuICAvLyAgICAgY29uc3QgcmFkaW8gPSBNYXRoLmZsb29yKChpc1VwbG9hZCAvIGNodW5rcykgKiAxMDApXG5cbiAgLy8gICAgIHVwbG9hZC5zdHlsZS53aWR0aCA9IGAke3JhZGlvfSVgXG4gIC8vICAgICB1cGxvYWRUZXh0LmlubmVySFRNTCA9IGAke3JhZGlvfSVgXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8g5pa55rOV5LqMXG4gIC8vIOS9v+eUqOmYn+WIl++8jOWPkeWujOS4gOS4quivt+axguWGjei/m+ihjOS4i+S4gOS4qlxuICBjb25zdCBzdGFja0FycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaHVua3M7IGkrKykge1xuICAgIGNvbnN0IGV4aXQgPSBsaXN0LmluY2x1ZGVzKGAke2l9YClcbiAgICBpZiAoIWV4aXQpIHtcbiAgICAgIHN0YWNrQXJyYXkucHVzaChpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhbmRsZVN0YWNrKHtcbiAgICBzdGFjazogc3RhY2tBcnJheSxcbiAgICBmaWxlLFxuICAgIHRva2VuLFxuICAgIGNodW5rcyxcbiAgICB1cGxvYWROb2RlLFxuICAgIHVwbG9hZFRleHQsXG4gIH0pXG5cbiAgaWYgKHJlc3VsdCA9PT0gJ3N0b3AnKSB7XG4gICAgY29uc29sZS5sb2coJzMuIHVwbG9hZCBmaWxlIGlzIHN0b3AuJylcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnMy4gc2xpY2UgYW5kIHVwbG9hZCBmaWxlIGZpbmlzaGVkLicpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN0YWNrKHsgc3RhY2ssIGZpbGUsIHRva2VuLCBjaHVua3MsIHVwbG9hZE5vZGUsIHVwbG9hZFRleHQgfSkge1xuICBpZiAoc3RhY2subGVuZ3RoIDw9IDApIHtcbiAgICBpc1VwbG9hZCA9IDBcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGF3YWl0IHVwbG9hZEZpbGUoe1xuICAgIGZpbGUsXG4gICAga2V5OiBzdGFja1swXSxcbiAgICB0b2tlbixcbiAgICBjaHVua3MsXG4gICAgY2FsbGJhY2s6IGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IHsgdXBsb2FkIH0gPSB3aW5kb3cuQ09ORklHXG5cbiAgICAgICAgaWYgKHVwbG9hZC5zdGF0ZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgIGlzVXBsb2FkICs9IDFcblxuICAgICAgICAgIGNvbnN0IHJhZGlvID0gTWF0aC5mbG9vcigoaXNVcGxvYWQgLyBjaHVua3MpICogMTAwKVxuXG4gICAgICAgICAgdXBsb2FkTm9kZS5zdHlsZS53aWR0aCA9IGAke3JhZGlvfSVgXG4gICAgICAgICAgdXBsb2FkVGV4dC5pbm5lckhUTUwgPSBgJHtyYWRpb30lYFxuXG4gICAgICAgICAgc3RhY2suc2hpZnQoKVxuICAgICAgICAgIGF3YWl0IGhhbmRsZVN0YWNrKHtcbiAgICAgICAgICAgIHN0YWNrLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgY2h1bmtzLFxuICAgICAgICAgICAgdXBsb2FkTm9kZSxcbiAgICAgICAgICAgIHVwbG9hZFRleHQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjayA9IFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IHsgdXBsb2FkIH0gPSB3aW5kb3cuQ09ORklHXG4gIGlmICh1cGxvYWQuc3RhdGUgPT09ICdzdG9wJykge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAodXBsb2FkLnN0YXRlID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGZpbGUsIGtleSwgdG9rZW4sIGNodW5rcywgY2FsbGJhY2sgfSkge1xuICBjb25zdCBjaHVua1NpemUgPSBnZXRUaHVua1NpemUoKVxuICBjb25zdCBlbmQgPSAoa2V5ICsgMSkgKiBjaHVua1NpemUgPj0gZmlsZS5zaXplID8gZmlsZS5zaXplIDogKGtleSArIDEpICogY2h1bmtTaXplXG4gIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuXG4gIGZvcm0uYXBwZW5kKCdkYXRhJywgZmlsZS5zbGljZShrZXkgKiBjaHVua1NpemUsIGVuZCkpXG4gIGZvcm0uYXBwZW5kKCd0b3RhbCcsIGNodW5rcylcbiAgZm9ybS5hcHBlbmQoJ2luZGV4Jywga2V5KVxuICBmb3JtLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcblxuICBhd2FpdCBmZXRjaChgL3VwbG9hZC9maWxlL3VwbG9hZGAsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBib2R5OiBmb3JtLFxuICB9KVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgYXdhaXQgY2FsbGJhY2socmVzKVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUZpbGUoeyBmaWxlLCB0b2tlbiB9KSB7XG4gIGNvbnN0IGluRmlsZVR5cGUgPSB0ZXN0RmlsZVR5cGUoZmlsZS50eXBlKVxuXG4gIGlmIChpbkZpbGVUeXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBhd2FpdCBmZXRjaChgL3VwbG9hZC9maWxlL21lcmdlP3Rva2VuPSR7dG9rZW59JnR5cGU9JHtmaWxlLnR5cGV9YCwge1xuICAgIG1ldGhvZDogJ2dldCcsXG4gIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBoYW5kbGVSZWFsVXBsb2FkZWQocmVzLmZpbGUpXG4gICAgICBjb25zb2xlLmxvZygnNC4gcXVlcnkgZmlsZSBmaW5pc2hlZC4nKVxuICAgICAgY29uc29sZS5sb2coJy0tLScpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0VGh1bmtTaXplKCkge1xuICAvLyByZXR1cm4gNSAqIDEwMjQgKiAxMDI0XG4gIHJldHVybiA1MCAqIDEwMjRcbn1cblxuZnVuY3Rpb24gdGVzdEZpbGVUeXBlKHR5cGUpIHtcbiAgY29uc3QgcmVzID0gbWF0Y2hGaWxlVHlwZSh0eXBlKVxuXG4gIGlmICghcmVzKSB7XG4gICAgUG9wdXBNaW5MYXllci5zaG93KHtcbiAgICAgIGNvbnRlbnQ6IGBoYS1oYe+8jOS4jeiDveS4iuS8oO+8iCR7dHlwZX3vvInmoLzlvI/vvIFgLFxuICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgfSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hGaWxlVHlwZSh0eXBlKSB7XG4gIC8vIC5wZGZcbiAgLy8gLnBwdHhcbiAgLy8gLnhsc3hcbiAgLy8gLmRvY3hcbiAgLy8gLm1wM1xuICAvLyAud2F2XG4gIC8vIC5naWZcbiAgLy8gLmpwZ1xuICAvLyAucG5nXG4gIC8vIC53ZWJwXG4gIC8vIC5tcDRcblxuICByZXR1cm4gW1xuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ2F1ZGlvL21wMycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2ltYWdlL2dpZicsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9wbmcnLFxuICAgICdpbWFnZS93ZWJwJyxcbiAgICAndmlkZW8vbXA0JyxcbiAgXS5pbmNsdWRlcyh0eXBlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZWFsVXBsb2FkZWQoZmlsZSkge1xuICBjb25zdCB0aHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aHJlZScpXG4gIHRocmVlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIGNvbnN0IGNoZWNrID0gdGhyZWUucXVlcnlTZWxlY3RvcignLmp1bXAnKVxuICBjaGVjay5pbm5lckhUTUwgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0vJHtmaWxlfWBcbiAgY2hlY2suaHJlZiA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fS8ke2ZpbGV9YFxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXN0YXJ0RGVmYXVsdCgpIHtcbiAgY29uc3Qgb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29uZScpXG4gIG9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIGNvbnN0IGV4dHJhY3QgPSBvbmUucXVlcnlTZWxlY3RvcignI2V4dHJhY3QnKVxuICBleHRyYWN0LnN0eWxlLndpZHRoID0gJzAlJ1xuICBjb25zdCBleHRyYWN0VGV4dCA9IGV4dHJhY3QucXVlcnlTZWxlY3RvcigncCcpXG4gIGV4dHJhY3RUZXh0LmlubmVySFRNTCA9ICcwJSdcblxuICBjb25zdCB0d28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdvJylcbiAgdHdvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgY29uc3QgdXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpXG4gIHVwbG9hZC5zdHlsZS53aWR0aCA9ICcwJSdcbiAgY29uc3QgdXBsb2FkVGV4dCA9IHVwbG9hZC5xdWVyeVNlbGVjdG9yKCdwJylcbiAgdXBsb2FkVGV4dC5zdHlsZS5pbm5lckhUTUwgPSAnMCUnXG5cbiAgY29uc3QgdGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhyZWUnKVxuICB0aHJlZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIGNvbnN0IGNoZWNrID0gdGhyZWUucXVlcnlTZWxlY3RvcignLmp1bXAnKVxuICBjaGVjay5pbm5lckhUTUwgPSAnJ1xuICBjaGVjay5ocmVmID0gJydcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvY2VlZE5leHQoeyBibG9iU2xpY2UsIGNodW5rU2l6ZSwgY3VycmVudENodW5rLCBleHRyYWN0LCBleHRyYWN0VGV4dCwgZmlsZSwgZmlsZVJlYWRlciB9KSB7XG4gIGNvbnN0IHN0YXJ0ID0gY3VycmVudENodW5rICogY2h1bmtTaXplXG4gIGNvbnN0IGVuZCA9IHN0YXJ0ICsgY2h1bmtTaXplID49IGZpbGUuc2l6ZSA/IGZpbGUuc2l6ZSA6IHN0YXJ0ICsgY2h1bmtTaXplXG5cbiAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iU2xpY2UuY2FsbChmaWxlLCBzdGFydCwgZW5kKSlcblxuICBleHRyYWN0LnN0eWxlLndpZHRoID0gYCR7Y3VycmVudENodW5rICsgMX0lYFxuICBleHRyYWN0VGV4dC5pbm5lckhUTUwgPSBgJHtjdXJyZW50Q2h1bmsgKyAxfSVgXG59XG5cbmV4cG9ydCB7IHByZXBhcmVGaWxlLCBoYW5kbGVSZXN0YXJ0RGVmYXVsdCB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDcgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDdcIikpKDcpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0N1wiKSkoMTkpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0N1wiKSkoMCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3ICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3XCIpKSgyNSk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3ICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3XCIpKSgyOSk7IiwibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3OyJdLCJzb3VyY2VSb290IjoiIn0=