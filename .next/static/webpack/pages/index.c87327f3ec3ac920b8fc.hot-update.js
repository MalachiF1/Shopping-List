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
      paddingLeft: '1vw'
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
  }, "Added by ", item.postedBy, " ", moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwiaXRlbSIsInVwZGF0ZVBhcmVudCIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJ1cmdlbnQiLCJub3RlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXQiLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJwbHVzQW1vdW50IiwidXBkYXRlSXRlbSIsInNsdWciLCJtaW51c0Ftb3VudCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVVcmdlbnQiLCJ1cGRhdGVOb3RlIiwibmV3Tm90ZSIsInByb21wdCIsImxlbmd0aCIsInNsaWNlIiwiYm91Z2h0SXRlbSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwicGFkZGluZ0xlZnQiLCJwbGFjZUl0ZW1zIiwicGFkZGluZ1JpZ2h0IiwicG9zdGVkQnkiLCJtb21lbnQiLCJjcmVhdGVkQXQiLCJmcm9tTm93IiwiYWxpZ25JdGVtcyIsInBhZGRpbmdUb3AiLCJwbGFjZUNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDZkMsc0RBQVEsQ0FBQyxFQUFELENBRE87QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUMzQkMsUUFEMkI7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUM7QUFDakNHLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsVUFBTSxF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aW5kZXguYzg3MzI3ZjNlYzNhYzkyMGI4ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdXBkYXRlSXRlbSwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvaXRlbSc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJztcclxuaW1wb3J0IENyZWF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZSc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ3JjLWNoZWNrYm94JztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuXHJcbmNvbnN0IEl0ZW1DYXJkID0gKHsgaXRlbSwgdXBkYXRlUGFyZW50IH0pID0+IHtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgdXJnZW50OiBmYWxzZSxcclxuICAgICAgICBub3RlOiAnJyxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgYW1vdW50LCB1cmdlbnQsIG5vdGUsIGVycm9yLCBzdWNjZXNzLCBsb2FkaW5nIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUb2tlbihnZXRDb29raWUoJ3Rva2VuJykpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50LFxyXG4gICAgICAgICAgICB1cmdlbnQ6IGl0ZW0udXJnZW50LFxyXG4gICAgICAgICAgICBub3RlOiBpdGVtLm5vdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHBsdXNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCArIDFcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCArIDFcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1pbnVzQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhbW91bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlSXRlbSh7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWdcclxuICAgICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3JlbW92ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAtIDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgLSAxXHJcbiAgICAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB9IFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVVcmdlbnQgPSAoKSA9PiB7IFxyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgdXJnZW50OiAhdXJnZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgdXJnZW50OiAhdXJnZW50XHJcbiAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3VyZ2VudCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVOb3RlID0gKCkgPT4geyBcclxuICAgICAgICBsZXQgbmV3Tm90ZSA9IHByb21wdCgnVXBkYXRlIE5vdGU6Jywgbm90ZSk7XHJcbiAgICAgICAgaWYgKG5ld05vdGUgJiYgbmV3Tm90ZS5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgICAgICBuZXdOb3RlID0gbmV3Tm90ZS5zbGljZSgwLCA0MClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBub3RlOiBuZXdOb3RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgbm90ZTogbmV3Tm90ZVxyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm91Z2h0SXRlbSA9ICgpID0+IHtcclxuICAgICAgICByZW1vdmVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAncmVtb3ZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVhZCBwYi0zIG1haW5fX2NhcmQnPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nbWFpbl9fY2FyZF9fdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgdmVydGljYWxBbGlnbjogJ2NlbnRlcid9fSBjbGFzc05hbWU9J3JvdyBjb2wtbWQtOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCcgc3R5bGU9e3twYWRkaW5nTGVmdDogJzF2dyd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3B0LTEgcGItMiBtYi0wIGZvbnQtd2VpZ2h0LWJvbGQnPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnIHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCBwbGFjZUl0ZW1zOiAnY2VudGVyJywgcGFkZGluZ1JpZ2h0OiAnMTNyZW0nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTAgZm9udC13ZWlnaHQtYm9sZCc+QW1vdW50OiB7YW1vdW50fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMSBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3B0LTIgbWItMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkZWQgYnkge2l0ZW0ucG9zdGVkQnl9IHttb21lbnQoaXRlbS5jcmVhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wtbWQtNCcgc3R5bGU9e3twYWRkaW5nTGVmdDogJzkuNXJlbSd9fT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtwbHVzQW1vdW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXttaW51c0Ftb3VudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICB7dXJnZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmdUb3A6ICc3cHgnLCBwYWRkaW5nTGVmdDogJzE1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQgb25DaGFuZ2U9e3RvZ2dsZVVyZ2VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwbC0xJz5VcmdlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IXVyZ2VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nVG9wOiAnN3B4JywgcGFkZGluZ0xlZnQ6ICcxNXB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IG9uQ2hhbmdlPXt0b2dnbGVVcmdlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGwtMSc+VXJnZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0zJyBvbkNsaWNrPXt1cGRhdGVOb3RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0zJyBvbkNsaWNrPXtib3VnaHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7bm90ZSAmJiAoPGRpdiBjbGFzc05hbWU9J21haW5fX2NhcmRfX2luZm8gcGwtMSc+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHBsLTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2dyaWQnLCBwbGFjZUNvbnRlbnQ6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGwtMyBwdC0xIHBiLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMHB4J319Pk5vdGU6IHtub3RlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==