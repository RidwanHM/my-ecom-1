"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"6249e37606de\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzg0NDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MjQ5ZTM3NjA2ZGVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/header.js":
/*!***********************!*\
  !*** ./app/header.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _shop_useCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/useCart */ \"(app-pages-browser)/./app/shop/useCart.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"(app-pages-browser)/./app/modal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Header() {\n    _s();\n    const cartItems = (0,_shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.cart);\n    const openModal = (0,_shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.openModal);\n    const setOpenModal = (0,_shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((state)=>state.setOpenModal); // Get the setOpenModal function\n    const toggleModal = ()=>{\n        setOpenModal(); // Toggle the modal's visibility\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between\",\n        children: [\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"uppercase cursor-pointer\",\n                    children: \"R&B Store\"\n                }, void 0, false, {\n                    fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/contact\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"uppercase cursor-pointer\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: toggleModal,\n                className: \"relative grid cursor-pointer group place-items-center\",\n                children: [\n                    \" \",\n                    cartItems.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute top-0 right-0 bg-blue-400 aspect-square h-5 sm:h-6 pointer-events-none grid place-items-center -translate-y-1/2 translate-x-1/2 text-black rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs sm:text-sm\",\n                            children: cartItems.length\n                        }, void 0, false, {\n                            fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ridwan/my-ecom-1-1/app/header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"jspWPk1AuJdfaajRbaFIGdS/jrM=\", false, function() {\n    return [\n        _shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _shop_useCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDUTtBQUNUO0FBRWIsU0FBU0k7O0lBQ3RCLE1BQU1DLFlBQVlILHlEQUFPQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLElBQUk7SUFDL0MsTUFBTUMsWUFBWU4seURBQU9BLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTUUsU0FBUztJQUNwRCxNQUFNQyxlQUFlUCx5REFBT0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNRyxZQUFZLEdBQUcsZ0NBQWdDO0lBRTdGLE1BQU1DLGNBQWM7UUFDbEJELGdCQUFnQixnQ0FBZ0M7SUFDbEQ7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVTs7WUFDZkosMkJBQ0MsOERBQUNMLDhDQUFLQTs7Ozs7MEJBRVIsOERBQUNGLGlEQUFJQTtnQkFBQ1ksTUFBSzswQkFDVCw0RUFBQ0M7b0JBQUdGLFdBQVU7OEJBQTJCOzs7Ozs7Ozs7OzswQkFFM0MsOERBQUNYLGlEQUFJQTtnQkFBQ1ksTUFBSzswQkFDVCw0RUFBQ0M7b0JBQUdGLFdBQVU7OEJBQTJCOzs7Ozs7Ozs7OzswQkFFM0MsOERBQUNHO2dCQUFJQyxTQUFTTjtnQkFBYUUsV0FBVTs7b0JBQXdEO29CQUMxRlAsVUFBVVksTUFBTSxHQUFHLG1CQUNsQiw4REFBQ0Y7d0JBQUlILFdBQVU7a0NBQ2IsNEVBQUNNOzRCQUFFTixXQUFVO3NDQUFzQlAsVUFBVVksTUFBTTs7Ozs7Ozs7Ozs7a0NBR3ZELDhEQUFDRTt3QkFBRVAsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCO0dBOUJ3QlI7O1FBQ0pGLHFEQUFPQTtRQUNQQSxxREFBT0E7UUFDSkEscURBQU9BOzs7S0FITkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hlYWRlci5qcz83N2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1c2VDYXJ0IGZyb20gXCIuL3Nob3AvdXNlQ2FydFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL21vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgY2FydEl0ZW1zID0gdXNlQ2FydCgoc3RhdGUpID0+IHN0YXRlLmNhcnQpO1xuICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYXJ0KChzdGF0ZSkgPT4gc3RhdGUub3Blbk1vZGFsKTtcbiAgY29uc3Qgc2V0T3Blbk1vZGFsID0gdXNlQ2FydCgoc3RhdGUpID0+IHN0YXRlLnNldE9wZW5Nb2RhbCk7IC8vIEdldCB0aGUgc2V0T3Blbk1vZGFsIGZ1bmN0aW9uXG5cbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0T3Blbk1vZGFsKCk7IC8vIFRvZ2dsZSB0aGUgbW9kYWwncyB2aXNpYmlsaXR5XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCBwLTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibHVlLTkwMCBzaGFkb3ctbWQgei01MCB0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBzbTpwLTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICB7b3Blbk1vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIC8+XG4gICAgICApfVxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlclwiPlImQiBTdG9yZTwvaDE+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBjdXJzb3ItcG9pbnRlclwiPkNvbnRhY3Q8L2gxPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JpZCBjdXJzb3ItcG9pbnRlciBncm91cCBwbGFjZS1pdGVtcy1jZW50ZXJcIj4gey8qIEFkZGVkIG9uQ2xpY2sgZXZlbnQgKi99XG4gICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJnLWJsdWUtNDAwIGFzcGVjdC1zcXVhcmUgaC01IHNtOmgtNiBwb2ludGVyLWV2ZW50cy1ub25lIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIC10cmFuc2xhdGUteS0xLzIgdHJhbnNsYXRlLXgtMS8yIHRleHQtYmxhY2sgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc21cIj57Y2FydEl0ZW1zLmxlbmd0aH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNhcnQtc2hvcHBpbmcgY3Vyc29yLXBvaW50ZXIgZ3JvdXAtaG92ZXI6dGV4dC1zbGF0ZS01MDBcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VDYXJ0IiwiTW9kYWwiLCJIZWFkZXIiLCJjYXJ0SXRlbXMiLCJzdGF0ZSIsImNhcnQiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImhlYWRlciIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsImRpdiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/header.js\n"));

/***/ })

});