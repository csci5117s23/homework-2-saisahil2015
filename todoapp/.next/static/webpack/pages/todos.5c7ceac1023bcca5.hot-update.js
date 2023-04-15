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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _categoryBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categoryBuilder */ \"./src/components/categoryBuilder.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction CategoryList() {\n    _s();\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    async function getCategories() {\n        if (userId) {\n            const token = await getToken({\n                template: \"codehooks\"\n            });\n            const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n            console.log(\"Data: \", data);\n            console.log(\"Categories data  check: \", data);\n            setCategories(data);\n            setLoading(false);\n        }\n    }\n    async function addCategory(newCategory) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postCategory)(token, newCategory);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n        console.log(\"Categories data add check: \", data);\n        setCategories(data);\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getCategories();\n    }, [\n        isLoaded\n    ]);\n    function handleCategory(tag) {\n        return tag;\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    addCategory: addCategory,\n                    manageCategory: manageCategory\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_category__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        tag: category,\n                        onChange: handleCategory\n                    }, category._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(CategoryList, \"c5C2hk1dn9nrzn7Zy6qvYWMOewI=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = CategoryList;\nvar _c;\n$RefreshReg$(_c, \"CategoryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDckI7QUFDVTtBQUNYO0FBQ2U7QUFDb0I7QUFDeEI7QUFDUTtBQUNkO0FBRW5CLFNBQVNZLGVBQWU7O0lBQ3JDLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixzREFBT0E7SUFDOUMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsZUFBZWUsZ0JBQWdCO1FBQzdCLElBQUlOLFFBQVE7WUFDVixNQUFNTyxRQUFRLE1BQU1OLFNBQVM7Z0JBQUVPLFVBQVU7WUFBWTtZQUNyRCxNQUFNQyxPQUFPLE1BQU1oQiwrREFBZ0JBLENBQUNjO1lBQ3BDRyxRQUFRQyxHQUFHLENBQUMsVUFBVUY7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJGO1lBQ3hDSixjQUFjSTtZQUNkTixXQUFXLEtBQUs7UUFDbEIsQ0FBQztJQUNIO0lBRUEsZUFBZVMsWUFBWUMsV0FBVyxFQUFFO1FBQ3RDLE1BQU1OLFFBQVEsTUFBTU4sU0FBUztZQUFFTyxVQUFVO1FBQVk7UUFDckQsTUFBTWQsMkRBQVlBLENBQUNhLE9BQU9NO1FBQzFCLE1BQU1KLE9BQU8sTUFBTWhCLCtEQUFnQkEsQ0FBQ2M7UUFDcENHLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JGO1FBQzNDSixjQUFjSTtRQUNkTixXQUFXLEtBQUs7SUFDbEI7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYztJQUNGLEdBQUc7UUFBQ1A7S0FBUztJQUViLFNBQVNlLGVBQWVDLEdBQUcsRUFBRTtRQUMzQixPQUFPQTtJQUNUO0lBRUEsSUFBSWIsU0FBUztRQUNYLHFCQUFPLDhEQUFDYztzQkFBSzs7Ozs7O0lBQ2YsT0FBTztRQUNMLHFCQUNFLDhEQUFDQzs7OEJBQ0MsOERBQUNyQix3REFBZUE7b0JBQ2RnQixhQUFhQTtvQkFDYk0sZ0JBQWdCQTs7Ozs7O2dCQUVqQmQsV0FBV2UsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDdkIsaURBQVFBO3dCQUVQa0IsS0FBS0s7d0JBQ0xDLFVBQVVQO3VCQUZMTSxTQUFTRSxHQUFHOzs7Ozs7Ozs7OztJQU8zQixDQUFDO0FBQ0gsQ0FBQztHQXBEdUJ4Qjs7UUFDaUJILGtEQUFPQTs7O0tBRHhCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanM/M2IzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL3RvZG9CdWlsZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QWxsQ2F0ZWdvcmllcywgcG9zdENhdGVnb3J5IH0gZnJvbSAnQC9tb2R1bGVzL2RhdGEnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuaW1wb3J0IENhdGVnb3J5QnVpbGRlciBmcm9tICcuL2NhdGVnb3J5QnVpbGRlcic7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5TGlzdCgpIHtcbiAgY29uc3QgeyBpc0xvYWRlZCwgdXNlcklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKHRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIGRhdGEgIGNoZWNrOiAnLCBkYXRhKTtcbiAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBhZGRDYXRlZ29yeShuZXdDYXRlZ29yeSkge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyB0ZW1wbGF0ZTogJ2NvZGVob29rcycgfSk7XG4gICAgYXdhaXQgcG9zdENhdGVnb3J5KHRva2VuLCBuZXdDYXRlZ29yeSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXModG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIGRhdGEgYWRkIGNoZWNrOiAnLCBkYXRhKTtcbiAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRlZ29yaWVzKCk7XG4gIH0sIFtpc0xvYWRlZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5KHRhZykge1xuICAgIHJldHVybiB0YWc7XG4gIH1cblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8c3Bhbj5Mb2FkaW5nIC4uLjwvc3Bhbj47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXRlZ29yeUJ1aWxkZXJcbiAgICAgICAgICBhZGRDYXRlZ29yeT17YWRkQ2F0ZWdvcnl9XG4gICAgICAgICAgbWFuYWdlQ2F0ZWdvcnk9e21hbmFnZUNhdGVnb3J5fVxuICAgICAgICAvPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5Ll9pZH1cbiAgICAgICAgICAgIHRhZz17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9kbyIsInN0eWxlcyIsIkJ1dHRvbiIsIlRvZG9CdWlsZGVyIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInBvc3RDYXRlZ29yeSIsInVzZUF1dGgiLCJDYXRlZ29yeUJ1aWxkZXIiLCJDYXRlZ29yeSIsIkNhdGVnb3J5TGlzdCIsImlzTG9hZGVkIiwidXNlcklkIiwiZ2V0VG9rZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsInRva2VuIiwidGVtcGxhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFkZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeSIsInRhZyIsInNwYW4iLCJkaXYiLCJtYW5hZ2VDYXRlZ29yeSIsIm1hcCIsImNhdGVnb3J5Iiwib25DaGFuZ2UiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/categoryList.js\n"));

/***/ })

});