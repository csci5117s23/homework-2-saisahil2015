"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/todo/[id]";
exports.ids = ["pages/todo/[id]"];
exports.modules = {

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllTasks\": () => (/* binding */ getAllTasks),\n/* harmony export */   \"getTaskById\": () => (/* binding */ getTaskById),\n/* harmony export */   \"postTask\": () => (/* binding */ postTask),\n/* harmony export */   \"putTask\": () => (/* binding */ putTask)\n/* harmony export */ });\n//Hub of all REST APIs\nconst API_ENDPOINT = \"https://backend-sumc.api.codehooks.io/dev\";\nasync function getAllTasks(authToken) {\n    const response = await fetch(API_ENDPOINT + \"/toDo\", {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function getTaskById(authToken, taskId) {\n    const response = await fetch(`${API_ENDPOINT}/toDo/${taskId}`, {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    return await response.json();\n}\nasync function postTask(authToken, newTask) {\n    await fetch(API_ENDPOINT + \"/toDo\", {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(newTask)\n    });\n}\nasync function putTask(authToken, updatedTask) {\n    await fetch(API_ENDPOINT + \"/toDo/\" + updatedTask.id, {\n        method: \"PUT\",\n        headers: {\n            Authorization: \"Bearer \" + authToken,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(updatedTask)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEIsTUFBTUEsZUFBZTtBQUVkLGVBQWVDLFlBQVlDLFNBQVMsRUFBRTtJQUMzQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU1KLGVBQWUsU0FBUztRQUNuREssUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPLE1BQU1DLFNBQVNLLElBQUk7QUFDNUIsQ0FBQztBQUVNLGVBQWVDLFlBQVlQLFNBQVMsRUFBRVEsTUFBTSxFQUFFO0lBQ25ELE1BQU1QLFdBQVcsTUFBTUMsTUFBTSxDQUFDLEVBQUVKLGFBQWEsTUFBTSxFQUFFVSxPQUFPLENBQUMsRUFBRTtRQUM3REwsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxPQUFPLE1BQU1DLFNBQVNLLElBQUk7QUFDNUIsQ0FBQztBQUVNLGVBQWVHLFNBQVNULFNBQVMsRUFBRVUsT0FBTyxFQUFFO0lBQ2pELE1BQU1SLE1BQU1KLGVBQWUsU0FBUztRQUNsQ0ssUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLGVBQWUsWUFBWUw7WUFDM0IsZ0JBQWdCO1FBQ2xCO1FBQ0FXLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0g7SUFDdkI7QUFDRixDQUFDO0FBRU0sZUFBZUksUUFBUWQsU0FBUyxFQUFFZSxXQUFXLEVBQUU7SUFDcEQsTUFBTWIsTUFBTUosZUFBZSxXQUFXaUIsWUFBWUMsRUFBRSxFQUFFO1FBQ3BEYixRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxZQUFZTDtZQUMzQixnQkFBZ0I7UUFDbEI7UUFDQVcsTUFBTUMsS0FBS0MsU0FBUyxDQUFDRTtJQUN2QjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL21vZHVsZXMvZGF0YS5qcz8wOTY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vSHViIG9mIGFsbCBSRVNUIEFQSXNcbmNvbnN0IEFQSV9FTkRQT0lOVCA9ICdodHRwczovL2JhY2tlbmQtc3VtYy5hcGkuY29kZWhvb2tzLmlvL2Rldic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxUYXNrcyhhdXRoVG9rZW4pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyAnL3RvRG8nLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFza0J5SWQoYXV0aFRva2VuLCB0YXNrSWQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfRU5EUE9JTlR9L3RvRG8vJHt0YXNrSWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFRva2VuLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RUYXNrKGF1dGhUb2tlbiwgbmV3VGFzaykge1xuICBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyAnL3RvRG8nLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFRva2VuLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spLFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1dFRhc2soYXV0aFRva2VuLCB1cGRhdGVkVGFzaykge1xuICBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyAnL3RvRG8vJyArIHVwZGF0ZWRUYXNrLmlkLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2spLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJBUElfRU5EUE9JTlQiLCJnZXRBbGxUYXNrcyIsImF1dGhUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb24iLCJnZXRUYXNrQnlJZCIsInRhc2tJZCIsInBvc3RUYXNrIiwibmV3VGFzayIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHV0VGFzayIsInVwZGF0ZWRUYXNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/data.js\n");

