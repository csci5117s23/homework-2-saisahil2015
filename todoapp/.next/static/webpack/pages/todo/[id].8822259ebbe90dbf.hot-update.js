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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    function editTask() {}\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"info\",\n                value: todoItemInfo.info,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            todoItemInfo.info,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Edit\",\n                onChange: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"K/QlNEwkFKPtqxCYprHSFqxhH7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNLO0FBQ0w7QUFDQztBQUUxQixTQUFTTSxXQUFXOztJQUNqQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JELE1BQU0sRUFBRWMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHWixzREFBT0E7SUFFOUNILGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlZ0IsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWRyxRQUFRQyxHQUFHLENBQUMsUUFBUVg7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUosU0FBUztvQkFBRUssVUFBVTtnQkFBWTtnQkFDckQsTUFBTUMsU0FBUyxNQUFNbkIsMERBQVdBLENBQUNpQixPQUFPWjtnQkFDeENVLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRztnQkFDeEJULGdCQUFnQlM7Z0JBQ2hCWCxXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FNO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsU0FBU1MsV0FBVyxDQUFDO0lBRXJCLE9BQU9iLHdCQUNMLDhEQUFDYztrQkFBSzs7Ozs7NkJBRU4sOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9oQixhQUFhaUIsSUFBSTtnQkFDeEJDLFVBQVVDOzs7Ozs7WUFFWG5CLGFBQWFpQixJQUFJO1lBQUM7MEJBQUMsOERBQUN4QiwwREFBTUE7Z0JBQUMyQixNQUFLO2dCQUFPRixVQUFVUDs7Ozs7Ozs7Ozs7WUFFckQ7QUFDSCxDQUFDO0dBbkN1QmpCOztRQUNQSixrREFBU0E7UUFJZUUsa0RBQU9BOzs7S0FMeEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2RvL1tpZF0uanM/ODM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0VGFza0J5SWQgfSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSXRlbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0b2RvSXRlbUluZm8sIHNldFRvZG9JdGVtSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lkOiAnLCBpZCk7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFRhc2tCeUlkKHRva2VuLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHQ6ICcsIHJlc3VsdCk7XG4gICAgICAgIHNldFRvZG9JdGVtSW5mbyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0VGFzaygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBmdW5jdGlvbiBlZGl0VGFzaygpIHt9XG5cbiAgcmV0dXJuIGxvYWRpbmcgPyAoXG4gICAgPHNwYW4+TG9hZGluZy4uLjwvc3Bhbj5cbiAgKSA6IChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9J2luZm8nXG4gICAgICAgIHZhbHVlPXt0b2RvSXRlbUluZm8uaW5mb31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgLz5cbiAgICAgIHt0b2RvSXRlbUluZm8uaW5mb30gPEJ1dHRvbiB0ZXh0PSdFZGl0JyBvbkNoYW5nZT17ZWRpdFRhc2t9PjwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0VGFza0J5SWQiLCJ1c2VBdXRoIiwiQnV0dG9uIiwiVG9kb0l0ZW0iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2RvSXRlbUluZm8iLCJzZXRUb2RvSXRlbUluZm8iLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwiZ2V0VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsInRlbXBsYXRlIiwicmVzdWx0IiwiZWRpdFRhc2siLCJzcGFuIiwiZGl2IiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJpbmZvIiwib25DaGFuZ2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});