webpackHotUpdate_N_E("pages/shop/shop-3-column",{

/***/ "./src/components/header/elements/Navigator.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/Navigator.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/navigator.json */ "./src/data/navigator.json");
var _data_navigator_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/navigator.json */ "./src/data/navigator.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Swann\\WebstormProjects\\next_ecommerce\\src\\components\\header\\elements\\Navigator.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Navigator() {
  _s();

  var _this = this;

  var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("mail"),
      current = _useState[0],
      setCurrent = _useState[1];

  var handleClick = function handleClick(e) {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return __jsx("ul", {
    className: "navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.HOME.title))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.title)), __jsx("ul", {
    className: "navigation-item__submenu -wide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Layout shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.layout.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, item.title)));
  })), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Detail shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.detail.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, item.title)));
  })), __jsx("div", {
    className: "navigation-item__submenu-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Pages shop"), _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.SHOP.subMenu.pages.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, item.title)));
  })))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.BLOG.subMenu.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, item.title)));
  }))), __jsx("li", {
    className: "navigation-item -toggleable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.title)), __jsx("ul", {
    className: "navigation-item__submenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.PAGES.subMenu.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "" + item.href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, item.title)));
  }))), __jsx("li", {
    className: "navigation-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.href,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navigation-item__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, _data_navigator_json__WEBPACK_IMPORTED_MODULE_2__.ABOUT.title))));
}

_s(Navigator, "ZWqTbgp2XvJ+vkPcRX/iShVbotc=");

_c = Navigator;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Navigator));

var _c, _c2;

$RefreshReg$(_c, "Navigator");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL05hdmlnYXRvci5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0b3IiLCJTdWJNZW51IiwiTWVudSIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJoYW5kbGVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwia2V5IiwibmF2aWdhdG9yRGF0YSIsIkhPTUUiLCJ0aXRsZSIsInByb2Nlc3MiLCJTSE9QIiwiaHJlZiIsInN1Yk1lbnUiLCJsYXlvdXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkZXRhaWwiLCJwYWdlcyIsIkJMT0ciLCJQQUdFUyIsIkFCT1VUIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLE1BQ1hDLE9BRFcsR0FDQ0MseUNBREQsQ0FDWEQsT0FEVzs7QUFBQSxrQkFFV0Usc0RBQVEsQ0FBQyxNQUFELENBRm5CO0FBQUEsTUFFWkMsT0FGWTtBQUFBLE1BRUhDLFVBRkc7O0FBR25CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN6QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsQ0FBdEI7QUFDQUYsY0FBVSxDQUFDRSxDQUFDLENBQUNHLEdBQUgsQ0FBVjtBQUNELEdBSEQ7O0FBSUEsU0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFB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cC0zLWNvbHVtbi5hODQ2M2VlMjc5ZmFmMTY1ZTAyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IG5hdmlnYXRvckRhdGEgZnJvbSBcIi4uLy4uLy4uL2RhdGEvbmF2aWdhdG9yLmpzb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdG9yKCkge1xyXG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIm1haWxcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjbGljayBcIiwgZSk7XHJcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3RpdGxlXCI+e25hdmlnYXRvckRhdGEuSE9NRS50aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuU0hPUC5ocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5TSE9QLnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudSAtd2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGg1PkxheW91dCBzaG9wPC9oNT5cclxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmxheW91dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGg1PkRldGFpbCBzaG9wPC9oNT5cclxuICAgICAgICAgICAge25hdmlnYXRvckRhdGEuU0hPUC5zdWJNZW51LmRldGFpbC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnUtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGg1PlBhZ2VzIHNob3A8L2g1PlxyXG4gICAgICAgICAgICB7bmF2aWdhdG9yRGF0YS5TSE9QLnN1Yk1lbnUucGFnZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtIC10b2dnbGVhYmxlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIG5hdmlnYXRvckRhdGEuQkxPRy5ocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5CTE9HLnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fc3VibWVudVwiPlxyXG4gICAgICAgICAge25hdmlnYXRvckRhdGEuQkxPRy5zdWJNZW51Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW0gLXRvZ2dsZWFibGVcIj5cclxuICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgbmF2aWdhdG9yRGF0YS5QQUdFUy5ocmVmfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbV9fdGl0bGVcIj57bmF2aWdhdG9yRGF0YS5QQUdFUy50aXRsZX08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWl0ZW1fX3N1Ym1lbnVcIj5cclxuICAgICAgICAgIHtuYXZpZ2F0b3JEYXRhLlBBR0VTLnN1Yk1lbnUubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGl0ZW0uaHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBuYXZpZ2F0b3JEYXRhLkFCT1VULmhyZWZ9PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1pdGVtX190aXRsZVwiPntuYXZpZ2F0b3JEYXRhLkFCT1VULnRpdGxlfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTmF2aWdhdG9yKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==