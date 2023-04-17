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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [otherCategories, setOtherCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, changeSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category = result.category;\n                var categories = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                categories = categories.filter((c)=>c.tag !== category);\n                console.log(\"Categories: \", categories);\n                setOtherCategories(categories);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    async function changeCategory() {\n        const updatedTask = {\n            _id: todoItemInfo._id,\n            info: todoItemInfo.info,\n            checked: false,\n            userId: todoItemInfo.userId,\n            category: selectedCategory,\n            createdOn: todoItemInfo.createdOn\n        };\n        console.log(\"Here's the updated task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subtitle\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Select from Tags below to Change the Category of the Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Note: The task belongs to the following category:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: todoItemInfo.category.tag\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: otherCategories.map((c)=>{\n                    console.log(\"Categories Value: \", c);\n                    console.log(\"Changed category: \", selectedCategory);\n                    console.log(\"Todo check: \", todoItemInfo);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: c.tag,\n                        onChange: changeSelectedCategory\n                    }, c._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Change Category\",\n                onChange: changeCategory\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"5AtOHVB0VCqvH0QlaQ9bQlacVwI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3ZDLDBEQUFNQTtnQkFBQ3FELE1BQUs7Z0JBQWtCRCxVQUFVUjs7Ozs7OzBCQUN6Qyw4REFBQ1k7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUN4RCwwREFBTUE7Z0JBQUNxRCxNQUFLO2dCQUFRRCxVQUFVLElBQU0vQyxPQUFPc0MsSUFBSSxDQUFDOzs7Ozs7Ozs7OztZQUVwRDtBQUNILENBQUM7R0FySHVCdkM7O1FBQ1BULGtEQUFTQTtRQUllSSxrREFBT0E7OztLQUx4QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vW2lkXS5qcz84Mzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRBbGxDYXRlZ29yaWVzLCBnZXRUYXNrQnlJZCwgcHV0VGFzayB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICdAL2NvbXBvbmVudHMvY2F0ZWdvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0b2RvSXRlbUluZm8sIHNldFRvZG9JdGVtSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbb3RoZXJDYXRlZ29yaWVzLCBzZXRPdGhlckNhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgY2hhbmdlU2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSWQ6ICcsIGlkKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VGFza0J5SWQodG9rZW4sIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdDogJywgcmVzdWx0KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSByZXN1bHQuY2F0ZWdvcnk7XG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyh0b2tlbik7XG4gICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy50YWcgIT09IGNhdGVnb3J5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXM6ICcsIGNhdGVnb3JpZXMpO1xuICAgICAgICBzZXRPdGhlckNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgICAgIHNldFRvZG9JdGVtSW5mbyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFzaygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0VG9kb0l0ZW1JbmZvKHsgLi4udG9kb0l0ZW1JbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdDaGVjazogJywgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBlZGl0VGFzaygpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGNvbnNvbGUubG9nKCdUb2RvSXRlbTogJywgdG9kb0l0ZW1JbmZvKTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB0b2RvSXRlbUluZm8pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hlY2soKSB7XG4gICAgY29uc3QgdG9kbyA9IHsgLi4udG9kb0l0ZW1JbmZvIH07XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogdG9kby5jYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gICAgcm91dGVyLnB1c2goJy9kb25lJyk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjaGFuZ2VDYXRlZ29yeSgpIHtcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgIF9pZDogdG9kb0l0ZW1JbmZvLl9pZCxcbiAgICAgIGluZm86IHRvZG9JdGVtSW5mby5pbmZvLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICB1c2VySWQ6IHRvZG9JdGVtSW5mby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kb0l0ZW1JbmZvLmNyZWF0ZWRPbixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSB1cGRhdGVkIHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZyA/IChcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgPGgxIGNsYXNzTmFtZT0nc3VidGl0bGUnPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIEluc3RydWN0aW9uczogRWRpdCB0aGUgdGFzayBoZXJlIG9yIGNvbXBsZXRlIGl0IGJ5IGNoZWNraW5nIHRoZSBib3hcbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9J2luZm8nXG4gICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgPEJ1dHRvbiB0ZXh0PSdTYXZlJyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VidGl0bGUnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIFNlbGVjdCBmcm9tIFRhZ3MgYmVsb3cgdG8gQ2hhbmdlIHRoZSBDYXRlZ29yeSBvZiB0aGUgVGFza1xuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgIE5vdGU6IFRoZSB0YXNrIGJlbG9uZ3MgdG8gdGhlIGZvbGxvd2luZyBjYXRlZ29yeTpcbiAgICAgICAgPHN0cm9uZz57dG9kb0l0ZW1JbmZvLmNhdGVnb3J5LnRhZ308L3N0cm9uZz5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW5zJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcycmVtJyB9fT5cbiAgICAgICAge290aGVyQ2F0ZWdvcmllcy5tYXAoKGMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZWdvcmllcyBWYWx1ZTogJywgYyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZWQgY2F0ZWdvcnk6ICcsIHNlbGVjdGVkQ2F0ZWdvcnkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2RvIGNoZWNrOiAnLCB0b2RvSXRlbUluZm8pO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2F0ZWdvcnlcbiAgICAgICAgICAgICAga2V5PXtjLl9pZH1cbiAgICAgICAgICAgICAgdGFnPXtjLnRhZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVNlbGVjdGVkQ2F0ZWdvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHRleHQ9J0NoYW5nZSBDYXRlZ29yeScgb25DaGFuZ2U9e2NoYW5nZUNhdGVnb3J5fT48L0J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8QnV0dG9uIHRleHQ9J1RvZG9zJyBvbkNoYW5nZT17KCkgPT4gcm91dGVyLnB1c2goJy90b2RvcycpfT48L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRUYXNrQnlJZCIsInB1dFRhc2siLCJ1c2VBdXRoIiwiQnV0dG9uIiwiTGluayIsInN0eWxlcyIsIkNhdGVnb3J5IiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwib3RoZXJDYXRlZ29yaWVzIiwic2V0T3RoZXJDYXRlZ29yaWVzIiwic2VsZWN0ZWRDYXRlZ29yeSIsImNoYW5nZVNlbGVjdGVkQ2F0ZWdvcnkiLCJnZXRUYXNrIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJyZXN1bHQiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJmaWx0ZXIiLCJjIiwidGFnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZWRpdFRhc2siLCJoYW5kbGVDaGVjayIsInRvZG8iLCJ1cGRhdGVkVGFzayIsIl9pZCIsImluZm8iLCJjaGVja2VkIiwiY3JlYXRlZE9uIiwicHVzaCIsImNoYW5nZUNhdGVnb3J5Iiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9MaXN0IiwiaDEiLCJzdHJvbmciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiYnIiLCJzdHlsZSIsIm1hcmdpblRvcCIsInAiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});