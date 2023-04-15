"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./src/components/todoBuilder.js":
/*!***************************************!*\
  !*** ./src/components/todoBuilder.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryList */ \"./src/components/categoryList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoBuilder(param) {\n    let { addTask  } = param;\n    _s();\n    const [taskContent, setTaskContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    function handleNewTask(e) {\n        e.preventDefault();\n        if (taskContent.trim().length === 0) return;\n        addTask({\n            info: taskContent.trim(),\n            checked: false,\n            category: handleCategory()\n        });\n        setTaskContent(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleNewTask,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Add a New Task\",\n                onChange: (e)=>setTaskContent(e.target.value),\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleCategory: handleNewTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoBuilder, \"IC4Biset+g8VrTd7MK+VBq7XrX8=\");\n_c = TodoBuilder;\nvar _c;\n$RefreshReg$(_c, \"TodoBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNHO0FBQ1M7QUFFM0IsU0FBU0ksWUFBWSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDs7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBRS9DLFNBQVNNLGNBQWNDLENBQUMsRUFBRTtRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJSixZQUFZSyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ3JDUCxRQUFRO1lBQ05RLE1BQU1QLFlBQVlLLElBQUk7WUFDdEJHLFNBQVMsS0FBSztZQUNkQyxVQUFVQztRQUNaO1FBQ0FULGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ1U7UUFBS0MsVUFBVVY7OzBCQUNkLDhEQUFDVztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsVUFBVSxDQUFDYixJQUFNRixlQUFlRSxFQUFFYyxNQUFNLENBQUNDLEtBQUs7Z0JBQzlDQyxXQUFXekIsaUZBQW1COzs7Ozs7MEJBRWhDLDhEQUFDQywrQ0FBTUE7Z0JBQUMwQixNQUFLOzs7Ozs7MEJBQ2IsOERBQUN4QixxREFBWUE7Z0JBQUNhLGdCQUFnQlI7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDO0dBMUJ1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kb0J1aWxkZXIuanM/MjQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJy4vY2F0ZWdvcnlMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0J1aWxkZXIoeyBhZGRUYXNrIH0pIHtcbiAgY29uc3QgW3Rhc2tDb250ZW50LCBzZXRUYXNrQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3VGFzayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0YXNrQ29udGVudC50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgYWRkVGFzayh7XG4gICAgICBpbmZvOiB0YXNrQ29udGVudC50cmltKCksXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OiBoYW5kbGVDYXRlZ29yeSgpLFxuICAgIH0pO1xuICAgIHNldFRhc2tDb250ZW50KCcnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1Rhc2t9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgYSBOZXcgVGFzaydcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrQ29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld1Rhc2tJbnB1dH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIHRleHQ9J0FkZCBUYXNrJz48L0J1dHRvbj5cbiAgICAgIDxDYXRlZ29yeUxpc3QgaGFuZGxlQ2F0ZWdvcnk9e2hhbmRsZU5ld1Rhc2t9IC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiQ2F0ZWdvcnlMaXN0IiwiVG9kb0J1aWxkZXIiLCJhZGRUYXNrIiwidGFza0NvbnRlbnQiLCJzZXRUYXNrQ29udGVudCIsImhhbmRsZU5ld1Rhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwiaW5mbyIsImNoZWNrZWQiLCJjYXRlZ29yeSIsImhhbmRsZUNhdGVnb3J5IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NOYW1lIiwibmV3VGFza0lucHV0IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todoBuilder.js\n"));

/***/ })

});