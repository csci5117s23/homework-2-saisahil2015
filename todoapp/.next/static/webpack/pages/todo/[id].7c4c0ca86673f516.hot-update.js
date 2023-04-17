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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [otherCategories, setOtherCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, changeSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category = result.category;\n                var categories = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                categories = categories.filter((c)=>c.tag !== category);\n                console.log(\"Categories: \", categories);\n                setOtherCategories(categories);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    // async function changeCategory() {\n    //   const updatedTask = {\n    //     _id: todoItemInfo._id,\n    //     info: todoItemInfo.info,\n    //     checked: false,\n    //     userId: todoItemInfo.userId,\n    //     category: selectedCategory,\n    //     createdOn: todoItemInfo.createdOn,\n    //   };\n    //   console.log(\"Here's the updated task: \", updatedTask);\n    //   const token = await getToken({ template: 'codehooks' });\n    //   await putTask(token, updatedTask);\n    // }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subtitle\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Select from Tags below to Change the Category of the Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Note: The task belongs to the following category:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: todoItemInfo.category\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: otherCategories.map((c)=>{\n                    console.log(\"Categories Value: \", c);\n                    console.log(\"Changed category: \", selectedCategory);\n                    console.log(\"Todo check: \", todoItemInfo);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: c.tag,\n                        onChange: changeSelectedCategory\n                    }, c._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Change Category\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"5AtOHVB0VCqvH0QlaQ9bQlacVwI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O1lBRXBEO0FBQ0gsQ0FBQztHQXJIdUJ2Qzs7UUFDUFQsa0RBQVNBO1FBSWVJLGtEQUFPQTs7O0tBTHhCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzPzgzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldEFsbENhdGVnb3JpZXMsIGdldFRhc2tCeUlkLCBwdXRUYXNrIH0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJ0AvY29tcG9uZW50cy9jYXRlZ29yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JdGVtKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RvZG9JdGVtSW5mbywgc2V0VG9kb0l0ZW1JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIGdldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtvdGhlckNhdGVnb3JpZXMsIHNldE90aGVyQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBjaGFuZ2VTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJZDogJywgaWQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUYXNrQnlJZCh0b2tlbiwgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHJlc3VsdC5jYXRlZ29yeTtcbiAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKHRva2VuKTtcbiAgICAgICAgY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjKSA9PiBjLnRhZyAhPT0gY2F0ZWdvcnkpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2F0ZWdvcmllczogJywgY2F0ZWdvcmllcyk7XG4gICAgICAgIHNldE90aGVyQ2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcbiAgICAgICAgc2V0VG9kb0l0ZW1JbmZvKHJlc3VsdCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRUYXNrKCk7XG4gIH0sIFtpc0xvYWRlZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUb2RvSXRlbUluZm8oeyAuLi50b2RvSXRlbUluZm8sIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgY29uc29sZS5sb2coJ0NoZWNrOiAnLCB0b2RvSXRlbUluZm8pO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgY29uc29sZS5sb2coJ1RvZG9JdGVtOiAnLCB0b2RvSXRlbUluZm8pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHRvZG9JdGVtSW5mbyk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGVjaygpIHtcbiAgICBjb25zdCB0b2RvID0geyAuLi50b2RvSXRlbUluZm8gfTtcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgIF9pZDogdG9kby5faWQsXG4gICAgICBpbmZvOiB0b2RvLmluZm8sXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgdXNlcklkOiB0b2RvLnVzZXJJZCxcbiAgICAgIGNhdGVnb3J5OiB0b2RvLmNhdGVnb3J5LFxuICAgICAgY3JlYXRlZE9uOiB0b2RvLmNyZWF0ZWRPbixcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBuZXcgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgICByb3V0ZXIucHVzaCgnL2RvbmUnKTtcbiAgfVxuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNhdGVnb3J5KCkge1xuICAvLyAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAvLyAgICAgX2lkOiB0b2RvSXRlbUluZm8uX2lkLFxuICAvLyAgICAgaW5mbzogdG9kb0l0ZW1JbmZvLmluZm8sXG4gIC8vICAgICBjaGVja2VkOiBmYWxzZSxcbiAgLy8gICAgIHVzZXJJZDogdG9kb0l0ZW1JbmZvLnVzZXJJZCxcbiAgLy8gICAgIGNhdGVnb3J5OiBzZWxlY3RlZENhdGVnb3J5LFxuICAvLyAgICAgY3JlYXRlZE9uOiB0b2RvSXRlbUluZm8uY3JlYXRlZE9uLFxuICAvLyAgIH07XG4gIC8vICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIHVwZGF0ZWQgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgLy8gICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAvLyAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgLy8gfVxuXG4gIHJldHVybiBsb2FkaW5nID8gKFxuICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvTGlzdH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdzdWJ0aXRsZSc+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgSW5zdHJ1Y3Rpb25zOiBFZGl0IHRoZSB0YXNrIGhlcmUgb3IgY29tcGxldGUgaXQgYnkgY2hlY2tpbmcgdGhlIGJveFxuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT0naW5mbydcbiAgICAgICAgdmFsdWU9e3RvZG9JdGVtSW5mby5pbmZvfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8QnV0dG9uIHRleHQ9J1NhdmUnIG9uQ2hhbmdlPXtlZGl0VGFza30+PC9CdXR0b24+XG4gICAgICAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcbiAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgb25DbGljaz17aGFuZGxlQ2hlY2t9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJ0aXRsZScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMnJlbScgfX0+XG4gICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgU2VsZWN0IGZyb20gVGFncyBiZWxvdyB0byBDaGFuZ2UgdGhlIENhdGVnb3J5IG9mIHRoZSBUYXNrXG4gICAgICAgIDwvc3Ryb25nPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5cbiAgICAgICAgTm90ZTogVGhlIHRhc2sgYmVsb25ncyB0byB0aGUgZm9sbG93aW5nIGNhdGVnb3J5OlxuICAgICAgICA8c3Ryb25nPnt0b2RvSXRlbUluZm8uY2F0ZWdvcnl9PC9zdHJvbmc+XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucycgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMnJlbScgfX0+XG4gICAgICAgIHtvdGhlckNhdGVnb3JpZXMubWFwKChjKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXMgVmFsdWU6ICcsIGMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VkIGNhdGVnb3J5OiAnLCBzZWxlY3RlZENhdGVnb3J5KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9kbyBjaGVjazogJywgdG9kb0l0ZW1JbmZvKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICAgIGtleT17Yy5faWR9XG4gICAgICAgICAgICAgIHRhZz17Yy50YWd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VTZWxlY3RlZENhdGVnb3J5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiB0ZXh0PSdDaGFuZ2UgQ2F0ZWdvcnknPjwvQnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxCdXR0b24gdGV4dD0nVG9kb3MnIG9uQ2hhbmdlPXsoKSA9PiByb3V0ZXIucHVzaCgnL3RvZG9zJyl9PjwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldFRhc2tCeUlkIiwicHV0VGFzayIsInVzZUF1dGgiLCJCdXR0b24iLCJMaW5rIiwic3R5bGVzIiwiQ2F0ZWdvcnkiLCJUb2RvSXRlbSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZG9JdGVtSW5mbyIsInNldFRvZG9JdGVtSW5mbyIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJvdGhlckNhdGVnb3JpZXMiLCJzZXRPdGhlckNhdGVnb3JpZXMiLCJzZWxlY3RlZENhdGVnb3J5IiwiY2hhbmdlU2VsZWN0ZWRDYXRlZ29yeSIsImdldFRhc2siLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ0ZW1wbGF0ZSIsInJlc3VsdCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImZpbHRlciIsImMiLCJ0YWciLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJlZGl0VGFzayIsImhhbmRsZUNoZWNrIiwidG9kbyIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiaW5mbyIsImNoZWNrZWQiLCJjcmVhdGVkT24iLCJwdXNoIiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9MaXN0IiwiaDEiLCJzdHJvbmciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiYnIiLCJzdHlsZSIsIm1hcmdpblRvcCIsInAiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});