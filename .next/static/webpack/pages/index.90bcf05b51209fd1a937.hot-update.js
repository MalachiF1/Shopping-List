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
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/PriorityHigh */ "./node_modules/@material-ui/icons/PriorityHigh.js");
/* harmony import */ var _material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LowPriority */ "./node_modules/@material-ui/icons/LowPriority.js");
/* harmony import */ var _material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");


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
    setToken(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_14__["getCookie"])('token'));
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
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "main__card__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row col justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-1 placeCenter",
    onClick: boughtItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "pl-1 placeCenter",
    onClick: updateNote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 41
    }
  })))), urgent && __jsx("div", {
    className: "main__card__urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, __jsx("a", {
    title: "Urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "pr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
    defaultChecked: true,
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  }, __jsx(_material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      color: '#3dbcf6',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 49
    }
  }))))), !urgent && __jsx("div", {
    className: "main__card__urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, __jsx("a", {
    title: "Not Urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "pr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 41
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 45
    }
  }, __jsx(_material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      color: 'white',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 49
    }
  }))))), __jsx("div", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    onClick: plusAmount,
    style: {
      zIndex: '2'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
    style: {
      width: '20px',
      height: '20px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      fontSize: '17px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }))), __jsx("div", {
    onClick: minusAmount,
    style: {
      zIndex: '2'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["IconButton"], {
    style: {
      width: '20px',
      height: '20px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fontSize: '17px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }))))), __jsx("div", {
    className: "placeCenter row col-6 justify-content-start pl-0 pr-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col justify-content-start placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 33
    }
  }, __jsx("h3", {
    style: {
      "float": 'left'
    },
    className: "pt-1 pb-0 pl-1 pr-2 mb-0 font-weight-bold placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 37
    }
  }, amount, " ")), __jsx("a", {
    title: "Added by ".concat(item.postedBy, " ").concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 33
    }
  }, __jsx("h3", {
    style: {
      "float": 'left'
    },
    className: "pt-1 pb-0  pl-2  mb-0 font-weight-bold placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 37
    }
  }, name))))))), note && __jsx("div", {
    className: "main__card__info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 23
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pt-1 pl-2 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      marginBottom: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 29
    }
  }, "Note: ", note)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwiaXRlbSIsInVwZGF0ZVBhcmVudCIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJ1cmdlbnQiLCJub3RlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXQiLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJwbHVzQW1vdW50IiwidXBkYXRlSXRlbSIsInNsdWciLCJtaW51c0Ftb3VudCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVVcmdlbnQiLCJ1cGRhdGVOb3RlIiwibmV3Tm90ZSIsInByb21wdCIsImxlbmd0aCIsInNsaWNlIiwiYm91Z2h0SXRlbSIsImNvbG9yIiwiZm9udFNpemUiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInBvc3RlZEJ5IiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDZkMsc0RBQVEsQ0FBQyxFQUFELENBRE87QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUMzQkMsUUFEMkI7O0FBQUEsbUJBRWJGLHNEQUFRLENBQUM7QUFDakNHLFFBQUksRUFBRSxFQUQyQjtBQUVqQ0MsVUFBTSxFQUFFLENBRnlCO0FBR2pDQyxVQUFNLEVBQUUsS0FIeUI7QUFJ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLFNBQUssRUFBRTtBQUFDOEIsa0JBQVksRUFBRTtBQUFmLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF3QzlCLElBQXhDLENBREosQ0FEUixDQURNLENBcEVkLENBREo7QUE4RUgsQ0EzS0Q7O0dBQU1ULFE7O0tBQUFBLFE7QUE2S1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkwYmNmMDViNTEyMDlmZDFhOTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVwZGF0ZUl0ZW0sIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2l0ZW0nO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJztcclxuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DcmVhdGUnO1xyXG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xyXG5pbXBvcnQgQXJyb3dVcHdhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZCc7XHJcbmltcG9ydCBQcmlvcml0eUhpZ2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Qcmlvcml0eUhpZ2gnO1xyXG5pbXBvcnQgTG93UHJpb3JpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb3dQcmlvcml0eSc7XHJcblxyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ3JjLWNoZWNrYm94JztcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcclxuXHJcbmNvbnN0IEl0ZW1DYXJkID0gKHsgaXRlbSwgdXBkYXRlUGFyZW50IH0pID0+IHtcclxuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBhbW91bnQ6IDAsXHJcbiAgICAgICAgdXJnZW50OiBmYWxzZSxcclxuICAgICAgICBub3RlOiAnJyxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgYW1vdW50LCB1cmdlbnQsIG5vdGUsIGVycm9yLCBzdWNjZXNzLCBsb2FkaW5nIH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUb2tlbihnZXRDb29raWUoJ3Rva2VuJykpO1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGl0ZW0uYW1vdW50LFxyXG4gICAgICAgICAgICB1cmdlbnQ6IGl0ZW0udXJnZW50LFxyXG4gICAgICAgICAgICBub3RlOiBpdGVtLm5vdGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdCgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHBsdXNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCArIDFcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCArIDFcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1pbnVzQW1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhbW91bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmVtb3ZlSXRlbSh7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWdcclxuICAgICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3JlbW92ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAtIDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgLSAxXHJcbiAgICAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB9IFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVVcmdlbnQgPSAoKSA9PiB7IFxyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgdXJnZW50OiAhdXJnZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgdXJnZW50OiAhdXJnZW50XHJcbiAgICAgICAgIH0sIHRva2VuKTtcclxuICAgICAgICB1cGRhdGVQYXJlbnQoaXRlbSwgJ3VyZ2VudCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVOb3RlID0gKCkgPT4geyBcclxuICAgICAgICBsZXQgbmV3Tm90ZSA9IHByb21wdCgnVXBkYXRlIE5vdGU6Jywgbm90ZSk7XHJcbiAgICAgICAgaWYgKG5ld05vdGUgJiYgbmV3Tm90ZS5sZW5ndGggPiA0MCkge1xyXG4gICAgICAgICAgICBuZXdOb3RlID0gbmV3Tm90ZS5zbGljZSgwLCA0MClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBub3RlOiBuZXdOb3RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1ZyxcclxuICAgICAgICAgICAgbm90ZTogbmV3Tm90ZVxyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYm91Z2h0SXRlbSA9ICgpID0+IHtcclxuICAgICAgICByZW1vdmVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAncmVtb3ZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVhZCBwYi0zIG1haW5fX2NhcmQnPlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nbWFpbl9fY2FyZF9fdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBwbGFjZUNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgY29sIGp1c3RpZnktY29udGVudC1lbmQnPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0xIHBsYWNlQ2VudGVyJyBvbkNsaWNrPXtib3VnaHRJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTEgcGxhY2VDZW50ZXInIG9uQ2xpY2s9e3VwZGF0ZU5vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VyZ2VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5fX2NhcmRfX3VyZ2VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPSdVcmdlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncHItMSc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZCBvbkNoYW5nZT17dG9nZ2xlVXJnZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGwtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlvcml0eUhpZ2hJY29uIHN0eWxlPXt7Y29sb3I6ICcjM2RiY2Y2JywgZm9udFNpemU6ICcxNXB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF1cmdlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluX19jYXJkX191cmdlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT0nTm90IFVyZ2VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwci0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9e3RvZ2dsZVVyZ2VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG93UHJpb3JpdHlJY29uIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3BsdXNBbW91bnR9IHN0eWxlPXt7ekluZGV4OiAnMid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4JywgekluZGV4OiAnMSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1Vwd2FyZEljb24gc3R5bGU9e3tmb250U2l6ZTogJzE3cHgnLCB6SW5kZXg6ICcxJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21pbnVzQW1vdW50fSBzdHlsZT17e3pJbmRleDogJzInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCcsIHpJbmRleDogJzEnfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uIHN0eWxlPXt7Zm9udFNpemU6ICcxN3B4JywgekluZGV4OiAnMSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGFjZUNlbnRlciByb3cgY29sLTYganVzdGlmeS1jb250ZW50LXN0YXJ0IHBsLTAgcHItMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGp1c3RpZnktY29udGVudC1zdGFydCBwbGFjZUNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2Zsb2F0OiAnbGVmdCd9fSBjbGFzc05hbWU9J3B0LTEgcGItMCBwbC0xIHByLTIgbWItMCBmb250LXdlaWdodC1ib2xkIHBsYWNlQ2VudGVyJz57YW1vdW50fSA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17YEFkZGVkIGJ5ICR7aXRlbS5wb3N0ZWRCeX0gJHttb21lbnQoaXRlbS5jcmVhdGVkQXQpLmZyb21Ob3coKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0J319IGNsYXNzTmFtZT0ncHQtMSBwYi0wICBwbC0yICBtYi0wIGZvbnQtd2VpZ2h0LWJvbGQgcGxhY2VDZW50ZXInPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge25vdGUgJiYgKDxkaXYgY2xhc3NOYW1lPSdtYWluX19jYXJkX19pbmZvJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMSBwbC0yIHBiLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcwcHgnfX0+Tm90ZToge25vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==