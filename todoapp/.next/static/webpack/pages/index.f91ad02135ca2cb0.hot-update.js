"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { userId  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    function redirecToTodos() {\n        if (!sessionStorage.getItem(\"hasVisited\")) {\n            router.push(\"/todos\");\n            sessionStorage.setItem(\"hasVisited\", \"true\");\n        }\n    }\n    if (userId) {\n        redirecToTodos();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Sahil'S TodoList\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignedOut, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"title\",\n                                children: \"Sahil's Todolist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"subtitle\",\n                                children: [\n                                    \"Welcome to my \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"TodoList\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" site!\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"The site offers a variet of features from having a personalized\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"profile to adding and completing tasks with relevant categories\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignInButton, {\n                                        className: \"button is-dark\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignUpButton, {\n                                        className: \"button is-dark\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.SignedIn, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"title\",\n                                children: \"Sahil's Todolist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"subtitle\",\n                                children: [\n                                    \"Welcome to my \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"TodoList\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    \" site!\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"The site offers a variet of features from having a personalized\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"profile to adding and completing tasks with relevant categories\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"button is-dark\",\n                                        text: \"Todos\",\n                                        onChange: redirecToTodos\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"button is-dark\",\n                                        text: \"Done\",\n                                        onChange: redirecToDone\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"S3ldCJprNqhFcydI7QZCOfDXdx4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNNQTtBQWR1QjtBQUNFO0FBRWU7QUFPdkI7QUFDaUI7QUFDQztBQUkxQixTQUFTVyxPQUFPOztJQUM3QixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxPQUFNLEVBQUUsR0FBR04sc0RBQU9BO0lBRTFCLFNBQVNPLGlCQUFpQjtRQUN4QixJQUFJLENBQUNDLGVBQWVDLE9BQU8sQ0FBQyxlQUFlO1lBQ3pDSixPQUFPSyxJQUFJLENBQUM7WUFDWkYsZUFBZUcsT0FBTyxDQUFDLGNBQWM7UUFDdkMsQ0FBQztJQUNIO0lBQ0EsSUFBSUwsUUFBUTtRQUNWQztJQUNGLENBQUM7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNiLGtEQUFJQTs7a0NBQ0gsOERBQUNrQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLOzs7Ozs7a0NBRVAsOERBQUNGO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDckIsb0RBQVNBOzBCQUNSLDRFQUFDc0I7b0JBQVFDLFdBQVd4QixxRUFBVzs4QkFDN0IsNEVBQUMwQjt3QkFBSUYsV0FBV3hCLDBFQUFnQjs7MENBQzlCLDhEQUFDNEI7Z0NBQUdKLFdBQVU7MENBQVE7Ozs7OzswQ0FDdEIsOERBQUNLO2dDQUFFTCxXQUFVOztvQ0FBVztrREFDUiw4REFBQ007a0RBQU87Ozs7OztvQ0FBaUI7a0RBQ3ZDLDhEQUFDQzs7Ozs7b0NBQVE7a0RBRVQsOERBQUNBOzs7OztvQ0FBUTs7Ozs7OzswQ0FHWCw4REFBQ0M7Z0NBQUtSLFdBQVd4Qix1RUFBYTs7a0RBQzVCLDhEQUFDRyx1REFBWUE7d0NBQUNxQixXQUFVOzs7Ozs7b0NBQWdDO2tEQUV4RCw4REFBQ3RCLHVEQUFZQTt3Q0FBQ3NCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWhDLDhEQUFDbkIsbURBQVFBOzBCQUNQLDRFQUFDa0I7b0JBQVFDLFdBQVd4QixxRUFBVzs4QkFDN0IsNEVBQUMwQjt3QkFBSUYsV0FBV3hCLDBFQUFnQjs7MENBQzlCLDhEQUFDNEI7Z0NBQUdKLFdBQVU7MENBQVE7Ozs7OzswQ0FDdEIsOERBQUNLO2dDQUFFTCxXQUFVOztvQ0FBVztrREFDUiw4REFBQ007a0RBQU87Ozs7OztvQ0FBaUI7a0RBQ3ZDLDhEQUFDQzs7Ozs7b0NBQVE7a0RBRVQsOERBQUNBOzs7OztvQ0FBUTs7Ozs7OzswQ0FHWCw4REFBQ0M7Z0NBQUtSLFdBQVd4Qix1RUFBYTs7a0RBQzVCLDhEQUFDTywwREFBTUE7d0NBQ0xpQixXQUFVO3dDQUNWVSxNQUFLO3dDQUNMQyxVQUFVeEI7Ozs7OztvQ0FDVjtrREFFRiw4REFBQ0osMERBQU1BO3dDQUNMaUIsV0FBVTt3Q0FDVlUsTUFBSzt3Q0FDTEMsVUFBVUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCMUIsQ0FBQztHQXBGdUI1Qjs7UUFDUEYsa0RBQVNBO1FBQ0xGLGtEQUFPQTs7O0tBRkpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHtcbiAgU2lnbmVkT3V0LFxuICBTaWduVXBCdXR0b24sXG4gIFNpZ25JbkJ1dHRvbixcbiAgdXNlQXV0aCxcbiAgU2lnbmVkSW4sXG59IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9uJztcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VBdXRoKCk7XG5cbiAgZnVuY3Rpb24gcmVkaXJlY1RvVG9kb3MoKSB7XG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdoYXNWaXNpdGVkJykpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvdG9kb3MnKTtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2hhc1Zpc2l0ZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxuICBpZiAodXNlcklkKSB7XG4gICAgcmVkaXJlY1RvVG9kb3MoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNhaGlsJ1MgVG9kb0xpc3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgICBocmVmPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2J1bG1hQDAuOS40L2Nzcy9idWxtYS5taW4uY3NzJ1xuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFNpZ25lZE91dD5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPlNhaGlsJ3MgVG9kb2xpc3Q8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdWJ0aXRsZSc+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gbXkgPHN0cm9uZz5Ub2RvTGlzdDwvc3Ryb25nPiBzaXRlIVxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgVGhlIHNpdGUgb2ZmZXJzIGEgdmFyaWV0IG9mIGZlYXR1cmVzIGZyb20gaGF2aW5nIGEgcGVyc29uYWxpemVkXG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICBwcm9maWxlIHRvIGFkZGluZyBhbmQgY29tcGxldGluZyB0YXNrcyB3aXRoIHJlbGV2YW50IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxTaWduSW5CdXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtZGFyayc+PC9TaWduSW5CdXR0b24+XG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICA8U2lnblVwQnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWRhcmsnPjwvU2lnblVwQnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L1NpZ25lZE91dD5cblxuICAgICAgPFNpZ25lZEluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+U2FoaWwncyBUb2RvbGlzdDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N1YnRpdGxlJz5cbiAgICAgICAgICAgICAgV2VsY29tZSB0byBteSA8c3Ryb25nPlRvZG9MaXN0PC9zdHJvbmc+IHNpdGUhXG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICBUaGUgc2l0ZSBvZmZlcnMgYSB2YXJpZXQgb2YgZmVhdHVyZXMgZnJvbSBoYXZpbmcgYSBwZXJzb25hbGl6ZWRcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIHByb2ZpbGUgdG8gYWRkaW5nIGFuZCBjb21wbGV0aW5nIHRhc2tzIHdpdGggcmVsZXZhbnQgY2F0ZWdvcmllc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWRhcmsnXG4gICAgICAgICAgICAgICAgdGV4dD0nVG9kb3MnXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3JlZGlyZWNUb1RvZG9zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWRhcmsnXG4gICAgICAgICAgICAgICAgdGV4dD0nRG9uZSdcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVkaXJlY1RvRG9uZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9TaWduZWRJbj5cblxuICAgICAgey8qIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPlNhaGlsJ3MgVG9kb2xpc3Q8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3VidGl0bGUnPlxuICAgICAgICAgICAgV2VsY29tZSB0byBteSA8c3Ryb25nPlRvZG9MaXN0PC9zdHJvbmc+IVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiU2lnbmVkT3V0IiwiU2lnblVwQnV0dG9uIiwiU2lnbkluQnV0dG9uIiwidXNlQXV0aCIsIlNpZ25lZEluIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiSG9tZSIsInJvdXRlciIsInVzZXJJZCIsInJlZGlyZWNUb1RvZG9zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInNldEl0ZW0iLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm1haW4iLCJkaXYiLCJjb250YWluZXIiLCJoMSIsInAiLCJzdHJvbmciLCJiciIsInNwYW4iLCJidXR0b24iLCJ0ZXh0Iiwib25DaGFuZ2UiLCJyZWRpcmVjVG9Eb25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});