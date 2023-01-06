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
exports.id = "pages/api/[feedbackId]";
exports.ids = ["pages/api/[feedbackId]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/[feedbackId].ts":
/*!***********************************!*\
  !*** ./pages/api/[feedbackId].ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ \"(api)/./pages/api/feedback.ts\");\n\nconst handler = (req, res)=>{\n    const feedbackId = req.query.feedbackId;\n    const filePath = (0,_feedback__WEBPACK_IMPORTED_MODULE_0__.buildFeedbackPath)();\n    const feedbackData = (0,_feedback__WEBPACK_IMPORTED_MODULE_0__.extractFeedback)(filePath);\n    const selectedFeedback = feedbackData.find((feedback)=>feedbackId === feedback.id);\n    res.status(200).json({\n        feedback: selectedFeedback\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW2ZlZWRiYWNrSWRdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRWdFO0FBRWhFLE1BQU1FLFVBQVUsQ0FBQ0MsS0FBcUJDLE1BQXlCO0lBQzdELE1BQU1DLGFBQWFGLElBQUlHLEtBQUssQ0FBQ0QsVUFBVTtJQUN2QyxNQUFNRSxXQUFXUCw0REFBaUJBO0lBQ2xDLE1BQU1RLGVBQWVQLDBEQUFlQSxDQUFDTTtJQUVyQyxNQUFNRSxtQkFBbUJELGFBQWFFLElBQUksQ0FDeEMsQ0FBQ0MsV0FBMkJOLGVBQWVNLFNBQVNDLEVBQUU7SUFHeERSLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUgsVUFBVUY7SUFBaUI7QUFDcEQ7QUFFQSxpRUFBZVAsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1yb3V0ZS8uL3BhZ2VzL2FwaS9bZmVlZGJhY2tJZF0udHM/ZmRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGZWVkYmFja0l0ZW0gfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFja1wiO1xuXG5jb25zdCBoYW5kbGVyID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IGZlZWRiYWNrSWQgPSByZXEucXVlcnkuZmVlZGJhY2tJZDtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICBjb25zdCBmZWVkYmFja0RhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuXG4gIGNvbnN0IHNlbGVjdGVkRmVlZGJhY2sgPSBmZWVkYmFja0RhdGEuZmluZChcbiAgICAoZmVlZGJhY2s6IEZlZWRiYWNrSXRlbSkgPT4gZmVlZGJhY2tJZCA9PT0gZmVlZGJhY2suaWRcbiAgKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGZlZWRiYWNrOiBzZWxlY3RlZEZlZWRiYWNrIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJidWlsZEZlZWRiYWNrUGF0aCIsImV4dHJhY3RGZWVkYmFjayIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmZWVkYmFja0lkIiwicXVlcnkiLCJmaWxlUGF0aCIsImZlZWRiYWNrRGF0YSIsInNlbGVjdGVkRmVlZGJhY2siLCJmaW5kIiwiZmVlZGJhY2siLCJpZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/[feedbackId].ts\n");

/***/ }),

/***/ "(api)/./pages/api/feedback.ts":
/*!*******************************!*\
  !*** ./pages/api/feedback.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildFeedbackPath\": () => (/* binding */ buildFeedbackPath),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"extractFeedback\": () => (/* binding */ extractFeedback)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst buildFeedbackPath = ()=>{\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"feedback.json\");\n// 해당 파일의 절대경로\n//process.cws() : 현재 작업 중인 디렉터리 (최상단)\n};\nconst extractFeedback = (filePath)=>{\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath).toString(); //json\n    const data = JSON.parse(fileData);\n    return data;\n};\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , text  } = req.body;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email,\n            text: text\n        };\n        const filePath = buildFeedbackPath();\n        const data = extractFeedback(filePath);\n        data.push(newFeedback);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"success\",\n            feedback: newFeedback\n        });\n    } else {\n        const filePath1 = buildFeedbackPath();\n        const data1 = extractFeedback(filePath1);\n        res.status(200).json({\n            feedback: data1\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZGJhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvQjtBQUNJO0FBRWpCLE1BQU1FLG9CQUFvQixJQUFNO0lBQ3JDLE9BQU9ELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0FBQ3hDLGNBQWM7QUFDZCxxQ0FBcUM7QUFDdkMsRUFBRTtBQUVLLE1BQU1DLGtCQUFrQixDQUFDQyxXQUFxQjtJQUNuRCxNQUFNQyxXQUFXUixzREFBZSxDQUFDTyxVQUFVRyxRQUFRLElBQUksTUFBTTtJQUM3RCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMO0lBQ3hCLE9BQU9HO0FBQ1QsRUFBRTtBQUVGLE1BQU1HLFVBQVUsQ0FBQ0MsS0FBcUJDLE1BQXlCO0lBQzdELElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUVoQyxNQUFNQyxjQUFjO1lBQ2xCQyxJQUFJLElBQUlDLE9BQU9DLFdBQVc7WUFDMUJOO1lBQ0FDLE1BQU1BO1FBQ1I7UUFFQSxNQUFNWixXQUFXTDtRQUNqQixNQUFNUyxPQUFPTCxnQkFBZ0JDO1FBQzdCSSxLQUFLYyxJQUFJLENBQUNKO1FBRVZyQix1REFBZ0IsQ0FBQ08sVUFBVUssS0FBS2UsU0FBUyxDQUFDaEI7UUFDMUNLLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFXQyxVQUFVVjtRQUFZO0lBQ25FLE9BQU87UUFDTCxNQUFNZCxZQUFXTDtRQUNqQixNQUFNUyxRQUFPTCxnQkFBZ0JDO1FBQzdCUyxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFVBQVVwQjtRQUFLO0lBQ3hDLENBQUM7QUFDSDtBQUVBLGlFQUFlRyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLXJvdXRlLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLnRzP2M3ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZEZlZWRiYWNrUGF0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJmZWVkYmFjay5qc29uXCIpO1xuICAvLyDtlbTri7kg7YyM7J287J2YIOygiOuMgOqyveuhnFxuICAvL3Byb2Nlc3MuY3dzKCkgOiDtmITsnqwg7J6R7JeFIOykkeyduCDrlJTroInthLDrpqwgKOy1nOyDgeuLqClcbn07XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0RmVlZGJhY2sgPSAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTsgLy9qc29uXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZW1haWwsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgIH07XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XG4gICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XG4gICAgZGF0YS5wdXNoKG5ld0ZlZWRiYWNrKTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiYnVpbGRGZWVkYmFja1BhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJ0ZXh0IiwiYm9keSIsIm5ld0ZlZWRiYWNrIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/feedback.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[feedbackId].ts"));
module.exports = __webpack_exports__;

})();