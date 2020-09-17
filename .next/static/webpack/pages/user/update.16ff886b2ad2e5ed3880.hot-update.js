webpackHotUpdate_N_E("pages/user/update",{

/***/ "./components/auth/ProfileUpdate.js":
/*!******************************************!*\
  !*** ./components/auth/ProfileUpdate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\components\\auth\\ProfileUpdate.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ProfileUpdate = function ProfileUpdate() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    username: '',
    name: '',
    password: '',
    oldPassword: '',
    error: false,
    success: false,
    loading: false,
    userData:  true && new FormData()
  }),
      values = _useState[0],
      setValues = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');
  var username = values.username,
      name = values.name,
      password = values.password,
      oldPassword = values.oldPassword,
      error = values.error,
      success = values.success,
      loading = values.loading,
      userData = values.userData;

  var init = function init() {
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_6__["getProfile"])(token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          username: data.username,
          name: data.name
        }));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    init();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      userData: new FormData()
    }));
  }, []);

  var handleChange = function handleChange(name) {
    return function (e) {
      var _console, _objectSpread2;

      var value = e.target.value; //let userFormData = new FormData();

      userData.set(name, value);

      (_console = console).log.apply(_console, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(userData));

      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "userData", userData), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "success", false), _objectSpread2)));
    };
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_user__WEBPACK_IMPORTED_MODULE_6__["update"])(token, userData).then(function (data) {
      if (data.error) {
        console.log('data.error', data.error);
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["updateUser"])(data, function () {
          setValues(_objectSpread(_objectSpread({}, values), {}, {
            username: data.username,
            name: data.name,
            password: '',
            oldPassword: '',
            success: true,
            loading: false
          }));
        });
      }
    });
  };

  var profileUpdateForm = function profileUpdateForm() {
    return __jsx("form", {
      style: {
        width: '700px',
        paddingTop: '50px'
      },
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, "Username"), __jsx("input", {
      onChange: handleChange('username'),
      type: "text",
      value: username,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, "Name"), __jsx("input", {
      onChange: handleChange('name'),
      type: "text",
      value: name,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "card pl-2 pr-2 pb-2 pt-2",
      style: {
        backgroundColor: 'rgb(39, 39, 39)'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, "Old Password"), __jsx("input", {
      onChange: handleChange('oldPassword'),
      type: "password",
      value: oldPassword,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, "New Password"), __jsx("input", {
      onChange: handleChange('password'),
      type: "password",
      value: password,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, showSuccess(), showError(), showLoading()), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary mt-3",
      disabled: !username || !name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, "Update")));
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert alert-danger mt-2",
      style: {
        display: error ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert alert-success mt-2",
      style: {
        display: success ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, "Profile Updated");
  };

  var showLoading = function showLoading() {
    return __jsx("div", {
      className: "alert alert-info mt-2",
      style: {
        display: loading ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, "Loading...");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    style: {
      display: "flex",
      placeContent: 'center',
      width: '800px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, profileUpdateForm())));
};

_s(ProfileUpdate, "X1HWo9GvFJiPKweBjiyVCG61n1k=");

_c = ProfileUpdate;
/* harmony default export */ __webpack_exports__["default"] = (ProfileUpdate);

var _c;

$RefreshReg$(_c, "ProfileUpdate");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJ1c2VyRGF0YSIsIkZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJpbml0IiwiZ2V0UHJvZmlsZSIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlIiwidXBkYXRlVXNlciIsInByb2ZpbGVVcGRhdGVGb3JtIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZENvbG9yIiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJzaG93TG9hZGluZyIsImRpc3BsYXkiLCJwbGFjZUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQztBQUNqQ0MsWUFBUSxFQUFFLEVBRHVCO0FBRWpDQyxRQUFJLEVBQUUsRUFGMkI7QUFHakNDLFlBQVEsRUFBRSxFQUh1QjtBQUlqQ0MsZUFBVyxFQUFFLEVBSm9CO0FBS2pDQyxTQUFLLEVBQUUsS0FMMEI7QUFNakNDLFdBQU8sRUFBRSxLQU53QjtBQU9qQ0MsV0FBTyxFQUFFLEtBUHdCO0FBUWpDQyxZQUFRLEVBQUUsU0FBbUIsSUFBSUMsUUFBSjtBQVJJLEdBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxN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SUQ7O0dBQU0vQixhOztLQUFBQSxhO0FBMElTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL3VwZGF0ZS4xNmZmODg2YjJhZDJlNWVkMzg4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldENvb2tpZSwgaXNBdXRoLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZSwgdXBkYXRlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IFByb2ZpbGVVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB1c2VyRGF0YTogcHJvY2Vzcy5icm93c2VyICYmIG5ldyBGb3JtRGF0YSgpXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgdXNlcm5hbWUsIFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQsIFxyXG4gICAgICAgIG9sZFBhc3N3b3JkLFxyXG4gICAgICAgIGVycm9yLCBcclxuICAgICAgICBzdWNjZXNzLCBcclxuICAgICAgICBsb2FkaW5nLCAgXHJcbiAgICAgICAgdXNlckRhdGEgXHJcbiAgICB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvZmlsZSh0b2tlbikudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIHVzZXJEYXRhOiBuZXcgRm9ybURhdGEoKSB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy9sZXQgdXNlckZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgdXNlckRhdGEuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi51c2VyRGF0YSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IHZhbHVlLCB1c2VyRGF0YSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgdXBkYXRlKHRva2VuLCB1c2VyRGF0YSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhLmVycm9yJywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVVzZXIoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHJvZmlsZVVwZGF0ZUZvcm0gPSAoKSA9PiAoXHJcbiAgICAgICAgPGZvcm0gc3R5bGU9e3t3aWR0aDogJzcwMHB4JywgcGFkZGluZ1RvcDogJzUwcHgnfX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndXNlcm5hbWUnKX0gdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgcGwtMiBwci0yIHBiLTIgcHQtMicgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMzksIDM5LCAzOSknfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ29sZFBhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtvbGRQYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfSB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCIgZGlzYWJsZWQ9eyF1c2VybmFtZSB8fCAhbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWRhbmdlciBtdC0yJyBzdHlsZT17eyBkaXNwbGF5OiBlcnJvciA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dTdWNjZXNzID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1zdWNjZXNzIG10LTInIHN0eWxlPXt7IGRpc3BsYXk6IHN1Y2Nlc3MgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgUHJvZmlsZSBVcGRhdGVkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvIG10LTInIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRpbmcgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgcGxhY2VDb250ZW50OiAnY2VudGVyJywgd2lkdGg6ICc4MDBweCd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGVVcGRhdGVGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlVXBkYXRlOyJdLCJzb3VyY2VSb290IjoiIn0=