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

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ToDoList.module.css */ \"./src/styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoList(param) {\n    let { done  } = param;\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(async ()=>{\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllTasks)();\n        setTaskList(data);\n        setLoading(false);\n    }, []);\n    async function addTask(newTask) {\n        await addTask(newTask);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllTasks)();\n        setTaskList(data);\n        setLoading(false);\n    }\n    const taskContent = done ? taskList.filter((task)=>task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 30,\n            columnNumber: 18\n        }, this);\n    }) : taskList.filter((task)=>!task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 35,\n            columnNumber: 18\n        }, this);\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    } else {\n        return done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n            children: [\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/todos\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Incomplete Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/done\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Completed Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(TodoList, \"LAVygWv+G2QOobLWhS1YU9V5r0w=\");\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDckI7QUFDVTtBQUNYO0FBQ2U7QUFDVTtBQUV2QyxTQUFTUyxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUUzQ0MsZ0RBQVNBLENBQUMsVUFBWTtRQUNwQixNQUFNUyxPQUFPLE1BQU1SLDBEQUFXQTtRQUM5QkssWUFBWUc7UUFDWkQsV0FBVyxLQUFLO0lBQ2xCLEdBQUcsRUFBRTtJQUVMLGVBQWVOLFFBQVFRLE9BQU8sRUFBRTtRQUM5QixNQUFNUixRQUFRUTtRQUNkLE1BQU1ELE9BQU8sTUFBTVIsMERBQVdBO1FBQzlCSyxZQUFZRztRQUNaRCxXQUFXLEtBQUs7SUFDbEI7SUFFQSxNQUFNRyxjQUFjUCxPQUNoQkMsU0FDR08sTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtULElBQUksRUFDMUJVLEdBQUcsQ0FBQyxDQUFDRCxPQUFTO1FBQ2IscUJBQU8sOERBQUNuQiw2Q0FBSUE7WUFBZ0JxQixNQUFNRjtXQUFoQkEsS0FBS0csR0FBRzs7Ozs7SUFDNUIsS0FDRlgsU0FDR08sTUFBTSxDQUFDLENBQUNDLE9BQVMsQ0FBQ0EsS0FBS1QsSUFBSSxFQUMzQlUsR0FBRyxDQUFDLENBQUNELE9BQVM7UUFDYixxQkFBTyw4REFBQ25CLDZDQUFJQTtZQUFnQnFCLE1BQU1GO1dBQWhCQSxLQUFLRyxHQUFHOzs7OztJQUM1QixFQUFFO0lBRVIsSUFBSVQsU0FBUztRQUNYLHFCQUFPLDhEQUFDVTtzQkFBSzs7Ozs7O0lBQ2YsT0FBTztRQUNMLE9BQU9iLHFCQUNMLDhEQUFDYztZQUFJQyxXQUFXeEIsNkVBQWU7O2dCQUM1QmdCOzhCQUNELDhEQUFDYixrREFBSUE7b0JBQUN1QixNQUFLOzhCQUNULDRFQUFDekIsK0NBQU1BO3dCQUFDMEIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztpQ0FJakIsOERBQUNKO1lBQUlDLFdBQVd4Qiw2RUFBZTs7OEJBQzdCLDhEQUFDRSxvREFBV0E7b0JBQUNLLFNBQVNBOzs7Ozs7Z0JBQ3JCUzs4QkFDRCw4REFBQ2Isa0RBQUlBO29CQUFDdUIsTUFBSzs4QkFDVCw0RUFBQ3pCLCtDQUFNQTt3QkFBQzBCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR2xCO0lBQ0gsQ0FBQztBQUNILENBQUM7R0FqRHVCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kb0xpc3QuanM/N2QzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9Eb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL3RvZG9CdWlsZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QWxsVGFza3MsIGFkZFRhc2sgfSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9MaXN0KHsgZG9uZSB9KSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxUYXNrcygpO1xuICAgIHNldFRhc2tMaXN0KGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgYXdhaXQgYWRkVGFzayhuZXdUYXNrKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsVGFza3MoKTtcbiAgICBzZXRUYXNrTGlzdChkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9uZVxuICAgID8gdGFza0xpc3RcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pXG4gICAgOiB0YXNrTGlzdFxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkb25lID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIHt0YXNrQ29udGVudH1cbiAgICAgICAgPExpbmsgaHJlZj0nL3RvZG9zJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0luY29tcGxldGUgVGFza3MnPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIDxUb2RvQnVpbGRlciBhZGRUYXNrPXthZGRUYXNrfSAvPlxuICAgICAgICB7dGFza0NvbnRlbnR9XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kb25lJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0NvbXBsZXRlZCBUYXNrcyc+PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxUYXNrcyIsImFkZFRhc2siLCJUb2RvTGlzdCIsImRvbmUiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwibmV3VGFzayIsInRhc2tDb250ZW50IiwiZmlsdGVyIiwidGFzayIsIm1hcCIsInRvZG8iLCJfaWQiLCJzcGFuIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0xpc3QiLCJocmVmIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todoList.js\n"));

/***/ })

});