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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");


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
    setToken(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_11__["getCookie"])('token'));
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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "main__card__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-4",
    style: {
      paddingLeft: '1.5vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "pt-1 pb-2 mb-0 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, name)), __jsx("div", {
    className: "col-md-4",
    style: {
      display: 'grid',
      placeItems: 'center',
      paddingRight: '10vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mb-0 font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, "Amount: ", amount, " ")), __jsx("div", {
    className: "pt-1 col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "pt-2 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    }
  }, "Added by ", item.postedBy, " ", moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()))), __jsx("div", {
    className: "row col-md-4",
    style: {
      paddingLeft: '9vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: plusAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 24
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }))), __jsx("div", {
    onClick: minusAmount,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 24
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }))), urgent && __jsx("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      paddingTop: '0.5vh',
      paddingLeft: '1vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultChecked: true,
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }, "Urgent"))), !urgent && __jsx("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      paddingTop: '0.5vh',
      paddingLeft: '1vw'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 33
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, "Urgent"))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-3",
    onClick: updateNote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  })))), __jsx("div", {
    className: "pl-3",
    onClick: boughtItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 29
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  })))))), note && __jsx("div", {
    className: "main__card__info pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row pl-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-3 pt-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 29
    }
  }, __jsx("p", {
    style: {
      marginBottom: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
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

/***/ }),

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZS5qcyJdLCJuYW1lcyI6WyJJdGVtQ2FyZCIsIml0ZW0iLCJ1cGRhdGVQYXJlbnQiLCJ1c2VTdGF0ZSIsInRva2VuIiwic2V0VG9rZW4iLCJuYW1lIiwiYW1vdW50IiwidXJnZW50Iiwibm90ZSIsImVycm9yIiwic3VjY2VzcyIsImxvYWRpbmciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJpbml0IiwiZ2V0Q29va2llIiwidXNlRWZmZWN0IiwicGx1c0Ftb3VudCIsInVwZGF0ZUl0ZW0iLCJzbHVnIiwibWludXNBbW91bnQiLCJyZW1vdmVJdGVtIiwidG9nZ2xlVXJnZW50IiwidXBkYXRlTm90ZSIsIm5ld05vdGUiLCJwcm9tcHQiLCJsZW5ndGgiLCJzbGljZSIsImJvdWdodEl0ZW0iLCJkaXNwbGF5IiwidmVydGljYWxBbGlnbiIsInBhZGRpbmdMZWZ0IiwicGxhY2VJdGVtcyIsInBhZGRpbmdSaWdodCIsInBvc3RlZEJ5IiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsImFsaWduSXRlbXMiLCJwYWRkaW5nVG9wIiwicGxhY2VDb250ZW50IiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QjtBQUFBOztBQUFBLE1BQXpCQyxJQUF5QixRQUF6QkEsSUFBeUI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNC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LENBdEtEOztHQUFNVCxROztLQUFBQSxRO0FBd0tTQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODFkOTE4YjNkNGEzOWJlODQyZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdXBkYXRlSXRlbSwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaXRlbSc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcclxuaW1wb3J0IENyZWF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZSc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tICdyYy1jaGVja2JveCc7XHJcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XHJcblxyXG5jb25zdCBJdGVtQ2FyZCA9ICh7IGl0ZW0sIHVwZGF0ZVBhcmVudCB9KSA9PiB7XHJcbiAgICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgYW1vdW50OiAwLFxyXG4gICAgICAgIHVyZ2VudDogZmFsc2UsXHJcbiAgICAgICAgbm90ZTogJycsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IG5hbWUsIGFtb3VudCwgdXJnZW50LCBub3RlLCBlcnJvciwgc3VjY2VzcywgbG9hZGluZyB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4oZ2V0Q29va2llKCd0b2tlbicpKTtcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgYW1vdW50OiBpdGVtLmFtb3VudCxcclxuICAgICAgICAgICAgdXJnZW50OiBpdGVtLnVyZ2VudCxcclxuICAgICAgICAgICAgbm90ZTogaXRlbS5ub3RlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBwbHVzQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKyAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKyAxXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtaW51c0Ftb3VudCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYW1vdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnXHJcbiAgICAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICdyZW1vdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgLSAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50IC0gMVxyXG4gICAgICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgfSBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlVXJnZW50ID0gKCkgPT4geyBcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIHVyZ2VudDogIXVyZ2VudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIHVyZ2VudDogIXVyZ2VudFxyXG4gICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICd1cmdlbnQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdXBkYXRlTm90ZSA9ICgpID0+IHsgXHJcbiAgICAgICAgbGV0IG5ld05vdGUgPSBwcm9tcHQoJ1VwZGF0ZSBOb3RlOicsIG5vdGUpO1xyXG4gICAgICAgIGlmIChuZXdOb3RlICYmIG5ld05vdGUubGVuZ3RoID4gNDApIHtcclxuICAgICAgICAgICAgbmV3Tm90ZSA9IG5ld05vdGUuc2xpY2UoMCwgNDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgbm90ZTogbmV3Tm90ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIG5vdGU6IG5ld05vdGVcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJvdWdodEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1Z1xyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3JlbW92ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlYWQgcGItMyBtYWluX19jYXJkJz5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J21haW5fX2NhcmRfX3RpdGxlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCB2ZXJ0aWNhbEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInfX0gY2xhc3NOYW1lPSdyb3cgY29sLW1kLTgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnIHN0eWxlPXt7cGFkZGluZ0xlZnQ6ICcxLjV2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3B0LTEgcGItMiBtYi0wIGZvbnQtd2VpZ2h0LWJvbGQnPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnIHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCBwbGFjZUl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1JpZ2h0OiAnMTB2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItMCBmb250LXdlaWdodC1ib2xkJz5BbW91bnQ6IHthbW91bnR9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC0xIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHQtMiBtYi0wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRlZCBieSB7aXRlbS5wb3N0ZWRCeX0ge21vbWVudChpdGVtLmNyZWF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGNvbC1tZC00JyBzdHlsZT17e3BhZGRpbmdMZWZ0OiAnOXZ3J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3BsdXNBbW91bnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21pbnVzQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt1cmdlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJzAuNXZoJywgcGFkZGluZ0xlZnQ6ICcxdncnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQgb25DaGFuZ2U9e3RvZ2dsZVVyZ2VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbC0xJz5VcmdlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXVyZ2VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nVG9wOiAnMC41dmgnLCBwYWRkaW5nTGVmdDogJzF2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBvbkNoYW5nZT17dG9nZ2xlVXJnZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEnPlVyZ2VudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMycgb25DbGljaz17dXBkYXRlTm90ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMycgb25DbGljaz17Ym91Z2h0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtub3RlICYmICg8ZGl2IGNsYXNzTmFtZT0nbWFpbl9fY2FyZF9faW5mbyBwbC0xJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcGwtMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZ3JpZCcsIHBsYWNlQ29udGVudDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0zIHB0LTEgcGItMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcwcHgnfX0+Tm90ZToge25vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtQ2FyZDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTYgMTljMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0yVjdINnYxMnpNMTkgNGgtMy41bC0xLTFoLTVsLTEgMUg1djJoMTRWNHpcIlxufSksICdEZWxldGUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==