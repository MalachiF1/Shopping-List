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
    className: "ml-auto",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImluaXQiLCJpc0F1dGgiLCJ0ZW1wVG9rZW4iLCJnZXRDb29raWUiLCJnZXRTZXR0aW5ncyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJ0b2dnbGVUaGVtZSIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsInVwZGF0ZVNldHRpbmdzIiwidGV4dENvbG9yIiwiRE9NQUlOIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIkFQUF9OQU1FIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUFDLEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDQyxLQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQUgsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNHLElBQVYsRUFBSjtBQUFBLENBQWxDOztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFBTCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0cs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QVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNtQixXQUFLLEVBQUVGO0FBQVIsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxDQURELENBakNGLEVBMENFakIsNERBQU0sTUFDTixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNtQixXQUFLLEVBQUVGO0FBQVIsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELENBREQsQ0EzQ0YsRUFvREVqQiw0REFBTSxNQUNOLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsWUFEWDtBQUVDLFNBQUssRUFBRTtBQUFDbUIsV0FBSyxFQUFFRjtBQUFSLEtBRlI7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUFNTSw2REFBTyxDQUFDO0FBQUEsZUFBTXpDLGtEQUFNLENBQUMwQyxPQUFQLFdBQU47QUFBQSxPQUFELENBQWI7QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQXJERixDQURELENBZkQsQ0FQRCxDQUREO0FBNEZBLENBN0lEOztHQUFNbEMsTTs7S0FBQUEsTTtBQStJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDEwZWYxOGI5MWVkNDZhYzY5ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCB7IEFQUF9OQU1FLCBET01BSU4gfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBzaWdub3V0LCBpc0F1dGggfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQge1xyXG5cdENvbGxhcHNlLFxyXG5cdE5hdmJhcixcclxuXHROYXZiYXJUb2dnbGVyLFxyXG5cdE5hdmJhckJyYW5kLFxyXG5cdE5hdixcclxuXHROYXZJdGVtLFxyXG5cdE5hdkxpbmssXHJcblx0VW5jb250cm9sbGVkRHJvcGRvd24sXHJcblx0RHJvcGRvd25Ub2dnbGUsXHJcblx0RHJvcGRvd25NZW51LFxyXG5cdERyb3Bkb3duSXRlbSxcclxuXHROYXZiYXJUZXh0LFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZXR0aW5ncyc7XHJcbmltcG9ydCB7IEljb25CdXR0b24sIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGdldFNldHRpbmdzLCB1cGRhdGVTZXR0aW5ncyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aCc7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gdXJsID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gdXJsID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBpbml0ID0gKCkgPT4ge1xyXG5cdFx0aWYoaXNBdXRoKCkpIHtcclxuXHRcdFx0Y29uc3QgdGVtcFRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdFx0XHRnZXRTZXR0aW5ncyh0ZW1wVG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNldFRoZW1lKGRhdGEudGhlbWUpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBkYXRhLnRoZW1lKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VG9rZW4odGVtcFRva2VuKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG5cdFx0XHRzZXRUaGVtZSgnZGFyaycpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG5cdFx0c2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgY3VycmVudFRoZW1lID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xyXG5cdFx0aWYoY3VycmVudFRoZW1lID09PSAnZGFyaycgfHwgIWN1cnJlbnRUaGVtZSkge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcblx0XHRcdHVwZGF0ZVNldHRpbmdzKHRva2VuLCB7XHJcblx0XHRcdFx0dGhlbWU6ICdsaWdodCdcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNldFRoZW1lKCdsaWdodCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XHJcblx0XHRcdHVwZGF0ZVNldHRpbmdzKHRva2VuLCB7XHJcblx0XHRcdFx0dGhlbWU6ICdkYXJrJyxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNldFRoZW1lKCdkYXJrJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdGV4dENvbG9yID0gdGhlbWUgPT09ICdkYXJrJyA/ICd3aGl0ZScgOiAnYmxhY2snO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8bGlua1xyXG5cdFx0XHRcdFx0cmVsPSdpY29uJ1xyXG5cdFx0XHRcdFx0aHJlZj17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nob3BwaW5nLWNhcnQucG5nYH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxOYXZiYXIgY29sb3I9e3RoZW1lfSBleHBhbmQ9J21kJz5cclxuXHRcdFx0XHQ8TGluayBocmVmPScvJz5cclxuXHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCBuYXZiYXJMaW5rJyBzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9zaG9wcGluZy1jYXJ0LnBuZ2B9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9J3Nob3BwaW5nIGNhcnQnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICdhdXRvJyB9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e0FQUF9OQU1FfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcblx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT0nbWwtYXV0bycgbmF2YmFyPlxyXG5cdFx0XHRcdFx0XHR7IWlzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ25pbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSduYXZiYXJMaW5rJyBzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpZ25pblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWdudXBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3BidG4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2V0dGluZ3NJY29uIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duLWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+VGhlbWU6IHt0aGVtZX08L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy91c2VyL3VwZGF0ZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0VXBkYXRlIFByb2ZpbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY29udGFjdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbmF2YmFyTGluaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2lnbm91dCgoKSA9PiBSb3V0ZXIucmVwbGFjZShgL3NpZ25pbmApKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U2lnbm91dFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvTmF2PlxyXG5cdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdDwvTmF2YmFyPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9