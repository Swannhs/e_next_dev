module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apis/cart.js":
/*!**************************!*\
  !*** ./src/apis/cart.js ***!
  \**************************/
/*! exports provided: fetchCartData, fetchProductIdCartData, addCartData, removeCartData, updateCartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartData", function() { return fetchCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdCartData", function() { return fetchProductIdCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCartData", function() { return addCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCartData", function() { return removeCartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartData", function() { return updateCartData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/cart";
const fetchCartData = cartId => {
  let endpoint = cartId ? _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}` : _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdCartData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("productId", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addCartData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeCartData = cartId => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};
const updateCartData = (cartId, data) => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${cartId}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].patch(endpoint, data);
};

/***/ }),

/***/ "./src/apis/wishlist.js":
/*!******************************!*\
  !*** ./src/apis/wishlist.js ***!
  \******************************/
/*! exports provided: fetchWishlistData, fetchProductIdWishlistData, addWishlistData, removeWishlistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishlistData", function() { return fetchWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProductIdWishlistData", function() { return fetchProductIdWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWishlistData", function() { return addWishlistData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistData", function() { return removeWishlistData; });
/* harmony import */ var _common_axiosService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/axiosService */ "./src/common/axiosService.js");
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./src/common/utils.js");



const url = "/wishlist";
const fetchWishlistData = () => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const fetchProductIdWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + "?" + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["renderParam"])("id", pid);
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].get(endpoint);
};
const addWishlistData = data => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].post(endpoint, data);
};
const removeWishlistData = pid => {
  let endpoint = _common_defines__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + url + `/${pid}`;
  return _common_axiosService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(endpoint);
};

/***/ }),

/***/ "./src/common/axiosService.js":
/*!************************************!*\
  !*** ./src/common/axiosService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AxiosService {
  constructor() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AxiosService());

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = "https://ogami-api.herokuapp.com";

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, renderParam, formatDate, removeDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderParam", function() { return renderParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDash", function() { return removeDash; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
};
const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }

  return "";
};
const formatDate = (date, inputFormat = "YYYY-MM-DD", outputFormat = "MMM DD, YYYY") => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date, inputFormat).format(outputFormat);
};
const removeDash = str => {
  return str.replace(/-/g, " ");
};

/***/ }),

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "C:\\Users\\Swann\\WebstormProjects\\next_ecommerce\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ "./src/components/other/FetchInitData.js":
/*!***********************************************!*\
  !*** ./src/components/other/FetchInitData.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FetchInitData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");




function FetchInitData({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["fetchCartRequest"])());
    dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_3__["fetchWishListRequest"])());
  }, []);
  return children;
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
/* harmony import */ var _components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/other/FetchInitData */ "./src/components/other/FetchInitData.js");
var _jsxFileName = "C:\\Users\\Swann\\WebstormProjects\\next_ecommerce\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // import Loading from "../components/other/Loading";




const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_components_other_FetchInitData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_4__["default"])(App));

/***/ }),

/***/ "./src/redux/actionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/actionTypes.js ***!
  \**********************************/
