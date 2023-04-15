"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./src/components/todo.js":
/*!********************************!*\
  !*** ./src/components/todo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Todo(param) {\n    let { todo , onChange  } = param;\n    _s();\n    const { getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    async function handleCheck(todo) {\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            createdOn: todo.createdOn\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.putTask)(token, updatedTask);\n        onChange();\n    }\n    const shortInfo = todo.info.length > 10 ? \"\".concat(todo.info.substring(0, 10), \"...\") : todo.info;\n    return todo.checked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [\n            shortInfo,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().todo),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/todo/\".concat(todo._id),\n                children: shortInfo\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    value: todo.info,\n                    onClick: ()=>handleCheck(todo)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/todo.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Todo, \"TZyIvyGBnam54p/7H4rjGZDRcCU=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = Todo;\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2tCO0FBQ1Y7QUFDWjtBQUNXO0FBRXpCLFNBQVNLLEtBQUssS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxLQUFJLEVBQUVDLFNBQVEsRUFBRSxHQUFsQjs7SUFDM0IsTUFBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR0osc0RBQU9BO0lBRTVCLGVBQWVLLFlBQVlILElBQUksRUFBRTtRQUMvQixNQUFNSSxjQUFjO1lBQ2xCQyxLQUFLTCxLQUFLSyxHQUFHO1lBQ2JDLE1BQU1OLEtBQUtNLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2JDLFFBQVFSLEtBQUtRLE1BQU07WUFDbkJDLFdBQVdULEtBQUtTLFNBQVM7UUFDM0I7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLHlCQUF5QlA7UUFDckMsTUFBTVEsUUFBUSxNQUFNVixTQUFTO1lBQUVXLFVBQVU7UUFBWTtRQUNyRCxNQUFNakIsc0RBQU9BLENBQUNnQixPQUFPUjtRQUNyQkg7SUFDRjtJQUVBLE1BQU1hLFlBQ0pkLEtBQUtNLElBQUksQ0FBQ1MsTUFBTSxHQUFHLEtBQUssR0FBOEIsT0FBM0JmLEtBQUtNLElBQUksQ0FBQ1UsU0FBUyxDQUFDLEdBQUcsS0FBSSxTQUFPaEIsS0FBS00sSUFBSTtJQUV4RSxPQUFPTixLQUFLTyxPQUFPLGlCQUNqQiw4REFBQ1U7UUFBSUMsV0FBV3ZCLHlFQUFXOztZQUN4Qm1COzBCQUNELDhEQUFDSzswQkFDQyw0RUFBQ0M7b0JBQU1DLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWhCLDhEQUFDSjtRQUFJQyxXQUFXdkIseUVBQVc7OzBCQUN6Qiw4REFBQ0Usa0RBQUlBO2dCQUFDeUIsTUFBTSxTQUFrQixPQUFUdEIsS0FBS0ssR0FBRzswQkFBS1M7Ozs7OzswQkFDbEMsOERBQUNLOzBCQUNDLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEUsT0FBT3ZCLEtBQUtNLElBQUk7b0JBQ2hCa0IsU0FBUyxJQUFNckIsWUFBWUg7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJbEM7QUFDSCxDQUFDO0dBdkN1QkQ7O1FBQ0RELGtEQUFPQTs7O0tBRE5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RvZG8uanM/NTU3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgcHV0VGFzayB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG8oeyB0b2RvLCBvbkNoYW5nZSB9KSB7XG4gIGNvbnN0IHsgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGVjayh0b2RvKSB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XG4gICAgICBfaWQ6IHRvZG8uX2lkLFxuICAgICAgaW5mbzogdG9kby5pbmZvLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gICAgICBjcmVhdGVkT246IHRvZG8uY3JlYXRlZE9uLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coXCJIZXJlJ3MgdGhlIG5ldyB0YXNrOiBcIiwgdXBkYXRlZFRhc2spO1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdXBkYXRlZFRhc2spO1xuICAgIG9uQ2hhbmdlKCk7XG4gIH1cblxuICBjb25zdCBzaG9ydEluZm8gPVxuICAgIHRvZG8uaW5mby5sZW5ndGggPiAxMCA/IGAke3RvZG8uaW5mby5zdWJzdHJpbmcoMCwgMTApfS4uLmAgOiB0b2RvLmluZm87XG5cbiAgcmV0dXJuIHRvZG8uY2hlY2tlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG99PlxuICAgICAge3Nob3J0SW5mb31cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyAvPlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZG99PlxuICAgICAgPExpbmsgaHJlZj17YC90b2RvLyR7dG9kby5faWR9YH0+e3Nob3J0SW5mb308L0xpbms+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgIHZhbHVlPXt0b2RvLmluZm99XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hlY2sodG9kbyl9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwicHV0VGFzayIsIkxpbmsiLCJ1c2VBdXRoIiwiVG9kbyIsInRvZG8iLCJvbkNoYW5nZSIsImdldFRva2VuIiwiaGFuZGxlQ2hlY2siLCJ1cGRhdGVkVGFzayIsIl9pZCIsImluZm8iLCJjaGVja2VkIiwidXNlcklkIiwiY3JlYXRlZE9uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJzaG9ydEluZm8iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImhyZWYiLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/todo.js\n"));

/***/ })

});