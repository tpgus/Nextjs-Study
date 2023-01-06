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
exports.id = "pages/api/feedback";
exports.ids = ["pages/api/feedback"];
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

/***/ "(api)/./pages/api/feedback.ts":
/*!*******************************!*\
  !*** ./pages/api/feedback.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst buildFeedbackPath = ()=>{\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"feedback.json\");\n// 해당 파일의 절대경로\n//process.cws() : 현재 작업 중인 디렉터리 (최상단)\n};\nconst extractFeedback = (filePath)=>{\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath).toString(); //json\n    const data = JSON.parse(fileData);\n    return data;\n};\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , text  } = req.body;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email,\n            text: text\n        };\n        const filePath = buildFeedbackPath();\n        const data = extractFeedback(filePath);\n        data.push(newFeedback);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"success\",\n            feedback: newFeedback\n        });\n    } else {\n        const filePath1 = buildFeedbackPath();\n        const data1 = extractFeedback(filePath1);\n        res.status(200).json({\n            feedback: data1\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmVlZGJhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDb0I7QUFDSTtBQUV4QixNQUFNRSxvQkFBb0IsSUFBTTtJQUM5QixPQUFPRCxnREFBUyxDQUFDRyxRQUFRQyxHQUFHLElBQUksUUFBUTtBQUN4QyxjQUFjO0FBQ2QscUNBQXFDO0FBQ3ZDO0FBRUEsTUFBTUMsa0JBQWtCLENBQUNDLFdBQXFCO0lBQzVDLE1BQU1DLFdBQVdSLHNEQUFlLENBQUNPLFVBQVVHLFFBQVEsSUFBSSxNQUFNO0lBQzdELE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0w7SUFDeEIsT0FBT0c7QUFDVDtBQUVBLE1BQU1HLFVBQVUsQ0FBQ0MsS0FBcUJDLE1BQXlCO0lBQzdELElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUVoQyxNQUFNQyxjQUFjO1lBQ2xCQyxJQUFJLElBQUlDLE9BQU9DLFdBQVc7WUFDMUJOO1lBQ0FDLE1BQU1BO1FBQ1I7UUFFQSxNQUFNWixXQUFXTDtRQUNqQixNQUFNUyxPQUFPTCxnQkFBZ0JDO1FBQzdCSSxLQUFLYyxJQUFJLENBQUNKO1FBRVZyQix1REFBZ0IsQ0FBQ08sVUFBVUssS0FBS2UsU0FBUyxDQUFDaEI7UUFDMUNLLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFXQyxVQUFVVjtRQUFZO0lBQ25FLE9BQU87UUFDTCxNQUFNZCxZQUFXTDtRQUNqQixNQUFNUyxRQUFPTCxnQkFBZ0JDO1FBQzdCUyxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFVBQVVwQjtRQUFLO0lBQ3hDLENBQUM7QUFDSDtBQUVBLGlFQUFlRyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLXJvdXRlLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLnRzP2M3ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGJ1aWxkRmVlZGJhY2tQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcImZlZWRiYWNrLmpzb25cIik7XG4gIC8vIO2VtOuLuSDtjIzsnbzsnZgg7KCI64yA6rK966GcXG4gIC8vcHJvY2Vzcy5jd3MoKSA6IO2YhOyerCDsnpHsl4Ug7KSR7J24IOuUlOugie2EsOumrCAo7LWc7IOB64uoKVxufTtcblxuY29uc3QgZXh0cmFjdEZlZWRiYWNrID0gKGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmlsZURhdGEgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpLnRvU3RyaW5nKCk7IC8vanNvblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgaGFuZGxlciA9IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCB0ZXh0IH0gPSByZXEuYm9keTtcblxuICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0ge1xuICAgICAgaWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIGVtYWlsLFxuICAgICAgdGV4dDogdGV4dCxcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuICAgIGRhdGEucHVzaChuZXdGZWVkYmFjayk7XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiwgZmVlZGJhY2s6IG5ld0ZlZWRiYWNrIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKTtcbiAgICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGZlZWRiYWNrOiBkYXRhIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImJ1aWxkRmVlZGJhY2tQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RmVlZGJhY2siLCJmaWxlUGF0aCIsImZpbGVEYXRhIiwicmVhZEZpbGVTeW5jIiwidG9TdHJpbmciLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwidGV4dCIsImJvZHkiLCJuZXdGZWVkYmFjayIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZlZWRiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/feedback.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/feedback.ts"));
module.exports = __webpack_exports__;

})();