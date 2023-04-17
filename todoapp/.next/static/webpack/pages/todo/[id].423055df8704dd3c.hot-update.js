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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [otherCategories, setOtherCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category = result.category;\n                var categories = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                categories = categories.filter((c)=>c.tag !== category);\n                console.log(\"Categories: \", categories);\n                setOtherCategories(categories);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_8___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"subtitle\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Select from Tags below to Change the Category of the Task\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                style: {\n                    marginTop: \"2rem\"\n                },\n                children: otherCategories.map((c)=>{\n                    console.log(\"Categories Value: \", c);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        tag: c\n                    }, c._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                        lineNumber: 91,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"KjQ/1A4ojQFVHSAzLM+krlwGaW8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7Z0JBQU9ELFVBQVVoQjs7Ozs7O1lBQW1COzBCQUVqRCw4REFBQ2U7Z0JBQU1HLE1BQUs7Z0JBQVdDLFNBQVNsQjs7Ozs7OzBCQUNoQyw4REFBQ21COzs7OzswQkFDRCw4REFBQ1Y7Z0JBQUlDLFdBQVU7Z0JBQVdVLE9BQU87b0JBQUVDLFdBQVc7Z0JBQU87MEJBQ25ELDRFQUFDUjs4QkFBTzs7Ozs7Ozs7Ozs7MEJBSVYsOERBQUNKO2dCQUFJQyxXQUFVO2dCQUFVVSxPQUFPO29CQUFFQyxXQUFXO2dCQUFPOzBCQUNqRHhDLGdCQUFnQnlDLEdBQUcsQ0FBQyxDQUFDOUIsSUFBTTtvQkFDMUJSLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JPO29CQUNsQyxxQkFBTyw4REFBQ3ZCLDREQUFRQTt3QkFBYXdCLEtBQUtEO3VCQUFaQSxFQUFFVyxHQUFHOzs7OztnQkFDN0I7Ozs7OzswQkFFRiw4REFBQ3JDLDBEQUFNQTtnQkFBQ2tELE1BQUs7Z0JBQVFELFVBQVUsSUFBTTVDLE9BQU9vQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7O1lBRXBEO0FBQ0gsQ0FBQztHQXZGdUJyQzs7UUFDUFQsa0RBQVNBO1FBSWVJLGtEQUFPQTs7O0tBTHhCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzPzgzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldEFsbENhdGVnb3JpZXMsIGdldFRhc2tCeUlkLCBwdXRUYXNrIH0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJ0AvY29tcG9uZW50cy9jYXRlZ29yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JdGVtKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RvZG9JdGVtSW5mbywgc2V0VG9kb0l0ZW1JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIGdldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtvdGhlckNhdGVnb3JpZXMsIHNldE90aGVyQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSWQ6ICcsIGlkKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VGFza0J5SWQodG9rZW4sIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdDogJywgcmVzdWx0KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSByZXN1bHQuY2F0ZWdvcnk7XG4gICAgICAgIHZhciBjYXRlZ29yaWVzID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyh0b2tlbik7XG4gICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy50YWcgIT09IGNhdGVnb3J5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXM6ICcsIGNhdGVnb3JpZXMpO1xuICAgICAgICBzZXRPdGhlckNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgICAgIHNldFRvZG9JdGVtSW5mbyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFzaygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0VG9kb0l0ZW1JbmZvKHsgLi4udG9kb0l0ZW1JbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdDaGVjazogJywgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBlZGl0VGFzaygpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGNvbnNvbGUubG9nKCdUb2RvSXRlbTogJywgdG9kb0l0ZW1JbmZvKTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB0b2RvSXRlbUluZm8pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hlY2soKSB7XG4gICAgY29uc3QgdG9kbyA9IHsgLi4udG9kb0l0ZW1JbmZvIH07XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogdG9kby5jYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gICAgcm91dGVyLnB1c2goJy9kb25lJyk7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZyA/IChcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgPGgxIGNsYXNzTmFtZT0nc3VidGl0bGUnPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIEluc3RydWN0aW9uczogRWRpdCB0aGUgdGFzayBoZXJlIG9yIGNvbXBsZXRlIGl0IGJ5IGNoZWNraW5nIHRoZSBib3hcbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9J2luZm8nXG4gICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgPEJ1dHRvbiB0ZXh0PSdTYXZlJyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3VidGl0bGUnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIFNlbGVjdCBmcm9tIFRhZ3MgYmVsb3cgdG8gQ2hhbmdlIHRoZSBDYXRlZ29yeSBvZiB0aGUgVGFza1xuICAgICAgICA8L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnIHN0eWxlPXt7IG1hcmdpblRvcDogJzJyZW0nIH19PlxuICAgICAgICB7b3RoZXJDYXRlZ29yaWVzLm1hcCgoYykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIFZhbHVlOiAnLCBjKTtcbiAgICAgICAgICByZXR1cm4gPENhdGVnb3J5IGtleT17Yy5faWR9IHRhZz17Y30gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIHRleHQ9J1RvZG9zJyBvbkNoYW5nZT17KCkgPT4gcm91dGVyLnB1c2goJy90b2RvcycpfT48L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRUYXNrQnlJZCIsInB1dFRhc2siLCJ1c2VBdXRoIiwiQnV0dG9uIiwiTGluayIsInN0eWxlcyIsIkNhdGVnb3J5IiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwib3RoZXJDYXRlZ29yaWVzIiwic2V0T3RoZXJDYXRlZ29yaWVzIiwiZ2V0VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInRlbXBsYXRlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiZmlsdGVyIiwiYyIsInRhZyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImVkaXRUYXNrIiwiaGFuZGxlQ2hlY2siLCJ0b2RvIiwidXBkYXRlZFRhc2siLCJfaWQiLCJpbmZvIiwiY2hlY2tlZCIsImNyZWF0ZWRPbiIsInB1c2giLCJzcGFuIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0xpc3QiLCJoMSIsInN0cm9uZyIsImlucHV0Iiwib25DaGFuZ2UiLCJ0ZXh0IiwidHlwZSIsIm9uQ2xpY2siLCJiciIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});