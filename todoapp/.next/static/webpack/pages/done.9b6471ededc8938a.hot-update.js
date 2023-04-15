"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/done",{

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Todo(param) {\n    let { todo , checked , onChange  } = param;\n    _s();\n    const { getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    async function handleCheck(todo) {\n        const updatedTask = {\n            id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.putTask)(token, updatedTask);\n        onChange();\n    }\n    return checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [\n            info,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    checked: true\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/todo/\".concat(todo._id),\n                children: todo.info\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    value: todo.info,\n                    onClick: ()=>handleCheck(todo)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Todo, \"TZyIvyGBnam54p/7H4rjGZDRcCU=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = Todo;\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2tCO0FBQ1Y7QUFDWjtBQUNXO0FBRXpCLFNBQVNLLEtBQUssS0FBMkIsRUFBRTtRQUE3QixFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsU0FBUSxFQUFFLEdBQTNCOztJQUMzQixNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxzREFBT0E7SUFFNUIsZUFBZU0sWUFBWUosSUFBSSxFQUFFO1FBQy9CLE1BQU1LLGNBQWM7WUFDbEJDLElBQUlOLEtBQUtPLEdBQUc7WUFDWkMsTUFBTVIsS0FBS1EsSUFBSTtZQUNmUCxTQUFTLElBQUk7WUFDYlEsUUFBUVQsS0FBS1MsTUFBTTtZQUNuQkMsV0FBV1YsS0FBS1UsU0FBUztRQUMzQjtRQUNBQyxRQUFRQyxHQUFHLENBQUMseUJBQXlCUDtRQUNyQyxNQUFNUSxRQUFRLE1BQU1WLFNBQVM7WUFBRVcsVUFBVTtRQUFZO1FBQ3JELE1BQU1sQixzREFBT0EsQ0FBQ2lCLE9BQU9SO1FBQ3JCSDtJQUNGO0lBRUEsT0FBT0Qsd0JBQ0wsOERBQUNjO1FBQUlDLFdBQVdyQix5RUFBVzs7WUFDeEJhOzBCQUNELDhEQUFDUzswQkFDQyw0RUFBQ0M7b0JBQU1DLE1BQUs7b0JBQVdsQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUlsQyw4REFBQ2M7UUFBSUMsV0FBV3JCLHlFQUFXOzswQkFDekIsOERBQUNFLGtEQUFJQTtnQkFBQ3VCLE1BQU0sU0FBa0IsT0FBVHBCLEtBQUtPLEdBQUc7MEJBQUtQLEtBQUtRLElBQUk7Ozs7OzswQkFDM0MsOERBQUNTOzBCQUNDLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEUsT0FBT3JCLEtBQUtRLElBQUk7b0JBQ2hCYyxTQUFTLElBQU1sQixZQUFZSjs7Ozs7Ozs7Ozs7Ozs7OztZQUlsQztBQUNILENBQUM7R0FwQ3VCRDs7UUFDREQsa0RBQU9BOzs7S0FETkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kby5qcz81NTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBwdXRUYXNrIH0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kbyh7IHRvZG8sIGNoZWNrZWQsIG9uQ2hhbmdlIH0pIHtcbiAgY29uc3QgeyBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKHRvZG8pIHtcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgIGlkOiB0b2RvLl9pZCxcbiAgICAgIGluZm86IHRvZG8uaW5mbyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB1c2VySWQ6IHRvZG8udXNlcklkLFxuICAgICAgY3JlYXRlZE9uOiB0b2RvLmNyZWF0ZWRPbixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBuZXcgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgICBvbkNoYW5nZSgpO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrZWQgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvfT5cbiAgICAgIHtpbmZvfVxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvdG9kby8ke3RvZG8uX2lkfWB9Pnt0b2RvLmluZm99PC9MaW5rPlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICB2YWx1ZT17dG9kby5pbmZvfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoZWNrKHRvZG8pfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsInB1dFRhc2siLCJMaW5rIiwidXNlQXV0aCIsIlRvZG8iLCJ0b2RvIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZ2V0VG9rZW4iLCJoYW5kbGVDaGVjayIsInVwZGF0ZWRUYXNrIiwiaWQiLCJfaWQiLCJpbmZvIiwidXNlcklkIiwiY3JlYXRlZE9uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImhyZWYiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/todo.js\n"));

/***/ })

});