/*! exports provided: SHOP, BLOG, SHOP_FILTER, CART, WISHLIST, COMPARE, BLOG_FILTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_FILTER", function() { return SHOP_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE", function() { return COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_FILTER", function() { return BLOG_FILTER; });
const SHOP = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
  FETCH_SALE_PRODUCTS: "FETCH_SALE_PRODUCTS",
  FETCH_SALE_PRODUCTS_SUCCESS: "FETCH_SALE_PRODUCTS_SUCCESS",
  FETCH_SALE_PRODUCTS_FAIL: "FETCH_SALE_PRODUCTS_FAIL",
  FETCH_FEATURED_PRODUCTS: "FETCH_FEATURED_PRODUCTS",
  FETCH_FEATURED_PRODUCTS_SUCCESS: "FETCH_FEATURED_PRODUCTS_SUCCESS",
  FETCH_FEATURED_PRODUCTS_FAIL: "FETCH_FEATURED_PRODUCTS_FAIL",
  FETCH_BEST_SELLER_PRODUCTS: "FETCH_BEST_SELLER_PRODUCTS",
  FETCH_BEST_SELLER_PRODUCTS_SUCCESS: "FETCH_BEST_SELLER_PRODUCTS_SUCCESS",
  FETCH_BEST_SELLER_PRODUCTS_FAIL: "FETCH_BEST_SELLER_PRODUCTS_FAIL",
  FETCH_DALE_PRODUCTS: "FETCH_DALE_PRODUCTS",
  FETCH_DALE_PRODUCTS_SUCCESS: "FETCH_DALE_PRODUCTS_SUCCESS",
  FETCH_DALE_PRODUCTS_FAIL: "FETCH_DALE_PRODUCTS_FAIL",
  FETCH_PRODUCT_DETAIL: "FETCH_PRODUCT_DETAIL",
  FETCH_PRODUCT_DETAIL_SUCCESS: "FETCH_PRODUCT_DETAIL_SUCCESS",
  FETCH_PRODUCT_DETAIL_FAIL: "FETCH_PRODUCT_DETAIL_FAIL",
  FETCH_SEARCHED_PRODUCTS: "FETCH_SEARCHED_PRODUCTS",
  FETCH_SEARCHED_PRODUCTS_SUCCESS: "FETCH_SEARCHED_PRODUCTS_SUCCESS",
  FETCH_SEARCHED_PRODUCTS_FAIL: "FETCH_SEARCHED_PRODUCTS_FAIL"
};
const BLOG = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAIL: "FETCH_POSTS_FAIL",
  FETCH_POST_DETAIL: "FETCH_POST_DETAIL",
  FETCH_POST_DETAIL_SUCCESS: "FETCH_POST_DETAIL_SUCCESS",
  FETCH_POST_DETAIL_FAIL: "FETCH_POST_DETAIL_FAIL",
  FETCH_RECENT_POSTS: "FETCH_RECENT_POSTS",
  FETCH_RECENT_POSTS_SUCCESS: "FETCH_RECENT_POSTS_SUCCESS",
  FETCH_RECENT_POSTS_FAIL: "FETCH_RECENT_POSTS_FAIL"
};
const SHOP_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_SORT: "SET_SORT",
  SET_SHOW: "SET_SHOW",
  SET_VIEW: "SET_VIEW",
  SET_CATEGORY: "SET_CATEGORY",
  SET_COLOR: "SET_COLOR",
  SET_SIZE: "SET_SIZE",
  SET_TAG: "SET_TAG"
};
const CART = {
  FETCH_CART: "FETCH_CART",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAIL: "FETCH_CART_FAIL"
};
const WISHLIST = {
  FETCH_WISHLIST: "FETCH_WISHLIST",
  FETCH_WISHLIST_SUCCESS: "FETCH_WISHLIST_SUCCESS",
  FETCH_WISHLIST_FAIL: "FETCH_WISHLIST_FAIL"
};
const COMPARE = {
  ADD_TO_COMPARE: "ADD_TO_COMPARE",
  REMOVE_FROM_COMPARE: "REMOVE_FROM_COMPARE"
};
const BLOG_FILTER = {
  RESET_FILTERS: "RESET_FILTERS",
  SET_CATEGORY: "SET_CATEGORY",
  SET_TAG: "SET_TAG"
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: fetchCart, fetchCartSuccess, fetchCartFail, fetchCartRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCart", function() { return fetchCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartSuccess", function() { return fetchCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartFail", function() { return fetchCartFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCartRequest", function() { return fetchCartRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/cart */ "./src/apis/cart.js");

 //Get cart data

const fetchCart = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART
});
const fetchCartSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS,
  payload: {
    data
  }
});
const fetchCartFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL,
  payload: {
    err
  }
});
const fetchCartRequest = () => {
  return dispatch => {
    dispatch(fetchCart());
    _apis_cart__WEBPACK_IMPORTED_MODULE_1__["fetchCartData"]().then(res => {
      dispatch(fetchCartSuccess(res.data));
    }).catch(err => {
      dispatch(fetchCartFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: fetchWishListRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWishListRequest", function() { return fetchWishListRequest; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
/* harmony import */ var _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/wishlist */ "./src/apis/wishlist.js");

 //Get cart data

const fetchWishList = () => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST
});

const fetchWishListSuccess = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS,
  payload: {
    data
  }
});

const fetchWishListFail = err => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL,
  payload: {
    err
  }
});

const fetchWishListRequest = () => {
  return dispatch => {
    dispatch(fetchWishList());
    _apis_wishlist__WEBPACK_IMPORTED_MODULE_1__["fetchWishlistData"]().then(res => {
      dispatch(fetchWishListSuccess(res.data));
    }).catch(err => {
      dispatch(fetchWishListFail(err));
    });
  };
};

/***/ }),

/***/ "./src/redux/reducers/blogFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/blogFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  category: "",
  tag: ""
};
function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].RESET_FILTERS:
      return {
        category: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/blogReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/blogReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blogReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  allPosts: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  recentPosts: {
    loading: true,
    data: [],
    error: false
  },
  postDetail: {
    loading: true,
    data: [],
    error: false
  }
};
function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allPosts: _objectSpread(_objectSpread({}, state.allPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Recent posts

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        recentPosts: _objectSpread(_objectSpread({}, state.recentPosts), {}, {
          loading: false,
          error: true
        })
      });
    //Post detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["BLOG"].FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        postDetail: _objectSpread(_objectSpread({}, state.postDetail), {}, {
          loading: false,
          error: true
        })
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CART"].FETCH_CART_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");

