webpackHotUpdate_N_E("pages/index",{

/***/ "./components/item/ItemCard.js":
/*!*************************************!*\
  !*** ./components/item/ItemCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/item */ "./actions/item.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CheckCircle */ "./node_modules/@material-ui/icons/CheckCircle.js");
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\components\\item\\ItemCard.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var ItemCard = function ItemCard(_ref) {
  _s();

  var item = _ref.item,
      updateParent = _ref.updateParent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: '',
    amount: 0,
    urgent: false,
    note: '',
    error: false,
    success: false,
    loading: false
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var name = values.name,
      amount = values.amount,
      urgent = values.urgent,
      note = values.note,
      error = values.error,
      success = values.success,
      loading = values.loading;

  var init = function init() {
    setToken(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_10__["getCookie"])('token'));
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      name: item.name,
      amount: item.amount,
      urgent: item.urgent,
      note: item.note
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    init();
  }, []);

  var plusAmount = function plusAmount() {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      amount: amount + 1
    }));
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["updateItem"])({
      slug: item.slug,
      amount: amount + 1
    }, token);
  };

  var minusAmount = function minusAmount() {
    if (amount === 1) {
      Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["removeItem"])({
        slug: item.slug
      }, token);
      updateParent(item, 'remove');
    } else {
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        amount: amount - 1
      }));
      Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["updateItem"])({
        slug: item.slug,
        amount: amount - 1
      }, token);
    }
  };

  var toggleUrgent = function toggleUrgent() {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      urgent: !urgent
    }));
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["updateItem"])({
      slug: item.slug,
      urgent: !urgent
    }, token);
    updateParent(item, 'urgent');
  };

  var updateNote = function updateNote() {
    var newNote = prompt('Update Note:', note);

    if (newNote && newNote.length > 40) {
      newNote = newNote.slice(0, 40);
    }

    setValues(_objectSpread(_objectSpread({}, values), {}, {
      note: newNote
    }));
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["updateItem"])({
      slug: item.slug,
      note: newNote
    }, token);
  };

  var boughtItem = function boughtItem() {
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_3__["removeItem"])({
      slug: item.slug
    }, token);
    updateParent(item, 'remove');
  };

  return __jsx("div", {
    className: "lead pb-3 main__card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "main__card__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    style: {
      display: 'flex',
      verticalAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      verticalAlign: 'center'
    },
    className: "row col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-4",
    style: {
      paddingLeft: '2rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "pt-1 pb-2 mb-0 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, name)), __jsx("div", {
    className: "col-md-4",
    style: {
      display: 'grid',
      placeItems: 'center',
      paddingRight: '13rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mb-0 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, "Amount: ", amount, " ")), __jsx("div", {
    className: "pt-1 col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "pt-2 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, "Added by ", item.postedById.username, " ", moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()))), __jsx("div", {
    className: "row col-md-4",
    style: {
      paddingLeft: '9.5rem'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: plusAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 24
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }))), __jsx("div", {
    onClick: minusAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 24
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }))), urgent && __jsx("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      paddingTop: '7px',
      paddingLeft: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultChecked: true,
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }, "Urgent"))), !urgent && __jsx("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      paddingTop: '7px',
      paddingLeft: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }, "Urgent"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-3",
    onClick: updateNote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  })))), __jsx("div", {
    className: "pl-3",
    onClick: boughtItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  })))))), note && __jsx("div", {
    className: "main__card__info pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      display: 'grid',
      placeContent: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-3 pt-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, __jsx("p", {
    style: {
      marginBottom: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 33
    }
  }, "Note: ", note)))))));
};

_s(ItemCard, "ClzDwxz88gCVTatWGr09IrZYDX8=");

_c = ItemCard;
/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

var _c;

