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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [otherCategories, setOtherCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCategory, changeSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category = result.category;\n                var categories = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                categories = categories.filter((c)=>c.tag !== category);\n                console.log(\"Categories: \", categories);\n                setOtherCategories(categories);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo1 = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo1._id,\n            info: todo1.info,\n            checked: true,\n            userId: todo1.userId,\n            category: todo1.category,\n            createdOn: todo1.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    async function changeCategory() {\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subtitle\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Select from Tags below to Change the Category of the Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: otherCategories.map((c)=>{\n                    console.log(\"Categories Value: \", c);\n                    console.log(\"Changed category: \", selectedCategory);\n                    console.log(\"Todo check: \", todoItemInfo);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: c,\n                        onChange: changeSelectedCategory\n                    }, c._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Change Category\",\n                onChange: changeCategory\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"5AtOHVB0VCqvH0QlaQ9bQlacVwI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUNELDhEQUFDeEQsMERBQU1BO2dCQUFDcUQsTUFBSztnQkFBUUQsVUFBVSxJQUFNL0MsT0FBT3NDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7WUFFcEQ7QUFDSCxDQUFDO0dBN0d1QnZDOztRQUNQVCxrREFBU0E7UUFJZUksa0RBQU9BOzs7S0FMeEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2RvL1tpZF0uanM/ODM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0QWxsQ2F0ZWdvcmllcywgZ2V0VGFza0J5SWQsIHB1dFRhc2sgfSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnQC9jb21wb25lbnRzL2NhdGVnb3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0l0ZW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdG9kb0l0ZW1JbmZvLCBzZXRUb2RvSXRlbUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW290aGVyQ2F0ZWdvcmllcywgc2V0T3RoZXJDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIGNoYW5nZVNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lkOiAnLCBpZCk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFRhc2tCeUlkKHRva2VuLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHQ6ICcsIHJlc3VsdCk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcmVzdWx0LmNhdGVnb3J5O1xuICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXModG9rZW4pO1xuICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMudGFnICE9PSBjYXRlZ29yeSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzOiAnLCBjYXRlZ29yaWVzKTtcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgICAgICBzZXRUb2RvSXRlbUluZm8ocmVzdWx0KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdldFRhc2soKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFRvZG9JdGVtSW5mbyh7IC4uLnRvZG9JdGVtSW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnQ2hlY2s6ICcsIHRvZG9JdGVtSW5mbyk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBjb25zb2xlLmxvZygnVG9kb0l0ZW06ICcsIHRvZG9JdGVtSW5mbyk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKCkge1xuICAgIGNvbnN0IHRvZG8gPSB7IC4uLnRvZG9JdGVtSW5mbyB9O1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgX2lkOiB0b2RvLl9pZCxcbiAgICAgIGluZm86IHRvZG8uaW5mbyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB1c2VySWQ6IHRvZG8udXNlcklkLFxuICAgICAgY2F0ZWdvcnk6IHRvZG8uY2F0ZWdvcnksXG4gICAgICBjcmVhdGVkT246IHRvZG8uY3JlYXRlZE9uLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIG5ldyB0YXNrOiBcIiwgdXBkYXRlZFRhc2spO1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdXBkYXRlZFRhc2spO1xuICAgIHJvdXRlci5wdXNoKCcvZG9uZScpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hhbmdlQ2F0ZWdvcnkoKSB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogdG9kby5jYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZyA/IChcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgPGgxIGNsYXNzTmFtZT0nc3VidGl0bGUnPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIEluc3RydWN0aW9uczogRWRpdCB0aGUgdGFzayBoZXJlIG9yIGNvbXBsZXRlIGl0IGJ5IGNoZWNraW5nIHRoZSBib3hcbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9J2luZm8nXG4gICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgPEJ1dHRvbiB0ZXh0PSdTYXZlJyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VidGl0bGUnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIFNlbGVjdCBmcm9tIFRhZ3MgYmVsb3cgdG8gQ2hhbmdlIHRoZSBDYXRlZ29yeSBvZiB0aGUgVGFza1xuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICB7b3RoZXJDYXRlZ29yaWVzLm1hcCgoYykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIFZhbHVlOiAnLCBjKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlZCBjYXRlZ29yeTogJywgc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1RvZG8gY2hlY2s6ICcsIHRvZG9JdGVtSW5mbyk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXRlZ29yeSBrZXk9e2MuX2lkfSB0YWc9e2N9IG9uQ2hhbmdlPXtjaGFuZ2VTZWxlY3RlZENhdGVnb3J5fSAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHRleHQ9J0NoYW5nZSBDYXRlZ29yeScgb25DaGFuZ2U9e2NoYW5nZUNhdGVnb3J5fT48L0J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8QnV0dG9uIHRleHQ9J1RvZG9zJyBvbkNoYW5nZT17KCkgPT4gcm91dGVyLnB1c2goJy90b2RvcycpfT48L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRUYXNrQnlJZCIsInB1dFRhc2siLCJ1c2VBdXRoIiwiQnV0dG9uIiwiTGluayIsInN0eWxlcyIsIkNhdGVnb3J5IiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwib3RoZXJDYXRlZ29yaWVzIiwic2V0T3RoZXJDYXRlZ29yaWVzIiwic2VsZWN0ZWRDYXRlZ29yeSIsImNoYW5nZVNlbGVjdGVkQ2F0ZWdvcnkiLCJnZXRUYXNrIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJyZXN1bHQiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJmaWx0ZXIiLCJjIiwidGFnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZWRpdFRhc2siLCJoYW5kbGVDaGVjayIsInRvZG8iLCJ1cGRhdGVkVGFzayIsIl9pZCIsImluZm8iLCJjaGVja2VkIiwiY3JlYXRlZE9uIiwicHVzaCIsImNoYW5nZUNhdGVnb3J5Iiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9MaXN0IiwiaDEiLCJzdHJvbmciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiYnIiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});