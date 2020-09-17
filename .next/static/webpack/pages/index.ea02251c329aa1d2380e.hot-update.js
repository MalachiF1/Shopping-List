webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/item */ "./actions/item.js");
/* harmony import */ var _components_item_ItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/item/ItemCard */ "./components/item/ItemCard.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var _item_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/Search */ "./components/item/Search.js");
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var _helpers_eventHub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/eventHub */ "./helpers/eventHub.js");
/* harmony import */ var _item_AddItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item/AddItem */ "./components/item/AddItem.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\malac\\OneDrive\\\u05E9\u05D5\u05DC\u05D7\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4\\My Stuff\\Programming\\My Projects\\shopping-list\\frontend\\components\\Main.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Main = function Main() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      allItems = _useState3[0],
      setAllItems = _useState3[1];

  var firstTime = true;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    initItems();

    if (firstTime) {
      _helpers_eventHub__WEBPACK_IMPORTED_MODULE_6__["default"].on('itemAdded', function () {
        initItems();
      });
      firstTime = false;
    }
  }, []);

  var initItems = function initItems() {
    var tempToken = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
    Object(_actions_item__WEBPACK_IMPORTED_MODULE_1__["getItems"])(tempToken).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setItems(data);
        setAllItems(data);
      }
    });
    setToken(tempToken);
  };

  var showItems = function showItems() {
    return items.map(function (item) {
      return __jsx("article", {
        key: item._id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }
      }, __jsx(_components_item_ItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: item,
        updateParent: updateItemsState,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }
      }));
    });
  };

  var handleUrgentToggle = function handleUrgentToggle() {
    if (document.getElementById('sort-urgent').checked) {
      setItems(items.filter(function (item) {
        if (item.urgent) {
          return true;
        } else {
          return false;
        }
      }));
    } else {
      setItems(allItems);
    }
  };

  var toggleSearchSort = function toggleSearchSort(returnedItems, status) {
    if (status) {
      setItems(returnedItems);
    } else {
      setItems(allItems);
    }
  };

  var updateItemsState = function updateItemsState(item, update) {
    if (update === 'remove') {
      setItems(items.filter(function (current) {
        if (current.name === item.name) {
          return false;
        } else {
          return true;
        }
      }));
      setAllItems(allItems.filter(function (current) {
        if (current.name === item.name) {
          return false;
        } else {
          return true;
        }
      }));
    } else if (update === 'urgent') {
      var i = items.indexOf(item);
      var j = allItems.indexOf(item);
      items[i].urgent = !items[i].urgent;
      handleUrgentToggle();
    }
  };

  var showDropDown = function showDropDown() {
    console.log('hello');
    var dropdown = document.getElementById('addItemDropdown');

    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  };

  return __jsx("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "main__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "Shopping List")), __jsx("div", {
    className: "row main__filters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "main__filters__search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_item_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updateParent: toggleSearchSort,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "ml-3 pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("label", {
    style: {
      display: 'flex',
      placeContent: 'center',
      placeItems: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 8
    }
  }, __jsx(rc_checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "sort-urgent",
    onChange: handleUrgentToggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "pl-1 pb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Sort Urgent")))), __jsx("hr", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: "main__title__dropdown mt-3 pb-0",
    onClick: showDropDown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 6
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, "Add Item")), __jsx("div", {
    id: "addItemDropdown",
    className: "main__title__dropdown__inner",
    style: {
      display: 'none'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, __jsx("hr", {
    className: "mt-0 pt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx(_item_AddItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    className: "ml-0 mr-0 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "main__body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 4
    }
  }, showItems()));
};

