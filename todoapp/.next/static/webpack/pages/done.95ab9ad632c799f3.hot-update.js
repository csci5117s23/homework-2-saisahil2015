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

/***/ "./src/components/todoBuilder.js":
/*!***************************************!*\
  !*** ./src/components/todoBuilder.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryList */ \"./src/components/categoryList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoBuilder(param) {\n    let { addTask  } = param;\n    _s();\n    const [taskContent, setTaskContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleNewTask(e) {\n        e.preventDefault();\n        if (taskContent.trim().length === 0) return;\n        await addTask({\n            info: taskContent.trim(),\n            checked: false,\n            category: category.tag\n        });\n        setTaskContent(\"\");\n    }\n    function handleTaskAndCategory(category) {\n        setCategory(category);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleNewTask,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Add a New Task\",\n                onChange: (e)=>setTaskContent(e.target.value),\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                manageCategory: handleTaskAndCategory\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n} /*\n\nNeed to fix form within form issues such that both add task and category work then commit\nthen work on having specific categories pages for todos and dones\nthen work on adding item to that category automctically for todos/:category page\nthen work on delete category\nwork on css\n\n\n\n*/ \n_s(TodoBuilder, \"BMtrw6/6RJrjRUxFDQt2j+0gS2Q=\");\n_c = TodoBuilder;\nvar _c;\n$RefreshReg$(_c, \"TodoBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNHO0FBQ1M7QUFFM0IsU0FBU0ksWUFBWSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDs7SUFDbEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6QyxlQUFlUSxjQUFjQyxDQUFDLEVBQUU7UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSU4sWUFBWU8sSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUNyQyxNQUFNVCxRQUFRO1lBQ1pVLE1BQU1ULFlBQVlPLElBQUk7WUFDdEJHLFNBQVMsS0FBSztZQUNkUixVQUFVQSxTQUFTUyxHQUFHO1FBQ3hCO1FBQ0FWLGVBQWU7SUFDakI7SUFFQSxTQUFTVyxzQkFBc0JWLFFBQVEsRUFBRTtRQUN2Q0MsWUFBWUQ7SUFDZDtJQUVBLHFCQUNFLDhEQUFDVztRQUFLQyxVQUFVVjs7MEJBQ2QsOERBQUNXO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxVQUFVLENBQUNiLElBQU1KLGVBQWVJLEVBQUVjLE1BQU0sQ0FBQ0MsS0FBSztnQkFDOUNDLFdBQVczQixpRkFBbUI7Ozs7OzswQkFFaEMsOERBQUNDLCtDQUFNQTtnQkFBQzRCLE1BQUs7Ozs7OzswQkFDYiw4REFBQzFCLHFEQUFZQTtnQkFBQzJCLGdCQUFnQlo7Ozs7Ozs7Ozs7OztBQUdwQyxDQUFDLENBQ0Q7Ozs7Ozs7Ozs7QUFVQTtHQTFDd0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RvZG9CdWlsZGVyLmpzPzI0MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tICcuL2NhdGVnb3J5TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9CdWlsZGVyKHsgYWRkVGFzayB9KSB7XG4gIGNvbnN0IFt0YXNrQ29udGVudCwgc2V0VGFza0NvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRhc2tDb250ZW50LnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBhd2FpdCBhZGRUYXNrKHtcbiAgICAgIGluZm86IHRhc2tDb250ZW50LnRyaW0oKSxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LnRhZyxcbiAgICB9KTtcbiAgICBzZXRUYXNrQ29udGVudCgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYXNrQW5kQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdUYXNrfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIGEgTmV3IFRhc2snXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza0NvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdUYXNrSW5wdXR9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PSdBZGQgVGFzayc+PC9CdXR0b24+XG4gICAgICA8Q2F0ZWdvcnlMaXN0IG1hbmFnZUNhdGVnb3J5PXtoYW5kbGVUYXNrQW5kQ2F0ZWdvcnl9IC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuLypcblxuTmVlZCB0byBmaXggZm9ybSB3aXRoaW4gZm9ybSBpc3N1ZXMgc3VjaCB0aGF0IGJvdGggYWRkIHRhc2sgYW5kIGNhdGVnb3J5IHdvcmsgdGhlbiBjb21taXRcbnRoZW4gd29yayBvbiBoYXZpbmcgc3BlY2lmaWMgY2F0ZWdvcmllcyBwYWdlcyBmb3IgdG9kb3MgYW5kIGRvbmVzXG50aGVuIHdvcmsgb24gYWRkaW5nIGl0ZW0gdG8gdGhhdCBjYXRlZ29yeSBhdXRvbWN0aWNhbGx5IGZvciB0b2Rvcy86Y2F0ZWdvcnkgcGFnZVxudGhlbiB3b3JrIG9uIGRlbGV0ZSBjYXRlZ29yeVxud29yayBvbiBjc3NcblxuXG5cbiovXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJDYXRlZ29yeUxpc3QiLCJUb2RvQnVpbGRlciIsImFkZFRhc2siLCJ0YXNrQ29udGVudCIsInNldFRhc2tDb250ZW50IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImhhbmRsZU5ld1Rhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwiaW5mbyIsImNoZWNrZWQiLCJ0YWciLCJoYW5kbGVUYXNrQW5kQ2F0ZWdvcnkiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJuZXdUYXNrSW5wdXQiLCJ0ZXh0IiwibWFuYWdlQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/todoBuilder.js\n"));

/***/ })

});