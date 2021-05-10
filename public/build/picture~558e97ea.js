(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["picture"],{

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

/***/ "./client/pages/picture/index.css":
/*!****************************************!*\
  !*** ./client/pages/picture/index.css ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./client/pages/picture/index.js":
/*!***************************************!*\
  !*** ./client/pages/picture/index.js ***!
  \***************************************/
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

__webpack_require__(/*! ./index.css */ "./client/pages/picture/index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var upload = window.CONFIG.upload;

var App = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.check.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (f) {
      var file = f[0];

      if (file) {
        upload.file = file;
      }
    });
    _this.state = {};
    return _this;
  } // componentDidMount() { }


  (0, _createClass2["default"])(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_layout["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "demo"
      }, /*#__PURE__*/_react["default"].createElement("h1", {
        className: "title"
      }, "upload picture"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "descr"
      }, "A upload picture and want to look for a girlfriend...")));
    }
  }]);
  return App;
}(_react.Component);

var config = window.CONFIG || {};
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(App, config), document.querySelector('#app'));

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
/*!***************************************************************************!*\
  !*** multi core-js/es/map core-js/es/set ./client/pages/picture/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/map */"./node_modules/core-js/es/map/index.js");
__webpack_require__(/*! core-js/es/set */"./node_modules/core-js/es/set/index.js");
module.exports = __webpack_require__(/*! /Users/qinxikun/Documents/github.com/test-practice/client/pages/picture/index.js */"./client/pages/picture/index.js");


/***/ }),

/***/ "dll-reference vendors_c62a3df83ad963edb047":
/*!***********************************************!*\
  !*** external "vendors_c62a3df83ad963edb047" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendors_c62a3df83ad963edb047;

/***/ })

},[[0,"runtime~picture","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvcmVzZXQuY3NzP2IzNDUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL3BpY3R1cmUvaW5kZXguY3NzP2JhNzYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3BhZ2VzL3BpY3R1cmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2hhdHdnLWZldGNoL2ZldGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3Iiwid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDdcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJzdGF0ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwidXBsb2FkIiwid2luZG93IiwiQ09ORklHIiwiQXBwIiwiY2hlY2siLCJjbGljayIsImYiLCJmaWxlIiwiY29uZmlnIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7QUFDSixvQkFBYztBQUFBOztBQUFBO0FBQ1o7QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZZO0FBR2I7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQVFDLFFBQVIsR0FBcUIsS0FBS0MsS0FBMUIsQ0FBUUQsUUFBUjtBQUNBLDBCQUFPLGdDQUFDLGlCQUFELENBQU8sUUFBUCxRQUFpQkEsUUFBakIsQ0FBUDtBQUNEOzs7RUFUa0JFLGdCOztBQVlyQkosTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2pCSCxVQUFRLEVBQUVJLHNCQUFVQztBQURILENBQW5CO2VBSWVQLE07Ozs7Ozs7Ozs7Ozs7QUN0QmY7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFRUSxNQUFSLEdBQW1CQyxNQUFNLENBQUNDLE1BQTFCLENBQVFGLE1BQVI7O0lBRU1HLEc7Ozs7O0FBQ0osZUFBWVIsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBRGlCLG9HQU9MLFlBQU07QUFDbEIsWUFBS1MsS0FBTCxDQUFXQyxLQUFYO0FBQ0QsS0FUa0I7QUFBQSxxR0FXSixVQUFDQyxDQUFELEVBQU87QUFDcEIsVUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUMsQ0FBRCxDQUFkOztBQUNBLFVBQUlDLElBQUosRUFBVTtBQUNSUCxjQUFNLENBQUNPLElBQVAsR0FBY0EsSUFBZDtBQUNEO0FBQ0YsS0FoQmtCO0FBRWpCLFVBQUtkLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCLEcsQ0FFRDs7Ozs7V0FhQSxrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGtCQUFELHFCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLDBCQURGLGVBRUU7QUFBRyxpQkFBUyxFQUFDO0FBQWIsaUVBRkYsQ0FERixDQURGO0FBUUQ7OztFQTVCZUcsZ0I7O0FBK0JsQixJQUFNWSxNQUFNLEdBQUdQLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixFQUFoQztBQUNBLG9DQUFPLGdDQUFDLEdBQUQsRUFBU00sTUFBVCxDQUFQLEVBQTRCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBNUIsRTs7Ozs7Ozs7Ozs7QUN2Q0EsMEk7Ozs7Ozs7Ozs7O0FDQUEsMkk7Ozs7Ozs7Ozs7O0FDQUEsMEk7Ozs7Ozs7Ozs7O0FDQUEsMkk7Ozs7Ozs7Ozs7O0FDQUEsMkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwaWN0dXJlfjU1OGU5N2VhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCAnLi4vcmVzZXQuY3NzJ1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2NoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+XG4gIH1cbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuXG5jb25zdCB7IHVwbG9hZCB9ID0gd2luZG93LkNPTkZJR1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7fVxuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7IH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmNoZWNrLmNsaWNrKClcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChmKSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGZbMF1cbiAgICBpZiAoZmlsZSkge1xuICAgICAgdXBsb2FkLmZpbGUgPSBmaWxlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVtbyc+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPnVwbG9hZCBwaWN0dXJlPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyJz5BIHVwbG9hZCBwaWN0dXJlIGFuZCB3YW50IHRvIGxvb2sgZm9yIGEgZ2lybGZyaWVuZC4uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgY29uZmlnID0gd2luZG93LkNPTkZJRyB8fCB7fVxucmVuZGVyKDxBcHAgey4uLmNvbmZpZ30gLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKSlcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0NyAqLyBcImRsbC1yZWZlcmVuY2UgdmVuZG9yc19jNjJhM2RmODNhZDk2M2VkYjA0N1wiKSkoNyk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3ICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3XCIpKSgxOSk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3ICovIFwiZGxsLXJlZmVyZW5jZSB2ZW5kb3JzX2M2MmEzZGY4M2FkOTYzZWRiMDQ3XCIpKSgwKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDcgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDdcIikpKDI1KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDcgKi8gXCJkbGwtcmVmZXJlbmNlIHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDdcIikpKDI5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcnNfYzYyYTNkZjgzYWQ5NjNlZGIwNDc7Il0sInNvdXJjZVJvb3QiOiIifQ==