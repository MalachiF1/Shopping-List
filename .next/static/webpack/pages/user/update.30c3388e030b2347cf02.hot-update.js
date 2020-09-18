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
        paddingTop: '50px',
        marginLeft: '30px'
      },
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, "Username"), __jsx("input", {
      onChange: handleChange('username'),
      type: "text",
      value: username,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, "Name"), __jsx("input", {
      onChange: handleChange('name'),
      type: "text",
      value: name,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }))), __jsx("div", {
      className: "card pl-2 pr-2 pb-2 pt-2 changePassword",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
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
    }, "Old Password"), __jsx("input", {
      onChange: handleChange('oldPassword'),
      type: "password",
      value: oldPassword,
      className: "form-control",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
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
        lineNumber: 104,
        columnNumber: 21
      }
    }))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, showSuccess(), showError(), showLoading()), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary mt-3",
      disabled: !username || !name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
        lineNumber: 121,
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
        lineNumber: 127,
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
        lineNumber: 133,
        columnNumber: 9
      }
    }, "Loading...");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJ1c2VyRGF0YSIsIkZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJpbml0IiwiZ2V0UHJvZmlsZSIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlIiwidXBkYXRlVXNlciIsInByb2ZpbGVVcGRhdGVGb3JtIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwibWFyZ2luTGVmdCIsInNob3dTdWNjZXNzIiwic2hvd0Vycm9yIiwic2hvd0xvYWRpbmciLCJkaXNwbGF5IiwicGxhY2VDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUM7QUFDakNDLFlBQVEsRUFBRSxFQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLEVBRjJCO0FBR2pDQyxZQUFRLEVBQUUsRUFIdUI7QUFJakNDLGVBQVcsRUFBRSxFQUpvQjtBQUtqQ0MsU0FBSyxFQUFFLEtBTDBCO0FBTWpDQyxXQUFPLEVBQUUsS0FOd0I7QUFPakNDLFdBQU8sRUFBRSxLQVB3QjtBQVFqQ0MsWUFBUSxFQUFFLFNBQW1CLElBQUlDLFFBQUo7QUFSSSxHQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tELGlCQUFpQixFQUR0QixDQURKLENBREosQ0FESjtBQVNILENBNUlEOztHQUFNL0IsYTs7S0FBQUEsYTtBQThJU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci91cGRhdGUuMzBjMzM4OGUwMzBiMjM0N2NmMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzQXV0aCwgdXBkYXRlVXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcbmltcG9ydCB7IGdldFByb2ZpbGUsIHVwZGF0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdXNlcic7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5jb25zdCBQcm9maWxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIG9sZFBhc3N3b3JkOiAnJyxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgdXNlckRhdGE6IHByb2Nlc3MuYnJvd3NlciAmJiBuZXcgRm9ybURhdGEoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcbiAgICBjb25zdCB7IFxyXG4gICAgICAgIHVzZXJuYW1lLCBcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkLCBcclxuICAgICAgICBvbGRQYXNzd29yZCxcclxuICAgICAgICBlcnJvciwgXHJcbiAgICAgICAgc3VjY2VzcywgXHJcbiAgICAgICAgbG9hZGluZywgIFxyXG4gICAgICAgIHVzZXJEYXRhIFxyXG4gICAgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIGdldFByb2ZpbGUodG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCB1c2VyRGF0YTogbmV3IEZvcm1EYXRhKCkgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIC8vbGV0IHVzZXJGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHVzZXJEYXRhLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4udXNlckRhdGEpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgdXNlckRhdGEsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgICAgIHVwZGF0ZSh0b2tlbiwgdXNlckRhdGEpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YS5lcnJvcicsIGRhdGEuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVVc2VyKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByb2ZpbGVVcGRhdGVGb3JtID0gKCkgPT4gKFxyXG4gICAgICAgIDxmb3JtIHN0eWxlPXt7d2lkdGg6ICc3MDBweCcsIHBhZGRpbmdUb3A6ICc1MHB4JywgbWFyZ2luTGVmdDogJzMwcHgnfX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgndXNlcm5hbWUnKX0gdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIHBsLTIgcHItMiBwYi0yIHB0LTIgY2hhbmdlUGFzc3dvcmQnID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnb2xkUGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e29sZFBhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIiBkaXNhYmxlZD17IXVzZXJuYW1lIHx8ICFuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyIG10LTInIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MgbXQtMicgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICBQcm9maWxlIFVwZGF0ZWRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8gbXQtMicgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBwbGFjZUNvbnRlbnQ6ICdjZW50ZXInLCB3aWR0aDogJzgwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZVVwZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGRhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==