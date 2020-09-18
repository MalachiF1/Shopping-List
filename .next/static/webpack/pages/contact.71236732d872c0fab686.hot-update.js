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
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
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
      lineNumber: 82,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/shopping-cart.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
    color: theme,
    expand: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
    onClick: toggle,
    style: {
      backgroundColor: 'black',
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 11
    }
  }, "Signin"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Signup")))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx("div", {
    className: "dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "dropbtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "dropdown-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("a", {
    onClick: toggleTheme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 10
    }
  }, "Theme: ", theme))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/user/update",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    className: "navbarLink",
    style: {
      color: textColor,
      fontSize: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, "Update Profile"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
      lineNumber: 150,
      columnNumber: 10
    }
  }, "Contact"))), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["isAuth"])() && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiUm91dGVyIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZUVmZmVjdCIsImluaXQiLCJpc0F1dGgiLCJ0ZW1wVG9rZW4iLCJnZXRDb29raWUiLCJnZXRTZXR0aW5ncyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJ0b2dnbGVUaGVtZSIsImN1cnJlbnRUaGVtZSIsImdldEF0dHJpYnV0ZSIsInVwZGF0ZVNldHRpbmdzIiwidGV4dENvbG9yIiwiRE9NQUlOIiwiY29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIkFQUF9OQU1FIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJzaWdub3V0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUEsa0RBQU0sQ0FBQ0Msa0JBQVAsR0FBNEIsVUFBQUMsR0FBRztBQUFBLFNBQUlDLGdEQUFTLENBQUNDLEtBQVYsRUFBSjtBQUFBLENBQS9COztBQUNBSixrREFBTSxDQUFDSyxxQkFBUCxHQUErQixVQUFBSCxHQUFHO0FBQUEsU0FBSUMsZ0RBQVMsQ0FBQ0csSUFBVixFQUFKO0FBQUEsQ0FBbEM7O0FBQ0FOLGtEQUFNLENBQUNPLGtCQUFQLEdBQTRC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QUEsTTtBQStJU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC43MTIzNjczMmQ4NzJjMGZhYjY4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgQVBQX05BTUUsIERPTUFJTiB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IHNpZ25vdXQsIGlzQXV0aCB9IGZyb20gJy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7XHJcblx0Q29sbGFwc2UsXHJcblx0TmF2YmFyLFxyXG5cdE5hdmJhclRvZ2dsZXIsXHJcblx0TmF2YmFyQnJhbmQsXHJcblx0TmF2LFxyXG5cdE5hdkl0ZW0sXHJcblx0TmF2TGluayxcclxuXHRVbmNvbnRyb2xsZWREcm9wZG93bixcclxuXHREcm9wZG93blRvZ2dsZSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0RHJvcGRvd25JdGVtLFxyXG5cdE5hdmJhclRleHQsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzJztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgZ2V0U2V0dGluZ3MsIHVwZGF0ZVNldHRpbmdzIH0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSB1cmwgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSB1cmwgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9IHVybCA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbml0KCk7XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcblx0XHRpZihpc0F1dGgoKSkge1xyXG5cdFx0XHRjb25zdCB0ZW1wVG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0XHRcdGdldFNldHRpbmdzKHRlbXBUb2tlbikudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHRpZihkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c2V0VGhlbWUoZGF0YS50aGVtZSk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGRhdGEudGhlbWUpXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZXRUb2tlbih0ZW1wVG9rZW4pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJyk7XHJcblx0XHRcdHNldFRoZW1lKCdkYXJrJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcblx0XHRzZXRJc09wZW4oIWlzT3Blbik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XHJcblx0XHRpZihjdXJyZW50VGhlbWUgPT09ICdkYXJrJyB8fCAhY3VycmVudFRoZW1lKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuXHRcdFx0dXBkYXRlU2V0dGluZ3ModG9rZW4sIHtcclxuXHRcdFx0XHR0aGVtZTogJ2xpZ2h0J1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VGhlbWUoJ2xpZ2h0Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcclxuXHRcdFx0dXBkYXRlU2V0dGluZ3ModG9rZW4sIHtcclxuXHRcdFx0XHR0aGVtZTogJ2RhcmsnLFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0VGhlbWUoJ2RhcmsnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCB0ZXh0Q29sb3IgPSB0aGVtZSA9PT0gJ2RhcmsnID8gJ3doaXRlJyA6ICdibGFjayc7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDxsaW5rXHJcblx0XHRcdFx0XHRyZWw9J2ljb24nXHJcblx0XHRcdFx0XHRocmVmPXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvc2hvcHBpbmctY2FydC5wbmdgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PE5hdmJhciBjb2xvcj17dGhlbWV9IGV4cGFuZD0nbWQnPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy8nPlxyXG5cdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkIG5hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7RE9NQUlOfS9zdGF0aWMvaW1hZ2VzL3Nob3BwaW5nLWNhcnQucG5nYH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nc2hvcHBpbmcgY2FydCdcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJ2F1dG8nIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57QVBQX05BTUV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIGNvbG9yOiAnd2hpdGUnfX0vPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21sLWF1dG8nIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0eyFpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWduaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT0nbmF2YmFyTGluaycgc3R5bGU9e3tjb2xvcjogdGV4dENvbG9yfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWduaW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L05hdkxpbms+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbnVwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbnVwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wYnRuJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNldHRpbmdzSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bi1jb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17dG9nZ2xlVGhlbWV9PlRoZW1lOiB7dGhlbWV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvdXNlci91cGRhdGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvciwgZm9udFNpemU6ICcxOHB4J319PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFVwZGF0ZSBQcm9maWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7aXNBdXRoKCkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NvbnRhY3QnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9J25hdmJhckxpbmsnIHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtpc0F1dGgoKSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J25hdmJhckxpbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7Y29sb3I6IHRleHRDb2xvcn19XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoYC9zaWduaW5gKSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNpZ25vdXRcclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2TGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==