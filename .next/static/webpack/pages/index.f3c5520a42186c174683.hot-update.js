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
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PriorityHigh */ "./node_modules/@material-ui/icons/PriorityHigh.js");
/* harmony import */ var _material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LowPriority */ "./node_modules/@material-ui/icons/LowPriority.js");
/* harmony import */ var _material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");


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
    setToken(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token'));
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("header", {
    className: "main__card__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row col justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "pl-1 placeCenter",
    onClick: boughtItem,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "pl-1 placeCenter",
    onClick: updateNote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }))), urgent && __jsx("div", {
    className: "main__card__urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, __jsx("a", {
    title: "Urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "pr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    defaultChecked: true,
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 45
    }
  }, __jsx(_material_ui_icons_PriorityHigh__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      color: '#3dbcf6',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 49
    }
  }))))), !urgent && __jsx("div", {
    className: "main__card__urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, __jsx("a", {
    title: "Not Urgent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }, __jsx("label", {
    className: "pr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 41
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChange: toggleUrgent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 45
    }
  }), __jsx("span", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 45
    }
  }, __jsx(_material_ui_icons_LowPriority__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      color: 'white',
      fontSize: '15px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 49
    }
  }))))), __jsx("div", {
    className: "pl-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    style: {
      width: '20px',
      height: '20px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  }, __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: '17px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 154,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    style: {
      width: '20px',
      height: '20px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 37
    }
  }, __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: '17px',
      zIndex: '1'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 41
    }
  }))))), __jsx("div", {
    className: "placeCenter row col-6 justify-content-start pl-0 pr-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col justify-content-start placeCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
      lineNumber: 164,
      columnNumber: 37
    }
  }, amount, " ")), __jsx("a", {
    title: "Added by ".concat(item.postedBy, " ").concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(item.createdAt).fromNow()),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 167,
      columnNumber: 37
    }
  }, name))))))), note && __jsx("div", {
    className: "main__card__info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 23
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pt-1 pl-2 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, __jsx("p", {
    style: {
      marginBottom: '0px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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

/***/ }),

/***/ "./node_modules/@material-ui/icons/Add.js":
false,

/***/ "./node_modules/@material-ui/icons/Remove.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pdGVtL0l0ZW1DYXJkLmpzIl0sIm5hbWVzIjpbIkl0ZW1DYXJkIiwiaXRlbSIsInVwZGF0ZVBhcmVudCIsInVzZVN0YXRlIiwidG9rZW4iLCJzZXRUb2tlbiIsIm5hbWUiLCJhbW91bnQiLCJ1cmdlbnQiLCJub3RlIiwiZXJyb3IiLCJzdWNjZXNzIiwibG9hZGluZyIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXQiLCJnZXRDb29raWUiLCJ1c2VFZmZlY3QiLCJwbHVzQW1vdW50IiwidXBkYXRlSXRlbSIsInNsdWciLCJtaW51c0Ftb3VudCIsInJlbW92ZUl0ZW0iLCJ0b2dnbGVVcmdlbnQiLCJ1cGRhdGVOb3RlIiwibmV3Tm90ZSIsInByb21wdCIsImxlbmd0aCIsInNsaWNlIiwiYm91Z2h0SXRlbSIsImNvbG9yIiwiZm9udFNpemUiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInBvc3RlZEJ5IiwibW9tZW50IiwiY3JlYXRlZEF0IiwiZnJvbU5vdyIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ2ZDLHNEQUFRLENBQUMsRUFBRCxDQURPO0FBQUEsTUFDbENDLEtBRGtDO0FBQUEsTUFDM0JDLFFBRDJCOztBQUFBLG1CQUViRixzREFBUSxDQUFDO0FBQ2pDRyxRQUFJLEVBQUUsRUFEMkI7QUFFakNDLFVBQU0sRUFBRSxDQUZ5QjtBQUdqQ0MsVUFBTSxFQUFFLEtBSHlCO0FBSWpDQyxRQUFJLEVBQUUs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QUU7QUFBZixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBd0M5QixJQUF4QyxDQURKLENBRFIsQ0FETSxDQWxFZCxDQURKO0FBNEVILENBektEOztHQUFNVCxROztLQUFBQSxRO0FBMktTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mM2M1NTIwYTQyMTg2YzE3NDY4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1cGRhdGVJdGVtLCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9pdGVtJztcclxuaW1wb3J0IENyZWF0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZSc7XHJcbmltcG9ydCBBcnJvd0Rvd253YXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZCc7XHJcbmltcG9ydCBBcnJvd1Vwd2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93VXB3YXJkJztcclxuaW1wb3J0IFByaW9yaXR5SGlnaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ByaW9yaXR5SGlnaCc7XHJcbmltcG9ydCBMb3dQcmlvcml0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvd1ByaW9yaXR5JztcclxuXHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAncmMtY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xyXG5cclxuY29uc3QgSXRlbUNhcmQgPSAoeyBpdGVtLCB1cGRhdGVQYXJlbnQgfSkgPT4ge1xyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGFtb3VudDogMCxcclxuICAgICAgICB1cmdlbnQ6IGZhbHNlLFxyXG4gICAgICAgIG5vdGU6ICcnLFxyXG4gICAgICAgIGVycm9yOiBmYWxzZSxcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lLCBhbW91bnQsIHVyZ2VudCwgbm90ZSwgZXJyb3IsIHN1Y2Nlc3MsIGxvYWRpbmcgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKGdldENvb2tpZSgndG9rZW4nKSk7XHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGFtb3VudDogaXRlbS5hbW91bnQsXHJcbiAgICAgICAgICAgIHVyZ2VudDogaXRlbS51cmdlbnQsXHJcbiAgICAgICAgICAgIG5vdGU6IGl0ZW0ubm90ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgcGx1c0Ftb3VudCA9ICgpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICsgMVxyXG4gICAgICAgIH0sIHRva2VuKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbWludXNBbW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZW1vdmVJdGVtKHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IGl0ZW0uc2x1Z1xyXG4gICAgICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAncmVtb3ZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50IC0gMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdXBkYXRlSXRlbSh7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWcsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAtIDFcclxuICAgICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVVyZ2VudCA9ICgpID0+IHsgXHJcbiAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICB1cmdlbnQ6ICF1cmdlbnRcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICB1cmdlbnQ6ICF1cmdlbnRcclxuICAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgICAgIHVwZGF0ZVBhcmVudChpdGVtLCAndXJnZW50Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU5vdGUgPSAoKSA9PiB7IFxyXG4gICAgICAgIGxldCBuZXdOb3RlID0gcHJvbXB0KCdVcGRhdGUgTm90ZTonLCBub3RlKTtcclxuICAgICAgICBpZiAobmV3Tm90ZSAmJiBuZXdOb3RlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICAgICAgICAgIG5ld05vdGUgPSBuZXdOb3RlLnNsaWNlKDAsIDQwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIG5vdGU6IG5ld05vdGVcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVJdGVtKHtcclxuICAgICAgICAgICAgc2x1ZzogaXRlbS5zbHVnLFxyXG4gICAgICAgICAgICBub3RlOiBuZXdOb3RlXHJcbiAgICAgICAgfSwgdG9rZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBib3VnaHRJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUl0ZW0oe1xyXG4gICAgICAgICAgICBzbHVnOiBpdGVtLnNsdWdcclxuICAgICAgICB9LCB0b2tlbik7XHJcbiAgICAgICAgdXBkYXRlUGFyZW50KGl0ZW0sICdyZW1vdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWFkIHBiLTMgbWFpbl9fY2FyZCc+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdtYWluX19jYXJkX190aXRsZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHBsYWNlQ2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBjb2wganVzdGlmeS1jb250ZW50LWVuZCc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTEgcGxhY2VDZW50ZXInIG9uQ2xpY2s9e2JvdWdodEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsLTEgcGxhY2VDZW50ZXInIG9uQ2xpY2s9e3VwZGF0ZU5vdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VyZ2VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5fX2NhcmRfX3VyZ2VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPSdVcmdlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncHItMSc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZCBvbkNoYW5nZT17dG9nZ2xlVXJnZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGwtMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmlvcml0eUhpZ2hJY29uIHN0eWxlPXt7Y29sb3I6ICcjM2RiY2Y2JywgZm9udFNpemU6ICcxNXB4J319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyF1cmdlbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluX19jYXJkX191cmdlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT0nTm90IFVyZ2VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdwci0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9e3RvZ2dsZVVyZ2VudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG93UHJpb3JpdHlJY29uIHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMTVweCd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbC0xJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3BsdXNBbW91bnR9IHN0eWxlPXt7ekluZGV4OiAnMid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDogJzIwcHgnLCBoZWlnaHQ6ICcyMHB4JywgekluZGV4OiAnMSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1Vwd2FyZEljb24gc3R5bGU9e3tmb250U2l6ZTogJzE3cHgnLCB6SW5kZXg6ICcxJ319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e21pbnVzQW1vdW50fSBzdHlsZT17e3pJbmRleDogJzInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6ICcyMHB4JywgaGVpZ2h0OiAnMjBweCcsIHpJbmRleDogJzEnfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93bndhcmRJY29uIHN0eWxlPXt7Zm9udFNpemU6ICcxN3B4JywgekluZGV4OiAnMSd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbGFjZUNlbnRlciByb3cgY29sLTYganVzdGlmeS1jb250ZW50LXN0YXJ0IHBsLTAgcHItMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGp1c3RpZnktY29udGVudC1zdGFydCBwbGFjZUNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17e2Zsb2F0OiAnbGVmdCd9fSBjbGFzc05hbWU9J3B0LTEgcGItMCBwbC0xIHByLTIgbWItMCBmb250LXdlaWdodC1ib2xkIHBsYWNlQ2VudGVyJz57YW1vdW50fSA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17YEFkZGVkIGJ5ICR7aXRlbS5wb3N0ZWRCeX0gJHttb21lbnQoaXRlbS5jcmVhdGVkQXQpLmZyb21Ob3coKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0J319IGNsYXNzTmFtZT0ncHQtMSBwYi0wICBwbC0yICBtYi0wIGZvbnQtd2VpZ2h0LWJvbGQgcGxhY2VDZW50ZXInPntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge25vdGUgJiYgKDxkaXYgY2xhc3NOYW1lPSdtYWluX19jYXJkX19pbmZvJz5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtMSBwbC0yIHBiLTEnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcwcHgnfX0+Tm90ZToge25vdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==