/***/ }),

/***/ "./src/pages/todo/[id].js":
/*!********************************!*\
  !*** ./src/pages/todo/[id].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoItem)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/modules/data */ \"./src/modules/data.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction TodoItem() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [todoItemInfo, setTodoItemInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { isLoaded , userId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getTask() {\n            if (userId) {\n                console.log(\"Id: \", id);\n                const token = await getToken({\n                    template: \"codehooks\"\n                });\n                const result = await (0,_modules_data__WEBPACK_IMPORTED_MODULE_3__.getTaskById)(token, id);\n                console.log(\"Result: \", result);\n                setTodoItemInfo(result);\n                setLoading(false);\n            }\n        }\n        getTask();\n    }, [\n        isLoaded\n    ]);\n    return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 27,\n        columnNumber: 20\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: todoItemInfo.info\n    }, void 0, false, {\n        fileName: \"/Users/sahilraina/Documents/College/UMN Courses/csci 5117/Homeworks/homework-2-saisahil2015/todoapp/src/pages/todo/[id].js\",\n        lineNumber: 27,\n        columnNumber: 46\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDSztBQUNMO0FBRXpCLFNBQVNLLFdBQVc7SUFDakMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDM0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUNyRCxNQUFNLEVBQUVhLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1gsc0RBQU9BO0lBRTlDSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZWUsVUFBVTtZQUN2QixJQUFJRixRQUFRO2dCQUNWRyxRQUFRQyxHQUFHLENBQUMsUUFBUVg7Z0JBQ3BCLE1BQU1ZLFFBQVEsTUFBTUosU0FBUztvQkFBRUssVUFBVTtnQkFBWTtnQkFDckQsTUFBTUMsU0FBUyxNQUFNbEIsMERBQVdBLENBQUNnQixPQUFPWjtnQkFDeENVLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRztnQkFDeEJULGdCQUFnQlM7Z0JBQ2hCWCxXQUFXLEtBQUs7WUFDbEIsQ0FBQztRQUNIO1FBQ0FNO0lBQ0YsR0FBRztRQUFDSDtLQUFTO0lBRWIsT0FBT0osd0JBQVUsOERBQUNhO2tCQUFLOzs7Ozs2QkFBb0IsOERBQUNDO2tCQUFLWixhQUFhYSxJQUFJOzs7OztZQUFPO0FBQzNFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3BhZ2VzL3RvZG8vW2lkXS5qcz84Mzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRUYXNrQnlJZCB9IGZyb20gJ0AvbW9kdWxlcy9kYXRhJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAY2xlcmsvbmV4dGpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0l0ZW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdG9kb0l0ZW1JbmZvLCBzZXRUb2RvSXRlbUluZm9dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRhc2soKSB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJZDogJywgaWQpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6ICdjb2RlaG9va3MnIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRUYXNrQnlJZCh0b2tlbiwgaWQpO1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0OiAnLCByZXN1bHQpO1xuICAgICAgICBzZXRUb2RvSXRlbUluZm8ocmVzdWx0KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdldFRhc2soKTtcbiAgfSwgW2lzTG9hZGVkXSk7XG5cbiAgcmV0dXJuIGxvYWRpbmcgPyA8c3Bhbj5Mb2FkaW5nLi4uPC9zcGFuPiA6IDxkaXY+e3RvZG9JdGVtSW5mby5pbmZvfTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFRhc2tCeUlkIiwidXNlQXV0aCIsIlRvZG9JdGVtIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9kb0l0ZW1JbmZvIiwic2V0VG9kb0l0ZW1JbmZvIiwiaXNMb2FkZWQiLCJ1c2VySWQiLCJnZXRUb2tlbiIsImdldFRhc2siLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ0ZW1wbGF0ZSIsInJlc3VsdCIsInNwYW4iLCJkaXYiLCJpbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todo/[id].js\n");

/***/ }),

/***/ "@clerk/nextjs":
/*!********************************!*\
  !*** external "@clerk/nextjs" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/todo/[id].js"));
module.exports = __webpack_exports__;

})();