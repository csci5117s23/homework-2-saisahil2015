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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/todos\",\n                children: \"Check out the remaining tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"K/QlNEwkFKPtqxCYprHSFqxhH7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ2M7QUFDZDtBQUNDO0FBQ1o7QUFDaUI7QUFFL0IsU0FBU1MsV0FBVzs7SUFDakMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxFQUFFaUIsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHZCxzREFBT0E7SUFFOUNKLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlbUIsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWRyxRQUFRQyxHQUFHLENBQUMsUUFBUVg7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUosU0FBUztvQkFBRUssVUFBVTtnQkFBWTtnQkFDckQsTUFBTUMsU0FBUyxNQUFNdEIsMERBQVdBLENBQUNvQixPQUFPWjtnQkFDeENVLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRztnQkFDeEJULGdCQUFnQlM7Z0JBQ2hCWCxXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FNO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsU0FBU1Msa0JBQWtCQyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDZCxnQkFBZ0I7WUFBRSxHQUFHRCxZQUFZO1lBQUUsQ0FBQ2EsS0FBSyxFQUFFQztRQUFNO1FBQ2pEUixRQUFRQyxHQUFHLENBQUMsV0FBV1A7SUFDekI7SUFDQSxlQUFlZ0IsV0FBVztRQUN4QixNQUFNUixRQUFRLE1BQU1KLFNBQVM7WUFBRUssVUFBVTtRQUFZO1FBQ3JESCxRQUFRQyxHQUFHLENBQUMsY0FBY1A7UUFDMUIsTUFBTVgsc0RBQU9BLENBQUNtQixPQUFPUjtJQUN2QjtJQUVBLGVBQWVpQixjQUFjO1FBQzNCLE1BQU1DLE9BQU87WUFBRSxHQUFHbEIsWUFBWTtRQUFDO1FBQy9CLE1BQU1tQixjQUFjO1lBQ2xCQyxLQUFLRixLQUFLRSxHQUFHO1lBQ2JDLE1BQU1ILEtBQUtHLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2JuQixRQUFRZSxLQUFLZixNQUFNO1lBQ25Cb0IsVUFBVUwsS0FBS0ssUUFBUTtZQUN2QkMsV0FBV04sS0FBS00sU0FBUztRQUMzQjtRQUNBbEIsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qlk7UUFDckMsTUFBTVgsUUFBUSxNQUFNSixTQUFTO1lBQUVLLFVBQVU7UUFBWTtRQUNyRCxNQUFNcEIsc0RBQU9BLENBQUNtQixPQUFPVztRQUNyQnhCLE9BQU84QixJQUFJLENBQUM7SUFDZDtJQUVBLE9BQU8zQix3QkFDTCw4REFBQzRCO2tCQUFLOzs7Ozs2QkFFTiw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDaEIsTUFBSztnQkFDTEMsT0FBT2QsYUFBYXFCLElBQUk7Z0JBQ3hCUyxVQUFVbkI7Ozs7OzswQkFFWiw4REFBQ3BCLDBEQUFNQTtnQkFBQ3dDLE1BQUs7Z0JBQU9ELFVBQVVkOzs7Ozs7MEJBQzlCLDhEQUFDYTtnQkFBTUcsTUFBSztnQkFBV0MsU0FBU2hCOzs7Ozs7MEJBQ2hDLDhEQUFDekIsa0RBQUlBO2dCQUFDMEMsTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7WUFFdkI7QUFDSCxDQUFDO0dBOUR1QnhDOztRQUNQUCxrREFBU0E7UUFJZUcsa0RBQU9BOzs7S0FMeEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2RvL1tpZF0uanM/ODM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0VGFza0J5SWQsIHB1dFRhc2sgfSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0l0ZW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdG9kb0l0ZW1JbmZvLCBzZXRUb2RvSXRlbUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJZDogJywgaWQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUYXNrQnlJZCh0b2tlbiwgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICBzZXRUb2RvSXRlbUluZm8ocmVzdWx0KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdldFRhc2soKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldFRvZG9JdGVtSW5mbyh7IC4uLnRvZG9JdGVtSW5mbywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZygnQ2hlY2s6ICcsIHRvZG9JdGVtSW5mbyk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBjb25zb2xlLmxvZygnVG9kb0l0ZW06ICcsIHRvZG9JdGVtSW5mbyk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKCkge1xuICAgIGNvbnN0IHRvZG8gPSB7IC4uLnRvZG9JdGVtSW5mbyB9O1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgX2lkOiB0b2RvLl9pZCxcbiAgICAgIGluZm86IHRvZG8uaW5mbyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB1c2VySWQ6IHRvZG8udXNlcklkLFxuICAgICAgY2F0ZWdvcnk6IHRvZG8uY2F0ZWdvcnksXG4gICAgICBjcmVhdGVkT246IHRvZG8uY3JlYXRlZE9uLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIG5ldyB0YXNrOiBcIiwgdXBkYXRlZFRhc2spO1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdXBkYXRlZFRhc2spO1xuICAgIHJvdXRlci5wdXNoKCcvZG9uZScpO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRpbmcgPyAoXG4gICAgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT0naW5mbydcbiAgICAgICAgdmFsdWU9e3RvZG9JdGVtSW5mby5pbmZvfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PSdTYXZlJyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBvbkNsaWNrPXtoYW5kbGVDaGVja30gLz5cbiAgICAgIDxMaW5rIGhyZWY9Jy90b2Rvcyc+Q2hlY2sgb3V0IHRoZSByZW1haW5pbmcgdGFza3M8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRUYXNrQnlJZCIsInB1dFRhc2siLCJ1c2VBdXRoIiwiQnV0dG9uIiwiTGluayIsInN0eWxlcyIsIlRvZG9JdGVtIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9kb0l0ZW1JbmZvIiwic2V0VG9kb0l0ZW1JbmZvIiwiaXNMb2FkZWQiLCJ1c2VySWQiLCJnZXRUb2tlbiIsImdldFRhc2siLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ0ZW1wbGF0ZSIsInJlc3VsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImVkaXRUYXNrIiwiaGFuZGxlQ2hlY2siLCJ0b2RvIiwidXBkYXRlZFRhc2siLCJfaWQiLCJpbmZvIiwiY2hlY2tlZCIsImNhdGVnb3J5IiwiY3JlYXRlZE9uIiwicHVzaCIsInNwYW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});