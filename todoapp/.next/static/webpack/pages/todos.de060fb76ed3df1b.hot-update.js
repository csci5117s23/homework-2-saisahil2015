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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/components/todo.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var _todoBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoBuilder */ \"./src/components/todoBuilder.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _categoryBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categoryBuilder */ \"./src/components/categoryBuilder.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category */ \"./src/components/category.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction CategoryList(param) {\n    let { manageCategory  } = param;\n    _s();\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    async function getCategories() {\n        if (userId) {\n            const token = await getToken({\n                template: \"codehooks\"\n            });\n            const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n            console.log(\"Data: \", data);\n            console.log(\"Categories data check: \", data);\n            setCategories(data);\n            setLoading(false);\n        }\n    }\n    async function addCategory(newCategory) {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.postCategory)(token, newCategory);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n        console.log(\"Categories data add check: \", data);\n        setCategories(data);\n        setLoading(false);\n    }\n    async function deleteCategory() {\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        console.log(\"Selected Category: \", selectedCategory);\n        await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.deleteCategoryById)(token, selectedCategory._id);\n        const data = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_6__.getAllCategories)(token);\n        console.log(\"Categories data add check: \", data);\n        setCategories(data);\n        setLoading(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        getCategories();\n    }, [\n        isLoaded\n    ]);\n    function handleCategory(tag) {\n        manageCategory(tag);\n        setSelectedCategory(tag);\n    }\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"Loading ...\"\n        }, void 0, false, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_categoryBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    addCategory: addCategory,\n                    deleteCategory: deleteCategory\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"subtitle\",\n                    style: {\n                        width: \"55%\",\n                        marginTop: \"2rem\",\n                        marginBottom: \"2rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        children: \"Select from a category below to either tag it with the task or to delete the category itself:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns\",\n                    children: categories.map((category)=>{\n                        console.log(\"Categories: \", category._id);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_category__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            tag: category,\n                            onChange: handleCategory\n                        }, category._id, false, {\n                            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryList.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(CategoryList, \"3LpRBl+WkrGdimiC1o8huYT0dM8=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.useAuth\n    ];\n});\n_c = CategoryList;\nvar _c;\n$RefreshReg$(_c, \"CategoryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDckI7QUFDVTtBQUNYO0FBQ2U7QUFLcEI7QUFDZ0I7QUFDUTtBQUNkO0FBRW5CLFNBQVNhLGFBQWEsS0FBa0IsRUFBRTtRQUFwQixFQUFFQyxlQUFjLEVBQUUsR0FBbEI7O0lBQ25DLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUFHUCxzREFBT0E7SUFDOUMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ2lCLGtCQUFrQkMsb0JBQW9CLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV6RCxlQUFlbUIsZ0JBQWdCO1FBQzdCLElBQUlSLFFBQVE7WUFDVixNQUFNUyxRQUFRLE1BQU1SLFNBQVM7Z0JBQUVTLFVBQVU7WUFBWTtZQUNyRCxNQUFNQyxPQUFPLE1BQU1wQiwrREFBZ0JBLENBQUNrQjtZQUNwQ0csUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRjtZQUN2Q04sY0FBY007WUFDZFIsV0FBVyxLQUFLO1FBQ2xCLENBQUM7SUFDSDtJQUVBLGVBQWVXLFlBQVlDLFdBQVcsRUFBRTtRQUN0QyxNQUFNTixRQUFRLE1BQU1SLFNBQVM7WUFBRVMsVUFBVTtRQUFZO1FBQ3JELE1BQU1sQiwyREFBWUEsQ0FBQ2lCLE9BQU9NO1FBQzFCLE1BQU1KLE9BQU8sTUFBTXBCLCtEQUFnQkEsQ0FBQ2tCO1FBQ3BDRyxRQUFRQyxHQUFHLENBQUMsK0JBQStCRjtRQUMzQ04sY0FBY007UUFDZFIsV0FBVyxLQUFLO0lBQ2xCO0lBRUEsZUFBZWEsaUJBQWlCO1FBQzlCLE1BQU1QLFFBQVEsTUFBTVIsU0FBUztZQUFFUyxVQUFVO1FBQVk7UUFDckRFLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJQO1FBQ25DLE1BQU1iLGlFQUFrQkEsQ0FBQ2dCLE9BQU9ILGlCQUFpQlcsR0FBRztRQUNwRCxNQUFNTixPQUFPLE1BQU1wQiwrREFBZ0JBLENBQUNrQjtRQUNwQ0csUUFBUUMsR0FBRyxDQUFDLCtCQUErQkY7UUFDM0NOLGNBQWNNO1FBQ2RSLFdBQVcsS0FBSztJQUNsQjtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RrQjtJQUNGLEdBQUc7UUFBQ1Q7S0FBUztJQUViLFNBQVNtQixlQUFlQyxHQUFHLEVBQUU7UUFDM0JyQixlQUFlcUI7UUFDZlosb0JBQW9CWTtJQUN0QjtJQUVBLElBQUlqQixTQUFTO1FBQ1gscUJBQU8sOERBQUNrQjtzQkFBSzs7Ozs7O0lBQ2YsT0FBTztRQUNMLHFCQUNFLDhEQUFDQzs7OEJBQ0MsOERBQUMxQix3REFBZUE7b0JBQ2RtQixhQUFhQTtvQkFDYkUsZ0JBQWdCQTs7Ozs7OzhCQUVsQiw4REFBQ007b0JBQ0NDLFdBQVU7b0JBQ1ZDLE9BQU87d0JBQUVDLE9BQU87d0JBQU9DLFdBQVc7d0JBQVFDLGNBQWM7b0JBQU87OEJBRS9ELDRFQUFDQztrQ0FBTzs7Ozs7Ozs7Ozs7OEJBS1YsOERBQUNQO29CQUFJRSxXQUFVOzhCQUNabkIsV0FBV3lCLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO3dCQUM1QmxCLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JpQixTQUFTYixHQUFHO3dCQUN4QyxxQkFDRSw4REFBQ3JCLGlEQUFRQTs0QkFFUHVCLEtBQUtXOzRCQUNMQyxVQUFVYjsyQkFGTFksU0FBU2IsR0FBRzs7Ozs7b0JBS3ZCOzs7Ozs7Ozs7Ozs7SUFJUixDQUFDO0FBQ0gsQ0FBQztHQTlFdUJwQjs7UUFDaUJILGtEQUFPQTs7O0tBRHhCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUxpc3QuanM/M2IzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL3RvZG9CdWlsZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsQ2F0ZWdvcmllcyxcbiAgcG9zdENhdGVnb3J5LFxuICBkZWxldGVDYXRlZ29yeUJ5SWQsXG59IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcbmltcG9ydCBDYXRlZ29yeUJ1aWxkZXIgZnJvbSAnLi9jYXRlZ29yeUJ1aWxkZXInO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUxpc3QoeyBtYW5hZ2VDYXRlZ29yeSB9KSB7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoJycpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxDYXRlZ29yaWVzKHRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIGRhdGEgY2hlY2s6ICcsIGRhdGEpO1xuICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZENhdGVnb3J5KG5ld0NhdGVnb3J5KSB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHRlbXBsYXRlOiAnY29kZWhvb2tzJyB9KTtcbiAgICBhd2FpdCBwb3N0Q2F0ZWdvcnkodG9rZW4sIG5ld0NhdGVnb3J5KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQ2F0ZWdvcmllcyh0b2tlbik7XG4gICAgY29uc29sZS5sb2coJ0NhdGVnb3JpZXMgZGF0YSBhZGQgY2hlY2s6ICcsIGRhdGEpO1xuICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeSgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBDYXRlZ29yeTogJywgc2VsZWN0ZWRDYXRlZ29yeSk7XG4gICAgYXdhaXQgZGVsZXRlQ2F0ZWdvcnlCeUlkKHRva2VuLCBzZWxlY3RlZENhdGVnb3J5Ll9pZCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFsbENhdGVnb3JpZXModG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzIGRhdGEgYWRkIGNoZWNrOiAnLCBkYXRhKTtcbiAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDYXRlZ29yaWVzKCk7XG4gIH0sIFtpc0xvYWRlZF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNhdGVnb3J5KHRhZykge1xuICAgIG1hbmFnZUNhdGVnb3J5KHRhZyk7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeSh0YWcpO1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHNwYW4+TG9hZGluZyAuLi48L3NwYW4+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2F0ZWdvcnlCdWlsZGVyXG4gICAgICAgICAgYWRkQ2F0ZWdvcnk9e2FkZENhdGVnb3J5fVxuICAgICAgICAgIGRlbGV0ZUNhdGVnb3J5PXtkZWxldGVDYXRlZ29yeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdWJ0aXRsZSdcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzU1JScsIG1hcmdpblRvcDogJzJyZW0nLCBtYXJnaW5Cb3R0b206ICcycmVtJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIFNlbGVjdCBmcm9tIGEgY2F0ZWdvcnkgYmVsb3cgdG8gZWl0aGVyIHRhZyBpdCB3aXRoIHRoZSB0YXNrIG9yIHRvXG4gICAgICAgICAgICBkZWxldGUgdGhlIGNhdGVnb3J5IGl0c2VsZjpcbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMnPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yaWVzOiAnLCBjYXRlZ29yeS5faWQpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhdGVnb3J5XG4gICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5faWR9XG4gICAgICAgICAgICAgICAgdGFnPXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvIiwic3R5bGVzIiwiQnV0dG9uIiwiVG9kb0J1aWxkZXIiLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRBbGxDYXRlZ29yaWVzIiwicG9zdENhdGVnb3J5IiwiZGVsZXRlQ2F0ZWdvcnlCeUlkIiwidXNlQXV0aCIsIkNhdGVnb3J5QnVpbGRlciIsIkNhdGVnb3J5IiwiQ2F0ZWdvcnlMaXN0IiwibWFuYWdlQ2F0ZWdvcnkiLCJpc0xvYWRlZCIsInVzZXJJZCIsImdldFRva2VuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsInRva2VuIiwidGVtcGxhdGUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImFkZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsIl9pZCIsImhhbmRsZUNhdGVnb3J5IiwidGFnIiwic3BhbiIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInN0cm9uZyIsIm1hcCIsImNhdGVnb3J5Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/categoryList.js\n"));

/***/ })

});