const initialState = [];
function compareReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE"].REMOVE_FROM_COMPARE:
      const compareItem = state.find(item => item.id === action.payload.productId);
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [...state.slice(0, compareItemIndex), ...state.slice(compareItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");
/* harmony import */ var _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopFilterReducer */ "./src/redux/reducers/shopFilterReducer.js");
/* harmony import */ var _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blogFilterReducer */ "./src/redux/reducers/blogFilterReducer.js");
/* harmony import */ var _blogReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogReducer */ "./src/redux/reducers/blogReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogFilterReducer: _blogFilterReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  blogReducer: _blogReducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  shopFilterReducer: _shopFilterReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  compareReducer: _compareReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopFilterReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/shopFilterReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopFilterReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: ""
};
function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: ""
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sort
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SHOW:
      return _objectSpread(_objectSpread({}, state), {}, {
        show: action.show
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_COLOR:
      return _objectSpread(_objectSpread({}, state), {}, {
        color: action.color
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_SIZE:
      return _objectSpread(_objectSpread({}, state), {}, {
        size: action.size
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP_FILTER"].SET_TAG:
      return _objectSpread(_objectSpread({}, state), {}, {
        tag: action.tag
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shopReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  products: {
    loading: true,
    data: [],
    error: false,
    count: 0
  },
  saleProducts: {
    loading: true,
    data: [],
    error: false
  },
  featuredProducts: {
    loading: true,
    data: [],
    error: false
  },
  bestSellerProducts: {
    loading: true,
    data: [],
    error: false
  },
  daleProducts: {
    loading: true,
    data: [],
    error: false
  },
  productDetail: {
    loading: true,
    data: [],
    error: false
  },
  searchedProducts: {
    loading: true,
    data: [],
    error: false
  }
};
function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: {
          loading: true,
          data: [],
          error: false,
          count: 0
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        products: _objectSpread(_objectSpread({}, state.products), {}, {
          loading: false,
          error: true
        })
      });
    //Sale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        saleProducts: _objectSpread(_objectSpread({}, state.saleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Featured products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        featuredProducts: _objectSpread(_objectSpread({}, state.featuredProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Best seller products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSellerProducts: _objectSpread(_objectSpread({}, state.bestSellerProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Dale products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        daleProducts: _objectSpread(_objectSpread({}, state.daleProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Product detail

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.payload.data
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          error: true
        })
      });
    //Searched products

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: {
          loading: true,
          data: [],
          error: false
        }
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SHOP"].FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        searchedProducts: _objectSpread(_objectSpread({}, state.searchedProducts), {}, {
          loading: false,
          error: true
        })
      });
    //Defaul case

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WISHLISTReducer; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ "./src/redux/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: true,
  data: [],
  error: false
};
function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false
      };

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        data: action.payload.data
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");




