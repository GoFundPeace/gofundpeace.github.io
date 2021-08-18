webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header */ \"./components/header/header.js\");\n/* harmony import */ var _components_header_sticky_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/sticky-header */ \"./components/header/sticky-header.js\");\n/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page-header */ \"./components/page-header.js\");\n/* harmony import */ var _components_blog_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/blog-details */ \"./components/blog-details/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _data_blog_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/blog-data */ \"./data/blog-data.js\");\n\n\nvar _jsxFileName = \"/Users/daniel/Documents/Projects/thesis/gofundpeace-website.nosync/pages/blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var routerBlog = router.query.blog;\n  var blog = _data_blog_data__WEBPACK_IMPORTED_MODULE_9__[\"blogs\"][routerBlog];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      header = _useState[0],\n      setHeader = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      title = _useState2[0],\n      setTitle = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      crumb = _useState3[0],\n      setCrumb = _useState3[1];\n\n  if (blog !== undefined) {\n    setHeader(blog.header);\n    setTitle(blog.title);\n    setCrumb(blog.crumb);\n  }\n\n  var info = {\n    'image': header,\n    'title': title,\n    'crumb': crumb\n  };\n  var pageTitle = \"GoFundPeace | \" + title;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    pageTitle: pageTitle,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_header_sticky_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_page_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      info: info\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_blog_details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n}; // This tricks Next.js into not optimizing this page and removing the query on reload\n\n\n_s(Blog, \"m5/OW3PczOQQXG0DWwCWfzBOftk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"]];\n});\n\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sIm5hbWVzIjpbIkJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXJCbG9nIiwicXVlcnkiLCJibG9nIiwiYmxvZ3MiLCJ1c2VTdGF0ZSIsImhlYWRlciIsInNldEhlYWRlciIsInRpdGxlIiwic2V0VGl0bGUiLCJjcnVtYiIsInNldENydW1iIiwidW5kZWZpbmVkIiwiaW5mbyIsInBhZ2VUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLElBQWhDO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxxREFBSyxDQUFDSCxVQUFELENBQWxCOztBQUhpQixrQkFLV0ksc0RBQVEsQ0FBQyxFQUFELENBTG5CO0FBQUEsTUFLVkMsTUFMVTtBQUFBLE1BS0ZDLFNBTEU7O0FBQUEsbUJBTVNGLHNEQUFRLENBQUMsRUFBRCxDQU5qQjtBQUFBLE1BTVZHLEtBTlU7QUFBQSxNQU1IQyxRQU5HOztBQUFBLG1CQU9TSixzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU9WSyxLQVBVO0FBQUEsTUFPSEMsUUFQRzs7QUFTakIsTUFBSVIsSUFBSSxLQUFLUyxTQUFiLEVBQXdCO0FBQ3RCTCxhQUFTLENBQUNKLElBQUksQ0FBQ0csTUFBTixDQUFUO0FBQ0FHLFlBQVEsQ0FBQ04sSUFBSSxDQUFDSyxLQUFOLENBQVI7QUFDQUcsWUFBUSxDQUFDUixJQUFJLENBQUNPLEtBQU4sQ0FBUjtBQUNEOztBQUVELE1BQU1HLElBQUksR0FBRztBQUNYLGFBQVNQLE1BREU7QUFFWCxhQUFTRSxLQUZFO0FBR1gsYUFBU0U7QUFIRSxHQUFiO0FBTUEsTUFBTUksU0FBUyxHQUFHLG1CQUFtQk4sS0FBckM7QUFDQSxzQkFDRSxxRUFBQywwREFBRDtBQUFRLGFBQVMsRUFBRU0sU0FBbkI7QUFBQSw0QkFDRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQywrREFBRDtBQUFZLFVBQUksRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0EvQkQsQyxDQWlDQTs7O0dBakNNZixJO1VBQ1dFLHFEOzs7S0FEWEYsSTs7QUF3Q1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIvc3RpY2t5LWhlYWRlclwiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9wYWdlLWhlYWRlclwiO1xyXG5pbXBvcnQgQmxvZ0RldGFpbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmxvZy1kZXRhaWxzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7YmxvZ3N9IGZyb20gXCIuLi9kYXRhL2Jsb2ctZGF0YVwiO1xyXG5cclxuY29uc3QgQmxvZyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByb3V0ZXJCbG9nID0gcm91dGVyLnF1ZXJ5LmJsb2c7XHJcbiAgY29uc3QgYmxvZyA9IGJsb2dzW3JvdXRlckJsb2ddXHJcblxyXG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbY3J1bWIsIHNldENydW1iXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIGlmIChibG9nICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHNldEhlYWRlcihibG9nLmhlYWRlcilcclxuICAgIHNldFRpdGxlKGJsb2cudGl0bGUpXHJcbiAgICBzZXRDcnVtYihibG9nLmNydW1iKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5mbyA9IHtcclxuICAgICdpbWFnZSc6IGhlYWRlcixcclxuICAgICd0aXRsZSc6IHRpdGxlLFxyXG4gICAgJ2NydW1iJzogY3J1bWJcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IFwiR29GdW5kUGVhY2UgfCBcIiArIHRpdGxlXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtwYWdlVGl0bGV9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxTdGlja3lIZWFkZXIgLz5cclxuICAgICAgPFBhZ2VIZWFkZXIgaW5mbz17aW5mb30gLz5cclxuICAgICAgPEJsb2dEZXRhaWxzIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBUaGlzIHRyaWNrcyBOZXh0LmpzIGludG8gbm90IG9wdGltaXppbmcgdGhpcyBwYWdlIGFuZCByZW1vdmluZyB0aGUgcXVlcnkgb24gcmVsb2FkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sIFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})