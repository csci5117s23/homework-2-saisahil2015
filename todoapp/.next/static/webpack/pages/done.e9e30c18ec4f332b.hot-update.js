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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoList(param) {\n    let { done  } = param;\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    let data = [];\n    async function getTasks() {\n        if (userId) {\n            const token = await getToken({\n                template: \"codehooks\"\n            });\n            if (done) {\n                data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCheckedTasks)(token);\n            } else {\n                data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllUncheckedTasks)(token);\n            }\n            console.log(\"Data: \", data);\n            setTaskList(data);\n            setLoading(false);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getTasks();\n    }, [\n        isLoaded\n    ]);\n    async function addTask(newTask) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postTask)(token, newTask);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllUncheckedTasks)(token);\n        setTaskList(data);\n        setLoading(false);\n    }\n    console.log(\"Done test: \", done);\n    const taskContent = done ? taskList.filter((task)=>task.checked).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 51,\n            columnNumber: 18\n        }, this);\n    }) : taskList.filter((task)=>!task.checked).map((task)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            todo: task,\n            onChange: getTasks\n        }, task._id, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 56,\n            columnNumber: 18\n        }, this);\n    });\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, this);\n    } else {\n        return done ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n            children: [\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/todos\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Incomplete Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_todoBuilder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    addTask: addTask\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                taskContent,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/done\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Completed Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todoList.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(TodoList, \"C7yXFCks7CoTV1QcOWOg1Zr03Tg=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUNyQjtBQUNVO0FBQ1g7QUFDZTtBQUtwQjtBQUNnQjtBQUV6QixTQUFTVyxTQUFTLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUMvQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLEVBQUVZLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1Qsc0RBQU9BO0lBQzlDLElBQUlVLE9BQU8sRUFBRTtJQUViLGVBQWVDLFdBQVc7UUFDeEIsSUFBSUgsUUFBUTtZQUNWLE1BQU1JLFFBQVEsTUFBTUgsU0FBUztnQkFBRUksVUFBVTtZQUFZO1lBQ3JELElBQUlYLE1BQU07Z0JBQ1JRLE9BQU8sTUFBTVosaUVBQWtCQSxDQUFDYztZQUNsQyxPQUFPO2dCQUNMRixPQUFPLE1BQU1iLG1FQUFvQkEsQ0FBQ2U7WUFDcEMsQ0FBQztZQUNERSxRQUFRQyxHQUFHLENBQUMsVUFBVUw7WUFDdEJOLFlBQVlNO1lBQ1pKLFdBQVcsS0FBSztRQUNsQixDQUFDO0lBQ0g7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZTtJQUNGLEdBQUc7UUFBQ0o7S0FBUztJQUViLGVBQWVTLFFBQVFDLE9BQU8sRUFBRTtRQUM5QixNQUFNTCxRQUFRLE1BQU1ILFNBQVM7WUFBRUksVUFBVTtRQUFZO1FBQ3JELE1BQU1kLHVEQUFRQSxDQUFDYSxPQUFPSztRQUN0QixNQUFNUCxPQUFPLE1BQU1iLG1FQUFvQkEsQ0FBQ2U7UUFDeENSLFlBQVlNO1FBQ1pKLFdBQVcsS0FBSztJQUNsQjtJQUVBUSxRQUFRQyxHQUFHLENBQUMsZUFBZWI7SUFDM0IsTUFBTWdCLGNBQWNoQixPQUNoQkMsU0FDR2dCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxPQUFPLEVBQzdCQyxHQUFHLENBQUMsQ0FBQ0YsT0FBUztRQUNiLHFCQUFPLDhEQUFDOUIsNkNBQUlBO1lBQWdCaUMsTUFBTUg7V0FBaEJBLEtBQUtJLEdBQUc7Ozs7O0lBQzVCLEtBQ0ZyQixTQUNHZ0IsTUFBTSxDQUFDLENBQUNDLE9BQVMsQ0FBQ0EsS0FBS0MsT0FBTyxFQUM5QkMsR0FBRyxDQUFDLENBQUNGLE9BQVM7UUFDYixxQkFBTyw4REFBQzlCLDZDQUFJQTtZQUFnQmlDLE1BQU1IO1lBQU1LLFVBQVVkO1dBQWhDUyxLQUFLSSxHQUFHOzs7OztJQUM1QixFQUFFO0lBRVIsSUFBSW5CLFNBQVM7UUFDWCxxQkFBTyw4REFBQ3FCO3NCQUFLOzs7Ozs7SUFDZixPQUFPO1FBQ0wsT0FBT3hCLHFCQUNMLDhEQUFDeUI7WUFBSUMsV0FBV3JDLDZFQUFlOztnQkFDNUIyQjs4QkFDRCw4REFBQ3hCLGtEQUFJQTtvQkFBQ29DLE1BQUs7OEJBQ1QsNEVBQUN0QywrQ0FBTUE7d0JBQUN1QyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2lDQUlqQiw4REFBQ0o7WUFBSUMsV0FBV3JDLDZFQUFlOzs4QkFDN0IsOERBQUNFLG9EQUFXQTtvQkFBQ3VCLFNBQVNBOzs7Ozs7Z0JBQ3JCRTs4QkFDRCw4REFBQ3hCLGtEQUFJQTtvQkFBQ29DLE1BQUs7OEJBQ1QsNEVBQUN0QywrQ0FBTUE7d0JBQUN1QyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2dCQUdsQjtJQUNILENBQUM7QUFDSCxDQUFDO0dBakV1QjlCOztRQUdpQkQsa0RBQU9BOzs7S0FIeEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RvZG9MaXN0LmpzPzdkM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgVG9kb0J1aWxkZXIgZnJvbSAnLi90b2RvQnVpbGRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGdldEFsbFVuY2hlY2tlZFRhc2tzLFxuICBnZXRBbGxDaGVja2VkVGFza3MsXG4gIHBvc3RUYXNrLFxufSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9MaXN0KHsgZG9uZSB9KSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICBsZXQgZGF0YSA9IFtdO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBkYXRhID0gYXdhaXQgZ2V0QWxsQ2hlY2tlZFRhc2tzKHRva2VuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCBnZXRBbGxVbmNoZWNrZWRUYXNrcyh0b2tlbik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnRGF0YTogJywgZGF0YSk7XG4gICAgICBzZXRUYXNrTGlzdChkYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VGFza3MoKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwb3N0VGFzayh0b2tlbiwgbmV3VGFzayk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbFVuY2hlY2tlZFRhc2tzKHRva2VuKTtcbiAgICBzZXRUYXNrTGlzdChkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdEb25lIHRlc3Q6ICcsIGRvbmUpO1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvbmVcbiAgICA/IHRhc2tMaXN0XG4gICAgICAgIC5maWx0ZXIoKHRhc2spID0+IHRhc2suY2hlY2tlZClcbiAgICAgICAgLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgIHJldHVybiA8VG9kbyBrZXk9e3Rhc2suX2lkfSB0b2RvPXt0YXNrfT48L1RvZG8+O1xuICAgICAgICB9KVxuICAgIDogdGFza0xpc3RcbiAgICAgICAgLmZpbHRlcigodGFzaykgPT4gIXRhc2suY2hlY2tlZClcbiAgICAgICAgLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgIHJldHVybiA8VG9kbyBrZXk9e3Rhc2suX2lkfSB0b2RvPXt0YXNrfSBvbkNoYW5nZT17Z2V0VGFza3N9PjwvVG9kbz47XG4gICAgICAgIH0pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkb25lID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIHt0YXNrQ29udGVudH1cbiAgICAgICAgPExpbmsgaHJlZj0nL3RvZG9zJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0luY29tcGxldGUgVGFza3MnPjwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICAgIDxUb2RvQnVpbGRlciBhZGRUYXNrPXthZGRUYXNrfSAvPlxuICAgICAgICB7dGFza0NvbnRlbnR9XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9kb25lJz5cbiAgICAgICAgICA8QnV0dG9uIHRleHQ9J0NvbXBsZXRlZCBUYXNrcyc+PC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxVbmNoZWNrZWRUYXNrcyIsImdldEFsbENoZWNrZWRUYXNrcyIsInBvc3RUYXNrIiwidXNlQXV0aCIsIlRvZG9MaXN0IiwiZG9uZSIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJkYXRhIiwiZ2V0VGFza3MiLCJ0b2tlbiIsInRlbXBsYXRlIiwiY29uc29sZSIsImxvZyIsImFkZFRhc2siLCJuZXdUYXNrIiwidGFza0NvbnRlbnQiLCJmaWx0ZXIiLCJ0YXNrIiwiY2hlY2tlZCIsIm1hcCIsInRvZG8iLCJfaWQiLCJvbkNoYW5nZSIsInNwYW4iLCJkaXYiLCJjbGFzc05hbWUiLCJ0b2RvTGlzdCIsImhyZWYiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/todoList.js\n"));

/***/ })

});