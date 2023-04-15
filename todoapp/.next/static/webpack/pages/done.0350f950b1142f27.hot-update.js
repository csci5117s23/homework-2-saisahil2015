"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/done",{

/***/ "./src/components/categoryBuilder.js":
/*!*******************************************!*\
  !*** ./src/components/categoryBuilder.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoryBuilder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./src/styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"./src/components/button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CategoryBuilder(param) {\n    let { addCategory  } = param;\n    _s();\n    const [categoryName, setCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { userId  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    async function handleNewCategory(e) {\n        e.preventDefault();\n        if (categoryName.trim().length === 0) return;\n        await addCategory({\n            tag: categoryName.trim()\n        });\n        setCategoryName(\"\");\n    }\n    //   async function handleTaggingCategory() {\n    //     const category =\n    //     const todo =\n    //     const updatedTask = {\n    //       _id: todo._id,\n    //       info: todo.info,\n    //       checked: true,\n    //       userId: todo.userId,\n    //       createdOn: todo.createdOn,\n    //       category: category,\n    //     };\n    //     console.log(\"Here's the new task: \", updatedTask);\n    //     const token = await getToken({ template: 'codehooks' });\n    //     await putTask(token, updatedTask);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleNewCategory,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Add a New Category\",\n                    onChange: (e)=>setCategoryName(e.target.value),\n                    className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().newTaskInput)\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    text: \"Add Category\"\n                }, void 0, false, {\n                    fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/components/categoryBuilder.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoryBuilder, \"tzwU6jb26fUCn6FfrveCU3MTUXw=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = CategoryBuilder;\nvar _c;\n$RefreshReg$(_c, \"CategoryBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUJ1aWxkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3JCO0FBQ0c7QUFDTztBQUV6QixTQUFTSSxnQkFBZ0IsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLFlBQVcsRUFBRSxHQUFmOztJQUN0QyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLEVBQUVNLE9BQU0sRUFBRSxHQUFHTCxzREFBT0E7SUFFMUIsZUFBZU0sa0JBQWtCQyxDQUFDLEVBQUU7UUFDbENBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSUwsYUFBYU0sSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUN0QyxNQUFNUixZQUFZO1lBQUVTLEtBQUtSLGFBQWFNLElBQUk7UUFBRztRQUM3Q0wsZ0JBQWdCO0lBQ2xCO0lBRUEsNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCx5REFBeUQ7SUFDekQsK0RBQStEO0lBQy9ELHlDQUF5QztJQUN6QyxNQUFNO0lBRU4scUJBQ0UsOERBQUNRO2tCQUNDLDRFQUFDQztZQUFLQyxVQUFVUjs7OEJBQ2QsOERBQUNTO29CQUNDQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxVQUFVLENBQUNYLElBQU1ILGdCQUFnQkcsRUFBRVksTUFBTSxDQUFDQyxLQUFLO29CQUMvQ0MsV0FBV3hCLGlGQUFtQjs7Ozs7OzhCQUVoQyw4REFBQ0MsK0NBQU1BO29CQUFDeUIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckIsQ0FBQztHQTVDdUJ0Qjs7UUFFSEQsa0RBQU9BOzs7S0FGSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdWlsZGVyLmpzPzFkZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUJ1aWxkZXIoeyBhZGRDYXRlZ29yeSB9KSB7XG4gIGNvbnN0IFtjYXRlZ29yeU5hbWUsIHNldENhdGVnb3J5TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VBdXRoKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTmV3Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY2F0ZWdvcnlOYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBhd2FpdCBhZGRDYXRlZ29yeSh7IHRhZzogY2F0ZWdvcnlOYW1lLnRyaW0oKSB9KTtcbiAgICBzZXRDYXRlZ29yeU5hbWUoJycpO1xuICB9XG5cbiAgLy8gICBhc3luYyBmdW5jdGlvbiBoYW5kbGVUYWdnaW5nQ2F0ZWdvcnkoKSB7XG4gIC8vICAgICBjb25zdCBjYXRlZ29yeSA9XG4gIC8vICAgICBjb25zdCB0b2RvID1cbiAgLy8gICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0ge1xuICAvLyAgICAgICBfaWQ6IHRvZG8uX2lkLFxuICAvLyAgICAgICBpbmZvOiB0b2RvLmluZm8sXG4gIC8vICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gIC8vICAgICAgIHVzZXJJZDogdG9kby51c2VySWQsXG4gIC8vICAgICAgIGNyZWF0ZWRPbjogdG9kby5jcmVhdGVkT24sXG4gIC8vICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgLy8gICAgIH07XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIkhlcmUncyB0aGUgbmV3IHRhc2s6IFwiLCB1cGRhdGVkVGFzayk7XG4gIC8vICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAvLyAgICAgYXdhaXQgcHV0VGFzayh0b2tlbiwgdXBkYXRlZFRhc2spO1xuICAvLyAgIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTmV3Q2F0ZWdvcnl9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdBZGQgYSBOZXcgQ2F0ZWdvcnknXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDYXRlZ29yeU5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5ld1Rhc2tJbnB1dH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PSdBZGQgQ2F0ZWdvcnknPjwvQnV0dG9uPlxuICAgICAgICB7LyogPEJ1dHRvblxuICAgICAgICB0ZXh0PSdUYWcgQ2F0ZWdvcmllcyB3aXRoIFRhc2snXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUYWdnaW5nQ2F0ZWdvcnl9XG4gICAgICA+PC9CdXR0b24+ICovfVxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkJ1dHRvbiIsInVzZVN0YXRlIiwidXNlQXV0aCIsIkNhdGVnb3J5QnVpbGRlciIsImFkZENhdGVnb3J5IiwiY2F0ZWdvcnlOYW1lIiwic2V0Q2F0ZWdvcnlOYW1lIiwidXNlcklkIiwiaGFuZGxlTmV3Q2F0ZWdvcnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibGVuZ3RoIiwidGFnIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NOYW1lIiwibmV3VGFza0lucHV0IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/categoryBuilder.js\n"));

/***/ })

});