webpackHotUpdate_N_E("pages/org",{

/***/ "./components/causes/cause-content.js":
/*!********************************************!*\
  !*** ./components/causes/cause-content.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/gallery/gallery-page */ \"./components/gallery/gallery-page.js\");\n/* harmony import */ var _components_videos_video_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/videos/video-card */ \"./components/videos/video-card.js\");\n/* harmony import */ var _components_testimonials_testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/testimonials/testimonials */ \"./components/testimonials/testimonials.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_org_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/org-data */ \"./data/org-data.js\");\n\n\nvar _jsxFileName = \"/Users/daniel/Documents/Projects/thesis/gofundpeace-website.nosync/components/causes/cause-content.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CauseContent = function CauseContent() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  var routerOrg = router.query.org;\n  var org = _data_org_data__WEBPACK_IMPORTED_MODULE_7__[\"orgs\"][routerOrg];\n\n  if (org === undefined) {\n    return null;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"cause-details blog-details  pt-120 pb-40\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n          md: 12,\n          lg: 8,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"cause-details__content\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"cause-card\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"cause-card__inner\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"cause-card__image\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: org.image,\n                    alt: \"\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 27,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: org.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this), org.about.map(function (paragraph, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: paragraph\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 17\n              }, _this);\n            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: org.heading\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this), org.need.map(function (paragraph, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: paragraph\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n          md: 12,\n          lg: 4,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"cause-details__sidebar\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_videos_video_card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              info: org.videoInfo\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_testimonials_testimonials__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              testimonials: org.testimonials\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gallery_gallery_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          images: org.images\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CauseContent, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c = CauseContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CauseContent);\n\nvar _c;\n\n$RefreshReg$(_c, \"CauseContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXVzZXMvY2F1c2UtY29udGVudC5qcz83ZjNmIl0sIm5hbWVzIjpbIkNhdXNlQ29udGVudCIsInJvdXRlciIsInVzZVJvdXRlciIsInJvdXRlck9yZyIsInF1ZXJ5Iiwib3JnIiwib3JncyIsInVuZGVmaW5lZCIsImltYWdlIiwidGl0bGUiLCJhYm91dCIsIm1hcCIsInBhcmFncmFwaCIsImluZGV4IiwiaGVhZGluZyIsIm5lZWQiLCJ2aWRlb0luZm8iLCJ0ZXN0aW1vbmlhbHMiLCJpbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEdBQS9CO0FBQ0EsTUFBTUEsR0FBRyxHQUFHQyxtREFBSSxDQUFDSCxTQUFELENBQWhCOztBQUVBLE1BQUlFLEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBQywwQ0FBbkI7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFBLDhCQUNFLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0UscUVBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUUsRUFBVDtBQUFhLFlBQUUsRUFBRSxDQUFqQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLG1CQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEseUNBQ0U7QUFBSyx1QkFBRyxFQUFFRixHQUFHLENBQUNHLEtBQWQ7QUFBcUIsdUJBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUU7QUFBQSx3QkFBS0gsR0FBRyxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsRUFTR0osR0FBRyxDQUFDSyxLQUFKLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxTQUFELEVBQVlDLEtBQVo7QUFBQSxrQ0FDYjtBQUFBLDBCQUFpQkQ7QUFBakIsaUJBQVFDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEYTtBQUFBLGFBQWQsQ0FUSCxlQVlFO0FBQUEsd0JBQUtSLEdBQUcsQ0FBQ1M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGLEVBYUdULEdBQUcsQ0FBQ1UsSUFBSixDQUFTSixHQUFULENBQWEsVUFBQ0MsU0FBRCxFQUFZQyxLQUFaO0FBQUEsa0NBQ1o7QUFBQSwwQkFBaUJEO0FBQWpCLGlCQUFRQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFiLENBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQW9CRSxxRUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBRSxFQUFUO0FBQWEsWUFBRSxFQUFFLENBQWpCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQUEsb0NBQ0UscUVBQUMscUVBQUQ7QUFBTyxrQkFBSSxFQUFFUixHQUFHLENBQUNXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyw2RUFBRDtBQUFjLDBCQUFZLEVBQUVYLEdBQUcsQ0FBQ1k7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTRCRSxxRUFBQyxtREFBRDtBQUFBLCtCQUNFLHFFQUFDLHdFQUFEO0FBQWEsZ0JBQU0sRUFBRVosR0FBRyxDQUFDYTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQ0QsQ0E3Q0Q7O0dBQU1sQixZO1VBQ1dFLHFEOzs7S0FEWEYsWTtBQStDU0EsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhdXNlcy9jYXVzZS1jb250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEdhbGxlcnlQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LXBhZ2UnO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWRlb3MvdmlkZW8tY2FyZCc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBvcmdzIH0gZnJvbSBcIi4uLy4uL2RhdGEvb3JnLWRhdGFcIlxyXG5cclxuY29uc3QgQ2F1c2VDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJvdXRlck9yZyA9IHJvdXRlci5xdWVyeS5vcmc7XHJcbiAgY29uc3Qgb3JnID0gb3Jnc1tyb3V0ZXJPcmddO1xyXG5cclxuICBpZiAob3JnID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjYXVzZS1kZXRhaWxzIGJsb2ctZGV0YWlscyAgcHQtMTIwIHBiLTQwJz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhdXNlLWRldGFpbHNfX2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXVzZS1jYXJkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXVzZS1jYXJkX19pbm5lcic+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXVzZS1jYXJkX19pbWFnZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e29yZy5pbWFnZX0gYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgzPntvcmcudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICB7b3JnLmFib3V0Lm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gPntwYXJhZ3JhcGh9PC9wPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxoMz57b3JnLmhlYWRpbmd9PC9oMz5cclxuICAgICAgICAgICAgICB7b3JnLm5lZWQubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fSA+e3BhcmFncmFwaH08L3A+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2F1c2UtZGV0YWlsc19fc2lkZWJhcic+XHJcbiAgICAgICAgICAgICAgPFZpZGVvIGluZm89e29yZy52aWRlb0luZm99IC8+XHJcbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFscyB0ZXN0aW1vbmlhbHM9e29yZy50ZXN0aW1vbmlhbHN9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPEdhbGxlcnlQYWdlIGltYWdlcz17b3JnLmltYWdlc30vPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F1c2VDb250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/causes/cause-content.js\n");

/***/ })

})