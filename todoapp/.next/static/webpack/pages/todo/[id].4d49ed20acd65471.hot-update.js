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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const { otherCategories , setOtherCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                const category = result.category;\n                const categories1 = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)(token);\n                console.log(\"Categories: \", categories1);\n                const categoryArray = Object.keys(categories1).map((key)=>categories1[key].tag).filter((value)=>value != category);\n                console.log(\"Check: \", categoryArray);\n                setOtherCategories(categoryArray);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function handleInputChange(e) {\n        const { name , value  } = e.target;\n        setTodoItemInfo({\n            ...todoItemInfo,\n            [name]: value\n        });\n        console.log(\"Check: \", todoItemInfo);\n    }\n    async function editTask() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"TodoItem: \", todoItemInfo);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, todoItemInfo);\n    }\n    async function handleCheck() {\n        const todo = {\n            ...todoItemInfo\n        };\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            category: todo.category,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.putTask)(token, updatedTask);\n        router.push(\"/done\");\n    }\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_7___default().todoList),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"subtitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                    children: \"Instructions: Edit the task here or complete it by checking the box\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Save\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            \"\\xa0\\xa0\\xa0\\xa0\\xa0\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: handleCheck\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Todos\",\n                onChange: ()=>router.push(\"/todos\")\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            categories.map((category)=>{\n                console.log(\"Categories: \", category._id);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Category, {\n                    tag: category,\n                    onChange: handleCategory\n                }, category._id, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"TJwnzjbIdkmgGbysbK0boq/4LTM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDZ0M7QUFDaEM7QUFDQztBQUNaO0FBQ3FCO0FBRW5DLFNBQVNVLFdBQVc7O0lBQ2pDLE1BQU1DLFNBQVNULHNEQUFTQTtJQUN4QixNQUFNLEVBQUVVLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzNCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2dCLGNBQWNDLGdCQUFnQixHQUFHakIsK0NBQVFBLENBQUMsSUFBSTtJQUNyRCxNQUFNLEVBQUVrQixTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdkLHNEQUFPQTtJQUM5QyxNQUFNLEVBQUVlLGdCQUFlLEVBQUVDLG1CQUFrQixFQUFFLEdBQUd0QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZXNCLFVBQVU7WUFDdkIsSUFBSUosUUFBUTtnQkFDVkssUUFBUUMsR0FBRyxDQUFDLFFBQVFiO2dCQUNwQixNQUFNYyxRQUFRLE1BQU1OLFNBQVM7b0JBQUVPLFVBQVU7Z0JBQVk7Z0JBQ3JELE1BQU1DLFNBQVMsTUFBTXhCLDBEQUFXQSxDQUFDc0IsT0FBT2Q7Z0JBQ3hDWSxRQUFRQyxHQUFHLENBQUMsWUFBWUc7Z0JBQ3hCLE1BQU1DLFdBQVdELE9BQU9DLFFBQVE7Z0JBQ2hDLE1BQU1DLGNBQWEsTUFBTTNCLCtEQUFnQkEsQ0FBQ3VCO2dCQUMxQ0YsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQks7Z0JBQzVCLE1BQU1DLGdCQUFnQkMsT0FBT0MsSUFBSSxDQUFDSCxhQUMvQkksR0FBRyxDQUFDLENBQUNDLE1BQVFMLFdBQVUsQ0FBQ0ssSUFBSSxDQUFDQyxHQUFHLEVBQ2hDQyxNQUFNLENBQUMsQ0FBQ0MsUUFBVUEsU0FBU1Q7Z0JBQzlCTCxRQUFRQyxHQUFHLENBQUMsV0FBV007Z0JBQ3ZCVCxtQkFBbUJTO2dCQUVuQmQsZ0JBQWdCVztnQkFDaEJiLFdBQVcsS0FBSztZQUNsQixDQUFDO1FBQ0g7UUFDQVE7SUFDRixHQUFHO1FBQUNMO0tBQVM7SUFFYixTQUFTcUIsa0JBQWtCQyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxFQUFFQyxLQUFJLEVBQUVILE1BQUssRUFBRSxHQUFHRSxFQUFFRSxNQUFNO1FBQ2hDekIsZ0JBQWdCO1lBQUUsR0FBR0QsWUFBWTtZQUFFLENBQUN5QixLQUFLLEVBQUVIO1FBQU07UUFDakRkLFFBQVFDLEdBQUcsQ0FBQyxXQUFXVDtJQUN6QjtJQUNBLGVBQWUyQixXQUFXO1FBQ3hCLE1BQU1qQixRQUFRLE1BQU1OLFNBQVM7WUFBRU8sVUFBVTtRQUFZO1FBQ3JESCxRQUFRQyxHQUFHLENBQUMsY0FBY1Q7UUFDMUIsTUFBTVgsc0RBQU9BLENBQUNxQixPQUFPVjtJQUN2QjtJQUVBLGVBQWU0QixjQUFjO1FBQzNCLE1BQU1DLE9BQU87WUFBRSxHQUFHN0IsWUFBWTtRQUFDO1FBQy9CLE1BQU04QixjQUFjO1lBQ2xCQyxLQUFLRixLQUFLRSxHQUFHO1lBQ2JDLE1BQU1ILEtBQUtHLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2I5QixRQUFRMEIsS0FBSzFCLE1BQU07WUFDbkJVLFVBQVVnQixLQUFLaEIsUUFBUTtZQUN2QnFCLFdBQVdMLEtBQUtLLFNBQVM7UUFDM0I7UUFDQTFCLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJxQjtRQUNyQyxNQUFNcEIsUUFBUSxNQUFNTixTQUFTO1lBQUVPLFVBQVU7UUFBWTtRQUNyRCxNQUFNdEIsc0RBQU9BLENBQUNxQixPQUFPb0I7UUFDckJuQyxPQUFPd0MsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxPQUFPckMsd0JBQ0wsOERBQUNzQztrQkFBSzs7Ozs7NkJBRU4sOERBQUNDO1FBQUlDLFdBQVc3Qyw2RUFBZTs7MEJBQzdCLDhEQUFDK0M7Z0JBQUdGLFdBQVU7MEJBQ1osNEVBQUNHOzhCQUFPOzs7Ozs7Ozs7OzswQkFJViw4REFBQ0M7Z0JBQ0NqQixNQUFLO2dCQUNMSCxPQUFPdEIsYUFBYWdDLElBQUk7Z0JBQ3hCVyxVQUFVcEI7Ozs7OztZQUNWOzBCQUVGLDhEQUFDaEMsMERBQU1BO2dCQUFDcUQsTUFBSztnQkFBT0QsVUFBVWhCOzs7Ozs7WUFBbUI7MEJBRWpELDhEQUFDZTtnQkFBTUcsTUFBSztnQkFBV0MsU0FBU2xCOzs7Ozs7MEJBQ2hDLDhEQUFDbUI7Ozs7OzBCQUNELDhEQUFDeEQsMERBQU1BO2dCQUFDcUQsTUFBSztnQkFBUUQsVUFBVSxJQUFNaEQsT0FBT3dDLElBQUksQ0FBQzs7Ozs7O1lBQ2hEckIsV0FBV0ksR0FBRyxDQUFDLENBQUNMLFdBQWE7Z0JBQzVCTCxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSSxTQUFTa0IsR0FBRztnQkFDeEMscUJBQ0UsOERBQUNpQjtvQkFFQzVCLEtBQUtQO29CQUNMOEIsVUFBVU07bUJBRkxwQyxTQUFTa0IsR0FBRzs7Ozs7WUFLdkI7Ozs7OztZQUVIO0FBQ0gsQ0FBQztHQTFGdUJyQzs7UUFDUFIsa0RBQVNBO1FBSWVJLGtEQUFPQTs7O0tBTHhCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzPzgzNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldEFsbENhdGVnb3JpZXMsIGdldFRhc2tCeUlkLCBwdXRUYXNrIH0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0b2RvSXRlbUluZm8sIHNldFRvZG9JdGVtSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IG90aGVyQ2F0ZWdvcmllcywgc2V0T3RoZXJDYXRlZ29yaWVzIH0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSWQ6ICcsIGlkKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VGFza0J5SWQodG9rZW4sIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdDogJywgcmVzdWx0KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSByZXN1bHQuY2F0ZWdvcnk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKHRva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXM6ICcsIGNhdGVnb3JpZXMpO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUFycmF5ID0gT2JqZWN0LmtleXMoY2F0ZWdvcmllcylcbiAgICAgICAgICAubWFwKChrZXkpID0+IGNhdGVnb3JpZXNba2V5XS50YWcpXG4gICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICE9IGNhdGVnb3J5KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NoZWNrOiAnLCBjYXRlZ29yeUFycmF5KTtcbiAgICAgICAgc2V0T3RoZXJDYXRlZ29yaWVzKGNhdGVnb3J5QXJyYXkpO1xuXG4gICAgICAgIHNldFRvZG9JdGVtSW5mbyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFzaygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0VG9kb0l0ZW1JbmZvKHsgLi4udG9kb0l0ZW1JbmZvLCBbbmFtZV06IHZhbHVlIH0pO1xuICAgIGNvbnNvbGUubG9nKCdDaGVjazogJywgdG9kb0l0ZW1JbmZvKTtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBlZGl0VGFzaygpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGNvbnNvbGUubG9nKCdUb2RvSXRlbTogJywgdG9kb0l0ZW1JbmZvKTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB0b2RvSXRlbUluZm8pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hlY2soKSB7XG4gICAgY29uc3QgdG9kbyA9IHsgLi4udG9kb0l0ZW1JbmZvIH07XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjYXRlZ29yeTogdG9kby5jYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwdXRUYXNrKHRva2VuLCB1cGRhdGVkVGFzayk7XG4gICAgcm91dGVyLnB1c2goJy9kb25lJyk7XG4gIH1cblxuICByZXR1cm4gbG9hZGluZyA/IChcbiAgICA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPlxuICApIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0xpc3R9PlxuICAgICAgPGgxIGNsYXNzTmFtZT0nc3VidGl0bGUnPlxuICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgIEluc3RydWN0aW9uczogRWRpdCB0aGUgdGFzayBoZXJlIG9yIGNvbXBsZXRlIGl0IGJ5IGNoZWNraW5nIHRoZSBib3hcbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9J2luZm8nXG4gICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgICZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgPEJ1dHRvbiB0ZXh0PSdTYXZlJyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfSAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8QnV0dG9uIHRleHQ9J1RvZG9zJyBvbkNoYW5nZT17KCkgPT4gcm91dGVyLnB1c2goJy90b2RvcycpfT48L0J1dHRvbj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXM6ICcsIGNhdGVnb3J5Ll9pZCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5Ll9pZH1cbiAgICAgICAgICAgIHRhZz17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsImdldFRhc2tCeUlkIiwicHV0VGFzayIsInVzZUF1dGgiLCJCdXR0b24iLCJMaW5rIiwic3R5bGVzIiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwib3RoZXJDYXRlZ29yaWVzIiwic2V0T3RoZXJDYXRlZ29yaWVzIiwiZ2V0VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInRlbXBsYXRlIiwicmVzdWx0IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlBcnJheSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ0YWciLCJmaWx0ZXIiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJlZGl0VGFzayIsImhhbmRsZUNoZWNrIiwidG9kbyIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiaW5mbyIsImNoZWNrZWQiLCJjcmVhdGVkT24iLCJwdXNoIiwic3BhbiIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9MaXN0IiwiaDEiLCJzdHJvbmciLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGV4dCIsInR5cGUiLCJvbkNsaWNrIiwiYnIiLCJDYXRlZ29yeSIsImhhbmRsZUNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});