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

/***/ "./src/components/categoryList.js":
/*!****************************************!*\
  !*** ./src/components/categoryList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _categoryBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categoryBuilder */ \"./src/components/categoryBuilder.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction CategoryList() {\n    _s();\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    async function getCategories() {\n        if (userId) {\n            const token = await getToken({\n                template: \"codehooks\"\n            });\n            const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n            console.log(\"Data: \", data);\n            setCategories(data);\n            setLoading(false);\n        }\n    }\n    async function addCategory(newCategory) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postCategory)(token, newCategory);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n        setTaskList(data);\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getCategories();\n    }, [\n        isLoaded\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    addCategory: addCategory\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                categories\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(CategoryList, \"c5C2hk1dn9nrzn7Zy6qvYWMOewI=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = CategoryList;\nvar _c;\n$RefreshReg$(_c, \"CategoryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN5QjtBQUNyQjtBQUNVO0FBQ1g7QUFDZTtBQUNvQjtBQUN4QjtBQUNRO0FBRWpDLFNBQVNXLGVBQWU7O0lBQ3JDLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxzREFBT0E7SUFDOUMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsZUFBZWMsZ0JBQWdCO1FBQzdCLElBQUlOLFFBQVE7WUFDVixNQUFNTyxRQUFRLE1BQU1OLFNBQVM7Z0JBQUVPLFVBQVU7WUFBWTtZQUNyRCxNQUFNQyxPQUFPLE1BQU1mLCtEQUFnQkEsQ0FBQ2E7WUFDcENHLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtZQUN0QkosY0FBY0k7WUFDZE4sV0FBVyxLQUFLO1FBQ2xCLENBQUM7SUFDSDtJQUVBLGVBQWVTLFlBQVlDLFdBQVcsRUFBRTtRQUN0QyxNQUFNTixRQUFRLE1BQU1OLFNBQVM7WUFBRU8sVUFBVTtRQUFZO1FBQ3JELE1BQU1iLDJEQUFZQSxDQUFDWSxPQUFPTTtRQUMxQixNQUFNSixPQUFPLE1BQU1mLCtEQUFnQkEsQ0FBQ2E7UUFDcENPLFlBQVlMO1FBQ1pOLFdBQVcsS0FBSztJQUNsQjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RhO0lBQ0YsR0FBRztRQUFDUDtLQUFTO0lBRWIsSUFBSUcsU0FBUztRQUNYLHFCQUFPLDhEQUFDYTtzQkFBSzs7Ozs7O0lBQ2YsT0FBTztRQUNMLHFCQUNFLDhEQUFDQzs7OEJBQ0MsOERBQUNuQix3REFBZUE7b0JBQUNlLGFBQWFBOzs7Ozs7Z0JBQzdCUjs7Ozs7OztJQUdQLENBQUM7QUFDSCxDQUFDO0dBckN1Qk47O1FBQ2lCRixrREFBT0E7OztLQUR4QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlMaXN0LmpzPzNiMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgVG9kb0J1aWxkZXIgZnJvbSAnLi90b2RvQnVpbGRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFsbENhdGVnb3JpZXMsIHBvc3RDYXRlZ29yeSB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBDYXRlZ29yeUJ1aWxkZXIgZnJvbSAnLi9jYXRlZ29yeUJ1aWxkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUxpc3QoKSB7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyh0b2tlbik7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YTogJywgZGF0YSk7XG4gICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkobmV3Q2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHBvc3RDYXRlZ29yeSh0b2tlbiwgbmV3Q2F0ZWdvcnkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKHRva2VuKTtcbiAgICBzZXRUYXNrTGlzdChkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q2F0ZWdvcmllcygpO1xuICB9LCBbaXNMb2FkZWRdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8c3Bhbj5Mb2FkaW5nIC4uLjwvc3Bhbj47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXRlZ29yeUJ1aWxkZXIgYWRkQ2F0ZWdvcnk9e2FkZENhdGVnb3J5fSAvPlxuICAgICAgICB7Y2F0ZWdvcmllc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxDYXRlZ29yaWVzIiwicG9zdENhdGVnb3J5IiwidXNlQXV0aCIsIkNhdGVnb3J5QnVpbGRlciIsIkNhdGVnb3J5TGlzdCIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsInRva2VuIiwidGVtcGxhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFkZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJzZXRUYXNrTGlzdCIsInNwYW4iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/categoryList.js\n"));

/***/ })

});