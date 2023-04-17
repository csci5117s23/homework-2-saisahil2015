"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo/[id]",{

/***/ "./src/pages/todo/[id].js":
/*!********************************!*\
  !*** ./src/pages/todo/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [otherCategories, setOtherCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category1 = result.category;\n                const categories = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                console.log(\"Categories: \", categories);\n                const categoryArray = Object.keys(categories).map((key)=>categories[key].tag).filter((value)=>value != category1);\n                console.log(\"Check: \", categoryArray);\n                setOtherCategories(categoryArray);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            otherCategories.map((c)=>{\n                // console.log('Categories: ', category._id);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Category, {\n                    tag: category,\n                    onChange: handleCategory\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 89,\n                    columnNumber: 16\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"KjQ/1A4ojQFVHSAzLM+krlwGaW8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0M7Z0JBQ0NqQixNQUFLO2dCQUNMSCxPQUFPdEIsYUFBYWdDLElBQUk7Z0JBQ3hCVyxVQUFVcEI7Ozs7OztZQUNWOzBCQUVGLDhEQUFDaEMsMERBQU1BO2dCQUFDcUQsTUFBSztnQkFBT0QsVUFBVWhCOzs7Ozs7WUFBbUI7MEJBRWpELDhEQUFDZTtnQkFBTUcsTUFBSztnQkFBV0MsU0FBU2xCOzs7Ozs7MEJBQ2hDLDhEQUFDbUI7Ozs7OzBCQUNELDhEQUFDeEQsMERBQU1BO2dCQUFDcUQsTUFBSztnQkFBUUQsVUFBVSxJQUFNaEQsT0FBT3dDLElBQUksQ0FBQzs7Ozs7O1lBQ2hEOUIsZ0JBQWdCYSxHQUFHLENBQUMsQ0FBQzhCLElBQU07Z0JBQzFCLDZDQUE2QztnQkFDN0MscUJBQU8sOERBQUNDO29CQUFTN0IsS0FBS1A7b0JBQVU4QixVQUFVTzs7Ozs7O1lBQzVDOzs7Ozs7WUFFSDtBQUNILENBQUM7R0FwRnVCeEQ7O1FBQ1BSLGtEQUFTQTtRQUllSSxrREFBT0E7OztLQUx4QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vW2lkXS5qcz84Mzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRBbGxDYXRlZ29yaWVzLCBnZXRUYXNrQnlJZCwgcHV0VGFzayB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0l0ZW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdG9kb0l0ZW1JbmZvLCBzZXRUb2RvSXRlbUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW290aGVyQ2F0ZWdvcmllcywgc2V0T3RoZXJDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJZDogJywgaWQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUYXNrQnlJZCh0b2tlbiwgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHJlc3VsdC5jYXRlZ29yeTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXModG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZWdvcmllczogJywgY2F0ZWdvcmllcyk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5QXJyYXkgPSBPYmplY3Qua2V5cyhjYXRlZ29yaWVzKVxuICAgICAgICAgIC5tYXAoKGtleSkgPT4gY2F0ZWdvcmllc1trZXldLnRhZylcbiAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT0gY2F0ZWdvcnkpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2hlY2s6ICcsIGNhdGVnb3J5QXJyYXkpO1xuICAgICAgICBzZXRPdGhlckNhdGVnb3JpZXMoY2F0ZWdvcnlBcnJheSk7XG5cbiAgICAgICAgc2V0VG9kb0l0ZW1JbmZvKHJlc3VsdCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRUYXNrKCk7XG4gIH0sIFtpc0xvYWRlZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUb2RvSXRlbUluZm8oeyAuLi50b2RvSXRlbUluZm8sIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgY29uc29sZS5sb2coJ0NoZWNrOiAnLCB0b2RvSXRlbUluZm8pO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgY29uc29sZS5sb2coJ1RvZG9JdGVtOiAnLCB0b2RvSXRlbUluZm8pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHRvZG9JdGVtSW5mbyk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGVjaygpIHtcbiAgICBjb25zdCB0b2RvID0geyAuLi50b2RvSXRlbUluZm8gfTtcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgIF9pZDogdG9kby5faWQsXG4gICAgICBpbmZvOiB0b2RvLmluZm8sXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgdXNlcklkOiB0b2RvLnVzZXJJZCxcbiAgICAgIGNhdGVnb3J5OiB0b2RvLmNhdGVnb3J5LFxuICAgICAgY3JlYXRlZE9uOiB0b2RvLmNyZWF0ZWRPbixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBuZXcgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgICByb3V0ZXIucHVzaCgnL2RvbmUnKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkaW5nID8gKFxuICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdzdWJ0aXRsZSc+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgSW5zdHJ1Y3Rpb25zOiBFZGl0IHRoZSB0YXNrIGhlcmUgb3IgY29tcGxldGUgaXQgYnkgY2hlY2tpbmcgdGhlIGJveFxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT0naW5mbydcbiAgICAgICAgdmFsdWU9e3RvZG9JdGVtSW5mby5pbmZvfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8QnV0dG9uIHRleHQ9J1NhdmUnIG9uQ2hhbmdlPXtlZGl0VGFza30+PC9CdXR0b24+XG4gICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgb25DbGljaz17aGFuZGxlQ2hlY2t9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxCdXR0b24gdGV4dD0nVG9kb3MnIG9uQ2hhbmdlPXsoKSA9PiByb3V0ZXIucHVzaCgnL3RvZG9zJyl9PjwvQnV0dG9uPlxuICAgICAge290aGVyQ2F0ZWdvcmllcy5tYXAoKGMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NhdGVnb3JpZXM6ICcsIGNhdGVnb3J5Ll9pZCk7XG4gICAgICAgIHJldHVybiA8Q2F0ZWdvcnkgdGFnPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5fSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldFRhc2tCeUlkIiwicHV0VGFzayIsInVzZUF1dGgiLCJCdXR0b24iLCJMaW5rIiwic3R5bGVzIiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwib3RoZXJDYXRlZ29yaWVzIiwic2V0T3RoZXJDYXRlZ29yaWVzIiwiZ2V0VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInRlbXBsYXRlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ0YWciLCJmaWx0ZXIiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJlZGl0VGFzayIsImhhbmRsZUNoZWNrIiwidG9kbyIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiaW5mbyIsImNoZWNrZWQiLCJjcmVhdGVkT24iLCJwdXNoIiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9MaXN0IiwiaDEiLCJzdHJvbmciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiYnIiLCJjIiwiQ2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});