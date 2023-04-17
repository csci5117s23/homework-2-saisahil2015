/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"container\": \"Home_container__Ennsq\",\n\t\"description\": \"Home_description__Qwq1f\",\n\t\"code\": \"Home_code__aGV0U\",\n\t\"grid\": \"Home_grid__c_g6N\",\n\t\"card\": \"Home_card__7oz7W\",\n\t\"center\": \"Home_center__V0nxp\",\n\t\"logo\": \"Home_logo__80mSr\",\n\t\"content\": \"Home_content___fOQz\",\n\t\"vercelLogo\": \"Home_vercelLogo__lhIxO\",\n\t\"rotate\": \"Home_rotate__99GkW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzI3YWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fRXROdDJcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fRW5uc3FcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fX1F3cTFmXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYUdWMFVcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19jX2c2TlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzdvejdXXCIsXG5cdFwiY2VudGVyXCI6IFwiSG9tZV9jZW50ZXJfX1YwbnhwXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fODBtU3JcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19fZk9RelwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2xoSXhPXCIsXG5cdFwicm90YXRlXCI6IFwiSG9tZV9yb3RhdGVfXzk5R2tXXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst publicPages = [\n    \"/\"\n];\nfunction App({ Component , pageProps  }) {\n    const { pathName  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isPublicPage = publicPages.includes(pathName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.ClerkProvider, {\n        ...pageProps,\n        children: isPublicPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignedIn, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignedOut, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/_app.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0I7QUFDTjtBQU9qQjtBQUV2QixNQUFNTyxjQUFjO0lBQUM7Q0FBSTtBQUVWLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHVixzREFBU0E7SUFFOUIsTUFBTVcsZUFBZUwsWUFBWU0sUUFBUSxDQUFDRjtJQUUxQyxxQkFDRSw4REFBQ1Qsd0RBQWFBO1FBQUUsR0FBR1EsU0FBUztrQkFDekJFLDZCQUNDLDhEQUFDSDtZQUFXLEdBQUdDLFNBQVM7Ozs7O2lDQUV4Qiw4REFBQ0k7WUFBSUMsV0FBV2YsMEVBQWdCOzs4QkFDOUIsOERBQUNHLG1EQUFRQTs4QkFDUCw0RUFBQ007d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDTCxvREFBU0E7OEJBQ1IsNEVBQUNJO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRzdCOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1xuICBDbGVya1Byb3ZpZGVyLFxuICBTaWduZWRJbixcbiAgU2lnbkluLFxuICBTaWduZWRPdXQsXG4gIFNpZ25JbkJ1dHRvbixcbn0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5cbmNvbnN0IHB1YmxpY1BhZ2VzID0gWycvJ107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgeyBwYXRoTmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaXNQdWJsaWNQYWdlID0gcHVibGljUGFnZXMuaW5jbHVkZXMocGF0aE5hbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPENsZXJrUHJvdmlkZXIgey4uLnBhZ2VQcm9wc30+XG4gICAgICB7aXNQdWJsaWNQYWdlID8gKFxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPFNpZ25lZEluPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvU2lnbmVkSW4+XG4gICAgICAgICAgPFNpZ25lZE91dD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1NpZ25lZE91dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvQ2xlcmtQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJDbGVya1Byb3ZpZGVyIiwiU2lnbmVkSW4iLCJTaWduSW4iLCJTaWduZWRPdXQiLCJTaWduSW5CdXR0b24iLCJwdWJsaWNQYWdlcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBhdGhOYW1lIiwiaXNQdWJsaWNQYWdlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@clerk/nextjs":
/*!********************************!*\
  !*** external "@clerk/nextjs" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@clerk/nextjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();