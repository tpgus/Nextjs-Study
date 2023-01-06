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
exports.id = "pages/feedback";
exports.ids = ["pages/feedback"];
exports.modules = {

/***/ "./pages/api/feedback.ts":
/*!*******************************!*\
  !*** ./pages/api/feedback.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildFeedbackPath\": () => (/* binding */ buildFeedbackPath),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"extractFeedback\": () => (/* binding */ extractFeedback)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst buildFeedbackPath = ()=>{\n    return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"feedback.json\");\n// 해당 파일의 절대경로\n//process.cws() : 현재 작업 중인 디렉터리 (최상단)\n};\nconst extractFeedback = (filePath)=>{\n    const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath).toString(); //json\n    const data = JSON.parse(fileData);\n    return data;\n};\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { email , text  } = req.body;\n        const newFeedback = {\n            id: new Date().toISOString(),\n            email,\n            text: text\n        };\n        const filePath = buildFeedbackPath();\n        const data = extractFeedback(filePath);\n        data.push(newFeedback);\n        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(data));\n        res.status(201).json({\n            message: \"success\",\n            feedback: newFeedback\n        });\n    } else {\n        const filePath1 = buildFeedbackPath();\n        const data1 = extractFeedback(filePath1);\n        res.status(200).json({\n            feedback: data1\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZmVlZGJhY2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNvQjtBQUNJO0FBRWpCLE1BQU1FLG9CQUFvQixJQUFNO0lBQ3JDLE9BQU9ELGdEQUFTLENBQUNHLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0FBQ3hDLGNBQWM7QUFDZCxxQ0FBcUM7QUFDdkMsRUFBRTtBQUVLLE1BQU1DLGtCQUFrQixDQUFDQyxXQUFxQjtJQUNuRCxNQUFNQyxXQUFXUixzREFBZSxDQUFDTyxVQUFVRyxRQUFRLElBQUksTUFBTTtJQUM3RCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMO0lBQ3hCLE9BQU9HO0FBQ1QsRUFBRTtBQUVGLE1BQU1HLFVBQVUsQ0FBQ0MsS0FBcUJDLE1BQXlCO0lBQzdELElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxLQUFJLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUVoQyxNQUFNQyxjQUFjO1lBQ2xCQyxJQUFJLElBQUlDLE9BQU9DLFdBQVc7WUFDMUJOO1lBQ0FDLE1BQU1BO1FBQ1I7UUFFQSxNQUFNWixXQUFXTDtRQUNqQixNQUFNUyxPQUFPTCxnQkFBZ0JDO1FBQzdCSSxLQUFLYyxJQUFJLENBQUNKO1FBRVZyQix1REFBZ0IsQ0FBQ08sVUFBVUssS0FBS2UsU0FBUyxDQUFDaEI7UUFDMUNLLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFXQyxVQUFVVjtRQUFZO0lBQ25FLE9BQU87UUFDTCxNQUFNZCxZQUFXTDtRQUNqQixNQUFNUyxRQUFPTCxnQkFBZ0JDO1FBQzdCUyxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFVBQVVwQjtRQUFLO0lBQ3hDLENBQUM7QUFDSDtBQUVBLGlFQUFlRyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLXJvdXRlLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLnRzP2M3ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZEZlZWRiYWNrUGF0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIiwgXCJmZWVkYmFjay5qc29uXCIpO1xuICAvLyDtlbTri7kg7YyM7J287J2YIOygiOuMgOqyveuhnFxuICAvL3Byb2Nlc3MuY3dzKCkgOiDtmITsnqwg7J6R7JeFIOykkeyduCDrlJTroInthLDrpqwgKOy1nOyDgeuLqClcbn07XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0RmVlZGJhY2sgPSAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKTsgLy9qc29uXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBoYW5kbGVyID0gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIHRleHQgfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgbmV3RmVlZGJhY2sgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZW1haWwsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgIH07XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XG4gICAgY29uc3QgZGF0YSA9IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aCk7XG4gICAgZGF0YS5wdXNoKG5ld0ZlZWRiYWNrKTtcblxuICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwic3VjY2Vzc1wiLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICAgIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IGRhdGEgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiYnVpbGRGZWVkYmFja1BhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImV4dHJhY3RGZWVkYmFjayIsImZpbGVQYXRoIiwiZmlsZURhdGEiLCJyZWFkRmlsZVN5bmMiLCJ0b1N0cmluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJ0ZXh0IiwiYm9keSIsIm5ld0ZlZWRiYWNrIiwiaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/feedback.ts\n");

/***/ }),

