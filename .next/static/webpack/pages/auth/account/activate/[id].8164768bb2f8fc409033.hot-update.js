webpackHotUpdate_N_E("pages/auth/account/activate/[id]",{

/***/ "./pages/auth/account/activate/[id].js":
/*!*********************************************!*\
  !*** ./pages/auth/account/activate/[id].js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\pages\\auth\\account\\activate\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ActivateAccount = function ActivateAccount(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    token: '',
    error: '',
    loading: false,
    success: false,
    showButton: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var name = values.name,
      token = values.token,
      error = values.error,
      loading = values.loading,
      success = values.success,
      showButton = values.showButton;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = router.query.id;

    if (token) {
      var _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token),
          _name = _jwt$decode.name;

      setValues(_objectSpread(_objectSpread({}, values), {}, {
        name: _name,
        token: token
      }));
    }
  }, [router]);

  var clickSubmit = function clickSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loadin: true,
      error: false
    }));
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["signup"])({
      token: token
    }).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false,
          showButton: false
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          success: true,
          showButton: false
        }));
      }
    });
  };

  var showLoading = function showLoading() {
    return loading ? __jsx("div", {
      className: "alert alert-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 42
      }
    }, "Loading...") : '';
  };

  var showError = function showError() {
    return error ? __jsx("div", {
      className: "alert alert-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 38
      }
    }, error) : '';
  };

  var showSuccess = function showSuccess() {
    return success ? __jsx("div", {
      className: "alert alert-success",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 42
      }
    }, "Signup success! Email has been sent to user informing them the account has been activated.") : '';
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "activateAcountPage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container pt-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Ready to activate ", name, "'s account?"), __jsx("hr", {
    className: "pb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), showLoading(), showError(), showSuccess(), showButton && __jsx("button", {
    className: "btn btn-primary",
    onClick: clickSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 36
    }
  }, "Activate Account"))));
};

_s(ActivateAccount, "AzDcj/d+djTlYJ8UGemf/7irxNU=");

_c = ActivateAccount;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ActivateAccount));

var _c, _c2;

$RefreshReg$(_c, "ActivateAccount");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRlLy5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0ZUFjY291bnQiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJ0b2tlbiIsImVycm9yIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJzaG93QnV0dG9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0IiwicXVlcnkiLCJpZCIsImp3dCIsImRlY29kZSIsImNsaWNrU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9hZGluIiwic2lnbnVwIiwidGhlbiIsImRhdGEiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dTdWNjZXNzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDO0FBQ2pDQyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFNBQUssRUFBRSxFQUYwQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxXQUFPLEVBQUUsS0FKd0I7QUFLakNDLFdBQU8sRUFBRSxLQUx3QjtBQU1qQ0MsY0FBVSxFQUFFO0FBTnFCLEdBQUQsQ0FEQTtBQUFBLE1BQzdCQyxNQUQ2QjtBQUFBLE1BQ3JCQyxTQURxQjs7QUFBQSxNQVU1QlAsSUFWNEIsR0FVeUJNLE1BVnpCLENBVTVCTixJQVY0QjtBQUFBLE1BVXRCQyxLQVZzQixHQVV5QkssTUFWekIsQ0FVdEJMLEtBVnNCO0FBQUEsTUFVZkMsS0FWZSxHQVV5QkksTUFWekIsQ0FVZkosS0FWZTtBQUFBLE1BVVJDLE9BVlEsR0FVeUJHLE1BVnpCLENBVVJILE9BVlE7QUFBQSxNQVVDQyxPQVZELEdB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O0FBb0RTLHFFQUFBMEIsOERBQVUsQ0FBQzFCLGVBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC9hY2NvdW50L2FjdGl2YXRlL1tpZF0uODE2NDc2OGJiMmY4ZmM0MDkwMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNpZ251cCB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcblxyXG5cclxuY29uc3QgQWN0aXZhdGVBY2NvdW50ID0gKHsgcm91dGVyIH0pID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgdG9rZW46ICcnLFxyXG4gICAgICAgIGVycm9yOiAnJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBzaG93QnV0dG9uOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IG5hbWUsIHRva2VuLCBlcnJvciwgbG9hZGluZywgc3VjY2Vzcywgc2hvd0J1dHRvbiB9ID0gdmFsdWVzO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgICAgIGlmKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gand0LmRlY29kZSh0b2tlbik7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbmFtZSwgdG9rZW4gfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW46IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcclxuICAgICAgICBzaWdudXAoe3Rva2VufSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UsIHNob3dCdXR0b246IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgc2hvd0J1dHRvbjogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAobG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvJz5Mb2FkaW5nLi4uPC9kaXY+IDogJycpO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT4gKGVycm9yID8gPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlcic+e2Vycm9yfTwvZGl2PiA6ICcnKTtcclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKHN1Y2Nlc3MgPyA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtc3VjY2Vzcyc+U2lnbnVwIHN1Y2Nlc3MhIEVtYWlsIGhhcyBiZWVuIHNlbnQgdG8gdXNlciBpbmZvcm1pbmcgdGhlbSB0aGUgYWNjb3VudCBoYXMgYmVlbiBhY3RpdmF0ZWQuPC9kaXY+IDogJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGl2YXRlQWNvdW50UGFnZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB0LTUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZWFkeSB0byBhY3RpdmF0ZSB7bmFtZX0ncyBhY2NvdW50PzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyICBjbGFzc05hbWU9J3BiLTQnLz5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dTdWNjZXNzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dCdXR0b24gJiYgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgb25DbGljaz17Y2xpY2tTdWJtaXR9PkFjdGl2YXRlIEFjY291bnQ8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmF0ZUFjY291bnQpOyJdLCJzb3VyY2VSb290IjoiIn0=