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

/***/ "./src/pages/todos/[category].js":
/*!***************************************!*\
  !*** ./src/pages/todos/[category].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IncompleteTasksWithCategoris; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/todo */ \"./src/components/todo.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction IncompleteTasksWithCategoris() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"Router info: \", router);\n    const { category  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [categoryName, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", category);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const categoryName = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getCategoryById)(token, id);\n                setCategory(categoryName);\n                const incompleteTasksForCategory = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getIncompleteTasksForCategory)(token, categoryName);\n                console.log(\"incompleteTasksForCategory: \", incompleteTasksForCategory);\n                setTaskList(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todos/[category].js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            categoryName,\n            taskList.map((task)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    todo: task\n                }, task._id, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todos/[category].js\",\n                    lineNumber: 74,\n                    columnNumber: 16\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todos/[category].js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(IncompleteTasksWithCategoris, \"n7aijZdbyxL5qfD9hEUj8A6d/4s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = IncompleteTasksWithCategoris;\nvar _c;\n$RefreshReg$(_c, \"IncompleteTasksWithCategoris\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kb3MvW2NhdGVnb3J5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFNaEI7QUFDZ0I7QUFDQztBQUNaO0FBQ1E7QUFFdEIsU0FBU1csK0JBQStCOztJQUNyRCxNQUFNQyxTQUFTVixzREFBU0E7SUFDeEJXLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJGO0lBQzdCLE1BQU0sRUFBRUcsU0FBUSxFQUFFLEdBQUdILE9BQU9JLEtBQUs7SUFDakMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ21CLGNBQWNDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDLElBQUk7SUFDakQsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLEVBQUV1QixTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdsQixzREFBT0E7SUFFOUNOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFleUIsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWWCxRQUFRQyxHQUFHLENBQUMsUUFBUUM7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUYsU0FBUztvQkFBRUcsVUFBVTtnQkFBWTtnQkFDckQsTUFBTVQsZUFBZSxNQUFNZCw4REFBZUEsQ0FBQ3NCLE9BQU9FO2dCQUNsRFQsWUFBWUQ7Z0JBQ1osTUFBTVcsNkJBQTZCLE1BQU14Qiw0RUFBNkJBLENBQ3BFcUIsT0FDQVI7Z0JBRUZOLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NnQjtnQkFDNUNSLFlBQVlTO2dCQUNaYixXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FRO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsU0FBU1Msa0JBQWtCQyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDQyxnQkFBZ0I7WUFBRSxHQUFHQyxZQUFZO1lBQUUsQ0FBQ0osS0FBSyxFQUFFQztRQUFNO1FBQ2pEdEIsUUFBUUMsR0FBRyxDQUFDLFdBQVd3QjtJQUN6QjtJQUNBLGVBQWVDLFdBQVc7UUFDeEIsTUFBTVosUUFBUSxNQUFNRixTQUFTO1lBQUVHLFVBQVU7UUFBWTtRQUNyRGYsUUFBUUMsR0FBRyxDQUFDLGNBQWN3QjtRQUMxQixNQUFNbEMsc0RBQU9BLENBQUN1QixPQUFPVztJQUN2QjtJQUVBLGVBQWVFLGNBQWM7UUFDM0IsTUFBTUMsT0FBTztZQUFFLEdBQUdILFlBQVk7UUFBQztRQUMvQixNQUFNSSxjQUFjO1lBQ2xCQyxLQUFLRixLQUFLRSxHQUFHO1lBQ2JDLE1BQU1ILEtBQUtHLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2JyQixRQUFRaUIsS0FBS2pCLE1BQU07WUFDbkJzQixXQUFXTCxLQUFLSyxTQUFTO1FBQzNCO1FBQ0FqQyxRQUFRQyxHQUFHLENBQUMseUJBQXlCNEI7UUFDckMsTUFBTWYsUUFBUSxNQUFNRixTQUFTO1lBQUVHLFVBQVU7UUFBWTtRQUNyRCxNQUFNeEIsc0RBQU9BLENBQUN1QixPQUFPZTtRQUNyQjlCLE9BQU9tQyxJQUFJLENBQUM7SUFDZDtJQUVBLE9BQU85Qix3QkFDTCw4REFBQytCO2tCQUFLOzs7Ozs2QkFFTiw4REFBQ0M7O1lBQ0U5QjtZQUNBRSxTQUFTNkIsR0FBRyxDQUFDLENBQUNDLE9BQVM7Z0JBQ3RCLHFCQUFPLDhEQUFDekMsd0RBQUlBO29CQUFnQitCLE1BQU1VO21CQUFoQkEsS0FBS1IsR0FBRzs7Ozs7WUFDNUI7Ozs7OztZQUVIO0FBQ0gsQ0FBQztHQWhFdUJoQzs7UUFDUFQsa0RBQVNBO1FBTWVLLGtEQUFPQTs7O0tBUHhCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kb3MvW2NhdGVnb3J5XS5qcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1xuICBnZXRUYXNrQnlJZCxcbiAgcHV0VGFzayxcbiAgZ2V0Q2F0ZWdvcnlCeUlkLFxuICBnZXRJbmNvbXBsZXRlVGFza3NGb3JDYXRlZ29yeSxcbn0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgVG9kbyBmcm9tICdAL2NvbXBvbmVudHMvdG9kbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluY29tcGxldGVUYXNrc1dpdGhDYXRlZ29yaXMoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZygnUm91dGVyIGluZm86ICcsIHJvdXRlcik7XG4gIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGFza0xpc3QsIHNldFRhc2tMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lkOiAnLCBjYXRlZ29yeSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGF3YWl0IGdldENhdGVnb3J5QnlJZCh0b2tlbiwgaWQpO1xuICAgICAgICBzZXRDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgICAgICBjb25zdCBpbmNvbXBsZXRlVGFza3NGb3JDYXRlZ29yeSA9IGF3YWl0IGdldEluY29tcGxldGVUYXNrc0ZvckNhdGVnb3J5KFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICAgIGNhdGVnb3J5TmFtZVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZVRhc2tzRm9yQ2F0ZWdvcnk6ICcsIGluY29tcGxldGVUYXNrc0ZvckNhdGVnb3J5KTtcbiAgICAgICAgc2V0VGFza0xpc3QocmVzdWx0KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdldFRhc2soKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFRvZG9JdGVtSW5mbyh7IC4uLnRvZG9JdGVtSW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnQ2hlY2s6ICcsIHRvZG9JdGVtSW5mbyk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBjb25zb2xlLmxvZygnVG9kb0l0ZW06ICcsIHRvZG9JdGVtSW5mbyk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKCkge1xuICAgIGNvbnN0IHRvZG8gPSB7IC4uLnRvZG9JdGVtSW5mbyB9O1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgX2lkOiB0b2RvLl9pZCxcbiAgICAgIGluZm86IHRvZG8uaW5mbyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB1c2VySWQ6IHRvZG8udXNlcklkLFxuICAgICAgY3JlYXRlZE9uOiB0b2RvLmNyZWF0ZWRPbixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBuZXcgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgICByb3V0ZXIucHVzaCgnL2RvbmUnKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkaW5nID8gKFxuICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdj5cbiAgICAgIHtjYXRlZ29yeU5hbWV9XG4gICAgICB7dGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgIHJldHVybiA8VG9kbyBrZXk9e3Rhc2suX2lkfSB0b2RvPXt0YXNrfT48L1RvZG8+O1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRUYXNrQnlJZCIsInB1dFRhc2siLCJnZXRDYXRlZ29yeUJ5SWQiLCJnZXRJbmNvbXBsZXRlVGFza3NGb3JDYXRlZ29yeSIsInVzZUF1dGgiLCJCdXR0b24iLCJMaW5rIiwiVG9kbyIsIkluY29tcGxldGVUYXNrc1dpdGhDYXRlZ29yaXMiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnkiLCJxdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2F0ZWdvcnlOYW1lIiwic2V0Q2F0ZWdvcnkiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiaXNMb2FkZWQiLCJ1c2VySWQiLCJnZXRUb2tlbiIsImdldFRhc2siLCJ0b2tlbiIsInRlbXBsYXRlIiwiaWQiLCJpbmNvbXBsZXRlVGFza3NGb3JDYXRlZ29yeSIsInJlc3VsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInNldFRvZG9JdGVtSW5mbyIsInRvZG9JdGVtSW5mbyIsImVkaXRUYXNrIiwiaGFuZGxlQ2hlY2siLCJ0b2RvIiwidXBkYXRlZFRhc2siLCJfaWQiLCJpbmZvIiwiY2hlY2tlZCIsImNyZWF0ZWRPbiIsInB1c2giLCJzcGFuIiwiZGl2IiwibWFwIiwidGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todos/[category].js\n"));

/***/ })

});