/***/ "./pages/feedback/index.tsx":
/*!**********************************!*\
  !*** ./pages/feedback/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/feedback */ \"./pages/api/feedback.ts\");\n\n\n\nconst FeedbackPage = (props)=>{\n    const [feedbackData, setFeedbackData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const loadFeedbackHandler = (id)=>{\n        fetch(`/api/${id}`).then((response)=>response.json()).then((data)=>setFeedbackData(data.feedback));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            feedbackData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: feedbackData.email\n            }, void 0, false, {\n                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.feedbackItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.text,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>loadFeedbackHandler(item.id),\n                                children: \"Show Details\"\n                            }, void 0, false, {\n                                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedbackPage);\nconst getStaticProps = ()=>{\n    const filePath = (0,_api_feedback__WEBPACK_IMPORTED_MODULE_2__.buildFeedbackPath)();\n    const data = (0,_api_feedback__WEBPACK_IMPORTED_MODULE_2__.extractFeedback)(filePath);\n    return {\n        props: {\n            feedbackItems: data\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRzZCO0FBTXJFLE1BQU1JLGVBQWUsQ0FBQ0MsUUFBcUI7SUFDekMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBO0lBRWhELE1BQU1PLHNCQUFzQixDQUFDQyxLQUFlO1FBQzFDQyxNQUFNLENBQUMsS0FBSyxFQUFFRCxHQUFHLENBQUMsRUFDZkUsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTUCxnQkFBZ0JPLEtBQUtDLFFBQVE7SUFDakQ7SUFFQSxxQkFDRTs7WUFDR1QsOEJBQWdCLDhEQUFDVTswQkFBR1YsYUFBYVcsS0FBSzs7Ozs7OzBCQUN2Qyw4REFBQ0M7MEJBQ0ViLE1BQU1jLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUN4Qiw4REFBQ0M7OzRCQUNFRCxLQUFLRSxJQUFJOzRCQUFFOzBDQUNaLDhEQUFDQztnQ0FBT0MsU0FBUyxJQUFNakIsb0JBQW9CYSxLQUFLWixFQUFFOzBDQUFHOzs7Ozs7O3VCQUY5Q1ksS0FBS1osRUFBRTs7Ozs7Ozs7Ozs7O0FBVTFCO0FBRUEsaUVBQWVMLFlBQVlBLEVBQUM7QUFFckIsTUFBTXNCLGlCQUFpQyxJQUFNO0lBQ2xELE1BQU1DLFdBQVd6QixnRUFBaUJBO0lBQ2xDLE1BQU1ZLE9BQU9YLDhEQUFlQSxDQUFDd0I7SUFFN0IsT0FBTztRQUNMdEIsT0FBTztZQUFFYyxlQUFlTDtRQUFLO0lBQy9CO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaS1yb3V0ZS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LnRzeD83ODNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEZlZWRiYWNrSXRlbSB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gXCIuLi9hcGkvZmVlZGJhY2tcIjtcblxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XG4gIGZlZWRiYWNrSXRlbXM6IEZlZWRiYWNrSXRlbVtdO1xufVxuXG5jb25zdCBGZWVkYmFja1BhZ2UgPSAocHJvcHM6IFByb3BzVHlwZSkgPT4ge1xuICBjb25zdCBbZmVlZGJhY2tEYXRhLCBzZXRGZWVkYmFja0RhdGFdID0gdXNlU3RhdGU8RmVlZGJhY2tJdGVtPigpO1xuXG4gIGNvbnN0IGxvYWRGZWVkYmFja0hhbmRsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGZldGNoKGAvYXBpLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEZlZWRiYWNrRGF0YShkYXRhLmZlZWRiYWNrKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2ZlZWRiYWNrRGF0YSAmJiA8cD57ZmVlZGJhY2tEYXRhLmVtYWlsfTwvcD59XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9wcy5mZWVkYmFja0l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAge2l0ZW0udGV4dH17XCIgXCJ9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRGZWVkYmFja0hhbmRsZXIoaXRlbS5pZCl9PlxuICAgICAgICAgICAgICBTaG93IERldGFpbHNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrUGFnZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGZlZWRiYWNrSXRlbXM6IGRhdGEgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImJ1aWxkRmVlZGJhY2tQYXRoIiwiZXh0cmFjdEZlZWRiYWNrIiwiRmVlZGJhY2tQYWdlIiwicHJvcHMiLCJmZWVkYmFja0RhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJwIiwiZW1haWwiLCJ1bCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsImdldFN0YXRpY1Byb3BzIiwiZmlsZVBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/feedback/index.tsx\n");

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

/***/ }),

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/feedback/index.tsx"));
module.exports = __webpack_exports__;

})();