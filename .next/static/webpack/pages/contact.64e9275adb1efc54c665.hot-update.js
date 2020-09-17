webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\components\\Header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/shopping-cart.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
    color: "dark",
    light: true,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    style: {
      cursor: 'pointer',
      color: 'light'
    },
    className: "font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/shopping-cart.png"),
    alt: "shopping cart",
    style: {
      width: '30px',
      height: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "ml-1 mr-1",
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Signin"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "ml-1 mr-1",
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Signup")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user/update",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "ml-1 mr-1",
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 10
    }
  }, "Update Profile"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "ml-1 mr-1",
    style: {
      cursor: 'pointer'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 10
    }
  }, "Contact"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "ml-1 mr-1",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["signout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/signin");
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Signout"))))));
};

_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJET01BSU4iLCJjdXJzb3IiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiQVBQX05BTUUiLCJpc0F1dGgiLCJzaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQUMsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNDLEtBQVYsRUFBSjtBQUFBLENBQS9COztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUErQixVQUFBSCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0csSUFBVixFQUFKO0FBQUEsQ0FBbEM7O0FBQ0FOLGtEQUFNLENBQUNPLGtCQUFQLEdBQTRCLFVBQUFMLEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDRyxJQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2JDLE1BRGE7QUFBQSxNQUNMQyxTQURLOztBQUdwQixNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCRCxhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0EsR0FGRDs7QUFJQSxTQUNDLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLE9BQUcsRUFBQyxNQURMO0FBRUMsUUFBSSxZQUFLRyw4Q0FBTCxxQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQU9DLE1BQUMsaURBQUQ7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLFVBQU0sRUFBQyxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQ0MsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxTQUFWO0FBQXFCQyxXQUFLLEVBQUU7QUFBNUIsS0FEUjtBQUVDLGFBQVMsRUFBQyxrQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxZQUFLRiw4Q0FBTCxxQ0FESjtBQUVDLE9BQUcsRUFBQyxlQUZMO0FBR0MsU0FBSyxFQUFFO0FBQUVHLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFNQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9DLGdEQUFQLENBTkQsQ0FKRCxDQURELENBREQsRUFnQkMsTUFBQyx3REFBRDtBQUFlLFdBQU8sRUFBRU4sTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRCxFQWlCQyxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFsQjtBQUEwQixVQUFNLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsVUFBTSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsQ0FBQ1MsNERBQU0sRUFBUCxJQUNBLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUU7QUFBVixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQURELENBREQsRUFXQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQURELENBWEQsQ0FGRixFQTBCRUssNERBQU0sTUFDTixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUU7QUFBVixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsQ0FERCxDQTNCRixFQXVDRUssNERBQU0sTUFDTixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUU7QUFBVixLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQURELENBeENGLEVBb0RFSyw0REFBTSxNQUNOLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsV0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFTCxZQUFNLEVBQUU7QUFBVixLQUZSO0FBR0MsV0FBTyxFQUFFO0FBQUEsYUFDUk0sNkRBQU8sQ0FBQztBQUFBLGVBQU1wQixrREFBTSxDQUFDcUIsT0FBUCxXQUFOO0FBQUEsT0FBRCxDQURDO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FyREYsQ0FERCxDQWpCRCxDQVBELENBREQ7QUFnR0EsQ0F2R0Q7O0dBQU1iLE07O0tBQUFBLE07QUF5R1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuNjRlOTI3NWFkYjFlZmM1NGM2NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBBUFBfTkFNRSwgRE9NQUlOIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgc2lnbm91dCwgaXNBdXRoIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuXHRcdHNldElzT3BlbighaXNPcGVuKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8bGlua1xyXG5cdFx0XHRcdFx0cmVsPSdpY29uJ1xyXG5cdFx0XHRcdFx0aHJlZj17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nob3BwaW5nLWNhcnQucG5nYH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxOYXZiYXIgY29sb3I9J2RhcmsnIGxpZ2h0IGV4cGFuZD0nbWQnPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAnbGlnaHQnIH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCdcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zaG9wcGluZy1jYXJ0LnBuZ2B9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9J3Nob3BwaW5nIGNhcnQnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e0FQUF9OQU1FfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuXHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPSdtbC1hdXRvJyBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdHshaXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbmluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtbC0xIG1yLTEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpZ25pblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21sLTEgbXItMSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbnVwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdXNlci91cGRhdGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbWwtMSBtci0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVcGRhdGUgUHJvZmlsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21sLTEgbXItMSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbWwtMSBtci0xJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoYC9zaWduaW5gKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTaWdub3V0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=