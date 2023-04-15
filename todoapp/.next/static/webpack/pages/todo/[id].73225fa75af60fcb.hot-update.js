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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllCategories\": function() { return /* binding */ getAllCategories; },\n/* harmony export */   \"getAllCheckedTasks\": function() { return /* binding */ getAllCheckedTasks; },\n/* harmony export */   \"getAllUncheckedTasks\": function() { return /* binding */ getAllUncheckedTasks; },\n/* harmony export */   \"getIncompleteTasksForCategory\": function() { return /* binding */ getIncompleteTasksForCategory; },\n/* harmony export */   \"getTaskById\": function() { return /* binding */ getTaskById; },\n/* harmony export */   \"postCategory\": function() { return /* binding */ postCategory; },\n/* harmony export */   \"postTask\": function() { return /* binding */ postTask; },\n/* harmony export */   \"putTask\": function() { return /* binding */ putTask; }\n/* harmony export */ });\n//Hub of all REST APIs\nconst API_ENDPOINT = \"https://backend-sumc.api.codehooks.io/dev\";\nasync function getAllUncheckedTasks(authToken) {\n    const response = await fetch(API_ENDPOINT + \"/toDo?checked=false&sort=-createdOn\", {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function getAllCheckedTasks(authToken) {\n    const response = await fetch(API_ENDPOINT + \"/toDo?checked=true&sort=-createdOn\", {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function getTaskById(authToken, taskId) {\n    const response = await fetch(\"\".concat(API_ENDPOINT, \"/toDo/\").concat(taskId), {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function postTask(authToken, newTask) {\n    await fetch(API_ENDPOINT + \"/toDo\", {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(newTask)\n    });\n}\nasync function putTask(authToken, updatedTask) {\n    await fetch(API_ENDPOINT + \"/toDo/\" + updatedTask._id, {\n        method: \"PUT\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(updatedTask)\n    });\n}\nasync function getAllCategories(authToken) {\n    const response = await fetch(API_ENDPOINT + \"/categories/\", {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken\n        }\n    });\n    return await response.json();\n}\nasync function postCategory(authToken, newCategory) {\n    await fetch(API_ENDPOINT + \"/categories\", {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(newCategory)\n    });\n}\nasync function getIncompleteTasksForCategory(authToken, category) {\n    const response = await fetch(\"\".concat(API_ENDPOINT, \"/categories?category=\").concat(category), {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0JBQXNCO0FBQ3RCLE1BQU1BLGVBQWU7QUFFZCxlQUFlQyxxQkFBcUJDLFNBQVMsRUFBRTtJQUNwRCxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCSixlQUFlLHVDQUNmO1FBQ0VLLFFBQVE7UUFDUkMsU0FBUztZQUNQQyxlQUFlLFlBQVlMO1lBQzNCLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUYsT0FBTyxNQUFNQyxTQUFTSyxJQUFJO0FBQzVCLENBQUM7QUFFTSxlQUFlQyxtQkFBbUJQLFNBQVMsRUFBRTtJQUNsRCxNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCSixlQUFlLHNDQUNmO1FBQ0VLLFFBQVE7UUFDUkMsU0FBUztZQUNQQyxlQUFlLFlBQVlMO1lBQzNCLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUYsT0FBTyxNQUFNQyxTQUFTSyxJQUFJO0FBQzVCLENBQUM7QUFFTSxlQUFlRSxZQUFZUixTQUFTLEVBQUVTLE1BQU0sRUFBRTtJQUNuRCxNQUFNUixXQUFXLE1BQU1DLE1BQU0sR0FBd0JPLE9BQXJCWCxjQUFhLFVBQWUsT0FBUFcsU0FBVTtRQUM3RE4sUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPLE1BQU1DLFNBQVNLLElBQUk7QUFDNUIsQ0FBQztBQUVNLGVBQWVJLFNBQVNWLFNBQVMsRUFBRVcsT0FBTyxFQUFFO0lBQ2pELE1BQU1ULE1BQU1KLGVBQWUsU0FBUztRQUNsQ0ssUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO1FBQ0FZLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0g7SUFDdkI7QUFDRixDQUFDO0FBRU0sZUFBZUksUUFBUWYsU0FBUyxFQUFFZ0IsV0FBVyxFQUFFO0lBQ3BELE1BQU1kLE1BQU1KLGVBQWUsV0FBV2tCLFlBQVlDLEdBQUcsRUFBRTtRQUNyRGQsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO1FBQ0FZLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0U7SUFDdkI7QUFDRixDQUFDO0FBRU0sZUFBZUUsaUJBQWlCbEIsU0FBUyxFQUFFO0lBQ2hELE1BQU1DLFdBQVcsTUFBTUMsTUFBTUosZUFBZSxnQkFBZ0I7UUFDMURLLFFBQVE7UUFDUkMsU0FBUztZQUFFQyxlQUFlLFlBQVlMO1FBQVU7SUFDbEQ7SUFDQSxPQUFPLE1BQU1DLFNBQVNLLElBQUk7QUFDNUIsQ0FBQztBQUVNLGVBQWVhLGFBQWFuQixTQUFTLEVBQUVvQixXQUFXLEVBQUU7SUFDekQsTUFBTWxCLE1BQU1KLGVBQWUsZUFBZTtRQUN4Q0ssUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO1FBQ0FZLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ007SUFDdkI7QUFDRixDQUFDO0FBRU0sZUFBZUMsOEJBQThCckIsU0FBUyxFQUFFc0IsUUFBUSxFQUFFO0lBQ3ZFLE1BQU1yQixXQUFXLE1BQU1DLE1BQ3JCLEdBQXVDb0IsT0FBcEN4QixjQUFhLHlCQUFnQyxPQUFUd0IsV0FDdkM7UUFDRW5CLFFBQVE7UUFDUkMsU0FBUztZQUNQQyxlQUFlLFlBQVlMO1lBQzNCLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUYsT0FBTyxNQUFNQyxTQUFTSyxJQUFJO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvZGF0YS5qcz8wOTY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vSHViIG9mIGFsbCBSRVNUIEFQSXNcbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdodHRwczovL2JhY2tlbmQtc3VtYy5hcGkuY29kZWhvb2tzLmlvL2Rldic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxVbmNoZWNrZWRUYXNrcyhhdXRoVG9rZW4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBBUElfRU5EUE9JTlQgKyAnL3RvRG8/Y2hlY2tlZD1mYWxzZSZzb3J0PS1jcmVhdGVkT24nLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfVxuICApO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2hlY2tlZFRhc2tzKGF1dGhUb2tlbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIEFQSV9FTkRQT0lOVCArICcvdG9Ebz9jaGVja2VkPXRydWUmc29ydD0tY3JlYXRlZE9uJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhc2tCeUlkKGF1dGhUb2tlbiwgdGFza0lkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0VORFBPSU5UfS90b0RvLyR7dGFza0lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0VGFzayhhdXRoVG9rZW4sIG5ld1Rhc2spIHtcbiAgYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5UICsgJy90b0RvJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdUYXNrKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRUYXNrKGF1dGhUb2tlbiwgdXBkYXRlZFRhc2spIHtcbiAgYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5UICsgJy90b0RvLycgKyB1cGRhdGVkVGFzay5faWQsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhUb2tlbixcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFzayksXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2F0ZWdvcmllcyhhdXRoVG9rZW4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyAnL2NhdGVnb3JpZXMvJywge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4gfSxcbiAgfSk7XG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q2F0ZWdvcnkoYXV0aFRva2VuLCBuZXdDYXRlZ29yeSkge1xuICBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyAnL2NhdGVnb3JpZXMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFRva2VuLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NhdGVnb3J5KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmNvbXBsZXRlVGFza3NGb3JDYXRlZ29yeShhdXRoVG9rZW4sIGNhdGVnb3J5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QVBJX0VORFBPSU5UfS9jYXRlZ29yaWVzP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cbiJdLCJuYW1lcyI6WyJBUElfRU5EUE9JTlQiLCJnZXRBbGxVbmNoZWNrZWRUYXNrcyIsImF1dGhUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb24iLCJnZXRBbGxDaGVja2VkVGFza3MiLCJnZXRUYXNrQnlJZCIsInRhc2tJZCIsInBvc3RUYXNrIiwibmV3VGFzayIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHV0VGFzayIsInVwZGF0ZWRUYXNrIiwiX2lkIiwiZ2V0QWxsQ2F0ZWdvcmllcyIsInBvc3RDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZ2V0SW5jb21wbGV0ZVRhc2tzRm9yQ2F0ZWdvcnkiLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/data.js\n"));

/***/ })

});