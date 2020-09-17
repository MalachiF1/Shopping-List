webpackHotUpdate_N_E("pages/auth/password/forgot",{

/***/ "./pages/auth/password/forgot.js":
/*!***************************************!*\
  !*** ./pages/auth/password/forgot.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\pages\\auth\\password\\forgot.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ForgotPassword = function ForgotPassword() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    message: '',
    error: '',
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var email = values.email,
      message = values.message,
      error = values.error,
      showForm = values.showForm;

  var handleChange = function handleChange(name) {
    return function (e) {
      setValues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        message: '',
        error: ''
      }, name, e.target.value)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      message: '',
      error: ''
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["forgotPassword"])({
      email: email
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          message: data.message,
          email: '',
          showForm: false
        }));
      }
    });
  };

  var showError = function showError() {
    return error ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 38
      }
    }, error) : '';
  };

  var showMessage = function showMessage() {
    return message ? __jsx("div", {
      className: "alert alert-success",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 42
      }
    }, message) : '';
  };

  var passwordForgotForm = function passwordForgotForm() {
    return __jsx("div", {
      className: "container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group pt-5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "email",
      onChange: handleChange('email'),
      className: "form-control",
      value: email,
      placeholder: "Type your email",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "Send password reset link"))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Forgot Password")), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "forgotPasswordPage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "container pt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "Forgot Password"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), showError(), showMessage(), showForm && passwordForgotForm()))));
};

_s(ForgotPassword, "tMRrJDnaEtD22wMBkHMxhPQgkqY=");

_c = ForgotPassword;
/* harmony default export */ __webpack_exports__["default"] = (ForgotPassword);

var _c;

$RefreshReg$(_c, "ForgotPassword");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9wYXNzd29yZC9mb3Jnb3QuanMiXSwibmFtZXMiOlsiRm9yZ290UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsImVtYWlsIiwibWVzc2FnZSIsImVycm9yIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3Jnb3RQYXNzd29yZCIsInRoZW4iLCJkYXRhIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJwYXNzd29yZEZvcmdvdEZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxXQUFPLEVBQUUsRUFGd0I7QUFHakNDLFNBQUssRUFBRSxFQUgwQjtBQUlqQ0MsWUFBUSxFQUFFO0FBSnVCLEdBQUQsQ0FEWDtBQUFBLE1BQ2xCQyxNQURrQjtBQUFBLE1BQ1ZDLFNBRFU7O0FBQUEsTUFRakJMLEtBUmlCLEdBUW1CSSxNQVJuQixDQVFqQkosS0FSaUI7QUFBQSxNQVFWQyxPQVJVLEdBUW1CRyxNQVJuQixDQVFWSCxPQVJVO0FBQUEsTUFRREMsS0FSQyxHQVFtQkUsTUFSbkIsQ0FRREYsS0FSQztBQUFBLE1BUU1DLFFBUk4sR0FRbUJDLE1BUm5CLENBUU1ELFFBUk47O0FBVXpCLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLElBQUk7QUFBQSxXQUFJLFVBQUFDLENBQUMsRUFBSTtBQUM5QkgsZUFBUyxpQ0FBTUQsTUFBTjtBQUFjSCxlQUFPLEVBQUUsRUFBdkI7QUFBMkJDLGFBQUssRUFBRTtBQUFsQyxTQUF1Q0ssSUFBdkMsRUFBOENDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF2RCxHQUFUO0FBQ0gsS0FGd0I7QUFBQSxHQUF6Qjs7QUFJQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBSCxDQUFDLEVBQUk7QUFDdEJBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBUCxhQUFTLGlDQUFNRCxNQUFOO0FBQWNILGFBQU8sRUFBRSxFQUF2QjtBQUEyQkMsV0FBSyxFQUFFO0FBQWxDLE9BQVQ7QUFDQVcsd0VBQWMsQ0FBQztBQUFFYixXQUFLLEVBQUxBO0FBQUYsS0FBRCxDQUFkLENBQTBCYyxJQUExQixDQUErQixVQUFBQyxJQUFJLEVBQUk7QUFDbkMsVUFBR0EsSUFBSSxDQUFDYixLQUFSLEVBQWU7QUFDWEcsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0YsZUFBSyxFQUFFYSxJQUFJLENBQUNiO0FBQTFCLFdBQVQ7QUFDSCxPQUZELE1BRU87QUFDSEcsaUJBQVMsaUNBQU1ELE1BQU47QUFBY0gsaUJBQU8sRUFBRWMsSUFBSSxDQUFDZCxPQUE1QjtBQUFxQ0QsZUFBSyxFQUFFLEVBQTVDO0FBQWdERyxrQkFBUSxFQUFFO0FBQTFELFdBQVQ7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVZEOztBQVlBLE1BQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBT2QsS0FBSyxHQUFHO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUNBLEtBQXJDLENBQUgsR0FBdUQsRUFBbkU7QUFBQSxHQUFsQjs7QUFDQSxNQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU9oQixPQUFPLEdBQUc7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQ0EsT0FBdEMsQ0FBSCxHQUEwRCxFQUF4RTtBQUFBLEdBQXBCOztBQUVBLE1BQU1pQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsV0FDdkI7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTSxjQUFRLEVBQUVQLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFDSSxVQUFJLEVBQUMsT0FEVDtBQUVJLGNBQVEsRUFBRUwsWUFBWSxDQUFDLE9BQUQsQ0FGMUI7QUFHSSxlQUFTLEVBQUMsY0FIZDtBQUlJLFdBQUssRUFBRU4sS0FKWDtBQUtJLGlCQUFXLEVBQUMsaUJBTGhCO0FBTUksY0FBUSxNQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLENBWEosQ0FESixDQUR1QjtBQUFBLEdBQTNCOztBQW9CQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLENBREosRUFJSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHS2dCLFNBQVMsRUFIZCxFQUlLQyxXQUFXLEVBSmhCLEVBS0tkLFFBQVEsSUFBSWUsa0JBQWtCLEVBTG5DLENBREosQ0FESixDQUpKLENBREo7QUFrQkgsQ0FuRUQ7O0dBQU1wQixjOztLQUFBQSxjO0FBcUVTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hdXRoL3Bhc3N3b3JkL2ZvcmdvdC5lYTRhNjgzZDMwZDhjNGM2NmYzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBmb3Jnb3RQYXNzd29yZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgbWVzc2FnZSwgZXJyb3IsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIG1lc3NhZ2U6ICcnLCBlcnJvcjogJycsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIG1lc3NhZ2U6ICcnLCBlcnJvcjogJycgfSk7XHJcbiAgICAgICAgZm9yZ290UGFzc3dvcmQoeyBlbWFpbCB9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZihkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsIGVtYWlsOiAnJywgc2hvd0Zvcm06IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2PiA6ICcnKTtcclxuICAgIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT4gKG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+e21lc3NhZ2V9PC9kaXY+IDogJycpO1xyXG5cclxuICAgIGNvbnN0IHBhc3N3b3JkRm9yZ290Rm9ybSA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCBwdC01Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TZW5kIHBhc3N3b3JkIHJlc2V0IGxpbms8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Gb3Jnb3QgUGFzc3dvcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9yZ290UGFzc3dvcmRQYWdlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Rm9yZ290IFBhc3N3b3JkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93Rm9ybSAmJiBwYXNzd29yZEZvcmdvdEZvcm0oKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkOyJdLCJzb3VyY2VSb290IjoiIn0=