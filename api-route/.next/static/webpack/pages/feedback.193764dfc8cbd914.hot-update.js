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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FeedbackPage = (props)=>{\n    const loadFeedbackHandler = (id)=>{\n        fetch(\"/api/\".concat(id)).then((response)=>response.json()).then((data)=>data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: props.feedbackItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    item.text,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>loadFeedbackHandler(item.id),\n                        children: \"Show Details\"\n                    }, void 0, false, {\n                        fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, item.id, true, {\n                fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/tpgus/Nextjs-Study/api-route/pages/feedback/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeedbackPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeedbackPage);\nvar _c;\n$RefreshReg$(_c, \"FeedbackPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mZWVkYmFjay9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQVMxQixNQUFNQyxlQUFlLENBQUNDLFFBQXFCO0lBQ3pDLE1BQU1DLHNCQUFzQixDQUFDQyxLQUFlO1FBQzFDQyxNQUFNLFFBQVcsT0FBSEQsS0FDWEUsSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTQTtJQUNwQjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRVIsTUFBTVMsYUFBYSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ3hCLDhEQUFDQzs7b0JBQ0VELEtBQUtFLElBQUk7b0JBQUU7a0NBQ1osOERBQUNDO3dCQUFPQyxTQUFTLElBQU1kLG9CQUFvQlUsS0FBS1QsRUFBRTtrQ0FBRzs7Ozs7OztlQUY5Q1MsS0FBS1QsRUFBRTs7Ozs7Ozs7OztBQVN4QjtLQW5CTUg7O0FBcUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrL2luZGV4LnRzeD83ODNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHR5cGUgeyBGZWVkYmFja0l0ZW0gfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGJ1aWxkRmVlZGJhY2tQYXRoLCBleHRyYWN0RmVlZGJhY2sgfSBmcm9tIFwiLi4vYXBpL2ZlZWRiYWNrXCI7XG5cbmludGVyZmFjZSBQcm9wc1R5cGUge1xuICBmZWVkYmFja0l0ZW1zOiBGZWVkYmFja0l0ZW1bXTtcbn1cblxuY29uc3QgRmVlZGJhY2tQYWdlID0gKHByb3BzOiBQcm9wc1R5cGUpID0+IHtcbiAgY29uc3QgbG9hZEZlZWRiYWNrSGFuZGxlciA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7cHJvcHMuZmVlZGJhY2tJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAge2l0ZW0udGV4dH17XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkRmVlZGJhY2tIYW5kbGVyKGl0ZW0uaWQpfT5cbiAgICAgICAgICAgIFNob3cgRGV0YWlsc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrUGFnZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpO1xuICBjb25zdCBkYXRhID0gZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGZlZWRiYWNrSXRlbXM6IGRhdGEgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGZWVkYmFja1BhZ2UiLCJwcm9wcyIsImxvYWRGZWVkYmFja0hhbmRsZXIiLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ1bCIsImZlZWRiYWNrSXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/feedback/index.tsx\n"));

/***/ })

});