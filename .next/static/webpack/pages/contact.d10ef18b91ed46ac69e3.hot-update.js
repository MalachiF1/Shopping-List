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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImluaXQiLCJpc0F1dGgiLCJ0ZW1wVG9rZW4iLCJnZXRDb29raWUiLCJnZXRTZXR0aW5ncyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJ0b2dnbGVUaGVtZSIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsInVwZGF0ZVNldHRpbmdzIiwidGV4dENvbG9yIiwiRE9NQUlOIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIkFQUF9OQU1FIiwic2lnbm91dCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLGtEQUFNLENBQUNDLGtCQUFQLEdBQTRCLFVBQUFDLEdBQUc7QUFBQSxTQUFJQyxnREFBUyxDQUFDQyxLQUFWLEVBQUo7QUFBQSxDQUEvQjs7QUFDQUosa0RBQU0sQ0FBQ0sscUJBQVAsR0FBK0IsVUFBQUgsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNHLElBQVYsRUFBSjtBQUFBLENBQWxDOztBQUNBTixrREFBTSxDQUFDTyxrQkFBUCxHQUE0QixVQUFBTCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0cs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QVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNtQixXQUFLLEVBQUVGO0FBQVIsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxDQURELENBakNGLEVBMENFakIsNERBQU0sTUFDTixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBZ0MsU0FBSyxFQUFFO0FBQUNtQixXQUFLLEVBQUVGO0FBQVIsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELENBREQsQ0EzQ0YsRUFvREVqQiw0REFBTSxNQUNOLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsWUFEWDtBQUVDLFNBQUssRUFBRTtBQUFDbUIsV0FBSyxFQUFFRjtBQUFSLEtBRlI7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUFNTSw2REFBTyxDQUFDO0FBQUEsZUFBTXpDLGtEQUFNLENBQUMwQyxPQUFQLFdBQU47QUFBQSxPQUFELENBQWI7QUFBQSxLQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQXJERixDQURELENBZkQsQ0FQRCxDQUREO0FBNEZBLENBN0lEOztHQUFNbEMsTTs7S0FBQUEsTTtBQStJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5kMTBlZjE4YjkxZWQ0NmFjNjllMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgQVBQX05BTUUsIERPTUFJTiB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHNpZ25vdXQsIGlzQXV0aCB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7XHJcblx0Q29sbGFwc2UsXHJcblx0TmF2YmFyLFxyXG5cdE5hdmJhclRvZ2dsZXIsXHJcblx0TmF2YmFyQnJhbmQsXHJcblx0TmF2LFxyXG5cdE5hdkl0ZW0sXHJcblx0TmF2TGluayxcclxuXHRVbmNvbnRyb2xsZWREcm9wZG93bixcclxuXHREcm9wZG93blRvZ2dsZSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0RHJvcGRvd25JdGVtLFxyXG5cdE5hdmJhclRleHQsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ3MsIHVwZGF0ZVNldHRpbmdzIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0XHRpZihpc0F1dGgoKSkge1xyXG5cdFx0XHRjb25zdCB0ZW1wVG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRcdGdldFNldHRpbmdzKHRlbXBUb2tlbikudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRpZihkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGhlbWUoZGF0YS50aGVtZSk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGRhdGEudGhlbWUpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUb2tlbih0ZW1wVG9rZW4pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XHJcblx0XHRcdHNldFRoZW1lKCdkYXJrJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcblx0XHRzZXRJc09wZW4oIWlzT3Blbik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XHJcblx0XHRpZihjdXJyZW50VGhlbWUgPT09ICdkYXJrJyB8fCAhY3VycmVudFRoZW1lKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuXHRcdFx0dXBkYXRlU2V0dGluZ3ModG9rZW4sIHtcclxuXHRcdFx0XHR0aGVtZTogJ2xpZ2h0J1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VGhlbWUoJ2xpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuXHRcdFx0dXBkYXRlU2V0dGluZ3ModG9rZW4sIHtcclxuXHRcdFx0XHR0aGVtZTogJ2RhcmsnLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VGhlbWUoJ2RhcmsnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCB0ZXh0Q29sb3IgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ3doaXRlJyA6ICdibGFjayc7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDxsaW5rXHJcblx0XHRcdFx0XHRyZWw9J2ljb24nXHJcblx0XHRcdFx0XHRocmVmPXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvc2hvcHBpbmctY2FydC5wbmdgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PE5hdmJhciBjb2xvcj17dGhlbWV9IGV4cGFuZD0nbWQnPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkIG5hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nob3BwaW5nLWNhcnQucG5nYH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nc2hvcHBpbmcgY2FydCdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJ2F1dG8nIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57QVBQX05BTUV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuXHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPSdtbC1hdXRvJyBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdHshaXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbmluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbmluXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ251cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSduYXZiYXJMaW5rJyBzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpZ251cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGJ0bic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTZXR0aW5nc0ljb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24tY29udGVudCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9e3RvZ2dsZVRoZW1lfT5UaGVtZToge3RoZW1lfTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3VzZXIvdXBkYXRlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSduYXZiYXJMaW5rJyBzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRVcGRhdGUgUHJvZmlsZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0e2lzQXV0aCgpICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSduYXZiYXJMaW5rJyBzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSduYXZiYXJMaW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2NvbG9yOiB0ZXh0Q29sb3J9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKGAvc2lnbmluYCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTaWdub3V0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=