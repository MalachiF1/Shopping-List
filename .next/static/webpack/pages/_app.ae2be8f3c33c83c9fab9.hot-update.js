webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/static/css/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./public/static/css/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* hides arrows on number inputs */\r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=number] { \r\n    -moz-appearance: textfield;\r\n    -webkit-appearance: textfield;\r\n            appearance: textfield;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n}\r\n\r\n/* progress bar */\r\n#nprogress .bar {\r\n    height: 3px !important;\r\n}\r\n\r\n\r\n/* the index page */\r\n.app {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100vh;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n}\r\n\r\n.app__body {\r\n    display: flex;\r\n    background-color: rgb(44, 44, 44);\r\n    color: white;\r\n    height: 85vh;\r\n    width: 80vw;\r\n    box-shadow: -1px 4px 30px -2px rgba(0, 0, 0, 0.75);\r\n    border-radius: 13px;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color:rgba(50, 50, 50, 0.9);\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n/* index page list */\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 1; \r\n    overflow-x: hidden;\r\n}\r\n\r\n.main__title {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    place-content: center;\r\n}\r\n\r\n.main__filters {\r\n    display: flex;\r\n    place-items: center;\r\n    place-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.main__filters__search {\r\n    background-color: rgb(80, 80, 80);\r\n    border-radius: 2rem;\r\n    height: 5.2vh;\r\n    width: 17rem;\r\n}\r\n\r\n.main__filters__search__searchbar {\r\n    border-radius: 1.2rem;\r\n    border: none;\r\n    outline-width: 0;\r\n    height: 2.38rem;\r\n    width: 13.5rem;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n}\r\n\r\n\r\n/* addItem dropdown */\r\n\r\n.main__title__dropdown {\r\n    width: 100vw;\r\n    height: 2rem;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    background-color: rgb(80, 80, 80);\r\n    cursor: pointer;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.main__title__dropdown span {\r\n   padding-bottom: 20px;\r\n   font-size: 20px;\r\n}\r\n\r\n.main__title__dropdown__inner {\r\n    background-color: rgb(80, 80, 80);\r\n}\r\n\r\n.dropdown__addItem__form {\r\n    display: grid;\r\n    place-items: center;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown__addItem__input {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    padding: 10px;\r\n}\r\n\r\n.dropdown__addItem__input__btn {\r\n    margin-top: 20px;\r\n    margin-bottom: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    border-radius: 2rem;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.dropdown__addItem__input__field {\r\n    border: none;\r\n    border-radius: 15px;\r\n    outline-width: 0;\r\n    margin-left: 10px;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n    height: 2.15rem;\r\n    width: 13rem;\r\n}\r\n\r\n.main__body {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* the item cards */\r\n.main__card__title {\r\n    font-size: 1.15rem;\r\n    background-color:rgb(80, 80, 80);\r\n}\r\n\r\n.main__card__info {\r\n    font-size: 1.1rem;\r\n    background-color: rgb(100, 100, 100);\r\n}\r\n\r\n/* signin page */\r\n\r\n.signinPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n}\r\n\r\n\r\n.signupPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n}\r\n\r\n.contactPage {\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.updatePage {\r\n    padding-top: 2rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.forgotPasswordPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.resetPasswordPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.activateAcountPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["C:/Users/malac/OneDrive/שולחן העבודה/My Stuff/Programming/My Projects/shopping-list/frontend/public/static/css/styles.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC;IACI,wBAAwB;AAC5B;AACA;IACI,0BAA0B;IAC1B,6BAAqB;YAArB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,iBAAiB;AACjB;IACI,sBAAsB;AAC1B;;;AAGA,mBAAmB;AACnB;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8EAA8E;AAClF;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,kDAAkD;IAClD,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,kCAAkC;IAClC,mBAAmB;AACvB;;;AAGA,oBAAoB;AACpB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,0BAA0B;IAC1B,wBAAwB;AAC5B;;;AAGA,qBAAqB;;AAErB;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,iCAAiC;IACjC,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;GACG,oBAAoB;GACpB,eAAe;AAClB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,0BAA0B;IAC1B,wBAAwB;IACxB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;AACxC;;AAEA,gBAAgB;;AAEhB;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,8EAA8E;IAC9E,YAAY;AAChB;;;AAGA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,8EAA8E;IAC9E,YAAY;AAChB;;AAEA;IACI,8EAA8E;IAC9E,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,8EAA8E;IAC9E,YAAY;IACZ,aAAa;AACjB","file":"styles.css","sourcesContent":["/* hides arrows on number inputs */\r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=number] { \r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n}\r\n\r\n/* progress bar */\r\n#nprogress .bar {\r\n    height: 3px !important;\r\n}\r\n\r\n\r\n/* the index page */\r\n.app {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100vh;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n}\r\n\r\n.app__body {\r\n    display: flex;\r\n    background-color: rgb(44, 44, 44);\r\n    color: white;\r\n    height: 85vh;\r\n    width: 80vw;\r\n    box-shadow: -1px 4px 30px -2px rgba(0, 0, 0, 0.75);\r\n    border-radius: 13px;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color:rgba(50, 50, 50, 0.9);\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n/* index page list */\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1; \r\n    overflow-x: hidden;\r\n}\r\n\r\n.main__title {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    place-content: center;\r\n}\r\n\r\n.main__filters {\r\n    display: flex;\r\n    place-items: center;\r\n    place-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.main__filters__search {\r\n    background-color: rgb(80, 80, 80);\r\n    border-radius: 2rem;\r\n    height: 5.2vh;\r\n    width: 17rem;\r\n}\r\n\r\n.main__filters__search__searchbar {\r\n    border-radius: 1.2rem;\r\n    border: none;\r\n    outline-width: 0;\r\n    height: 2.38rem;\r\n    width: 13.5rem;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n}\r\n\r\n\r\n/* addItem dropdown */\r\n\r\n.main__title__dropdown {\r\n    width: 100vw;\r\n    height: 2rem;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    background-color: rgb(80, 80, 80);\r\n    cursor: pointer;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.main__title__dropdown span {\r\n   padding-bottom: 20px;\r\n   font-size: 20px;\r\n}\r\n\r\n.main__title__dropdown__inner {\r\n    background-color: rgb(80, 80, 80);\r\n}\r\n\r\n.dropdown__addItem__form {\r\n    display: grid;\r\n    place-items: center;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown__addItem__input {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    padding: 10px;\r\n}\r\n\r\n.dropdown__addItem__input__btn {\r\n    margin-top: 20px;\r\n    margin-bottom: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    border-radius: 2rem;\r\n    padding: 10px;\r\n    background-color: white;\r\n}\r\n\r\n.dropdown__addItem__input__field {\r\n    border: none;\r\n    border-radius: 15px;\r\n    outline-width: 0;\r\n    margin-left: 10px;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n    height: 2.15rem;\r\n    width: 13rem;\r\n}\r\n\r\n.main__body {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* the item cards */\r\n.main__card__title {\r\n    font-size: 1.15rem;\r\n    background-color:rgb(80, 80, 80);\r\n}\r\n\r\n.main__card__info {\r\n    font-size: 1.1rem;\r\n    background-color: rgb(100, 100, 100);\r\n}\r\n\r\n/* signin page */\r\n\r\n.signinPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n}\r\n\r\n\r\n.signupPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n}\r\n\r\n.contactPage {\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.updatePage {\r\n    padding-top: 2rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.forgotPasswordPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.resetPasswordPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.activateAcountPage {\r\n    padding-top: 3rem;\r\n    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(34,34,34,1) 80%);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0YXRpYy9jc3Mvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHlGQUF5RixpQ0FBaUMsS0FBSyx3QkFBd0Isb0NBQW9DLHNDQUFzQyxzQ0FBc0MsS0FBSyxZQUFZLDRCQUE0QixLQUFLLCtDQUErQywrQkFBK0IsS0FBSywwQ0FBMEMsc0JBQXNCLDRCQUE0QixzQkFBc0IsdUZBQXVGLEtBQUssb0JBQW9CLHNCQUFzQiwwQ0FBMEMscUJBQXFCLHFCQUFxQixvQkFBb0IsMkRBQTJELDRCQUE0QiwwQkFBMEIsNEJBQTRCLDJDQUEyQyw0QkFBNEIsS0FBSyw0Q0FBNEMsc0JBQXNCLCtCQUErQixrQkFBa0IsNEJBQTRCLEtBQUssc0JBQXNCLDBCQUEwQiwyQkFBMkIsc0JBQXNCLDRCQUE0Qiw4QkFBOEIsS0FBSyx3QkFBd0Isc0JBQXNCLDRCQUE0Qiw4QkFBOEIseUJBQXlCLEtBQUssZ0NBQWdDLDBDQUEwQyw0QkFBNEIsc0JBQXNCLHFCQUFxQixLQUFLLDJDQUEyQyw4QkFBOEIscUJBQXFCLHlCQUF5Qix3QkFBd0IsdUJBQXVCLG1DQUFtQyxpQ0FBaUMsS0FBSyxrRUFBa0UscUJBQXFCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLDhCQUE4Qiw0QkFBNEIsMENBQTBDLHdCQUF3QiwyQkFBMkIsNEJBQTRCLEtBQUsscUNBQXFDLDRCQUE0Qix1QkFBdUIsS0FBSyx1Q0FBdUMsMENBQTBDLEtBQUssa0NBQWtDLHNCQUFzQiw0QkFBNEIsMEJBQTBCLDJCQUEyQixLQUFLLG1DQUFtQyx5QkFBeUIsMkJBQTJCLHNCQUFzQiw0QkFBNEIscUJBQXFCLHNCQUFzQixLQUFLLHdDQUF3Qyx5QkFBeUIsNEJBQTRCLHNCQUFzQiw0QkFBNEIscUJBQXFCLDRCQUE0QixzQkFBc0IsZ0NBQWdDLEtBQUss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QWtFLHFCQUFxQixxQkFBcUIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsNEJBQTRCLDBDQUEwQyx3QkFBd0IsMkJBQTJCLDRCQUE0QixLQUFLLHFDQUFxQyw0QkFBNEIsdUJBQXVCLEtBQUssdUNBQXVDLDBDQUEwQyxLQUFLLGtDQUFrQyxzQkFBc0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQ0FBbUMseUJBQXlCLDJCQUEyQixzQkFBc0IsNEJBQTRCLHFCQUFxQixzQkFBc0IsS0FBSyx3Q0FBd0MseUJBQXlCLDRCQUE0QixzQkFBc0IsNEJBQTRCLHFCQUFxQiw0QkFBNEIsc0JBQXNCLGdDQUFnQyxLQUFLLDBDQUEwQyxxQkFBcUIsNEJBQTRCLHlCQUF5QiwwQkFBMEIsbUNBQW1DLGlDQUFpQyx3QkFBd0IscUJBQXFCLEtBQUsscUJBQXFCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLEtBQUssb0RBQW9ELDJCQUEyQix5Q0FBeUMsS0FBSywyQkFBMkIsMEJBQTBCLDZDQUE2QyxLQUFLLDhDQUE4QywwQkFBMEIseUJBQXlCLHNCQUFzQix1RkFBdUYscUJBQXFCLEtBQUsseUJBQXlCLDBCQUEwQix5QkFBeUIsc0JBQXNCLHVGQUF1RixxQkFBcUIsS0FBSyxzQkFBc0IsdUZBQXVGLHFCQUFxQixzQkFBc0IsS0FBSyxxQkFBcUIsMEJBQTBCLHVGQUF1RixxQkFBcUIsc0JBQXNCLEtBQUssNkJBQTZCLDBCQUEwQix1RkFBdUYscUJBQXFCLHNCQUFzQixLQUFLLDRCQUE0QiwwQkFBMEIsdUZBQXVGLHFCQUFxQixzQkFBc0IsS0FBSyw2QkFBNkIsMEJBQTBCLHVGQUF1RixxQkFBcUIsc0JBQXNCLEtBQUssK0JBQStCO0FBQ3YvVztBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWUyYmU4ZjNjMzNjODNjOWZhYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGhpZGVzIGFycm93cyBvbiBudW1iZXIgaW5wdXRzICovXFxyXFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPW51bWJlcl0geyBcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9ncmVzcyBiYXIgKi9cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB0aGUgaW5kZXggcGFnZSAqL1xcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxufVxcclxcblxcclxcbi5hcHBfX2JvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCA0cHggMzBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6cmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBpbmRleCBwYWdlIGxpc3QgKi9cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDEgMTsgXFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX3RpdGxlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmlsdGVycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpbHRlcnNfX3NlYXJjaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1LjJ2aDtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmlsdGVyc19fc2VhcmNoX19zZWFyY2hiYXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyLjM4cmVtO1xcclxcbiAgICB3aWR0aDogMTMuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYWRkSXRlbSBkcm9wZG93biAqL1xcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd24ge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgODApO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX3RpdGxlX19kcm9wZG93biBzcGFuIHtcXHJcXG4gICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd25fX2lubmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgODApO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2Zvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM5cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2J0biB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMzlweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyLjE1cmVtO1xcclxcbiAgICB3aWR0aDogMTNyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluX19ib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGUgaXRlbSBjYXJkcyAqL1xcclxcbi5tYWluX19jYXJkX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoODAsIDgwLCA4MCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluX19jYXJkX19pbmZvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2lnbmluIHBhZ2UgKi9cXHJcXG5cXHJcXG4uc2lnbmluUGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDU1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNpZ251cFBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MCw2MCw2MCwxKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSA4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0UGFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjAsNjAsNjAsMSkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgODAlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDU1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlUGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmdvdFBhc3N3b3JkUGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0UGFzc3dvcmRQYWdlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjAsNjAsNjAsMSkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgODAlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDU1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZhdGVBY291bnRQYWdlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjAsNjAsNjAsMSkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgODAlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDU1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9tYWxhYy9PbmVEcml2ZS/XqdeV15zXl9efINeU16LXkdeV15PXlC9NeSBTdHVmZi9Qcm9ncmFtbWluZy9NeSBQcm9qZWN0cy9zaG9wcGluZy1saXN0L2Zyb250ZW5kL3B1YmxpYy9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhFQUE4RTtBQUNsRjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7OztBQUdBLG9CQUFvQjtBQUNwQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOzs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0dBQ0csb0JBQW9CO0dBQ3BCLGVBQWU7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEVBQThFO0lBQzlFLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEVBQThFO0lBQzlFLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4RUFBOEU7SUFDOUUsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsOEVBQThFO0lBQzlFLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhFQUE4RTtJQUM5RSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4RUFBOEU7SUFDOUUsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsOEVBQThFO0lBQzlFLFlBQVk7SUFDWixhQUFhO0FBQ2pCXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGhpZGVzIGFycm93cyBvbiBudW1iZXIgaW5wdXRzICovXFxyXFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPW51bWJlcl0geyBcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9ncmVzcyBiYXIgKi9cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB0aGUgaW5kZXggcGFnZSAqL1xcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxufVxcclxcblxcclxcbi5hcHBfX2JvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCA0cHggMzBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6cmdiYSg1MCwgNTAsIDUwLCAwLjkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBpbmRleCBwYWdlIGxpc3QgKi9cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDE7IFxcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpbHRlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX19maWx0ZXJzX19zZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGhlaWdodDogNS4ydmg7XFxyXFxuICAgIHdpZHRoOiAxN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpbHRlcnNfX3NlYXJjaF9fc2VhcmNoYmFyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMi4zOHJlbTtcXHJcXG4gICAgd2lkdGg6IDEzLjVyZW07XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGFkZEl0ZW0gZHJvcGRvd24gKi9cXHJcXG5cXHJcXG4ubWFpbl9fdGl0bGVfX2Ryb3Bkb3duIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd24gc3BhbiB7XFxyXFxuICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fdGl0bGVfX2Ryb3Bkb3duX19pbm5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duX19hZGRJdGVtX19mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duX19hZGRJdGVtX19pbnB1dCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAzOXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0X19idG4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM5cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0X19maWVsZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMi4xNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fYm9keSB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIGl0ZW0gY2FyZHMgKi9cXHJcXG4ubWFpbl9fY2FyZF9fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgwLCA4MCwgODApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fY2FyZF9faW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxufVxcclxcblxcclxcbi8qIHNpZ25pbiBwYWdlICovXFxyXFxuXFxyXFxuLnNpZ25pblBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MCw2MCw2MCwxKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSA4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWdudXBQYWdlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjAsNjAsNjAsMSkgMCUsIHJnYmEoMzQsMzQsMzQsMSkgODAlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZVBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MCw2MCw2MCwxKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSA4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3Jnb3RQYXNzd29yZFBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MCw2MCw2MCwxKSAwJSwgcmdiYSgzNCwzNCwzNCwxKSA4MCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNldFBhc3N3b3JkUGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2YXRlQWNvdW50UGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYwLDYwLDYwLDEpIDAlLCByZ2JhKDM0LDM0LDM0LDEpIDgwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==