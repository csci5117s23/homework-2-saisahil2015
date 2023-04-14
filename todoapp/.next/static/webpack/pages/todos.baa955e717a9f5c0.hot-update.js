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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ToDoList.module.css */ \"./src/styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoList(param) {\n    let { done  } = param;\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(async ()=>{\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllTasks)();\n        setTaskList(data);\n        setLoading(false);\n    }, []);\n    async function addTask(newTask) {\n        const data = (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllTasks)();\n        setTaskList(data);\n        setLoading(false);\n    }\n    const taskContent = done ? taskList.filter((task)=>task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 29,\n            columnNumber: 18\n        }, this);\n    }) : taskList.filter((task)=>!task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 34,\n            columnNumber: 18\n        }, this);\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    } else {\n        return done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n            children: [\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/todos\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Incomplete Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/done\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Completed Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(TodoList, \"LAVygWv+G2QOobLWhS1YU9V5r0w=\");\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDckI7QUFDVTtBQUNYO0FBQ2U7QUFDVTtBQUV2QyxTQUFTUyxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUUzQ0MsZ0RBQVNBLENBQUMsVUFBWTtRQUNwQixNQUFNUyxPQUFPLE1BQU1SLDBEQUFXQTtRQUM5QkssWUFBWUc7UUFDWkQsV0FBVyxLQUFLO0lBQ2xCLEdBQUcsRUFBRTtJQUVMLGVBQWVOLFFBQVFRLE9BQU8sRUFBRTtRQUM5QixNQUFNRCxPQUFPUiwwREFBV0E7UUFDeEJLLFlBQVlHO1FBQ1pELFdBQVcsS0FBSztJQUNsQjtJQUVBLE1BQU1HLGNBQWNQLE9BQ2hCQyxTQUNHTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1QsSUFBSSxFQUMxQlUsR0FBRyxDQUFDLENBQUNELE9BQVM7UUFDYixxQkFBTyw4REFBQ25CLDZDQUFJQTtZQUFnQnFCLE1BQU1GO1dBQWhCQSxLQUFLRyxHQUFHOzs7OztJQUM1QixLQUNGWCxTQUNHTyxNQUFNLENBQUMsQ0FBQ0MsT0FBUyxDQUFDQSxLQUFLVCxJQUFJLEVBQzNCVSxHQUFHLENBQUMsQ0FBQ0QsT0FBUztRQUNiLHFCQUFPLDhEQUFDbkIsNkNBQUlBO1lBQWdCcUIsTUFBTUY7V0FBaEJBLEtBQUtHLEdBQUc7Ozs7O0lBQzVCLEVBQUU7SUFFUixJQUFJVCxTQUFTO1FBQ1gscUJBQU8sOERBQUNVO3NCQUFLOzs7Ozs7SUFDZixPQUFPO1FBQ0wsT0FBT2IscUJBQ0wsOERBQUNjO1lBQUlDLFdBQVd4Qiw2RUFBZTs7Z0JBQzVCZ0I7OEJBQ0QsOERBQUNiLGtEQUFJQTtvQkFBQ3VCLE1BQUs7OEJBQ1QsNEVBQUN6QiwrQ0FBTUE7d0JBQUMwQixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2lDQUlqQiw4REFBQ0o7WUFBSUMsV0FBV3hCLDZFQUFlOzs4QkFDN0IsOERBQUNFLG9EQUFXQTtvQkFBQ0ssU0FBU0E7Ozs7OztnQkFDckJTOzhCQUNELDhEQUFDYixrREFBSUE7b0JBQUN1QixNQUFLOzhCQUNULDRFQUFDekIsK0NBQU1BO3dCQUFDMEIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OztnQkFHbEI7SUFDSCxDQUFDO0FBQ0gsQ0FBQztHQWhEdUJuQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdC5qcz83ZDNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub0RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IFRvZG9CdWlsZGVyIGZyb20gJy4vdG9kb0J1aWxkZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRBbGxUYXNrcywgYWRkVGFzayB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0xpc3QoeyBkb25lIH0pIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFRhc2tzKCk7XG4gICAgc2V0VGFza0xpc3QoZGF0YSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICBjb25zdCBkYXRhID0gZ2V0QWxsVGFza3MoKTtcbiAgICBzZXRUYXNrTGlzdChkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9uZVxuICAgID8gdGFza0xpc3RcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pXG4gICAgOiB0YXNrTGlzdFxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkb25lID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIHt0YXNrQ29udGVudH1cbiAgICAgICAgPExpbmsgaHJlZj0nL3RvZG9zJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0luY29tcGxldGUgVGFza3MnPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIDxUb2RvQnVpbGRlciBhZGRUYXNrPXthZGRUYXNrfSAvPlxuICAgICAgICB7dGFza0NvbnRlbnR9XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kb25lJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0NvbXBsZXRlZCBUYXNrcyc+PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxUYXNrcyIsImFkZFRhc2siLCJUb2RvTGlzdCIsImRvbmUiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwibmV3VGFzayIsInRhc2tDb250ZW50IiwiZmlsdGVyIiwidGFzayIsIm1hcCIsInRvZG8iLCJfaWQiLCJzcGFuIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0xpc3QiLCJocmVmIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todoList.js\n"));

/***/ })

});