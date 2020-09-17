webpackHotUpdate_N_E("pages/index",{

/***/ "./components/item/AddItem.js":
/*!************************************!*\
  !*** ./components/item/AddItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/item */ "./actions/item.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _helpers_eventHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/eventHub */ "./helpers/eventHub.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\components\\item\\AddItem.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var AddItem = function AddItem() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    amount: 1,
    note: '',
    urgent: false,
    error: false,
    success: false,
    loading: false
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var name = values.name,
      amount = values.amount,
      note = values.note,
      urgent = values.urgent,
      error = values.error,
      success = values.success,
      loading = values.loading;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  var init = function init() {
    setToken(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token'));
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      var value;
      value = e.target.value;

      if (name === 'urgent') {
        value = document.getElementById("urgent-checkbox").checked;
      }

      setValues(_objectSpread(_objectSpread({}, values), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "error", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "success", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "loading", false), _objectSpread2)));
    };
  };

  var handleSubmit = function handleSubmit() {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_4__["createItem"])({
      name: name,
      amount: amount,
      urgent: urgent,
      note: note
    }, token).then(function (data) {
      if (data.error) {
        console.log('data.error', data.error);
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          name: '',
          amount: 1,
          urgent: false,
          note: '',
          error: false,
          success: true,
          loading: false
        }));
        _helpers_eventHub__WEBPACK_IMPORTED_MODULE_7__["default"].trigger('itemAdded');
      }
    });
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert alert-danger mt-1",
      style: {
        display: error ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert alert-success mt-1",
      style: {
        display: success ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, "Item added");
  };

  var showLoading = function showLoading() {
    return __jsx("div", {
      className: "alert alert-info mt-1",
      style: {
        display: loading ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, "Loading...");
  };

  return __jsx("form", {
    className: "dropdown__addItem__form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "dropdown__addItem__input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "Name:"), __jsx("input", {
    onChange: handleChange('name'),
    type: "text",
    value: name,
    maxLength: "20",
    className: "dropdown__addItem__input__field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "dropdown__addItem__input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Amount:"), __jsx("input", {
    onChange: handleChange('amount'),
    type: "number",
    value: amount,
    min: "1",
    className: "dropdown__addItem__input__field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "dropdown__addItem__input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "Note:"), __jsx("input", {
    onChange: handleChange('note'),
    type: "text",
    value: note,
    maxLength: "40",
    className: "dropdown__addItem__input__field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "dropdown__addItem__input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("label", {
    style: {
      display: "flex",
      placeContent: 'center',
      placeItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "urgent-checkbox",
    checked: urgent,
    onChange: handleChange('urgent'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "pl-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "Urgent"))), __jsx("div", {
    className: "dropdown__addItem__input__btn mt-0",
    onClick: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, showSuccess(), showError(), showLoading()));
};

_s(AddItem, "QujcUyLAQUgO49oYS8wCt2+Bi2k=");

_c = AddItem;
/* harmony default export */ __webpack_exports__["default"] = (AddItem);

var _c;

$RefreshReg$(_c, "AddItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0FkZEl0ZW0uanMiXSwibmFtZXMiOlsiQWRkSXRlbSIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJub3RlIiwidXJnZW50IiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRDb29raWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsImNyZWF0ZUl0ZW0iLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJldmVudEh1YiIsInRyaWdnZXIiLCJzaG93RXJyb3IiLCJkaXNwbGF5Iiwic2hvd1N1Y2Nlc3MiLCJzaG93TG9hZGluZyIsInBsYWNlQ29udGVudCIsInBsYWNlSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVVRixzREFBUSxDQUFDO0FBQ2pDRyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFVBQU0sRUFBRSxDQUZ5QjtBQUdqQ0MsUUFBSSxFQUFFLEVBSDJCO0FBSWpDQyxVQUFNLEVBQUUsS0FKeUI7QUFLakNDLFNBQUssRUFBRSxLQUwwQjtBQU1qQ0MsV0FBTyxFQUFFLEtBTndCO0FBT2pDQyxXQUFPLEVBQUU7QUFQd0IsR0FBRCxDQUZsQjtBQUFBLE1BRVhDLE1BRlc7QUFBQSxNQUVIQyxTQUZHOztBQUFBLE1BWVZSLElBWlUs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0F6QkosRUE4Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVSxXQUFXLEVBRGhCLEVBRUtGLFNBQVMsRUFGZCxFQUdLRyxXQUFXLEVBSGhCLENBOUJKLENBREo7QUFzQ0gsQ0FsSEQ7O0dBQU1sQyxPOztLQUFBQSxPO0FBb0hTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTJiN2Q1ZmRhYjM5NjAzNzRjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2l0ZW0nO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAncmMtY2hlY2tib3gnO1xyXG5pbXBvcnQgZXZlbnRIdWIgZnJvbSAnLi4vLi4vaGVscGVycy9ldmVudEh1Yic7XHJcblxyXG5cclxuY29uc3QgQWRkSXRlbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgdXJnZW50OiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgYW1vdW50LCBub3RlLCB1cmdlbnQsIGVycm9yLCBzdWNjZXNzLCBsb2FkaW5nIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKGdldENvb2tpZSgndG9rZW4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBlID0+IHtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpZihuYW1lID09PSAndXJnZW50Jykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJnZW50LWNoZWNrYm94XCIpLmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiB2YWx1ZSwgZXJyb3I6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgICAgICBjcmVhdGVJdGVtKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgICAgIHVyZ2VudDogdXJnZW50LFxyXG4gICAgICAgICAgICBub3RlOiBub3RlXHJcbiAgICAgICAgfSwgdG9rZW4pLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhLmVycm9yJywgZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICB1cmdlbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50SHViLnRyaWdnZXIoJ2l0ZW1BZGRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtZGFuZ2VyIG10LTEnIHN0eWxlPXt7IGRpc3BsYXk6IGVycm9yID8gJycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1N1Y2Nlc3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MgbXQtMScgc3R5bGU9e3sgZGlzcGxheTogc3VjY2VzcyA/ICcnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICBJdGVtIGFkZGVkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGVydCBhbGVydC1pbmZvIG10LTEnIHN0eWxlPXt7IGRpc3BsYXk6IGxvYWRpbmcgPyAnJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZHJvcGRvd25fX2FkZEl0ZW1fX2Zvcm0nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0Jz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OYW1lOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfSB0eXBlPSd0ZXh0JyB2YWx1ZT17bmFtZX0gbWF4TGVuZ3RoPScyMCcgY2xhc3NOYW1lPSdkcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2ZpZWxkJy8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duX19hZGRJdGVtX19pbnB1dCc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW1vdW50Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnYW1vdW50Jyl9IHR5cGU9J251bWJlcicgdmFsdWU9e2Ftb3VudH0gbWluPScxJyBjbGFzc05hbWU9J2Ryb3Bkb3duX19hZGRJdGVtX19pbnB1dF9fZmllbGQnLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0Jz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ob3RlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbm90ZScpfSB0eXBlPSd0ZXh0JyB2YWx1ZT17bm90ZX0gbWF4TGVuZ3RoPSc0MCcgY2xhc3NOYW1lPSdkcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2ZpZWxkJy8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duX19hZGRJdGVtX19pbnB1dCc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgcGxhY2VDb250ZW50OiAnY2VudGVyJywgcGxhY2VJdGVtczogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggaWQ9J3VyZ2VudC1jaGVja2JveCcgY2hlY2tlZD17dXJnZW50fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCd1cmdlbnQnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEgcGItMSc+VXJnZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2J0biBtdC0wJyBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZFNob3BwaW5nQ2FydEljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1N1Y2Nlc3MoKX1cclxuICAgICAgICAgICAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAgICAgICAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkSXRlbTsiXSwic291cmNlUm9vdCI6IiJ9