_s(Main, "yeLVdXOGuo0ygwypl8NvttWtl+8=");

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VTdGF0ZSIsInRva2VuIiwic2V0VG9rZW4iLCJpdGVtcyIsInNldEl0ZW1zIiwiYWxsSXRlbXMiLCJzZXRBbGxJdGVtcyIsImZpcnN0VGltZSIsInVzZUVmZmVjdCIsImluaXRJdGVtcyIsImV2ZW50SHViIiwib24iLCJ0ZW1wVG9rZW4iLCJnZXRDb29raWUiLCJnZXRJdGVtcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic2hvd0l0ZW1zIiwibWFwIiwiaXRlbSIsIl9pZCIsInVwZGF0ZUl0ZW1zU3RhdGUiLCJoYW5kbGVVcmdlbnRUb2dnbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsImZpbHRlciIsInVyZ2VudCIsInRvZ2dsZVNlYXJjaFNvcnQiLCJyZXR1cm5lZEl0ZW1zIiwic3RhdHVzIiwidXBkYXRlIiwiY3VycmVudCIsIm5hbWUiLCJpIiwiaW5kZXhPZiIsImoiLCJzaG93RHJvcERvd24iLCJkcm9wZG93biIsInN0eWxlIiwiZGlzcGxheSIsInBsYWNlQ29udGVudCIsInBsYWNlSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVRRixzREFBUSxDQUFDLEVBQUQsQ0FGaEI7QUFBQSxNQUVYRyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHWEssUUFIVztBQUFBLE1BR0RDLFdBSEM7O0FBS2xCLE1BQUlD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QUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELENBbkJELENBREQsQ0FERCxFQTJCQztBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JELEVBNEJDO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QnZCLFNBQVMsRUFBdEMsQ0E1QkQsQ0FERDtBQWdDQSxDQXJJRDs7R0FBTXJCLEk7O0tBQUFBLEk7QUF1SVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhMDIyNTFjMzI5YWExZDIzODBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRJdGVtcyB9IGZyb20gJy4uL2FjdGlvbnMvaXRlbSc7XHJcbmltcG9ydCBJdGVtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2l0ZW0vSXRlbUNhcmQnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi9hY3Rpb25zL2F1dGgnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vaXRlbS9TZWFyY2gnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAncmMtY2hlY2tib3gnO1xyXG5pbXBvcnQgZXZlbnRIdWIgZnJvbSAnLi4vaGVscGVycy9ldmVudEh1Yic7XHJcbmltcG9ydCBBZGRJdGVtIGZyb20gJy4vaXRlbS9BZGRJdGVtJztcclxuXHJcbmNvbnN0IE1haW4gPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2FsbEl0ZW1zLCBzZXRBbGxJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdGxldCBmaXJzdFRpbWUgPSB0cnVlO1xyXG5cdCAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aW5pdEl0ZW1zKCk7XHJcblx0XHRpZiAoZmlyc3RUaW1lKSB7XHJcblx0XHRcdGV2ZW50SHViLm9uKCdpdGVtQWRkZWQnLCAoKSA9PiB7XHJcblx0XHRcdFx0aW5pdEl0ZW1zKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRmaXJzdFRpbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblxyXG5cdGNvbnN0IGluaXRJdGVtcyA9ICgpID0+IHtcclxuXHRcdGNvbnN0IHRlbXBUb2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHRcdGdldEl0ZW1zKHRlbXBUb2tlbikudGhlbihkYXRhID0+IHtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRJdGVtcyhkYXRhKTtcclxuXHRcdFx0XHRzZXRBbGxJdGVtcyhkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRzZXRUb2tlbih0ZW1wVG9rZW4pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNob3dJdGVtcyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGFydGljbGUga2V5PXtpdGVtLl9pZH0+XHJcblx0XHRcdFx0XHQ8SXRlbUNhcmQgaXRlbT17aXRlbX0gdXBkYXRlUGFyZW50PXt1cGRhdGVJdGVtc1N0YXRlfSAvPlxyXG5cdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVVyZ2VudFRvZ2dsZSA9ICgpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydC11cmdlbnQnKS5jaGVja2VkKSB7XHJcblx0XHRcdHNldEl0ZW1zKFxyXG5cdFx0XHRcdGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcclxuXHRcdFx0XHRcdGlmIChpdGVtLnVyZ2VudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0SXRlbXMoYWxsSXRlbXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRvZ2dsZVNlYXJjaFNvcnQgPSAocmV0dXJuZWRJdGVtcywgc3RhdHVzKSA9PiB7XHJcblx0XHRpZiAoc3RhdHVzKSB7XHJcblx0XHRcdHNldEl0ZW1zKHJldHVybmVkSXRlbXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0SXRlbXMoYWxsSXRlbXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUl0ZW1zU3RhdGUgPSAoaXRlbSwgdXBkYXRlKSA9PiB7XHJcblx0XHRpZiAodXBkYXRlID09PSAncmVtb3ZlJykge1xyXG5cdFx0XHRzZXRJdGVtcyhcclxuXHRcdFx0XHRpdGVtcy5maWx0ZXIoY3VycmVudCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lID09PSBpdGVtLm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdFx0c2V0QWxsSXRlbXMoXHJcblx0XHRcdFx0YWxsSXRlbXMuZmlsdGVyKGN1cnJlbnQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSA9PT0gaXRlbS5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKHVwZGF0ZSA9PT0gJ3VyZ2VudCcpIHtcclxuXHRcdFx0Y29uc3QgaSA9IGl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcblx0XHRcdGNvbnN0IGogPSBhbGxJdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0XHRpdGVtc1tpXS51cmdlbnQgPSAhaXRlbXNbaV0udXJnZW50O1xyXG5cdFx0XHRoYW5kbGVVcmdlbnRUb2dnbGUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBzaG93RHJvcERvd24gPSAoKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnaGVsbG8nKVxyXG5cdFx0Y29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbURyb3Bkb3duJyk7XHJcblx0XHRpZiAoZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcblx0XHRcdGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSdibG9jayc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluX190aXRsZSc+XHJcblx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxoMj5TaG9wcGluZyBMaXN0PC9oMj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBtYWluX19maWx0ZXJzJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW5fX2ZpbHRlcnNfX3NlYXJjaCc+XHJcblx0XHRcdFx0XHRcdFx0PFNlYXJjaCB1cGRhdGVQYXJlbnQ9e3RvZ2dsZVNlYXJjaFNvcnR9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbWwtMyBwdC0yJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHBsYWNlQ29udGVudDogJ2NlbnRlcicsIHBsYWNlSXRlbXM6ICdjZW50ZXInLH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94IGlkPSdzb3J0LXVyZ2VudCcgb25DaGFuZ2U9e2hhbmRsZVVyZ2VudFRvZ2dsZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncGwtMSBwYi0xJz5Tb3J0IFVyZ2VudDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbWItMCcvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW5fX3RpdGxlX19kcm9wZG93biBtdC0zIHBiLTAnIG9uQ2xpY2s9e3Nob3dEcm9wRG93bn0+XHJcblx0XHRcdFx0XHRcdDxzcGFuPkFkZCBJdGVtPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGlkPSdhZGRJdGVtRHJvcGRvd24nIGNsYXNzTmFtZT0nbWFpbl9fdGl0bGVfX2Ryb3Bkb3duX19pbm5lcicgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT5cclxuXHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nbXQtMCBwdC0wJy8+XHJcblx0XHRcdFx0XHRcdDxBZGRJdGVtIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociBjbGFzc05hbWU9J21sLTAgbXItMCBtdC0yJy8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluX19ib2R5Jz57c2hvd0l0ZW1zKCl9PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==