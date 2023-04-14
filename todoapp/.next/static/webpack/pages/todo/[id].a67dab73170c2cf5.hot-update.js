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

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllTasks\": function() { return /* binding */ getAllTasks; },\n/* harmony export */   \"getTaskById\": function() { return /* binding */ getTaskById; },\n/* harmony export */   \"postTask\": function() { return /* binding */ postTask; },\n/* harmony export */   \"putTask\": function() { return /* binding */ putTask; }\n/* harmony export */ });\n//Hub of all REST APIs\nconst API_ENDPOINT = \"https://backend-sumc.api.codehooks.io/dev\";\nasync function getAllTasks(authToken) {\n    const response = await fetch(API_ENDPOINT + \"/toDo\", {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function getTaskById(authToken, taskId) {\n    const response = await fetch(\"\".concat(API_ENDPOINT, \"/toDo/\").concat(taskId), {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function postTask(authToken, newTask) {\n    await fetch(API_ENDPOINT + \"/toDo\", {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(newTask)\n    });\n}\nasync function putTask(authToken, updatedTask) {\n    await fetch(API_ENDPOINT + \"/toDo/\" + updatedTask.id, {\n        method: \"PUT\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(updatedTask)\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsTUFBTUEsZUFBZTtBQUVkLGVBQWVDLFlBQVlDLFNBQVMsRUFBRTtJQUMzQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU1KLGVBQWUsU0FBUztRQUNuREssUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPLE1BQU1DLFNBQVNLLElBQUk7QUFDNUIsQ0FBQztBQUVNLGVBQWVDLFlBQVlQLFNBQVMsRUFBRVEsTUFBTSxFQUFFO0lBQ25ELE1BQU1QLFdBQVcsTUFBTUMsTUFBTSxHQUF3Qk0sT0FBckJWLGNBQWEsVUFBZSxPQUFQVSxTQUFVO1FBQzdETCxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxZQUFZTDtZQUMzQixnQkFBZ0I7UUFDbEI7SUFDRjtJQUNBLE9BQU8sTUFBTUMsU0FBU0ssSUFBSTtBQUM1QixDQUFDO0FBRU0sZUFBZUcsU0FBU1QsU0FBUyxFQUFFVSxPQUFPLEVBQUU7SUFDakQsTUFBTVIsTUFBTUosZUFBZSxTQUFTO1FBQ2xDSyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxZQUFZTDtZQUMzQixnQkFBZ0I7UUFDbEI7UUFDQVcsTUFBTUMsS0FBS0MsU0FBUyxDQUFDSDtJQUN2QjtBQUNGLENBQUM7QUFFTSxlQUFlSSxRQUFRZCxTQUFTLEVBQUVlLFdBQVcsRUFBRTtJQUNwRCxNQUFNYixNQUFNSixlQUFlLFdBQVdpQixZQUFZQyxFQUFFLEVBQUU7UUFDcERiLFFBQVE7UUFDUkMsU0FBUztZQUNQQyxlQUFlLFlBQVlMO1lBQzNCLGdCQUFnQjtRQUNsQjtRQUNBVyxNQUFNQyxLQUFLQyxTQUFTLENBQUNFO0lBQ3ZCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kdWxlcy9kYXRhLmpzPzA5NjciXSwic291cmNlc0NvbnRlbnQiOlsiLy9IdWIgb2YgYWxsIFJFU1QgQVBJc1xuY29uc3QgQVBJX0VORFBPSU5UID0gJ2h0dHBzOi8vYmFja2VuZC1zdW1jLmFwaS5jb2RlaG9va3MuaW8vZGV2JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRhc2tzKGF1dGhUb2tlbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVCArICcvdG9EbycsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYXNrQnlJZChhdXRoVG9rZW4sIHRhc2tJZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9FTkRQT0lOVH0vdG9Eby8ke3Rhc2tJZH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdFRhc2soYXV0aFRva2VuLCBuZXdUYXNrKSB7XG4gIGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVCArICcvdG9EbycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VGFzayksXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0VGFzayhhdXRoVG9rZW4sIHVwZGF0ZWRUYXNrKSB7XG4gIGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVCArICcvdG9Eby8nICsgdXBkYXRlZFRhc2suaWQsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFzayksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIkFQSV9FTkRQT0lOVCIsImdldEFsbFRhc2tzIiwiYXV0aFRva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwianNvbiIsImdldFRhc2tCeUlkIiwidGFza0lkIiwicG9zdFRhc2siLCJuZXdUYXNrIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXRUYXNrIiwidXBkYXRlZFRhc2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/data.js\n"));

/***/ })

});