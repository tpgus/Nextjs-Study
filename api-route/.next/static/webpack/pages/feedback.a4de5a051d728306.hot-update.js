"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/feedback",{

/***/ "./pages/feedback/index.tsx":
/*!**********************************!*\
  !*** ./pages/feedback/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FeedbackPage = (props)=>{\n    _s();\n    const [feedbackData, setFeedbackData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const loadFeedbackHandler = (id)=>{\n        fetch(\"/api/\".concat(id)).then((response)=>response.json()).then((data)=>setFeedbackData(data.feedback));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            feedbackData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: feedbackData.eamil\n            }, void 0, false, {\n                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: props.feedbackItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            item.text,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>loadFeedbackHandler(item.id),\n                                children: \"Show Details\"\n                            }, void 0, false, {\n                                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(FeedbackPage, \"BwOV5us4vG60hlJRAywhcZUWCo4=\");\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\nvar _c;\n$RefreshReg$(_c, \"FeedbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFTeEMsTUFBTUUsZUFBZSxDQUFDQyxRQUFxQjs7SUFDekMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBO0lBRWhELE1BQU1LLHNCQUFzQixDQUFDQyxLQUFlO1FBQzFDQyxNQUFNLFFBQVcsT0FBSEQsS0FDWEUsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTUCxnQkFBZ0JPLEtBQUtDLFFBQVE7SUFDakQ7SUFFQSxxQkFDRTs7WUFDR1QsOEJBQWdCLDhEQUFDVTswQkFBR1YsYUFBYVcsS0FBSzs7Ozs7OzBCQUN2Qyw4REFBQ0M7MEJBQ0ViLE1BQU1jLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUN4Qiw4REFBQ0M7OzRCQUNFRCxLQUFLRSxJQUFJOzRCQUFFOzBDQUNaLDhEQUFDQztnQ0FBT0MsU0FBUyxJQUFNakIsb0JBQW9CYSxLQUFLWixFQUFFOzBDQUFHOzs7Ozs7O3VCQUY5Q1ksS0FBS1osRUFBRTs7Ozs7Ozs7Ozs7O0FBVTFCO0dBeEJNTDtLQUFBQTs7QUEwQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZGJhY2svaW5kZXgudHN4Pzc4M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB0eXBlIHsgRmVlZGJhY2tJdGVtIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBidWlsZEZlZWRiYWNrUGF0aCwgZXh0cmFjdEZlZWRiYWNrIH0gZnJvbSBcIi4uL2FwaS9mZWVkYmFja1wiO1xuXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcbiAgZmVlZGJhY2tJdGVtczogRmVlZGJhY2tJdGVtW107XG59XG5cbmNvbnN0IEZlZWRiYWNrUGFnZSA9IChwcm9wczogUHJvcHNUeXBlKSA9PiB7XG4gIGNvbnN0IFtmZWVkYmFja0RhdGEsIHNldEZlZWRiYWNrRGF0YV0gPSB1c2VTdGF0ZTxGZWVkYmFja0l0ZW0+KCk7XG5cbiAgY29uc3QgbG9hZEZlZWRiYWNrSGFuZGxlciA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0RmVlZGJhY2tEYXRhKGRhdGEuZmVlZGJhY2spKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZmVlZGJhY2tEYXRhICYmIDxwPntmZWVkYmFja0RhdGEuZWFtaWx9PC9wPn1cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb3BzLmZlZWRiYWNrSXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICB7aXRlbS50ZXh0fXtcIiBcIn1cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZEZlZWRiYWNrSGFuZGxlcihpdGVtLmlkKX0+XG4gICAgICAgICAgICAgIFNob3cgRGV0YWlsc1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tQYWdlO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gKCkgPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKCk7XG4gIGNvbnN0IGRhdGEgPSBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZmVlZGJhY2tJdGVtczogZGF0YSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmVlZGJhY2tQYWdlIiwicHJvcHMiLCJmZWVkYmFja0RhdGEiLCJzZXRGZWVkYmFja0RhdGEiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVlZGJhY2siLCJwIiwiZWFtaWwiLCJ1bCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/feedback/index.tsx\n"));

/***/ })

});