$RefreshReg$(_c, "ItemCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwiaXRlbSIsInVwZGF0ZVBhcmVudCIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJ1cmdlbnQiLCJub3RlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXQiLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJwbHVzQW1vdW50IiwidXBkYXRlSXRlbSIsInNsdWciLCJtaW51c0Ftb3VudCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVVcmdlbnQiLCJ1cGRhdGVOb3RlIiwibmV3Tm90ZSIsInByb21wdCIsImxlbmd0aCIsInNsaWNlIiwiYm91Z2h0SXRlbSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZ0xlZnQiLCJwbGFjZUl0ZW1zIiwicGFkZGluZ1JpZ2h0IiwicG9zdGVkQnlJZCIsInVzZXJuYW1lIiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImFsaWduSXRlbXMiLCJwYWRkaW5nVG9wIiwicGxhY2VDb250ZW50IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2ZDLHNEQUFRLENBQUMsRUFBRCxDQURPO0FBQUEsTUFDbENDLEtBRGtDO0FBQUEsTUFDM0JDLFFBRDJCOztBQUFBLG1CQUViRixzREFBUSxDQUFDO0FBQ2pDRyxRQUFJLEVBQUUsRUFEMkI7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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2MTkxYmQyNDBmMTlhN2YxYjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVwZGF0ZUl0ZW0sIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2l0ZW0nO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DcmVhdGUnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdyYy1jaGVja2JveCc7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcblxyXG5jb25zdCBJdGVtQ2FyZCA9ICh7IGl0ZW0sIHVwZGF0ZVBhcmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgIHVyZ2VudDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IG5hbWUsIGFtb3VudCwgdXJnZW50LCBub3RlLCBlcnJvciwgc3VjY2VzcywgbG9hZGluZyB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4oZ2V0Q29va2llKCd0b2tlbicpKTtcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudCxcclxuICAgICAgICAgICAgdXJnZW50OiBpdGVtLnVyZ2VudCxcclxuICAgICAgICAgICAgbm90ZTogaXRlbS5ub3RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBwbHVzQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKyAxXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtaW51c0Ftb3VudCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYW1vdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnXHJcbiAgICAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICdyZW1vdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgLSAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50IC0gMVxyXG4gICAgICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVXJnZW50ID0gKCkgPT4geyBcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIHVyZ2VudDogIXVyZ2VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIHVyZ2VudDogIXVyZ2VudFxyXG4gICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICd1cmdlbnQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlTm90ZSA9ICgpID0+IHsgXHJcbiAgICAgICAgbGV0IG5ld05vdGUgPSBwcm9tcHQoJ1VwZGF0ZSBOb3RlOicsIG5vdGUpO1xyXG4gICAgICAgIGlmIChuZXdOb3RlICYmIG5ld05vdGUubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgbmV3Tm90ZSA9IG5ld05vdGUuc2xpY2UoMCwgNDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgbm90ZTogbmV3Tm90ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIG5vdGU6IG5ld05vdGVcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJvdWdodEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1Z1xyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3JlbW92ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlYWQgcGItMyBtYWluX19jYXJkJz5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J21haW5fX2NhcmRfX3RpdGxlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCB2ZXJ0aWNhbEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInfX0gY2xhc3NOYW1lPSdyb3cgY29sLW1kLTgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnIHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcycmVtJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ncHQtMSBwYi0yIG1iLTAgZm9udC13ZWlnaHQtYm9sZCc+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCcgc3R5bGU9e3tkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nUmlnaHQ6ICcxM3JlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItMCBmb250LXdlaWdodC1ib2xkJz5BbW91bnQ6IHthbW91bnR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC0xIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHQtMiBtYi0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRlZCBieSB7aXRlbS5wb3N0ZWRCeUlkLnVzZXJuYW1lfSB7bW9tZW50KGl0ZW0uY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgY29sLW1kLTQnIHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICc5LjVyZW0nfX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cGx1c0Ftb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17bWludXNBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3VyZ2VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nVG9wOiAnN3B4JywgcGFkZGluZ0xlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkIG9uQ2hhbmdlPXt0b2dnbGVVcmdlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGwtMSc+VXJnZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyF1cmdlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJzdweCcsIHBhZGRpbmdMZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dG9nZ2xlVXJnZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEnPlVyZ2VudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMycgb25DbGljaz17dXBkYXRlTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMycgb25DbGljaz17Ym91Z2h0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge25vdGUgJiYgKDxkaXYgY2xhc3NOYW1lPSdtYWluX19jYXJkX19pbmZvIHBsLTEnPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBwbC0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJywgcGxhY2VDb250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTMgcHQtMSBwYi0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpbkJvdHRvbTogJzBweCd9fT5Ob3RlOiB7bm90ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1DYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=