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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _categoryBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categoryBuilder */ \"./src/components/categoryBuilder.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction CategoryList() {\n    _s();\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    async function getCategories() {\n        if (userId) {\n            const token = await getToken({\n                template: \"codehooks\"\n            });\n            const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n            console.log(\"Data: \", data);\n            console.log(\"Categories data  check: \", data);\n            setCategories(data);\n            setLoading(false);\n        }\n    }\n    async function addCategory(newCategory) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postCategory)(token, newCategory);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n        console.log(\"Categories data add check: \", data);\n        setCategories(data);\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getCategories();\n    }, [\n        isLoaded\n    ]);\n    function handleCategory(tag) {\n        manageCategory(tag);\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    addCategory: addCategory,\n                    manageCategory: manageCategory\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_category__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        tag: category,\n                        onChange: handleCategory\n                    }, category._id, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(CategoryList, \"c5C2hk1dn9nrzn7Zy6qvYWMOewI=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = CategoryList;\nvar _c;\n$RefreshReg$(_c, \"CategoryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDckI7QUFDVTtBQUNYO0FBQ2U7QUFDb0I7QUFDeEI7QUFDUTtBQUNkO0FBRW5CLFNBQVNZLGVBQWU7O0lBQ3JDLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixzREFBT0E7SUFDOUMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsZUFBZWUsZ0JBQWdCO1FBQzdCLElBQUlOLFFBQVE7WUFDVixNQUFNTyxRQUFRLE1BQU1OLFNBQVM7Z0JBQUVPLFVBQVU7WUFBWTtZQUNyRCxNQUFNQyxPQUFPLE1BQU1oQiwrREFBZ0JBLENBQUNjO1lBQ3BDRyxRQUFRQyxHQUFHLENBQUMsVUFBVUY7WUFDdEJDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEJGO1lBQ3hDSixjQUFjSTtZQUNkTixXQUFXLEtBQUs7UUFDbEIsQ0FBQztJQUNIO0lBRUEsZUFBZVMsWUFBWUMsV0FBVyxFQUFFO1FBQ3RDLE1BQU1OLFFBQVEsTUFBTU4sU0FBUztZQUFFTyxVQUFVO1FBQVk7UUFDckQsTUFBTWQsMkRBQVlBLENBQUNhLE9BQU9NO1FBQzFCLE1BQU1KLE9BQU8sTUFBTWhCLCtEQUFnQkEsQ0FBQ2M7UUFDcENHLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JGO1FBQzNDSixjQUFjSTtRQUNkTixXQUFXLEtBQUs7SUFDbEI7SUFFQVgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYztJQUNGLEdBQUc7UUFBQ1A7S0FBUztJQUViLFNBQVNlLGVBQWVDLEdBQUcsRUFBRTtRQUMzQkMsZUFBZUQ7SUFDakI7SUFFQSxJQUFJYixTQUFTO1FBQ1gscUJBQU8sOERBQUNlO3NCQUFLOzs7Ozs7SUFDZixPQUFPO1FBQ0wscUJBQ0UsOERBQUNDOzs4QkFDQyw4REFBQ3RCLHdEQUFlQTtvQkFDZGdCLGFBQWFBO29CQUNiSSxnQkFBZ0JBOzs7Ozs7Z0JBRWpCWixXQUFXZSxHQUFHLENBQUMsQ0FBQ0MseUJBQ2YsOERBQUN2QixpREFBUUE7d0JBRVBrQixLQUFLSzt3QkFDTEMsVUFBVVA7dUJBRkxNLFNBQVNFLEdBQUc7Ozs7Ozs7Ozs7O0lBTzNCLENBQUM7QUFDSCxDQUFDO0dBcER1QnhCOztRQUNpQkgsa0RBQU9BOzs7S0FEeEJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5TGlzdC5qcz8zYjM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IFRvZG9CdWlsZGVyIGZyb20gJy4vdG9kb0J1aWxkZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRBbGxDYXRlZ29yaWVzLCBwb3N0Q2F0ZWdvcnkgfSBmcm9tICdAL21vZHVsZXMvZGF0YSc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcyc7XG5pbXBvcnQgQ2F0ZWdvcnlCdWlsZGVyIGZyb20gJy4vY2F0ZWdvcnlCdWlsZGVyJztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KCkge1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIGdldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXModG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coJ0RhdGE6ICcsIGRhdGEpO1xuICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXMgZGF0YSAgY2hlY2s6ICcsIGRhdGEpO1xuICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZENhdGVnb3J5KG5ld0NhdGVnb3J5KSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwb3N0Q2F0ZWdvcnkodG9rZW4sIG5ld0NhdGVnb3J5KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyh0b2tlbik7XG4gICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXMgZGF0YSBhZGQgY2hlY2s6ICcsIGRhdGEpO1xuICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3JpZXMoKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2F0ZWdvcnkodGFnKSB7XG4gICAgbWFuYWdlQ2F0ZWdvcnkodGFnKTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxzcGFuPkxvYWRpbmcgLi4uPC9zcGFuPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhdGVnb3J5QnVpbGRlclxuICAgICAgICAgIGFkZENhdGVnb3J5PXthZGRDYXRlZ29yeX1cbiAgICAgICAgICBtYW5hZ2VDYXRlZ29yeT17bWFuYWdlQ2F0ZWdvcnl9XG4gICAgICAgIC8+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuX2lkfVxuICAgICAgICAgICAgdGFnPXtjYXRlZ29yeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDYXRlZ29yeX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxDYXRlZ29yaWVzIiwicG9zdENhdGVnb3J5IiwidXNlQXV0aCIsIkNhdGVnb3J5QnVpbGRlciIsIkNhdGVnb3J5IiwiQ2F0ZWdvcnlMaXN0IiwiaXNMb2FkZWQiLCJ1c2VySWQiLCJnZXRUb2tlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwidG9rZW4iLCJ0ZW1wbGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImhhbmRsZUNhdGVnb3J5IiwidGFnIiwibWFuYWdlQ2F0ZWdvcnkiLCJzcGFuIiwiZGl2IiwibWFwIiwiY2F0ZWdvcnkiLCJvbkNoYW5nZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/categoryList.js\n"));

/***/ })

});