const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpcy93aXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2F4aW9zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RlZmluZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3dpdGhSZWR1eFN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0ZldGNoSW5pdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYmxvZ0ZpbHRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jsb2dSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY29tcGFyZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9zaG9wRmlsdGVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvc2hvcFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3dpc2hsaXN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInVybCIsImZldGNoQ2FydERhdGEiLCJjYXJ0SWQiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJheGlvc1NlcnZpY2UiLCJnZXQiLCJmZXRjaFByb2R1Y3RJZENhcnREYXRhIiwicGlkIiwicmVuZGVyUGFyYW0iLCJhZGRDYXJ0RGF0YSIsImRhdGEiLCJwb3N0IiwicmVtb3ZlQ2FydERhdGEiLCJkZWxldGUiLCJ1cGRhdGVDYXJ0RGF0YSIsInBhdGNoIiwiZmV0Y2hXaXNobGlzdERhdGEiLCJmZXRjaFByb2R1Y3RJZFdpc2hsaXN0RGF0YSIsImFkZFdpc2hsaXN0RGF0YSIsInJlbW92ZVdpc2hsaXN0RGF0YSIsIkF4aW9zU2VydmljZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiaGFuZGxlU3VjY2VzcyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwiYm9keSIsImZvcm1hdEN1cnJlbmN5IiwicHJpY2UiLCJsb2NhbGVzIiwiY3VycmVuY3kiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJmb3JtYXQiLCJwYXJhbU5hbWUiLCJwYXJhbVZhbHVlIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJpbnB1dEZvcm1hdCIsIm91dHB1dEZvcm1hdCIsIm1vbWVudCIsInJlbW92ZURhc2giLCJzdHIiLCJyZXBsYWNlIiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJ3aXRoUmVkdXhTdG9yIiwiQXBwIiwiQXBwV2l0aFJlZHV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwicmVkdXhTdG9yZSIsImN0eCIsImFwcFByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJnZXRTdGF0ZSIsInByb3BzIiwicmVuZGVyIiwiRmV0Y2hJbml0RGF0YSIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoQ2FydFJlcXVlc3QiLCJmZXRjaFdpc2hMaXN0UmVxdWVzdCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eFN0b3JlIiwiU0hPUCIsIkZFVENIX1BST0RVQ1RTIiwiRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9TQUxFX1BST0RVQ1RTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFMiLCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTCIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTIiwiRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX0ZBSUwiLCJGRVRDSF9EQUxFX1BST0RVQ1RTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTIiwiRkVUQ0hfREFMRV9QUk9EVUNUU19GQUlMIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUwiLCJGRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTCIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTIiwiRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUyIsIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUwiLCJCTE9HIiwiRkVUQ0hfUE9TVFMiLCJGRVRDSF9QT1NUU19TVUNDRVNTIiwiRkVUQ0hfUE9TVFNfRkFJTCIsIkZFVENIX1BPU1RfREVUQUlMIiwiRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUyIsIkZFVENIX1BPU1RfREVUQUlMX0ZBSUwiLCJGRVRDSF9SRUNFTlRfUE9TVFMiLCJGRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyIsIkZFVENIX1JFQ0VOVF9QT1NUU19GQUlMIiwiU0hPUF9GSUxURVIiLCJSRVNFVF9GSUxURVJTIiwiU0VUX1NPUlQiLCJTRVRfU0hPVyIsIlNFVF9WSUVXIiwiU0VUX0NBVEVHT1JZIiwiU0VUX0NPTE9SIiwiU0VUX1NJWkUiLCJTRVRfVEFHIiwiQ0FSVCIsIkZFVENIX0NBUlQiLCJGRVRDSF9DQVJUX1NVQ0NFU1MiLCJGRVRDSF9DQVJUX0ZBSUwiLCJXSVNITElTVCIsIkZFVENIX1dJU0hMSVNUIiwiRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUyIsIkZFVENIX1dJU0hMSVNUX0ZBSUwiLCJDT01QQVJFIiwiQUREX1RPX0NPTVBBUkUiLCJSRU1PVkVfRlJPTV9DT01QQVJFIiwiQkxPR19GSUxURVIiLCJmZXRjaENhcnQiLCJ0eXBlIiwiZmV0Y2hDYXJ0U3VjY2VzcyIsInBheWxvYWQiLCJmZXRjaENhcnRGYWlsIiwiZXJyIiwiY2FydEFwaXMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJmZXRjaFdpc2hMaXN0IiwiZmV0Y2hXaXNoTGlzdFN1Y2Nlc3MiLCJmZXRjaFdpc2hMaXN0RmFpbCIsIndpc2hsaXN0QXBpcyIsImNhdGVnb3J5IiwidGFnIiwiYmxvZ0ZpbHRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFsbFBvc3RzIiwibG9hZGluZyIsImNvdW50IiwicmVjZW50UG9zdHMiLCJwb3N0RGV0YWlsIiwiYmxvZ1JlZHVjZXIiLCJwb3N0Q291bnQiLCJjYXJ0UmVkdWNlciIsImNvbXBhcmVSZWR1Y2VyIiwiaW5jbHVkZXMiLCJsZWd0aCIsInNsaWNlIiwiY29tcGFyZUl0ZW0iLCJmaW5kIiwiaXRlbSIsImlkIiwicHJvZHVjdElkIiwiY29tcGFyZUl0ZW1JbmRleCIsImluZGV4T2YiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNob3BSZWR1Y2VyIiwic2hvcEZpbHRlclJlZHVjZXIiLCJ3aXNobGlzdFJlZHVjZXIiLCJzb3J0Iiwic2hvdyIsInZpZXciLCJjb2xvciIsInNpemUiLCJwcm9kdWN0cyIsInNhbGVQcm9kdWN0cyIsImZlYXR1cmVkUHJvZHVjdHMiLCJiZXN0U2VsbGVyUHJvZHVjdHMiLCJkYWxlUHJvZHVjdHMiLCJwcm9kdWN0RGV0YWlsIiwic2VhcmNoZWRQcm9kdWN0cyIsInByb2R1Y3RDb3VudCIsIldJU0hMSVNUUmVkdWNlciIsImNyZWF0ZWRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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NkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FGVyxDQUFoQztBQUtPLE1BQU0zSSxlQUFlLEdBQUcsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLEtBQXVCO0FBQ3BELFNBQU93SSxZQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGF4aW9zU2VydmljZSBmcm9tIFwiLi4vY29tbW9uL2F4aW9zU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSBcIi4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHJlbmRlclBhcmFtIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsc1wiO1xyXG5cclxuY29uc3QgdXJsID0gXCIvY2FydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydERhdGEgPSAoY2FydElkKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gY2FydElkID8gQVBJX1VSTCArIHVybCArIGAvJHtjYXJ0SWR9YCA6IEFQSV9VUkwgKyB1cmw7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkQ2FydERhdGEgPSAocGlkKSA9PiB7XHJcbiAgbGV0IGVuZHBvaW50ID0gQVBJX1VSTCArIHVybCArIFwiP1wiICsgcmVuZGVyUGFyYW0oXCJwcm9kdWN0SWRcIiwgcGlkKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ2FydERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5wb3N0KGVuZHBvaW50LCBkYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0RGF0YSA9IChjYXJ0SWQpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UuZGVsZXRlKGVuZHBvaW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJ0RGF0YSA9IChjYXJ0SWQsIGRhdGEpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsICsgYC8ke2NhcnRJZH1gO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucGF0Y2goZW5kcG9pbnQsIGRhdGEpO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3NTZXJ2aWNlIGZyb20gXCIuLi9jb21tb24vYXhpb3NTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgcmVuZGVyUGFyYW0gfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XHJcblxyXG5jb25zdCB1cmwgPSBcIi93aXNobGlzdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoV2lzaGxpc3REYXRhID0gKCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmw7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5nZXQoZW5kcG9pbnQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdElkV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBcIj9cIiArIHJlbmRlclBhcmFtKFwiaWRcIiwgcGlkKTtcclxuICByZXR1cm4gYXhpb3NTZXJ2aWNlLmdldChlbmRwb2ludCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkV2lzaGxpc3REYXRhID0gKGRhdGEpID0+IHtcclxuICBsZXQgZW5kcG9pbnQgPSBBUElfVVJMICsgdXJsO1xyXG4gIHJldHVybiBheGlvc1NlcnZpY2UucG9zdChlbmRwb2ludCwgZGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlV2lzaGxpc3REYXRhID0gKHBpZCkgPT4ge1xyXG4gIGxldCBlbmRwb2ludCA9IEFQSV9VUkwgKyB1cmwgKyBgLyR7cGlkfWA7XHJcbiAgcmV0dXJuIGF4aW9zU2VydmljZS5kZWxldGUoZW5kcG9pbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBBeGlvc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoKTtcclxuICAgIGluc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UodGhpcy5oYW5kbGVTdWNjZXNzLCB0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0KHVybCk7XHJcbiAgfVxyXG5cclxuICBwb3N0KHVybCwgYm9keSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucG9zdCh1cmwsIGJvZHkpO1xyXG4gIH1cclxuXHJcbiAgcGF0Y2godXJsLCBib2R5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wYXRjaCh1cmwsIGJvZHkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHVybCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZGVsZXRlKHVybCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXhpb3NTZXJ2aWNlKCk7XHJcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwczovL29nYW1pLWFwaS5oZXJva3VhcHAuY29tXCI7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHByaWNlLCBsb2NhbGVzID0gXCJ1cy1VU1wiLCBjdXJyZW5jeSA9IFwiVVNEXCIpID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcclxuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXHJcbiAgfSkuZm9ybWF0KHByaWNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJQYXJhbSA9IChwYXJhbU5hbWUsIHBhcmFtVmFsdWUpID0+IHtcclxuICBpZiAocGFyYW1WYWx1ZSAmJiBwYXJhbVZhbHVlICE9PSBcIlwiICYmIHBhcmFtVmFsdWUgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBgJiR7cGFyYW1OYW1lfT0ke3BhcmFtVmFsdWV9YDtcclxuICB9XHJcbiAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChcclxuICBkYXRlLFxyXG4gIGlucHV0Rm9ybWF0ID0gXCJZWVlZLU1NLUREXCIsXHJcbiAgb3V0cHV0Rm9ybWF0ID0gXCJNTU0gREQsIFlZWVlcIlxyXG4pID0+IHtcclxuICByZXR1cm4gbW9tZW50KGRhdGUsIGlucHV0Rm9ybWF0KS5mb3JtYXQob3V0cHV0Rm9ybWF0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVEYXNoID0gKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCBcIiBcIik7XHJcbn07XHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVTdG9yZSB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xyXG5jb25zdCBfX05FWFRfUkVEVVhfU1RPUkVfXyA9IFwiX19ORVhUX1JFRFVYX1NUT1JFX19cIjtcclxuXHJcbmZ1bmN0aW9uIGdldE9yQ3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcclxuICBpZiAoaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBzdG9yZSBpZiB1bmF2YWlsYWJsZSBvbiB0aGUgY2xpZW50IGFuZCBzZXQgaXQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcclxuICAgIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10gPSBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX107XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSZWR1eFN0b3IoQXBwKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEFwcFdpdGhSZWR1eCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcclxuICAgICAgLy8gR2V0IG9yIENyZWF0ZSB0aGUgc3RvcmUgd2l0aCBgdW5kZWZpbmVkYCBhcyBpbml0aWFsU3RhdGVcclxuICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIHNldCBhIGN1c3RvbSBkZWZhdWx0IGluaXRpYWxTdGF0ZVxyXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xyXG5cclxuICAgICAgLy8gUHJvdmlkZSB0aGUgc3RvcmUgdG8gZ2V0SW5pdGlhbFByb3BzIG9mIHBhZ2VzXHJcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xyXG5cclxuICAgICAgbGV0IGFwcFByb3BzID0ge307XHJcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFwcFByb3BzLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiByZWR1eFN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLnJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKHByb3BzLmluaXRpYWxSZWR1eFN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8QXBwIHsuLi50aGlzLnByb3BzfSByZWR1eFN0b3JlPXt0aGlzLnJlZHV4U3RvcmV9IC8+O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hDYXJ0UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGZldGNoV2lzaExpc3RSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaEluaXREYXRhKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0UmVxdWVzdCgpKTtcclxuICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RSZXF1ZXN0KCkpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hbnRkLmxlc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XHJcbi8vIGltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0xvYWRpbmdcIjtcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gXCIuLi9jb21tb24vd2l0aFJlZHV4U3RvcmVcIjtcclxuaW1wb3J0IEZldGNoSW5pdERhdGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvb3RoZXIvRmV0Y2hJbml0RGF0YVwiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICA8RmV0Y2hJbml0RGF0YT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvRmV0Y2hJbml0RGF0YT5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKEFwcCk7XHJcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIEZFVENIX1BST0RVQ1RTOiBcIkZFVENIX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUUzogXCJGRVRDSF9TQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX1NBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1NBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9GRUFUVVJFRF9QUk9EVUNUUzogXCJGRVRDSF9GRUFUVVJFRF9QUk9EVUNUU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6IFwiRkVUQ0hfRkVBVFVSRURfUFJPRFVDVFNfRkFJTFwiLFxyXG4gIEZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTOiBcIkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQkVTVF9TRUxMRVJfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUUzogXCJGRVRDSF9EQUxFX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfREFMRV9QUk9EVUNUU19TVUNDRVNTOiBcIkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9EQUxFX1BST0RVQ1RTX0ZBSUxcIixcclxuICBGRVRDSF9QUk9EVUNUX0RFVEFJTDogXCJGRVRDSF9QUk9EVUNUX0RFVEFJTFwiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1M6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BST0RVQ1RfREVUQUlMX0ZBSUw6IFwiRkVUQ0hfUFJPRFVDVF9ERVRBSUxfRkFJTFwiLFxyXG4gIEZFVENIX1NFQVJDSEVEX1BST0RVQ1RTOiBcIkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfRkFJTDogXCJGRVRDSF9TRUFSQ0hFRF9QUk9EVUNUU19GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQkxPRyA9IHtcclxuICBGRVRDSF9QT1NUUzogXCJGRVRDSF9QT1NUU1wiLFxyXG4gIEZFVENIX1BPU1RTX1NVQ0NFU1M6IFwiRkVUQ0hfUE9TVFNfU1VDQ0VTU1wiLFxyXG4gIEZFVENIX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUE9TVFNfRkFJTFwiLFxyXG4gIEZFVENIX1BPU1RfREVUQUlMOiBcIkZFVENIX1BPU1RfREVUQUlMXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfU1VDQ0VTUzogXCJGRVRDSF9QT1NUX0RFVEFJTF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUE9TVF9ERVRBSUxfRkFJTDogXCJGRVRDSF9QT1NUX0RFVEFJTF9GQUlMXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU1wiLFxyXG4gIEZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTOiBcIkZFVENIX1JFQ0VOVF9QT1NUU19TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6IFwiRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUxcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QX0ZJTFRFUiA9IHtcclxuICBSRVNFVF9GSUxURVJTOiBcIlJFU0VUX0ZJTFRFUlNcIixcclxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxyXG4gIFNFVF9TSE9XOiBcIlNFVF9TSE9XXCIsXHJcbiAgU0VUX1ZJRVc6IFwiU0VUX1ZJRVdcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX0NPTE9SOiBcIlNFVF9DT0xPUlwiLFxyXG4gIFNFVF9TSVpFOiBcIlNFVF9TSVpFXCIsXHJcbiAgU0VUX1RBRzogXCJTRVRfVEFHXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcclxuICBGRVRDSF9DQVJUOiBcIkZFVENIX0NBUlRcIixcclxuICBGRVRDSF9DQVJUX1NVQ0NFU1M6IFwiRkVUQ0hfQ0FSVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfQ0FSVF9GQUlMOiBcIkZFVENIX0NBUlRfRkFJTFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJU0hMSVNUID0ge1xyXG4gIEZFVENIX1dJU0hMSVNUOiBcIkZFVENIX1dJU0hMSVNUXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfU1VDQ0VTUzogXCJGRVRDSF9XSVNITElTVF9TVUNDRVNTXCIsXHJcbiAgRkVUQ0hfV0lTSExJU1RfRkFJTDogXCJGRVRDSF9XSVNITElTVF9GQUlMXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUEFSRSA9IHtcclxuICBBRERfVE9fQ09NUEFSRTogXCJBRERfVE9fQ09NUEFSRVwiLFxyXG4gIFJFTU9WRV9GUk9NX0NPTVBBUkU6IFwiUkVNT1ZFX0ZST01fQ09NUEFSRVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJMT0dfRklMVEVSID0ge1xyXG4gIFJFU0VUX0ZJTFRFUlM6IFwiUkVTRVRfRklMVEVSU1wiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfVEFHOiBcIlNFVF9UQUdcIixcclxufTtcclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgY2FydEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvY2FydFwiO1xyXG5cclxuLy9HZXQgY2FydCBkYXRhXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRhdGEsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDYXJ0RmFpbCA9IChlcnIpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5GRVRDSF9DQVJUX0ZBSUwsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZXJyLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2FydFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hDYXJ0KCkpO1xyXG4gICAgY2FydEFwaXNcclxuICAgICAgLmZldGNoQ2FydERhdGEoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hDYXJ0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2FydEZhaWwoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IFdJU0hMSVNUIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB3aXNobGlzdEFwaXMgZnJvbSBcIi4uLy4uL2FwaXMvd2lzaGxpc3RcIjtcclxuXHJcbi8vR2V0IGNhcnQgZGF0YVxyXG5jb25zdCBmZXRjaFdpc2hMaXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVCxcclxufSk7XHJcblxyXG5jb25zdCBmZXRjaFdpc2hMaXN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGF0YSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGZldGNoV2lzaExpc3RGYWlsID0gKGVycikgPT4gKHtcclxuICB0eXBlOiBXSVNITElTVC5GRVRDSF9XSVNITElTVF9GQUlMLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGVycixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFdpc2hMaXN0UmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0KCkpO1xyXG4gICAgd2lzaGxpc3RBcGlzXHJcbiAgICAgIC5mZXRjaFdpc2hsaXN0RGF0YSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFdpc2hMaXN0U3VjY2VzcyhyZXMuZGF0YSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoV2lzaExpc3RGYWlsKGVycikpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCTE9HX0ZJTFRFUiB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhdGVnb3J5OiBcIlwiLFxyXG4gIHRhZzogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dGaWx0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEJMT0dfRklMVEVSLlJFU0VUX0ZJTFRFUlM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdGFnOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HX0ZJTFRFUi5TRVRfQ0FURUdPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPR19GSUxURVIuU0VUX1RBRzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0YWc6IGFjdGlvbi50YWcsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJMT0cgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBhbGxQb3N0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlLCBjb3VudDogMCB9LFxyXG4gIHJlY2VudFBvc3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBwb3N0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2dSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvL0FsbCBwb3N0c1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICAgIGNvdW50OiBhY3Rpb24ucGF5bG9hZC5wb3N0Q291bnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9QT1NUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFsbFBvc3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5hbGxQb3N0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vUmVjZW50IHBvc3RzXHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHJlY2VudFBvc3RzOiB7XHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQkxPRy5GRVRDSF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZWNlbnRQb3N0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucmVjZW50UG9zdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucG9zdENvdW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEJMT0cuRkVUQ0hfUkVDRU5UX1BPU1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcmVjZW50UG9zdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnJlY2VudFBvc3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9Qb3N0IGRldGFpbFxyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBvc3REZXRhaWw6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBCTE9HLkZFVENIX1BPU1RfREVUQUlMX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcG9zdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucG9zdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBDQVJULkZFVENIX0NBUlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIENBUlQuRkVUQ0hfQ0FSVF9GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDT01QQVJFIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENPTVBBUkUuQUREX1RPX0NPTVBBUkU6XHJcbiAgICAgIGlmICghc3RhdGUuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuZGF0YSkpIHtcclxuICAgICAgICBpZiAoc3RhdGUubGVndGggPD0gMykge1xyXG4gICAgICAgICAgcmV0dXJuIFthY3Rpb24ucGF5bG9hZC5kYXRhLCAuLi5zdGF0ZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBbYWN0aW9uLnBheWxvYWQuZGF0YSwgLi4uc3RhdGUuc2xpY2UoMCwgMildO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBDT01QQVJFLlJFTU9WRV9GUk9NX0NPTVBBUkU6XHJcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gc3RhdGUuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQucHJvZHVjdElkXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNvbXBhcmVJdGVtSW5kZXggPSBjb21wYXJlSXRlbSAmJiBzdGF0ZS5pbmRleE9mKGNvbXBhcmVJdGVtKTtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBjb21wYXJlSXRlbUluZGV4KSxcclxuICAgICAgICAuLi5zdGF0ZS5zbGljZShjb21wYXJlSXRlbUluZGV4ICsgMSksXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRSZWR1Y2VyXCI7XHJcbmltcG9ydCBjb21wYXJlUmVkdWNlciBmcm9tIFwiLi9jb21wYXJlUmVkdWNlclwiO1xyXG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gXCIuL3dpc2hsaXN0UmVkdWNlclwiO1xyXG5pbXBvcnQgc2hvcFJlZHVjZXIgZnJvbSBcIi4vc2hvcFJlZHVjZXJcIjtcclxuaW1wb3J0IHNob3BGaWx0ZXJSZWR1Y2VyIGZyb20gXCIuL3Nob3BGaWx0ZXJSZWR1Y2VyXCI7XHJcbmltcG9ydCBibG9nRmlsdGVyUmVkdWNlciBmcm9tIFwiLi9ibG9nRmlsdGVyUmVkdWNlclwiO1xyXG5pbXBvcnQgYmxvZ1JlZHVjZXIgZnJvbSBcIi4vYmxvZ1JlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBibG9nRmlsdGVyUmVkdWNlcixcclxuICBibG9nUmVkdWNlcixcclxuICBzaG9wUmVkdWNlcixcclxuICBzaG9wRmlsdGVyUmVkdWNlcixcclxuICBjb21wYXJlUmVkdWNlcixcclxuICBjYXJ0UmVkdWNlcixcclxuICB3aXNobGlzdFJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IFNIT1BfRklMVEVSIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc29ydDoge30sXHJcbiAgc2hvdzogXCIxMFwiLFxyXG4gIHZpZXc6IFwiZ3JpZFwiLFxyXG4gIGNhdGVnb3J5OiBcIlwiLFxyXG4gIGNvbG9yOiBcIlwiLFxyXG4gIHNpemU6IFwiXCIsXHJcbiAgdGFnOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcEZpbHRlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuUkVTRVRfRklMVEVSUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzb3J0OiB7fSxcclxuICAgICAgICBzaG93OiBcIjEwXCIsXHJcbiAgICAgICAgdmlldzogXCJncmlkXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY29sb3I6IFwiXCIsXHJcbiAgICAgICAgc2l6ZTogXCJcIixcclxuICAgICAgICB0YWc6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9TT1JUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNvcnQ6IGFjdGlvbi5zb3J0LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfU0hPVzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaG93OiBhY3Rpb24uc2hvdyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1ZJRVc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdmlldzogYWN0aW9uLnZpZXcsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9DQVRFR09SWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXRlZ29yeTogYWN0aW9uLmNhdGVnb3J5LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QX0ZJTFRFUi5TRVRfQ09MT1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY29sb3I6IGFjdGlvbi5jb2xvcixcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUF9GSUxURVIuU0VUX1NJWkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2l6ZTogYWN0aW9uLnNpemUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1BfRklMVEVSLlNFVF9UQUc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGFnOiBhY3Rpb24udGFnLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSwgY291bnQ6IDAgfSxcclxuICBzYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gIGJlc3RTZWxsZXJQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgZGFsZVByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICBzZWFyY2hlZFByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAvL0FsbCBwcm9kdWN0c1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UsIGNvdW50OiAwIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgICBjb3VudDogYWN0aW9uLnBheWxvYWQucHJvZHVjdENvdW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NhbGUgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9TQUxFX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0FMRV9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNhbGVQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2FsZVByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9GZWF0dXJlZCBwcm9kdWN0c1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0ZFQVRVUkVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vQmVzdCBzZWxsZXIgcHJvZHVjdHNcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBiZXN0U2VsbGVyUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0JFU1RfU0VMTEVSX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYmVzdFNlbGxlclByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5iZXN0U2VsbGVyUHJvZHVjdHMsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9CRVNUX1NFTExFUl9QUk9EVUNUU19GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJlc3RTZWxsZXJQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuYmVzdFNlbGxlclByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgLy9EYWxlIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfREFMRV9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX0RBTEVfUFJPRFVDVFNfRkFJTDpcclxuICAgICAgLy8gbGV0IHsgZXJyIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYWxlUHJvZHVjdHM6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmRhbGVQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vUHJvZHVjdCBkZXRhaWxcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7IGxvYWRpbmc6IHRydWUsIGRhdGE6IFtdLCBlcnJvcjogZmFsc2UgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5GRVRDSF9QUk9EVUNUX0RFVEFJTF9GQUlMOlxyXG4gICAgICAvLyBsZXQgeyBlcnIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAvL1NlYXJjaGVkIHByb2R1Y3RzXHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czogeyBsb2FkaW5nOiB0cnVlLCBkYXRhOiBbXSwgZXJyb3I6IGZhbHNlIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNIT1AuRkVUQ0hfU0VBUkNIRURfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWFyY2hlZFByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5zZWFyY2hlZFByb2R1Y3RzLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5kYXRhLFxyXG4gICAgICAgICAgY291bnQ6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RDb3VudCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTSE9QLkZFVENIX1NFQVJDSEVEX1BST0RVQ1RTX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoZWRQcm9kdWN0czoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2VhcmNoZWRQcm9kdWN0cyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIC8vRGVmYXVsIGNhc2VcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgbG9hZGluZzogdHJ1ZSwgZGF0YTogW10sIGVycm9yOiBmYWxzZSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV0lTSExJU1RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXSVNITElTVC5GRVRDSF9XSVNITElTVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFdJU0hMSVNULkZFVENIX1dJU0hMSVNUX0ZBSUw6XHJcbiAgICAgIC8vIGxldCB7IGVyciB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnMvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZWRTdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IHtcclxuICByZXR1cm4gY3JlYXRlZFN0b3JlO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=