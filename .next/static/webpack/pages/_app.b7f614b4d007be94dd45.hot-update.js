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
exports.push([module.i, "\r\n/* hides arrows on number inputs */\r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=number] { \r\n    -moz-appearance: textfield;\r\n    -webkit-appearance: textfield;\r\n            appearance: textfield;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n}\r\n\r\n/* progress bar */\r\n#nprogress .bar {\r\n    height: 3px !important;\r\n}\r\n\r\n\r\n/* the index page */\r\n.app {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100vh;\r\n    background-color: rgb(207, 207, 207);\r\n}\r\n\r\n.app__body {\r\n    display: flex;\r\n    background-color: rgb(235, 235, 235);\r\n    height: 85vh;\r\n    width: 80vw;\r\n    box-shadow: -1px 4px 30px -2px rgba(0, 0, 0, 0.75);\r\n    border-radius: 13px;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color:rgba(207, 207, 207, 0.9);\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n/* index page list */\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 1; \r\n    overflow-x: hidden;\r\n}\r\n\r\n.main__title {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    place-content: center;\r\n}\r\n\r\n.main__filters {\r\n    display: flex;\r\n    place-items: center;\r\n    place-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.main__filters__search {\r\n    background-color: rgb(168, 168, 168);\r\n    border-radius: 2rem;\r\n    height: 3rem;\r\n    width: 17rem;\r\n}\r\n\r\n.main__filters__search__searchbar {\r\n    border-radius: 1.2rem;\r\n    border: none;\r\n    outline-width: 0;\r\n    height: 2.38rem;\r\n    width: 13.5rem;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n}\r\n\r\n\r\n/* addItem dropdown */\r\n\r\n.main__title__dropdown {\r\n    width: 95rem;\r\n    height: 2rem;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    background-color: rgb(168, 168, 168);\r\n    cursor: pointer;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.main__title__dropdown span {\r\n   padding-bottom: 20px;\r\n   font-size: 20px;\r\n}\r\n\r\n.main__title__dropdown__inner {\r\n    background-color: rgb(168, 168, 168);\r\n}\r\n\r\n.dropdown__addItem__form {\r\n    display: grid;\r\n    place-items: center;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown__addItem__input {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    padding: 10px;\r\n}\r\n\r\n.dropdown__addItem__input__field {\r\n    border: none;\r\n    border-radius: 15px;\r\n    outline-width: 0;\r\n    margin-left: 10px;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n    height: 2.15rem;\r\n    width: 13rem;\r\n}\r\n\r\n.main__body {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* the item cards */\r\n.main__card__title {\r\n    font-size: 1.15rem;\r\n    background-color: rgb(168, 168, 168);\r\n}\r\n\r\n.main__card__info {\r\n    font-size: 1.1rem;\r\n    background-color: rgb(207, 207, 207);\r\n}\r\n\r\n/* signin page */\r\n\r\n.signinPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n}\r\n\r\n\r\n.signupPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n}\r\n\r\n.contactPage {\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.updatePage {\r\n    padding-top: 2rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.forgotPasswordPage {\r\n    padding-top: 3rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["C:/Users/malac/OneDrive/שולחן העבודה/My Stuff/Programming/My Projects/shopping-list/frontend/public/static/css/styles.css"],"names":[],"mappings":";AACA,kCAAkC;AAClC;IACI,wBAAwB;AAC5B;AACA;IACI,0BAA0B;IAC1B,6BAAqB;YAArB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,iBAAiB;AACjB;IACI,sBAAsB;AAC1B;;;AAGA,mBAAmB;AACnB;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,kDAAkD;IAClD,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;IACrC,mBAAmB;AACvB;;;AAGA,oBAAoB;AACpB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,0BAA0B;IAC1B,wBAAwB;AAC5B;;;AAGA,qBAAqB;;AAErB;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;GACG,oBAAoB;GACpB,eAAe;AAClB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,0BAA0B;IAC1B,wBAAwB;IACxB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;AACxC;;AAEA,gBAAgB;;AAEhB;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,iCAAiC;IACjC,YAAY;AAChB;;;AAGA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iCAAiC;IACjC,YAAY;IACZ,aAAa;AACjB","file":"styles.css","sourcesContent":["\r\n/* hides arrows on number inputs */\r\ninput[type=number]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=number] { \r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n}\r\n\r\n/* progress bar */\r\n#nprogress .bar {\r\n    height: 3px !important;\r\n}\r\n\r\n\r\n/* the index page */\r\n.app {\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100vh;\r\n    background-color: rgb(207, 207, 207);\r\n}\r\n\r\n.app__body {\r\n    display: flex;\r\n    background-color: rgb(235, 235, 235);\r\n    height: 85vh;\r\n    width: 80vw;\r\n    box-shadow: -1px 4px 30px -2px rgba(0, 0, 0, 0.75);\r\n    border-radius: 13px;\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    border-color:rgba(207, 207, 207, 0.9);\r\n    border-radius: 13px;\r\n}\r\n\r\n\r\n/* index page list */\r\n.main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1; \r\n    overflow-x: hidden;\r\n}\r\n\r\n.main__title {\r\n    padding-top: 20px;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    place-content: center;\r\n}\r\n\r\n.main__filters {\r\n    display: flex;\r\n    place-items: center;\r\n    place-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.main__filters__search {\r\n    background-color: rgb(168, 168, 168);\r\n    border-radius: 2rem;\r\n    height: 3rem;\r\n    width: 17rem;\r\n}\r\n\r\n.main__filters__search__searchbar {\r\n    border-radius: 1.2rem;\r\n    border: none;\r\n    outline-width: 0;\r\n    height: 2.38rem;\r\n    width: 13.5rem;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n}\r\n\r\n\r\n/* addItem dropdown */\r\n\r\n.main__title__dropdown {\r\n    width: 95rem;\r\n    height: 2rem;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    place-content: center;\r\n    place-items: center;\r\n    background-color: rgb(168, 168, 168);\r\n    cursor: pointer;\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.main__title__dropdown span {\r\n   padding-bottom: 20px;\r\n   font-size: 20px;\r\n}\r\n\r\n.main__title__dropdown__inner {\r\n    background-color: rgb(168, 168, 168);\r\n}\r\n\r\n.dropdown__addItem__form {\r\n    display: grid;\r\n    place-items: center;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dropdown__addItem__input {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 39px;\r\n    padding: 10px;\r\n}\r\n\r\n.dropdown__addItem__input__field {\r\n    border: none;\r\n    border-radius: 15px;\r\n    outline-width: 0;\r\n    margin-left: 10px;\r\n    padding-inline-start: 10px;\r\n    padding-inline-end: 10px;\r\n    height: 2.15rem;\r\n    width: 13rem;\r\n}\r\n\r\n.main__body {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* the item cards */\r\n.main__card__title {\r\n    font-size: 1.15rem;\r\n    background-color: rgb(168, 168, 168);\r\n}\r\n\r\n.main__card__info {\r\n    font-size: 1.1rem;\r\n    background-color: rgb(207, 207, 207);\r\n}\r\n\r\n/* signin page */\r\n\r\n.signinPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n}\r\n\r\n\r\n.signupPage {\r\n    padding-top: 2rem;\r\n    overflow: hidden;\r\n    height: 55rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n}\r\n\r\n.contactPage {\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.updatePage {\r\n    padding-top: 2rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n.forgotPasswordPage {\r\n    padding-top: 3rem;\r\n    background-color: rgb(34, 34, 34);\r\n    color: white;\r\n    height: 55rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3N0YXRpYy9jc3Mvc3R5bGVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLDZGQUE2RixpQ0FBaUMsS0FBSyx3QkFBd0Isb0NBQW9DLHNDQUFzQyxzQ0FBc0MsS0FBSyxZQUFZLDRCQUE0QixLQUFLLCtDQUErQywrQkFBK0IsS0FBSywwQ0FBMEMsc0JBQXNCLDRCQUE0QixzQkFBc0IsNkNBQTZDLEtBQUssb0JBQW9CLHNCQUFzQiw2Q0FBNkMscUJBQXFCLG9CQUFvQiwyREFBMkQsNEJBQTRCLDBCQUEwQiw0QkFBNEIsOENBQThDLDRCQUE0QixLQUFLLDRDQUE0QyxzQkFBc0IsK0JBQStCLGtCQUFrQiw0QkFBNEIsS0FBSyxzQkFBc0IsMEJBQTBCLDJCQUEyQixzQkFBc0IsNEJBQTRCLDhCQUE4QixLQUFLLHdCQUF3QixzQkFBc0IsNEJBQTRCLDhCQUE4Qix5QkFBeUIsS0FBSyxnQ0FBZ0MsNkNBQTZDLDRCQUE0QixxQkFBcUIscUJBQXFCLEtBQUssMkNBQTJDLDhCQUE4QixxQkFBcUIseUJBQXlCLHdCQUF3Qix1QkFBdUIsbUNBQW1DLGlDQUFpQyxLQUFLLGtFQUFrRSxxQkFBcUIscUJBQXFCLDBCQUEwQixzQkFBc0IsOEJBQThCLDRCQUE0Qiw2Q0FBNkMsd0JBQXdCLDJCQUEyQiw0QkFBNEIsS0FBSyxxQ0FBcUMsNEJBQTRCLHVCQUF1QixLQUFLLHVDQUF1Qyw2Q0FBNkMsS0FBSyxrQ0FBa0Msc0JBQXNCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLEtBQUssbUNBQW1DLHlCQUF5QiwyQkFBMkIsc0JBQXNCLDRCQUE0QixxQkFBcUIsc0JBQXNCLEtBQUssMENBQTBDLHFCQUFxQiw0QkFBNEIseUJBQXlCLDBCQUEwQixtQ0FBbUMsaUNBQWlDLHdCQUF3QixxQkFBcUIsS0FBSyxxQkFBcUIs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QixxQkFBcUIsS0FBSyxxQkFBcUIseUJBQXlCLDJCQUEyQiw0QkFBNEIsS0FBSyxvREFBb0QsMkJBQTJCLDZDQUE2QyxLQUFLLDJCQUEyQiwwQkFBMEIsNkNBQTZDLEtBQUssOENBQThDLDBCQUEwQix5QkFBeUIsc0JBQXNCLDBDQUEwQyxxQkFBcUIsS0FBSyx5QkFBeUIsMEJBQTBCLHlCQUF5QixzQkFBc0IsMENBQTBDLHFCQUFxQixLQUFLLHNCQUFzQiwwQ0FBMEMscUJBQXFCLHNCQUFzQixLQUFLLHFCQUFxQiwwQkFBMEIsMENBQTBDLHFCQUFxQixzQkFBc0IsS0FBSyw2QkFBNkIsMEJBQTBCLDBDQUEwQyxxQkFBcUIsc0JBQXNCLEtBQUssK0JBQStCO0FBQ2hoVDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjdmNjE0YjRkMDA3YmU5NGRkNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi8qIGhpZGVzIGFycm93cyBvbiBudW1iZXIgaW5wdXRzICovXFxyXFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPW51bWJlcl0geyBcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuaHIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwcm9ncmVzcyBiYXIgKi9cXHJcXG4jbnByb2dyZXNzIC5iYXIge1xcclxcbiAgICBoZWlnaHQ6IDNweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB0aGUgaW5kZXggcGFnZSAqL1xcclxcbi5hcHAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XFxyXFxufVxcclxcblxcclxcbi5hcHBfX2JvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgd2lkdGg6IDgwdnc7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0xcHggNHB4IDMwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOnJnYmEoMjA3LCAyMDcsIDIwNywgMC45KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogaW5kZXggcGFnZSBsaXN0ICovXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4OiAxIDE7IFxcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpbHRlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX19maWx0ZXJzX19zZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmlsdGVyc19fc2VhcmNoX19zZWFyY2hiYXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyLjM4cmVtO1xcclxcbiAgICB3aWR0aDogMTMuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYWRkSXRlbSBkcm9wZG93biAqL1xcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd24ge1xcclxcbiAgICB3aWR0aDogOTVyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX3RpdGxlX19kcm9wZG93biBzcGFuIHtcXHJcXG4gICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd25fX2lubmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2Zvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM5cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyLjE1cmVtO1xcclxcbiAgICB3aWR0aDogMTNyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluX19ib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGUgaXRlbSBjYXJkcyAqL1xcclxcbi5tYWluX19jYXJkX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fY2FyZF9faW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XFxyXFxufVxcclxcblxcclxcbi8qIHNpZ25pbiBwYWdlICovXFxyXFxuXFxyXFxuLnNpZ25pblBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWdudXBQYWdlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZVBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3Jnb3RQYXNzd29yZFBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL21hbGFjL09uZURyaXZlL9ep15XXnNeX158g15TXoteR15XXk9eUL015IFN0dWZmL1Byb2dyYW1taW5nL015IFByb2plY3RzL3Nob3BwaW5nLWxpc3QvZnJvbnRlbmQvcHVibGljL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0Esa0NBQWtDO0FBQ2xDO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7O0FBR0Esb0JBQW9CO0FBQ3BCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLDBCQUEwQjtJQUMxQix3QkFBd0I7QUFDNUI7OztBQUdBLHFCQUFxQjs7QUFFckI7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7R0FDRyxvQkFBb0I7R0FDcEIsZUFBZTtBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcImZpbGVcIjpcInN0eWxlcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLyogaGlkZXMgYXJyb3dzIG9uIG51bWJlciBpbnB1dHMgKi9cXHJcXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9bnVtYmVyXSB7IFxcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2dyZXNzIGJhciAqL1xcclxcbiNucHJvZ3Jlc3MgLmJhciB7XFxyXFxuICAgIGhlaWdodDogM3B4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHRoZSBpbmRleCBwYWdlICovXFxyXFxuLmFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDIwNywgMjA3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcF9fYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICB3aWR0aDogODB2dztcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCA0cHggMzBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6cmdiYSgyMDcsIDIwNywgMjA3LCAwLjkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBpbmRleCBwYWdlIGxpc3QgKi9cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXg6IDE7IFxcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2ZpbHRlcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX19maWx0ZXJzX19zZWFyY2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDE3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fZmlsdGVyc19fc2VhcmNoX19zZWFyY2hiYXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyLjM4cmVtO1xcclxcbiAgICB3aWR0aDogMTMuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYWRkSXRlbSBkcm9wZG93biAqL1xcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd24ge1xcclxcbiAgICB3aWR0aDogOTVyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX3RpdGxlX19kcm9wZG93biBzcGFuIHtcXHJcXG4gICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluX190aXRsZV9fZHJvcGRvd25fX2lubmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2Zvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJvcGRvd25fX2FkZEl0ZW1fX2lucHV0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM5cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kcm9wZG93bl9fYWRkSXRlbV9faW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAyLjE1cmVtO1xcclxcbiAgICB3aWR0aDogMTNyZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluX19ib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0aGUgaXRlbSBjYXJkcyAqL1xcclxcbi5tYWluX19jYXJkX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fY2FyZF9faW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAyMDcsIDIwNyk7XFxyXFxufVxcclxcblxcclxcbi8qIHNpZ25pbiBwYWdlICovXFxyXFxuXFxyXFxuLnNpZ25pblBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWdudXBQYWdlIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMzQsIDM0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA1NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZGF0ZVBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3Jnb3RQYXNzd29yZFBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNTVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=