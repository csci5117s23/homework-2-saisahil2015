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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryList */ \"./src/components/categoryList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoBuilder(param) {\n    let { addTask , needToAddCategory , sentCategory  } = param;\n    _s();\n    const [taskContent, setTaskContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleNewTask(e) {\n        e.preventDefault();\n        if (taskContent.trim().length === 0) return;\n        if (needToAddCategory) {\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: category.tag\n            });\n        } else {\n            console.log(\"Value: \", sentCategory);\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: sentCategory\n            });\n        }\n        setTaskContent(\"\");\n    }\n    function handleTaskAndCategory(category) {\n        setCategory(category);\n    }\n    return needToAddCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add a New Task\",\n                        onChange: (e)=>setTaskContent(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                manageCategory: handleTaskAndCategory,\n                addClass: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleNewTask,\n            className: \"field\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Add a New Task\",\n                    onChange: (e)=>setTaskContent(e.target.value),\n                    className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Add Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoBuilder, \"BMtrw6/6RJrjRUxFDQt2j+0gS2Q=\");\n_c = TodoBuilder;\nvar _c;\n$RefreshReg$(_c, \"TodoBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNHO0FBQ1M7QUFFM0IsU0FBU0ksWUFBWSxLQUluQyxFQUFFO1FBSmlDLEVBQ2xDQyxRQUFPLEVBQ1BDLGtCQUFpQixFQUNqQkMsYUFBWSxFQUNiLEdBSm1DOztJQUtsQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLGVBQWVVLGNBQWNDLENBQUMsRUFBRTtRQUM5QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJTixZQUFZTyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ3JDLElBQUlWLG1CQUFtQjtZQUNyQixNQUFNRCxRQUFRO2dCQUNaWSxNQUFNVCxZQUFZTyxJQUFJO2dCQUN0QkcsU0FBUyxLQUFLO2dCQUNkUixVQUFVQSxTQUFTUyxHQUFHO1lBQ3hCO1FBQ0YsT0FBTztZQUNMQyxRQUFRQyxHQUFHLENBQUMsV0FBV2Q7WUFDdkIsTUFBTUYsUUFBUTtnQkFDWlksTUFBTVQsWUFBWU8sSUFBSTtnQkFDdEJHLFNBQVMsS0FBSztnQkFDZFIsVUFBVUg7WUFDWjtRQUNGLENBQUM7UUFFREUsZUFBZTtJQUNqQjtJQUVBLFNBQVNhLHNCQUFzQlosUUFBUSxFQUFFO1FBQ3ZDQyxZQUFZRDtJQUNkO0lBRUEsT0FBT0osa0NBQ0wsOERBQUNpQjs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVYjs7a0NBQ2QsOERBQUNjO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNoQixJQUFNSixlQUFlSSxFQUFFaUIsTUFBTSxDQUFDQyxLQUFLO3dCQUM5Q0MsV0FBV2hDLGlGQUFtQjs7Ozs7O2tDQUVoQyw4REFBQ0MsK0NBQU1BO3dCQUFDaUMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDL0IscURBQVlBO2dCQUFDZ0MsZ0JBQWdCYjtnQkFBdUJjLFVBQVUsSUFBSTs7Ozs7Ozs7Ozs7NkJBR3JFLDhEQUFDYjtrQkFDQyw0RUFBQ0M7WUFBS0MsVUFBVWI7WUFBZW9CLFdBQVU7OzhCQUN2Qyw4REFBQ047b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFVBQVUsQ0FBQ2hCLElBQU1KLGVBQWVJLEVBQUVpQixNQUFNLENBQUNDLEtBQUs7b0JBQzlDQyxXQUFXaEMsaUZBQW1COzs7Ozs7OEJBRWhDLDhEQUFDQywrQ0FBTUE7b0JBQUNpQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O1lBR2xCO0FBQ0gsQ0FBQztHQTNEdUI5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcz8yNDM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXRlZ29yeUxpc3QgZnJvbSAnLi9jYXRlZ29yeUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvQnVpbGRlcih7XG4gIGFkZFRhc2ssXG4gIG5lZWRUb0FkZENhdGVnb3J5LFxuICBzZW50Q2F0ZWdvcnksXG59KSB7XG4gIGNvbnN0IFt0YXNrQ29udGVudCwgc2V0VGFza0NvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRhc2tDb250ZW50LnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBpZiAobmVlZFRvQWRkQ2F0ZWdvcnkpIHtcbiAgICAgIGF3YWl0IGFkZFRhc2soe1xuICAgICAgICBpbmZvOiB0YXNrQ29udGVudC50cmltKCksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkudGFnLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdWYWx1ZTogJywgc2VudENhdGVnb3J5KTtcbiAgICAgIGF3YWl0IGFkZFRhc2soe1xuICAgICAgICBpbmZvOiB0YXNrQ29udGVudC50cmltKCksXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICBjYXRlZ29yeTogc2VudENhdGVnb3J5LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGFza0NvbnRlbnQoJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFza0FuZENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgc2V0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5lZWRUb0FkZENhdGVnb3J5ID8gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3VGFza30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0FkZCBhIE5ldyBUYXNrJ1xuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza0NvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld1Rhc2tJbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PSdBZGQgVGFzayc+PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8Q2F0ZWdvcnlMaXN0IG1hbmFnZUNhdGVnb3J5PXtoYW5kbGVUYXNrQW5kQ2F0ZWdvcnl9IGFkZENsYXNzPXt0cnVlfSAvPlxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3VGFza30gY2xhc3NOYW1lPSdmaWVsZCc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0FkZCBhIE5ldyBUYXNrJ1xuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza0NvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld1Rhc2tJbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PSdBZGQgVGFzayc+PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJDYXRlZ29yeUxpc3QiLCJUb2RvQnVpbGRlciIsImFkZFRhc2siLCJuZWVkVG9BZGRDYXRlZ29yeSIsInNlbnRDYXRlZ29yeSIsInRhc2tDb250ZW50Iiwic2V0VGFza0NvbnRlbnQiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiaGFuZGxlTmV3VGFzayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJsZW5ndGgiLCJpbmZvIiwiY2hlY2tlZCIsInRhZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUYXNrQW5kQ2F0ZWdvcnkiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc05hbWUiLCJuZXdUYXNrSW5wdXQiLCJ0ZXh0IiwibWFuYWdlQ2F0ZWdvcnkiLCJhZGRDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todoBuilder.js\n"));

/***/ })

});