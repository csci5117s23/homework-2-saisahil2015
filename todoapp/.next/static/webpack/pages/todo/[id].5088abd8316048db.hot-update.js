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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    name: \"info\",\n                    value: todoItemInfo.info,\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    text: \"Save\",\n                    onChange: editTask\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    onClick: handleCheck\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/todos\",\n                    children: \"Check out the remaining tasks\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"K/QlNEwkFKPtqxCYprHSFqxhH7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ2M7QUFDZDtBQUNDO0FBQ1o7QUFDaUI7QUFFL0IsU0FBU1MsV0FBVzs7SUFDakMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDZSxjQUFjQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxFQUFFaUIsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHZCxzREFBT0E7SUFFOUNKLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlbUIsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWRyxRQUFRQyxHQUFHLENBQUMsUUFBUVg7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUosU0FBUztvQkFBRUssVUFBVTtnQkFBWTtnQkFDckQsTUFBTUMsU0FBUyxNQUFNdEIsMERBQVdBLENBQUNvQixPQUFPWjtnQkFDeENVLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRztnQkFDeEJULGdCQUFnQlM7Z0JBQ2hCWCxXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FNO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsU0FBU1Msa0JBQWtCQyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDZCxnQkFBZ0I7WUFBRSxHQUFHRCxZQUFZO1lBQUUsQ0FBQ2EsS0FBSyxFQUFFQztRQUFNO1FBQ2pEUixRQUFRQyxHQUFHLENBQUMsV0FBV1A7SUFDekI7SUFDQSxlQUFlZ0IsV0FBVztRQUN4QixNQUFNUixRQUFRLE1BQU1KLFNBQVM7WUFBRUssVUFBVTtRQUFZO1FBQ3JESCxRQUFRQyxHQUFHLENBQUMsY0FBY1A7UUFDMUIsTUFBTVgsc0RBQU9BLENBQUNtQixPQUFPUjtJQUN2QjtJQUVBLGVBQWVpQixjQUFjO1FBQzNCLE1BQU1DLE9BQU87WUFBRSxHQUFHbEIsWUFBWTtRQUFDO1FBQy9CLE1BQU1tQixjQUFjO1lBQ2xCQyxLQUFLRixLQUFLRSxHQUFHO1lBQ2JDLE1BQU1ILEtBQUtHLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2JuQixRQUFRZSxLQUFLZixNQUFNO1lBQ25Cb0IsVUFBVUwsS0FBS0ssUUFBUTtZQUN2QkMsV0FBV04sS0FBS00sU0FBUztRQUMzQjtRQUNBbEIsUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qlk7UUFDckMsTUFBTVgsUUFBUSxNQUFNSixTQUFTO1lBQUVLLFVBQVU7UUFBWTtRQUNyRCxNQUFNcEIsc0RBQU9BLENBQUNtQixPQUFPVztRQUNyQnhCLE9BQU84QixJQUFJLENBQUM7SUFDZDtJQUVBLE9BQU8zQix3QkFDTCw4REFBQzRCO2tCQUFLOzs7Ozs2QkFFTiw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUNDaEIsTUFBSztvQkFDTEMsT0FBT2QsYUFBYXFCLElBQUk7b0JBQ3hCUyxVQUFVbkI7Ozs7Ozs4QkFFWiw4REFBQ3BCLDBEQUFNQTtvQkFBQ3dDLE1BQUs7b0JBQU9ELFVBQVVkOzs7Ozs7OEJBQzlCLDhEQUFDYTtvQkFBTUcsTUFBSztvQkFBV0MsU0FBU2hCOzs7Ozs7OEJBQ2hDLDhEQUFDekIsa0RBQUlBO29CQUFDMEMsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7OztZQUd6QjtBQUNILENBQUM7R0FoRXVCeEM7O1FBQ1BQLGtEQUFTQTtRQUllRyxrREFBT0E7OztLQUx4QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vW2lkXS5qcz84Mzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRUYXNrQnlJZCwgcHV0VGFzayB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0b2RvSXRlbUluZm8sIHNldFRvZG9JdGVtSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lkOiAnLCBpZCk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFRhc2tCeUlkKHRva2VuLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHQ6ICcsIHJlc3VsdCk7XG4gICAgICAgIHNldFRvZG9JdGVtSW5mbyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFzaygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0VG9kb0l0ZW1JbmZvKHsgLi4udG9kb0l0ZW1JbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdDaGVjazogJywgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBlZGl0VGFzaygpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGNvbnNvbGUubG9nKCdUb2RvSXRlbTogJywgdG9kb0l0ZW1JbmZvKTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB0b2RvSXRlbUluZm8pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hlY2soKSB7XG4gICAgY29uc3QgdG9kbyA9IHsgLi4udG9kb0l0ZW1JbmZvIH07XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogdG9kby5jYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gICAgcm91dGVyLnB1c2goJy9kb25lJyk7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZyA/IChcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPSdpbmZvJ1xuICAgICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdGV4dD0nU2F2ZScgb25DaGFuZ2U9e2VkaXRUYXNrfT48L0J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBvbkNsaWNrPXtoYW5kbGVDaGVja30gLz5cbiAgICAgICAgPExpbmsgaHJlZj0nL3RvZG9zJz5DaGVjayBvdXQgdGhlIHJlbWFpbmluZyB0YXNrczwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0VGFza0J5SWQiLCJwdXRUYXNrIiwidXNlQXV0aCIsIkJ1dHRvbiIsIkxpbmsiLCJzdHlsZXMiLCJUb2RvSXRlbSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZG9JdGVtSW5mbyIsInNldFRvZG9JdGVtSW5mbyIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJnZXRUYXNrIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJyZXN1bHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJlZGl0VGFzayIsImhhbmRsZUNoZWNrIiwidG9kbyIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiaW5mbyIsImNoZWNrZWQiLCJjYXRlZ29yeSIsImNyZWF0ZWRPbiIsInB1c2giLCJzcGFuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRleHQiLCJ0eXBlIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});