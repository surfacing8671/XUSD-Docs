"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/routes-config.ts":
/*!******************************!*\
  !*** ./lib/routes-config.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTES: function() { return /* binding */ ROUTES; },\n/* harmony export */   page_routes: function() { return /* binding */ page_routes; }\n/* harmony export */ });\n// for page navigation & to sort on leftbar\nconst ROUTES = [\n    {\n        title: \"XUSD EcoStable System\",\n        href: \"xusd-start\",\n        items: [\n            {\n                title: \"XUSD\",\n                href: \"/whatisxusd\"\n            },\n            {\n                title: \"Quick Start\",\n                href: \"/quickStart\"\n            }\n        ]\n    },\n    {\n        title: \"Launch Stages\",\n        href: \"launch\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/launchOverview\"\n            },\n            {\n                title: \"Genesis\",\n                href: \"/genesis\"\n            },\n            {\n                title: \"Bootstrapping\",\n                href: \"/bootstrapping\"\n            },\n            {\n                title: \"Operational\",\n                href: \"/operational\"\n            }\n        ]\n    },\n    {\n        title: \"Dynamic Taxation\",\n        href: \"dynamicTax\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/taxoverview\"\n            },\n            {\n                title: \"Taxes\",\n                href: \"/taxes\"\n            },\n            {\n                title: \"Tax Classes\",\n                href: \"/classes\"\n            },\n            {\n                title: \"Assignment of Tax to Users\",\n                href: \"/assignment\"\n            },\n            {\n                title: \"Dynamic Tax Modulation\",\n                href: \"/modulation\"\n            },\n            {\n                title: \"Community Accountability Governance\",\n                href: \"/cag\"\n            },\n            {\n                title: \"Dev resources\",\n                href: \"/taxdev\"\n            }\n        ]\n    },\n    {\n        title: \"XUSD CreditReport\",\n        href: \"creditreport\",\n        items: [\n            {\n                title: \"Credit Report\",\n                href: \"/creditreport\"\n            },\n            {\n                title: \"Utility\",\n                href: \"/utility\"\n            },\n            {\n                title: \"How to Obtain\",\n                href: \"/obtain\"\n            }\n        ]\n    },\n    {\n        title: \"Kings\",\n        href: \"kings\",\n        items: [\n            {\n                title: \"Are you worthy?\",\n                href: \"/startking\"\n            },\n            {\n                title: \"Seigniorage\",\n                href: \"/seigniorage\"\n            }\n        ]\n    }\n];\nconst page_routes = ROUTES.map((param)=>{\n    let { href, items } = param;\n    return items.map((link)=>{\n        return {\n            title: link.title,\n            href: href + link.href\n        };\n    });\n}).flat();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9yb3V0ZXMtY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJDO0FBQ3BDLE1BQU1BLFNBQVM7SUFFcEI7UUFDRUMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBUUMsTUFBTTtZQUFjO1lBQ3JDO2dCQUFFRCxPQUFPO2dCQUFlQyxNQUFNO1lBQWM7U0FDN0M7SUFDSDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1lBQ0w7Z0JBQUVGLE9BQU87Z0JBQVlDLE1BQU07WUFBa0I7WUFDN0M7Z0JBQUVELE9BQU87Z0JBQVdDLE1BQU07WUFBVztZQUNyQztnQkFBRUQsT0FBTztnQkFBaUJDLE1BQU07WUFBaUI7WUFDakQ7Z0JBQUVELE9BQU87Z0JBQWVDLE1BQU07WUFBZTtTQUM5QztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFlO1lBQzFDO2dCQUFFRCxPQUFPO2dCQUFTQyxNQUFNO1lBQVM7WUFDakM7Z0JBQUVELE9BQU87Z0JBQWVDLE1BQU07WUFBVztZQUN6QztnQkFBRUQsT0FBTztnQkFBOEJDLE1BQU07WUFBYztZQUMzRDtnQkFBRUQsT0FBTztnQkFBMEJDLE1BQU07WUFBYztZQUN2RDtnQkFBRUQsT0FBTztnQkFBdUNDLE1BQU07WUFBTztZQUM3RDtnQkFBRUQsT0FBTztnQkFBaUJDLE1BQU07WUFBVTtTQUMzQztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBaUJDLE1BQU07WUFBZ0I7WUFDaEQ7Z0JBQUVELE9BQU87Z0JBQVdDLE1BQU07WUFBVztZQUNyQztnQkFBRUQsT0FBTztnQkFBaUJDLE1BQU07WUFBVTtTQUUzQztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBbUJDLE1BQU07WUFBYTtZQUMvQztnQkFBRUQsT0FBTztnQkFBZUMsTUFBTTtZQUFlO1NBRTlDO0lBQ0g7Q0FFRCxDQUFDO0FBRUssTUFBTUUsY0FBY0osT0FBT0ssR0FBRyxDQUFDO1FBQUMsRUFBRUgsSUFBSSxFQUFFQyxLQUFLLEVBQUU7SUFDcEQsT0FBT0EsTUFBTUUsR0FBRyxDQUFDLENBQUNDO1FBQ2hCLE9BQU87WUFDTEwsT0FBT0ssS0FBS0wsS0FBSztZQUNqQkMsTUFBTUEsT0FBT0ksS0FBS0osSUFBSTtRQUN4QjtJQUNGO0FBQ0YsR0FBR0ssSUFBSSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9yb3V0ZXMtY29uZmlnLnRzPzcxNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZm9yIHBhZ2UgbmF2aWdhdGlvbiAmIHRvIHNvcnQgb24gbGVmdGJhclxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IFtcblxuICB7XG4gICAgdGl0bGU6IFwiWFVTRCBFY29TdGFibGUgU3lzdGVtXCIsXG4gICAgaHJlZjogXCJ4dXNkLXN0YXJ0XCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiWFVTRFwiLCBocmVmOiBcIi93aGF0aXN4dXNkXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiUXVpY2sgU3RhcnRcIiwgaHJlZjogXCIvcXVpY2tTdGFydFwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxhdW5jaCBTdGFnZXNcIixcbiAgICBocmVmOiBcImxhdW5jaFwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiBcIk92ZXJ2aWV3XCIsIGhyZWY6IFwiL2xhdW5jaE92ZXJ2aWV3XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiR2VuZXNpc1wiLCBocmVmOiBcIi9nZW5lc2lzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiQm9vdHN0cmFwcGluZ1wiLCBocmVmOiBcIi9ib290c3RyYXBwaW5nXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiT3BlcmF0aW9uYWxcIiwgaHJlZjogXCIvb3BlcmF0aW9uYWxcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJEeW5hbWljIFRheGF0aW9uXCIsXG4gICAgaHJlZjogXCJkeW5hbWljVGF4XCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiT3ZlcnZpZXdcIiwgaHJlZjogXCIvdGF4b3ZlcnZpZXdcIiB9LFxuICAgICAgeyB0aXRsZTogXCJUYXhlc1wiLCBocmVmOiBcIi90YXhlc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlRheCBDbGFzc2VzXCIsIGhyZWY6IFwiL2NsYXNzZXNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJBc3NpZ25tZW50IG9mIFRheCB0byBVc2Vyc1wiLCBocmVmOiBcIi9hc3NpZ25tZW50XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiRHluYW1pYyBUYXggTW9kdWxhdGlvblwiLCBocmVmOiBcIi9tb2R1bGF0aW9uXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiQ29tbXVuaXR5IEFjY291bnRhYmlsaXR5IEdvdmVybmFuY2VcIiwgaHJlZjogXCIvY2FnXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiRGV2IHJlc291cmNlc1wiLCBocmVmOiBcIi90YXhkZXZcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJYVVNEIENyZWRpdFJlcG9ydFwiLFxuICAgIGhyZWY6IFwiY3JlZGl0cmVwb3J0XCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiQ3JlZGl0IFJlcG9ydFwiLCBocmVmOiBcIi9jcmVkaXRyZXBvcnRcIiB9LFxuICAgICAgeyB0aXRsZTogXCJVdGlsaXR5XCIsIGhyZWY6IFwiL3V0aWxpdHlcIiB9LFxuICAgICAgeyB0aXRsZTogXCJIb3cgdG8gT2J0YWluXCIsIGhyZWY6IFwiL29idGFpblwiIH0sXG4gICAgICBcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiS2luZ3NcIixcbiAgICBocmVmOiBcImtpbmdzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiQXJlIHlvdSB3b3J0aHk/XCIsIGhyZWY6IFwiL3N0YXJ0a2luZ1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNlaWduaW9yYWdlXCIsIGhyZWY6IFwiL3NlaWduaW9yYWdlXCIgfSxcbiAgICAgIFxuICAgIF0sXG4gIH0sIFxuICBcbl07XG5cbmV4cG9ydCBjb25zdCBwYWdlX3JvdXRlcyA9IFJPVVRFUy5tYXAoKHsgaHJlZiwgaXRlbXMgfSkgPT4ge1xuICByZXR1cm4gaXRlbXMubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBsaW5rLnRpdGxlLFxuICAgICAgaHJlZjogaHJlZiArIGxpbmsuaHJlZixcbiAgICB9O1xuICB9KTtcbn0pLmZsYXQoKTtcbiJdLCJuYW1lcyI6WyJST1VURVMiLCJ0aXRsZSIsImhyZWYiLCJpdGVtcyIsInBhZ2Vfcm91dGVzIiwibWFwIiwibGluayIsImZsYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/routes-config.ts\n"));

/***/ })

});