webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/user */ "./actions/user.js");
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      token = _useState3[0],
      setToken = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    init();
  }, []);

  var init = function init() {
    if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])()) {
      var tempToken = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
      Object(_actions_user__WEBPACK_IMPORTED_MODULE_10__["getSettings"])(tempToken).then(function (data) {
        if (data.error) {
          console.log(data.error);
        }

        setTheme(data.theme);
        document.documentElement.setAttribute('data-theme', data.theme);
      });
      setToken(tempToken);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  };

  var toggle = function toggle() {
    setIsOpen(!isOpen);
  };

  var toggleTheme = function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark' || !currentTheme) {
      document.documentElement.setAttribute('data-theme', 'light');
      Object(_actions_user__WEBPACK_IMPORTED_MODULE_10__["updateSettings"])(token, {
        theme: 'light'
      });
      setTheme('light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      Object(_actions_user__WEBPACK_IMPORTED_MODULE_10__["updateSettings"])(token, {
        theme: 'dark'
      });
      setTheme('dark');
    }
  };

  var textColor = theme === 'dark' ? 'white' : 'black';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/shopping-cart.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
    color: theme,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "font-weight-bold navbarLink",
    style: {
      color: textColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }
  }, _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "ml-auto placeCenter",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Signin"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Signup")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx("div", {
    className: "dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "dropbtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "dropdown-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: toggleTheme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 10
    }
  }, "Theme: ", theme))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user/update",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 10
    }
  }, "Update Profile"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 10
    }
  }, "Contact"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor
    },
    onClick: function onClick() {
      return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["signout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace("/signin");
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, "Signout"))))));
};

_s(Header, "BzI13zTdF+Rp+zjy9sPTLQB1Quc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImluaXQiLCJpc0F1dGgiLCJ0ZW1wVG9rZW4iLCJnZXRDb29raWUiLCJnZXRTZXR0aW5ncyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJ0b2dnbGVUaGVtZSIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsInVwZGF0ZVNldHRpbmdzIiwidGV4dENvbG9yIiwiRE9NQUlOIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIkFQUF9OQU1FIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUFDLEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDQyxLQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQUgsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNHLElBQVYsRUFBSjtBQUFBLENBQWxDOztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFBTCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0cs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QUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLFNBQUssRUFBRTtBQUFDbUIsV0FBSyxFQUFFRjtBQUFSLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQsQ0FERCxDQWpDRixFQTBDRWpCLDREQUFNLE1BQ04sTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQWdDLFNBQUssRUFBRTtBQUFDbUIsV0FBSyxFQUFFRjtBQUFSLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQURELENBM0NGLEVBb0RFakIsNERBQU0sTUFDTixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQ0MsYUFBUyxFQUFDLFlBRFg7QUFFQyxTQUFLLEVBQUU7QUFBQ21CLFdBQUssRUFBRUY7QUFBUixLQUZSO0FBR0MsV0FBTyxFQUFFO0FBQUEsYUFBTU0sNkRBQU8sQ0FBQztBQUFBLGVBQU16QyxrREFBTSxDQUFDMEMsT0FBUCxXQUFOO0FBQUEsT0FBRCxDQUFiO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FyREYsQ0FERCxDQWZELENBUEQsQ0FERDtBQTRGQSxDQTdJRDs7R0FBTWxDLE07O0tBQUFBLE07QUErSVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmZDQ0MDc5Mzk0NDczNTBlMWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBBUFBfTkFNRSwgRE9NQUlOIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgc2lnbm91dCwgaXNBdXRoIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uLCBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBnZXRTZXR0aW5ncywgdXBkYXRlU2V0dGluZ3MgfSBmcm9tICcuLi9hY3Rpb25zL3VzZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9IHVybCA9PiBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gdXJsID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGluaXQoKTtcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3QgaW5pdCA9ICgpID0+IHtcclxuXHRcdGlmKGlzQXV0aCgpKSB7XHJcblx0XHRcdGNvbnN0IHRlbXBUb2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRcdFx0Z2V0U2V0dGluZ3ModGVtcFRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGlmKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzZXRUaGVtZShkYXRhLnRoZW1lKTtcclxuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgZGF0YS50aGVtZSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNldFRva2VuKHRlbXBUb2tlbik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuXHRcdFx0c2V0VGhlbWUoJ2RhcmsnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuXHRcdHNldElzT3BlbighaXNPcGVuKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcclxuXHRcdGlmKGN1cnJlbnRUaGVtZSA9PT0gJ2RhcmsnIHx8ICFjdXJyZW50VGhlbWUpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpO1xyXG5cdFx0XHR1cGRhdGVTZXR0aW5ncyh0b2tlbiwge1xyXG5cdFx0XHRcdHRoZW1lOiAnbGlnaHQnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUaGVtZSgnbGlnaHQnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG5cdFx0XHR1cGRhdGVTZXR0aW5ncyh0b2tlbiwge1xyXG5cdFx0XHRcdHRoZW1lOiAnZGFyaycsXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUaGVtZSgnZGFyaycpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRleHRDb2xvciA9IHRoZW1lID09PSAnZGFyaycgPyAnd2hpdGUnIDogJ2JsYWNrJztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PGxpbmtcclxuXHRcdFx0XHRcdHJlbD0naWNvbidcclxuXHRcdFx0XHRcdGhyZWY9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zaG9wcGluZy1jYXJ0LnBuZ2B9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8TmF2YmFyIGNvbG9yPXt0aGVtZX0gZXhwYW5kPSdtZCc+XHJcblx0XHRcdFx0PExpbmsgaHJlZj0nLyc+XHJcblx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQgbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvc2hvcHBpbmctY2FydC5wbmdgfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdzaG9wcGluZyBjYXJ0J1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnYXV0bycgfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPntBUFBfTkFNRX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21sLWF1dG8gcGxhY2VDZW50ZXInIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0eyFpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWduaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWduaW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbnVwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbnVwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wYnRuJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNldHRpbmdzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1jb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dG9nZ2xlVGhlbWV9PlRoZW1lOiB7dGhlbWV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdXNlci91cGRhdGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVwZGF0ZSBQcm9maWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhckxpbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoYC9zaWduaW5gKSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNpZ25vdXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==