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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categoryList */ \"./src/components/categoryList.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TodoBuilder(param) {\n    let { addTask , needToAddCategory , sentCategory  } = param;\n    _s();\n    const router = useRouter();\n    const [taskContent, setTaskContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function handleNewTask(e) {\n        e.preventDefault();\n        if (taskContent.trim().length === 0) return;\n        if (needToAddCategory) {\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: category.tag\n            });\n        } else {\n            console.log(\"Value: \", sentCategory);\n            await addTask({\n                info: taskContent.trim(),\n                checked: false,\n                category: sentCategory\n            });\n        }\n        setTaskContent(\"\");\n    }\n    function handleTaskAndCategory(category) {\n        setCategory(category);\n    }\n    return needToAddCategory ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleNewTask,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add a New Task\",\n                        onChange: (e)=>setTaskContent(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                manageCategory: handleTaskAndCategory,\n                addClass: true\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleNewTask,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Add a New Task\",\n                    onChange: (e)=>setTaskContent(e.target.value),\n                    className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Add Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Todos\",\n                    onChange: ()=>router.push(\"/todos\")\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoBuilder.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoBuilder, \"hdo4+uHGZ1rXL8xG+W9bSzOA004=\", true);\n_c = TodoBuilder;\nvar _c;\n$RefreshReg$(_c, \"TodoBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvQnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNHO0FBQ1M7QUFFM0IsU0FBU0ksWUFBWSxLQUluQyxFQUFFO1FBSmlDLEVBQ2xDQyxRQUFPLEVBQ1BDLGtCQUFpQixFQUNqQkMsYUFBWSxFQUNiLEdBSm1DOztJQUtsQyxNQUFNQyxTQUFTQztJQUNmLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFFekMsZUFBZVksY0FBY0MsQ0FBQyxFQUFFO1FBQzlCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlOLFlBQVlPLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDckMsSUFBSVosbUJBQW1CO1lBQ3JCLE1BQU1ELFFBQVE7Z0JBQ1pjLE1BQU1ULFlBQVlPLElBQUk7Z0JBQ3RCRyxTQUFTLEtBQUs7Z0JBQ2RSLFVBQVVBLFNBQVNTLEdBQUc7WUFDeEI7UUFDRixPQUFPO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXaEI7WUFDdkIsTUFBTUYsUUFBUTtnQkFDWmMsTUFBTVQsWUFBWU8sSUFBSTtnQkFDdEJHLFNBQVMsS0FBSztnQkFDZFIsVUFBVUw7WUFDWjtRQUNGLENBQUM7UUFFREksZUFBZTtJQUNqQjtJQUVBLFNBQVNhLHNCQUFzQlosUUFBUSxFQUFFO1FBQ3ZDQyxZQUFZRDtJQUNkO0lBRUEsT0FBT04sa0NBQ0wsOERBQUNtQjs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVYjs7a0NBQ2QsOERBQUNjO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNoQixJQUFNSixlQUFlSSxFQUFFaUIsTUFBTSxDQUFDQyxLQUFLO3dCQUM5Q0MsV0FBV2xDLGlGQUFtQjs7Ozs7O2tDQUVoQyw4REFBQ0MsK0NBQU1BO3dCQUFDbUMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDakMscURBQVlBO2dCQUFDa0MsZ0JBQWdCYjtnQkFBdUJjLFVBQVUsSUFBSTs7Ozs7Ozs7Ozs7NkJBR3JFLDhEQUFDYjtrQkFDQyw0RUFBQ0M7WUFBS0MsVUFBVWI7OzhCQUNkLDhEQUFDYztvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsVUFBVSxDQUFDaEIsSUFBTUosZUFBZUksRUFBRWlCLE1BQU0sQ0FBQ0MsS0FBSztvQkFDOUNDLFdBQVdsQyxpRkFBbUI7Ozs7Ozs4QkFFaEMsOERBQUNDLCtDQUFNQTtvQkFBQ21DLE1BQUs7Ozs7Ozs4QkFDYiw4REFBQ0c7Ozs7OzhCQUNELDhEQUFDdEMsK0NBQU1BO29CQUFDbUMsTUFBSztvQkFBUUwsVUFBVSxJQUFNdkIsT0FBT2dDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztZQUd0RDtBQUNILENBQUM7R0E5RHVCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kb0J1aWxkZXIuanM/MjQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJy4vY2F0ZWdvcnlMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0J1aWxkZXIoe1xuICBhZGRUYXNrLFxuICBuZWVkVG9BZGRDYXRlZ29yeSxcbiAgc2VudENhdGVnb3J5LFxufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Rhc2tDb250ZW50LCBzZXRUYXNrQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGFza0NvbnRlbnQudHJpbSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChuZWVkVG9BZGRDYXRlZ29yeSkge1xuICAgICAgYXdhaXQgYWRkVGFzayh7XG4gICAgICAgIGluZm86IHRhc2tDb250ZW50LnRyaW0oKSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeS50YWcsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1ZhbHVlOiAnLCBzZW50Q2F0ZWdvcnkpO1xuICAgICAgYXdhaXQgYWRkVGFzayh7XG4gICAgICAgIGluZm86IHRhc2tDb250ZW50LnRyaW0oKSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGNhdGVnb3J5OiBzZW50Q2F0ZWdvcnksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUYXNrQ29udGVudCgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYXNrQW5kQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH1cblxuICByZXR1cm4gbmVlZFRvQWRkQ2F0ZWdvcnkgPyAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdUYXNrfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIGEgTmV3IFRhc2snXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrQ29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV3VGFza0lucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHRleHQ9J0FkZCBUYXNrJz48L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxDYXRlZ29yeUxpc3QgbWFuYWdlQ2F0ZWdvcnk9e2hhbmRsZVRhc2tBbmRDYXRlZ29yeX0gYWRkQ2xhc3M9e3RydWV9IC8+XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVOZXdUYXNrfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIGEgTmV3IFRhc2snXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrQ29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmV3VGFza0lucHV0fVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uIHRleHQ9J0FkZCBUYXNrJz48L0J1dHRvbj5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxCdXR0b24gdGV4dD0nVG9kb3MnIG9uQ2hhbmdlPXsoKSA9PiByb3V0ZXIucHVzaCgnL3RvZG9zJyl9PjwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiQ2F0ZWdvcnlMaXN0IiwiVG9kb0J1aWxkZXIiLCJhZGRUYXNrIiwibmVlZFRvQWRkQ2F0ZWdvcnkiLCJzZW50Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0YXNrQ29udGVudCIsInNldFRhc2tDb250ZW50IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImhhbmRsZU5ld1Rhc2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwiaW5mbyIsImNoZWNrZWQiLCJ0YWciLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVGFza0FuZENhdGVnb3J5IiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NOYW1lIiwibmV3VGFza0lucHV0IiwidGV4dCIsIm1hbmFnZUNhdGVnb3J5IiwiYWRkQ2xhc3MiLCJiciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/todoBuilder.js\n"));

/***/ })

});