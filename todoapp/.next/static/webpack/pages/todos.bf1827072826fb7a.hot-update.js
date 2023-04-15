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

/***/ "./src/components/categoryBuilder.js":
/*!*******************************************!*\
  !*** ./src/components/categoryBuilder.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CategoryBuilder(param) {\n    let { addCategory  } = param;\n    _s();\n    const [categoryName, setCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { userId  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    async function handleNewCategory(e) {\n        e.preventDefault();\n        if (categoryName.trim().length === 0) return;\n        await addCategory({\n            tag: categoryName.trim()\n        });\n        setCategoryName(\"\");\n    }\n    async function handleTaggingCategorie(category, todo) {\n        const updatedTask = {\n            _id: todo._id,\n            info: todo.info,\n            checked: true,\n            userId: todo.userId,\n            createdOn: todo.createdOn,\n            category: category\n        };\n        console.log(\"Here's the new task: \", updatedTask);\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        await putTask(token, updatedTask);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleNewCategory,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Add a New Category\",\n                onChange: (e)=>setCategoryName(e.target.value),\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Add Category\"\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                text: \"Tag Categories with Task\",\n                onChange: handleTaggingCategorie\n            }, void 0, false, {\n                fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryBuilder, \"tzwU6jb26fUCn6FfrveCU3MTUXw=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = CategoryBuilder;\nvar _c;\n$RefreshReg$(_c, \"CategoryBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUJ1aWxkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3JCO0FBQ0c7QUFDTztBQUV6QixTQUFTSSxnQkFBZ0IsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLFlBQVcsRUFBRSxHQUFmOztJQUN0QyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLEVBQUVNLE9BQU0sRUFBRSxHQUFHTCxzREFBT0E7SUFFMUIsZUFBZU0sa0JBQWtCQyxDQUFDLEVBQUU7UUFDbENBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUwsYUFBYU0sSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUN0QyxNQUFNUixZQUFZO1lBQUVTLEtBQUtSLGFBQWFNLElBQUk7UUFBRztRQUM3Q0wsZ0JBQWdCO0lBQ2xCO0lBRUEsZUFBZVEsdUJBQXVCQyxRQUFRLEVBQUVDLElBQUksRUFBRTtRQUNwRCxNQUFNQyxjQUFjO1lBQ2xCQyxLQUFLRixLQUFLRSxHQUFHO1lBQ2JDLE1BQU1ILEtBQUtHLElBQUk7WUFDZkMsU0FBUyxJQUFJO1lBQ2JiLFFBQVFTLEtBQUtULE1BQU07WUFDbkJjLFdBQVdMLEtBQUtLLFNBQVM7WUFDekJOLFVBQVVBO1FBQ1o7UUFDQU8sUUFBUUMsR0FBRyxDQUFDLHlCQUF5Qk47UUFDckMsTUFBTU8sUUFBUSxNQUFNQyxTQUFTO1lBQUVDLFVBQVU7UUFBWTtRQUNyRCxNQUFNQyxRQUFRSCxPQUFPUDtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDVztRQUFLQyxVQUFVckI7OzBCQUNkLDhEQUFDc0I7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ3hCLElBQU1ILGdCQUFnQkcsRUFBRXlCLE1BQU0sQ0FBQ0MsS0FBSztnQkFDL0NDLFdBQVdyQyxpRkFBbUI7Ozs7OzswQkFFaEMsOERBQUNDLCtDQUFNQTtnQkFBQ3NDLE1BQUs7Ozs7OzswQkFDYiw4REFBQ3RDLCtDQUFNQTtnQkFDTHNDLE1BQUs7Z0JBQ0xMLFVBQVVuQjs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUM7R0F4Q3VCWDs7UUFFSEQsa0RBQU9BOzs7S0FGSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdWlsZGVyLmpzPzFkZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUJ1aWxkZXIoeyBhZGRDYXRlZ29yeSB9KSB7XG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VBdXRoKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2F0ZWdvcnlOYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBhd2FpdCBhZGRDYXRlZ29yeSh7IHRhZzogY2F0ZWdvcnlOYW1lLnRyaW0oKSB9KTtcbiAgICBzZXRDYXRlZ29yeU5hbWUoJycpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlVGFnZ2luZ0NhdGVnb3JpZShjYXRlZ29yeSwgdG9kbykge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAgICAgX2lkOiB0b2RvLl9pZCxcbiAgICAgIGluZm86IHRvZG8uaW5mbyxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICB1c2VySWQ6IHRvZG8udXNlcklkLFxuICAgICAgY3JlYXRlZE9uOiB0b2RvLmNyZWF0ZWRPbixcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiSGVyZSdzIHRoZSBuZXcgdGFzazogXCIsIHVwZGF0ZWRUYXNrKTtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgIGF3YWl0IHB1dFRhc2sodG9rZW4sIHVwZGF0ZWRUYXNrKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU5ld0NhdGVnb3J5fT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICBwbGFjZWhvbGRlcj0nQWRkIGEgTmV3IENhdGVnb3J5J1xuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3J5TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld1Rhc2tJbnB1dH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIHRleHQ9J0FkZCBDYXRlZ29yeSc+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRleHQ9J1RhZyBDYXRlZ29yaWVzIHdpdGggVGFzaydcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVRhZ2dpbmdDYXRlZ29yaWV9XG4gICAgICA+PC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlQXV0aCIsIkNhdGVnb3J5QnVpbGRlciIsImFkZENhdGVnb3J5IiwiY2F0ZWdvcnlOYW1lIiwic2V0Q2F0ZWdvcnlOYW1lIiwidXNlcklkIiwiaGFuZGxlTmV3Q2F0ZWdvcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwidGFnIiwiaGFuZGxlVGFnZ2luZ0NhdGVnb3JpZSIsImNhdGVnb3J5IiwidG9kbyIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiaW5mbyIsImNoZWNrZWQiLCJjcmVhdGVkT24iLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRUb2tlbiIsInRlbXBsYXRlIiwicHV0VGFzayIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIm5ld1Rhc2tJbnB1dCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/categoryBuilder.js\n"));

/***/ })

});