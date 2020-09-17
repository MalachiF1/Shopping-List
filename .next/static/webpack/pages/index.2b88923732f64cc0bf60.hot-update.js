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
  }, "Added by ", item.postedById, " ", moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwiaXRlbSIsInVwZGF0ZVBhcmVudCIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJ1cmdlbnQiLCJub3RlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXQiLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJwbHVzQW1vdW50IiwidXBkYXRlSXRlbSIsInNsdWciLCJtaW51c0Ftb3VudCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVVcmdlbnQiLCJ1cGRhdGVOb3RlIiwibmV3Tm90ZSIsInByb21wdCIsImxlbmd0aCIsInNsaWNlIiwiYm91Z2h0SXRlbSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZ0xlZnQiLCJwbGFjZUl0ZW1zIiwicGFkZGluZ1JpZ2h0IiwicG9zdGVkQnlJZCIsIm1vbWVudCIsImNyZWF0ZWRBdCIsImZyb21Ob3ciLCJhbGlnbkl0ZW1zIiwicGFkZGluZ1RvcCIsInBsYWNlQ29udGVudCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QjtBQUFBOztBQUFBLE1BQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxRQUQyQjs7QUFBQSxtQkFFYkYsc0RBQVEsQ0FBQztBQUNqQ0csUUFBSSxFQUFFLEVBRDJCO0FBRWpDQyxVQUFN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cy9pbmRleC4yYjg4OTIzNzMyZjY0Y2MwYmY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1cGRhdGVJdGVtLCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pdGVtJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XHJcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAncmMtY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5cclxuY29uc3QgSXRlbUNhcmQgPSAoeyBpdGVtLCB1cGRhdGVQYXJlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICB1cmdlbnQ6IGZhbHNlLFxyXG4gICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBhbW91bnQsIHVyZ2VudCwgbm90ZSwgZXJyb3IsIHN1Y2Nlc3MsIGxvYWRpbmcgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKGdldENvb2tpZSgndG9rZW4nKSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnQsXHJcbiAgICAgICAgICAgIHVyZ2VudDogaXRlbS51cmdlbnQsXHJcbiAgICAgICAgICAgIG5vdGU6IGl0ZW0ubm90ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgcGx1c0Ftb3VudCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICsgMVxyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWludXNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVJdGVtKHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1Z1xyXG4gICAgICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAncmVtb3ZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50IC0gMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAtIDFcclxuICAgICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVVyZ2VudCA9ICgpID0+IHsgXHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICB1cmdlbnQ6ICF1cmdlbnRcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICB1cmdlbnQ6ICF1cmdlbnRcclxuICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAndXJnZW50Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU5vdGUgPSAoKSA9PiB7IFxyXG4gICAgICAgIGxldCBuZXdOb3RlID0gcHJvbXB0KCdVcGRhdGUgTm90ZTonLCBub3RlKTtcclxuICAgICAgICBpZiAobmV3Tm90ZSAmJiBuZXdOb3RlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgICAgIG5ld05vdGUgPSBuZXdOb3RlLnNsaWNlKDAsIDQwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIG5vdGU6IG5ld05vdGVcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICBub3RlOiBuZXdOb3RlXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3VnaHRJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWdcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICdyZW1vdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWFkIHBiLTMgbWFpbl9fY2FyZCc+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdtYWluX19jYXJkX190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgdmVydGljYWxBbGlnbjogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCB2ZXJ0aWNhbEFsaWduOiAnY2VudGVyJ319IGNsYXNzTmFtZT0ncm93IGNvbC1tZC04Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00JyBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnMnJlbSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3B0LTEgcGItMiBtYi0wIGZvbnQtd2VpZ2h0LWJvbGQnPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnIHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCBwbGFjZUl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1JpZ2h0OiAnMTNyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTAgZm9udC13ZWlnaHQtYm9sZCc+QW1vdW50OiB7YW1vdW50fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMSBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3B0LTIgbWItMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkZWQgYnkge2l0ZW0ucG9zdGVkQnlJZH0ge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGNvbC1tZC00JyBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnOS41cmVtJ319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3BsdXNBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21pbnVzQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt1cmdlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJzdweCcsIHBhZGRpbmdMZWZ0OiAnMTVweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZCBvbkNoYW5nZT17dG9nZ2xlVXJnZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEnPlVyZ2VudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshdXJnZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmdUb3A6ICc3cHgnLCBwYWRkaW5nTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9e3RvZ2dsZVVyZ2VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbC0xJz5VcmdlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTMnIG9uQ2xpY2s9e3VwZGF0ZU5vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTMnIG9uQ2xpY2s9e2JvdWdodEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtub3RlICYmICg8ZGl2IGNsYXNzTmFtZT0nbWFpbl9fY2FyZF9faW5mbyBwbC0xJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcGwtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlQ29udGVudDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0zIHB0LTEgcGItMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcwcHgnfX0+Tm90ZToge25vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9