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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/button */ \"./src/components/button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TodoItem() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            todoItemInfo.info,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: \"Edit\",\n                onClick: editTask\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n                lineNumber: 32,\n                columnNumber: 27\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(TodoItem, \"K/QlNEwkFKPtqxCYprHSFqxhH7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNLO0FBQ0w7QUFDQztBQUUxQixTQUFTTSxXQUFXOztJQUNqQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxHQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUMzQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JELE1BQU0sRUFBRWMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHWixzREFBT0E7SUFFOUNILGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlZ0IsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWRyxRQUFRQyxHQUFHLENBQUMsUUFBUVg7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUosU0FBUztvQkFBRUssVUFBVTtnQkFBWTtnQkFDckQsTUFBTUMsU0FBUyxNQUFNbkIsMERBQVdBLENBQUNpQixPQUFPWjtnQkFDeENVLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRztnQkFDeEJULGdCQUFnQlM7Z0JBQ2hCWCxXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FNO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsT0FBT0osd0JBQ0wsOERBQUNhO2tCQUFLOzs7Ozs2QkFFTiw4REFBQ0M7O1lBQ0VaLGFBQWFhLElBQUk7WUFBQzswQkFBQyw4REFBQ3BCLDBEQUFNQTtnQkFBQ3FCLE1BQUs7Z0JBQU9DLFNBQVNDOzs7Ozs7Ozs7OztZQUVwRDtBQUNILENBQUM7R0E1QnVCdEI7O1FBQ1BKLGtEQUFTQTtRQUllRSxrREFBT0E7OztLQUx4QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG8vW2lkXS5qcz84Mzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRUYXNrQnlJZCB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JdGVtKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RvZG9JdGVtSW5mbywgc2V0VG9kb0l0ZW1JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIGdldFRva2VuIH0gPSB1c2VBdXRoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUYXNrKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnSWQ6ICcsIGlkKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0VGFza0J5SWQodG9rZW4sIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdDogJywgcmVzdWx0KTtcbiAgICAgICAgc2V0VG9kb0l0ZW1JbmZvKHJlc3VsdCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXRUYXNrKCk7XG4gIH0sIFtpc0xvYWRlZF0pO1xuXG4gIHJldHVybiBsb2FkaW5nID8gKFxuICAgIDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdj5cbiAgICAgIHt0b2RvSXRlbUluZm8uaW5mb30gPEJ1dHRvbiB0ZXh0PSdFZGl0JyBvbkNsaWNrPXtlZGl0VGFza30+PC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRUYXNrQnlJZCIsInVzZUF1dGgiLCJCdXR0b24iLCJUb2RvSXRlbSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZG9JdGVtSW5mbyIsInNldFRvZG9JdGVtSW5mbyIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJnZXRUYXNrIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidGVtcGxhdGUiLCJyZXN1bHQiLCJzcGFuIiwiZGl2IiwiaW5mbyIsInRleHQiLCJvbkNsaWNrIiwiZWRpdFRhc2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n"));

/***/ })

});