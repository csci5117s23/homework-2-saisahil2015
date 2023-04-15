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

/***/ "./src/components/todoList.js":
/*!************************************!*\
  !*** ./src/components/todoList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoList(param) {\n    let { done  } = param;\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    let data = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        async function getTasks() {\n            if (userId) {\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                if (done) {\n                    data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCheckedTasks)(token);\n                } else {\n                    data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllUncheckedTasks)(token);\n                }\n                console.log(\"Data: \", data);\n                setTaskList(data);\n                setLoading(false);\n            }\n        }\n        getTasks();\n    }, [\n        isLoaded\n    ]);\n    async function addTask(newTask) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postTask)(token, newTask);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllUncheckedTasks)(token);\n        setTaskList(data);\n        setLoading(false);\n    }\n    console.log(\"Done test: \", done);\n    const taskContent = done ? taskList.filter((task)=>task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 50,\n            columnNumber: 18\n        }, this);\n    }) : taskList.filter((task)=>!task.done).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 55,\n            columnNumber: 18\n        }, this);\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 59,\n            columnNumber: 12\n        }, this);\n    } else {\n        return !done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n            children: [\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/todos\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Incomplete Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/done\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Completed Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(TodoList, \"C7yXFCks7CoTV1QcOWOg1Zr03Tg=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUNyQjtBQUNVO0FBQ1g7QUFDZTtBQUtwQjtBQUNnQjtBQUV6QixTQUFTVyxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLEVBQUVZLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1Qsc0RBQU9BO0lBQzlDLElBQUlVLE9BQU8sRUFBRTtJQUViZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZWUsV0FBVztZQUN4QixJQUFJSCxRQUFRO2dCQUNWLE1BQU1JLFFBQVEsTUFBTUgsU0FBUztvQkFBRUksVUFBVTtnQkFBWTtnQkFDckQsSUFBSVgsTUFBTTtvQkFDUlEsT0FBTyxNQUFNWixpRUFBa0JBLENBQUNjO2dCQUNsQyxPQUFPO29CQUNMRixPQUFPLE1BQU1iLG1FQUFvQkEsQ0FBQ2U7Z0JBQ3BDLENBQUM7Z0JBQ0RFLFFBQVFDLEdBQUcsQ0FBQyxVQUFVTDtnQkFDdEJOLFlBQVlNO2dCQUNaSixXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FLO0lBQ0YsR0FBRztRQUFDSjtLQUFTO0lBRWIsZUFBZVMsUUFBUUMsT0FBTyxFQUFFO1FBQzlCLE1BQU1MLFFBQVEsTUFBTUgsU0FBUztZQUFFSSxVQUFVO1FBQVk7UUFDckQsTUFBTWQsdURBQVFBLENBQUNhLE9BQU9LO1FBQ3RCLE1BQU1QLE9BQU8sTUFBTWIsbUVBQW9CQSxDQUFDZTtRQUN4Q1IsWUFBWU07UUFDWkosV0FBVyxLQUFLO0lBQ2xCO0lBRUFRLFFBQVFDLEdBQUcsQ0FBQyxlQUFlYjtJQUMzQixNQUFNZ0IsY0FBY2hCLE9BQ2hCQyxTQUNHZ0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtsQixJQUFJLEVBQzFCbUIsR0FBRyxDQUFDLENBQUNELE9BQVM7UUFDYixxQkFBTyw4REFBQzlCLDZDQUFJQTtZQUFnQmdDLE1BQU1GO1dBQWhCQSxLQUFLRyxHQUFHOzs7OztJQUM1QixLQUNGcEIsU0FDR2dCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTLENBQUNBLEtBQUtsQixJQUFJLEVBQzNCbUIsR0FBRyxDQUFDLENBQUNELE9BQVM7UUFDYixxQkFBTyw4REFBQzlCLDZDQUFJQTtZQUFnQmdDLE1BQU1GO1dBQWhCQSxLQUFLRyxHQUFHOzs7OztJQUM1QixFQUFFO0lBRVIsSUFBSWxCLFNBQVM7UUFDWCxxQkFBTyw4REFBQ21CO3NCQUFLOzs7Ozs7SUFDZixPQUFPO1FBQ0wsT0FBTyxDQUFDdEIscUJBQ04sOERBQUN1QjtZQUFJQyxXQUFXbkMsNkVBQWU7O2dCQUM1QjJCOzhCQUNELDhEQUFDeEIsa0RBQUlBO29CQUFDa0MsTUFBSzs4QkFDVCw0RUFBQ3BDLCtDQUFNQTt3QkFBQ3FDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSWpCLDhEQUFDSjtZQUFJQyxXQUFXbkMsNkVBQWU7OzhCQUM3Qiw4REFBQ0Usb0RBQVdBO29CQUFDdUIsU0FBU0E7Ozs7OztnQkFDckJFOzhCQUNELDhEQUFDeEIsa0RBQUlBO29CQUFDa0MsTUFBSzs4QkFDVCw0RUFBQ3BDLCtDQUFNQTt3QkFBQ3FDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR2xCO0lBQ0gsQ0FBQztBQUNILENBQUM7R0FoRXVCNUI7O1FBR2lCRCxrREFBT0E7OztLQUh4QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9kb0xpc3QuanM/N2QzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL3RvZG9CdWlsZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsVW5jaGVja2VkVGFza3MsXG4gIGdldEFsbENoZWNrZWRUYXNrcyxcbiAgcG9zdFRhc2ssXG59IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0xpc3QoeyBkb25lIH0pIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIGdldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGxldCBkYXRhID0gW107XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgZ2V0QWxsQ2hlY2tlZFRhc2tzKHRva2VuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgZ2V0QWxsVW5jaGVja2VkVGFza3ModG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKTtcbiAgICAgICAgc2V0VGFza0xpc3QoZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRUYXNrcygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBhc3luYyBmdW5jdGlvbiBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHBvc3RUYXNrKHRva2VuLCBuZXdUYXNrKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsVW5jaGVja2VkVGFza3ModG9rZW4pO1xuICAgIHNldFRhc2tMaXN0KGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ0RvbmUgdGVzdDogJywgZG9uZSk7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9uZVxuICAgID8gdGFza0xpc3RcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pXG4gICAgOiB0YXNrTGlzdFxuICAgICAgICAuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5kb25lKVxuICAgICAgICAubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUb2RvIGtleT17dGFzay5faWR9IHRvZG89e3Rhc2t9PjwvVG9kbz47XG4gICAgICAgIH0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAhZG9uZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgICB7dGFza0NvbnRlbnR9XG4gICAgICAgIDxMaW5rIGhyZWY9Jy90b2Rvcyc+XG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0PSdJbmNvbXBsZXRlIFRhc2tzJz48L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgICA8VG9kb0J1aWxkZXIgYWRkVGFzaz17YWRkVGFza30gLz5cbiAgICAgICAge3Rhc2tDb250ZW50fVxuICAgICAgICA8TGluayBocmVmPScvZG9uZSc+XG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0PSdDb21wbGV0ZWQgVGFza3MnPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9kbyIsInN0eWxlcyIsIkJ1dHRvbiIsIlRvZG9CdWlsZGVyIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0QWxsVW5jaGVja2VkVGFza3MiLCJnZXRBbGxDaGVja2VkVGFza3MiLCJwb3N0VGFzayIsInVzZUF1dGgiLCJUb2RvTGlzdCIsImRvbmUiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwiZGF0YSIsImdldFRhc2tzIiwidG9rZW4iLCJ0ZW1wbGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRUYXNrIiwibmV3VGFzayIsInRhc2tDb250ZW50IiwiZmlsdGVyIiwidGFzayIsIm1hcCIsInRvZG8iLCJfaWQiLCJzcGFuIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0xpc3QiLCJocmVmIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todoList.js\n"));

/***/ })

});