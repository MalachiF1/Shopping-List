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
      style: {
        backgroundColor: 'rgb(39, 39, 39)'
      },
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
      style: {
        backgroundColor: 'rgb(39, 39, 39)',
        width: '5rem'
      },
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
      className: "card pl-2 pr-2 pb-2 pt-2",
      style: {
        backgroundColor: 'rgb(39, 39, 39)'
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1Byb2ZpbGVVcGRhdGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZVVwZGF0ZSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJuYW1lIiwicGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJ1c2VyRGF0YSIsIkZvcm1EYXRhIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidG9rZW4iLCJnZXRDb29raWUiLCJpbml0IiwiZ2V0UHJvZmlsZSIsInRoZW4iLCJkYXRhIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlIiwidXBkYXRlVXNlciIsInByb2ZpbGVVcGRhdGVGb3JtIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwiYmFja2dyb3VuZENvbG9yIiwic2hvd1N1Y2Nlc3MiLCJzaG93RXJyb3IiLCJzaG93TG9hZGluZyIsImRpc3BsYXkiLCJwbGFjZUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQztBQUNqQ0MsWUFBUSxFQUFFLEVBRHVCO0FBRWpDQyxRQUFJLEVBQUUsRUFGMkI7QUFHakNDLFlBQVEsRUFBRSxFQUh1QjtBQUlqQ0MsZUFBVyxFQUFFLEVBSm9CO0FBS2pDQyxTQUFLLEVBQUUsS0FMMEI7QUFNakNDLFdBQU8sRUFBRSxLQU53QjtBQU9qQ0MsV0FBTyxFQUFFLEtBUHdCO0FBUWpDQyxZQUFRLEVBQUUsU0FBbUIsSUFBSUMsUUFBSjtBQVJJLEdBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxN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QUssRUFBRTtBQUFDOEIsYUFBTyxFQUFFLE1BQVY7QUFBa0JDLGtCQUFZLEVBQUUsUUFBaEM7QUFBMENQLFdBQUssRUFBRTtBQUFqRCxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxpQkFBaUIsRUFEdEIsQ0FESixDQURKLENBREo7QUFTSCxDQTVJRDs7R0FBTS9CLGE7O0tBQUFBLGE7QUE4SVNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvdXBkYXRlLjlmMDg2NWUyYTA4MmUxZTU0OTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc0F1dGgsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCB1cGRhdGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuY29uc3QgUHJvZmlsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBvbGRQYXNzd29yZDogJycsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVzZXJEYXRhOiBwcm9jZXNzLmJyb3dzZXIgJiYgbmV3IEZvcm1EYXRhKClcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICB1c2VybmFtZSwgXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwYXNzd29yZCwgXHJcbiAgICAgICAgb2xkUGFzc3dvcmQsXHJcbiAgICAgICAgZXJyb3IsIFxyXG4gICAgICAgIHN1Y2Nlc3MsIFxyXG4gICAgICAgIGxvYWRpbmcsICBcclxuICAgICAgICB1c2VyRGF0YSBcclxuICAgIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICBnZXRQcm9maWxlKHRva2VuKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgdXNlckRhdGE6IG5ldyBGb3JtRGF0YSgpIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvL2xldCB1c2VyRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICB1c2VyRGF0YS5zZXQobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLnVzZXJEYXRhKTtcclxuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogdmFsdWUsIHVzZXJEYXRhLCBlcnJvcjogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICB1cGRhdGUodG9rZW4sIHVzZXJEYXRhKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEuZXJyb3InLCBkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVXNlcihkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcm9maWxlVXBkYXRlRm9ybSA9ICgpID0+IChcclxuICAgICAgICA8Zm9ybSBzdHlsZT17e3dpZHRoOiAnNzAwcHgnLCBwYWRkaW5nVG9wOiAnNTBweCcsIH19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDM5LCAzOSwgMzkpJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3VzZXJuYW1lJyl9IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAncmdiKDM5LCAzOSwgMzkpJywgd2lkdGg6ICc1cmVtJ319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBwbC0yIHByLTIgcGItMiBwdC0yJyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3JnYigzOSwgMzksIDM5KSd9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnb2xkUGFzc3dvcmQnKX0gdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e29sZFBhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzaG93U3VjY2VzcygpfVxyXG4gICAgICAgICAgICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICAgICAgICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIiBkaXNhYmxlZD17IXVzZXJuYW1lIHx8ICFuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyIG10LTInIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MgbXQtMicgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICBQcm9maWxlIFVwZGF0ZWRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8gbXQtMicgc3R5bGU9e3sgZGlzcGxheTogbG9hZGluZyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBwbGFjZUNvbnRlbnQ6ICdjZW50ZXInLCB3aWR0aDogJzgwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZVVwZGF0ZUZvcm0oKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVVcGRhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==