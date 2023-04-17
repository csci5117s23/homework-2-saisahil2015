"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos/[category]",{

/***/ "./src/components/todoBuilder.js":
/*!***************************************!*\
  !*** ./src/components/todoBuilder.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryList */ \"./src/components/categoryList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoBuilder(param) {\n    let { addTask , needToAddCategory , sentCategory  } = param;\n    _s();\n    const [taskContent, setTaskContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleNewTask(e) {\n        e.preventDefault();\n        if (taskContent.trim().length === 0) return;\n        if (needToAddCategory) {\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: category.tag\n            });\n        } else {\n            console.log(\"Value: \", sentCategory);\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: sentCategory\n            });\n        }\n        setTaskContent(\"\");\n    }\n    function handleTaskAndCategory(category) {\n        setCategory(category);\n    }\n    return needToAddCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add a New Task\",\n                        onChange: (e)=>setTaskContent(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                manageCategory: handleTaskAndCategory,\n                addClass: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleNewTask,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Add a New Task\",\n                    onChange: (e)=>setTaskContent(e.target.value),\n                    className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Add Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Todos\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoBuilder, \"BMtrw6/6RJrjRUxFDQt2j+0gS2Q=\");\n_c = TodoBuilder;\nvar _c;\n$RefreshReg$(_c, \"TodoBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNHO0FBQ1M7QUFFM0IsU0FBU0ksWUFBWSxLQUluQyxFQUFFO1FBSmlDLEVBQ2xDQyxRQUFPLEVBQ1BDLGtCQUFpQixFQUNqQkMsYUFBWSxFQUNiLEdBSm1DOztJQUtsQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLGVBQWVVLGNBQWNDLENBQUMsRUFBRTtRQUM5QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJTixZQUFZTyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ3JDLElBQUlWLG1CQUFtQjtZQUNyQixNQUFNRCxRQUFRO2dCQUNaWSxNQUFNVCxZQUFZTyxJQUFJO2dCQUN0QkcsU0FBUyxLQUFLO2dCQUNkUixVQUFVQSxTQUFTUyxHQUFHO1lBQ3hCO1FBQ0YsT0FBTztZQUNMQyxRQUFRQyxHQUFHLENBQUMsV0FBV2Q7WUFDdkIsTUFBTUYsUUFBUTtnQkFDWlksTUFBTVQsWUFBWU8sSUFBSTtnQkFDdEJHLFNBQVMsS0FBSztnQkFDZFIsVUFBVUg7WUFDWjtRQUNGLENBQUM7UUFFREUsZUFBZTtJQUNqQjtJQUVBLFNBQVNhLHNCQUFzQlosUUFBUSxFQUFFO1FBQ3ZDQyxZQUFZRDtJQUNkO0lBRUEsT0FBT0osa0NBQ0wsOERBQUNpQjs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVYjs7a0NBQ2QsOERBQUNjO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNoQixJQUFNSixlQUFlSSxFQUFFaUIsTUFBTSxDQUFDQyxLQUFLO3dCQUM5Q0MsV0FBV2hDLGlGQUFtQjs7Ozs7O2tDQUVoQyw4REFBQ0MsK0NBQU1BO3dCQUFDaUMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDL0IscURBQVlBO2dCQUFDZ0MsZ0JBQWdCYjtnQkFBdUJjLFVBQVUsSUFBSTs7Ozs7Ozs7Ozs7NkJBR3JFLDhEQUFDYjtrQkFDQyw0RUFBQ0M7WUFBS0MsVUFBVWI7OzhCQUNkLDhEQUFDYztvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsVUFBVSxDQUFDaEIsSUFBTUosZUFBZUksRUFBRWlCLE1BQU0sQ0FBQ0MsS0FBSztvQkFDOUNDLFdBQVdoQyxpRkFBbUI7Ozs7Ozs4QkFFaEMsOERBQUNDLCtDQUFNQTtvQkFBQ2lDLE1BQUs7Ozs7Ozs4QkFDYiw4REFBQ0c7Ozs7OzhCQUNELDhEQUFDcEMsK0NBQU1BO29CQUFDaUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztZQUdsQjtBQUNILENBQUM7R0E3RHVCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kb0J1aWxkZXIuanM/MjQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJy4vY2F0ZWdvcnlMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0J1aWxkZXIoe1xuICBhZGRUYXNrLFxuICBuZWVkVG9BZGRDYXRlZ29yeSxcbiAgc2VudENhdGVnb3J5LFxufSkge1xuICBjb25zdCBbdGFza0NvbnRlbnQsIHNldFRhc2tDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTmV3VGFzayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0YXNrQ29udGVudC50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKG5lZWRUb0FkZENhdGVnb3J5KSB7XG4gICAgICBhd2FpdCBhZGRUYXNrKHtcbiAgICAgICAgaW5mbzogdGFza0NvbnRlbnQudHJpbSgpLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LnRhZyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVmFsdWU6ICcsIHNlbnRDYXRlZ29yeSk7XG4gICAgICBhd2FpdCBhZGRUYXNrKHtcbiAgICAgICAgaW5mbzogdGFza0NvbnRlbnQudHJpbSgpLFxuICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgY2F0ZWdvcnk6IHNlbnRDYXRlZ29yeSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRhc2tDb250ZW50KCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhc2tBbmRDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgfVxuXG4gIHJldHVybiBuZWVkVG9BZGRDYXRlZ29yeSA/IChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1Rhc2t9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgYSBOZXcgVGFzaydcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdUYXNrSW5wdXR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD0nQWRkIFRhc2snPjwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPENhdGVnb3J5TGlzdCBtYW5hZ2VDYXRlZ29yeT17aGFuZGxlVGFza0FuZENhdGVnb3J5fSBhZGRDbGFzcz17dHJ1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld1Rhc2t9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgYSBOZXcgVGFzaydcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uZXdUYXNrSW5wdXR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD0nQWRkIFRhc2snPjwvQnV0dG9uPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PSdUb2Rvcyc+PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJDYXRlZ29yeUxpc3QiLCJUb2RvQnVpbGRlciIsImFkZFRhc2siLCJuZWVkVG9BZGRDYXRlZ29yeSIsInNlbnRDYXRlZ29yeSIsInRhc2tDb250ZW50Iiwic2V0VGFza0NvbnRlbnQiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiaGFuZGxlTmV3VGFzayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsZW5ndGgiLCJpbmZvIiwiY2hlY2tlZCIsInRhZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUYXNrQW5kQ2F0ZWdvcnkiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJuZXdUYXNrSW5wdXQiLCJ0ZXh0IiwibWFuYWdlQ2F0ZWdvcnkiLCJhZGRDbGFzcyIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/todoBuilder.js\n"));

/***/ })

});