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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTES: function() { return /* binding */ ROUTES; },\n/* harmony export */   page_routes: function() { return /* binding */ page_routes; }\n/* harmony export */ });\n// for page navigation & to sort on leftbar\nconst ROUTES = [\n    {\n        title: \"XUSD EcoStable System\",\n        href: \"xusd-start\",\n        items: [\n            {\n                title: \"XUSD\",\n                href: \"/whatisxusd\"\n            },\n            {\n                title: \"Quick Start\",\n                href: \"/quickStart\"\n            },\n            {\n                title: \"PulseChain\",\n                href: \"/pulsechain\"\n            }\n        ]\n    },\n    {\n        title: \"Launch Stages\",\n        href: \"launch\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/launchOverview\"\n            }\n        ]\n    },\n    {\n        title: \"Dynamic Taxation\",\n        href: \"dynamicTax\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/taxoverview\"\n            },\n            {\n                title: \"Taxes\",\n                href: \"/taxes\"\n            },\n            {\n                title: \"Tax Classes\",\n                href: \"/classes\"\n            },\n            {\n                title: \"Assignment of Tax to Users\",\n                href: \"/assignment\"\n            },\n            {\n                title: \"Dev resources\",\n                href: \"/taxdev\"\n            }\n        ]\n    },\n    {\n        title: \"XUSD LitPass\",\n        href: \"creditreport\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/litoverview\"\n            },\n            {\n                title: \"Buy\",\n                href: \"/obtain\"\n            }\n        ]\n    },\n    {\n        title: \"Kings\",\n        href: \"kings\",\n        items: [\n            {\n                title: \"Are you worthy?\",\n                href: \"/startking\"\n            },\n            {\n                title: \"Seigniorage\",\n                href: \"/seigniorage\"\n            }\n        ]\n    }\n];\nconst page_routes = ROUTES.map((param)=>{\n    let { href, items } = param;\n    return items.map((link)=>{\n        return {\n            title: link.title,\n            href: href + link.href\n        };\n    });\n}).flat();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9yb3V0ZXMtY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJDO0FBQ3BDLE1BQU1BLFNBQVM7SUFFcEI7UUFDRUMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBUUMsTUFBTTtZQUFjO1lBQ3JDO2dCQUFFRCxPQUFPO2dCQUFlQyxNQUFNO1lBQWM7WUFDNUM7Z0JBQUVELE9BQU87Z0JBQWNDLE1BQU07WUFBYztTQUM1QztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFrQjtTQUU5QztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFlO1lBQzFDO2dCQUFFRCxPQUFPO2dCQUFTQyxNQUFNO1lBQVM7WUFDakM7Z0JBQUVELE9BQU87Z0JBQWVDLE1BQU07WUFBVztZQUN6QztnQkFBRUQsT0FBTztnQkFBOEJDLE1BQU07WUFBYztZQUUzRDtnQkFBRUQsT0FBTztnQkFBaUJDLE1BQU07WUFBVTtTQUMzQztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFlO1lBRTFDO2dCQUFFRCxPQUFPO2dCQUFPQyxNQUFNO1lBQVU7U0FFakM7SUFDSDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1lBQ0w7Z0JBQUVGLE9BQU87Z0JBQW1CQyxNQUFNO1lBQWE7WUFDL0M7Z0JBQUVELE9BQU87Z0JBQWVDLE1BQU07WUFBZTtTQUU5QztJQUNIO0NBRUQsQ0FBQztBQUVLLE1BQU1FLGNBQWNKLE9BQU9LLEdBQUcsQ0FBQztRQUFDLEVBQUVILElBQUksRUFBRUMsS0FBSyxFQUFFO0lBQ3BELE9BQU9BLE1BQU1FLEdBQUcsQ0FBQyxDQUFDQztRQUNoQixPQUFPO1lBQ0xMLE9BQU9LLEtBQUtMLEtBQUs7WUFDakJDLE1BQU1BLE9BQU9JLEtBQUtKLElBQUk7UUFDeEI7SUFDRjtBQUNGLEdBQUdLLElBQUksR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvcm91dGVzLWNvbmZpZy50cz83MTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZvciBwYWdlIG5hdmlnYXRpb24gJiB0byBzb3J0IG9uIGxlZnRiYXJcbmV4cG9ydCBjb25zdCBST1VURVMgPSBbXG5cbiAge1xuICAgIHRpdGxlOiBcIlhVU0QgRWNvU3RhYmxlIFN5c3RlbVwiLFxuICAgIGhyZWY6IFwieHVzZC1zdGFydFwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiBcIlhVU0RcIiwgaHJlZjogXCIvd2hhdGlzeHVzZFwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlF1aWNrIFN0YXJ0XCIsIGhyZWY6IFwiL3F1aWNrU3RhcnRcIiB9LFxuICAgICAgeyB0aXRsZTogXCJQdWxzZUNoYWluXCIsIGhyZWY6IFwiL3B1bHNlY2hhaW5cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXVuY2ggU3RhZ2VzXCIsXG4gICAgaHJlZjogXCJsYXVuY2hcIixcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogXCJPdmVydmlld1wiLCBocmVmOiBcIi9sYXVuY2hPdmVydmlld1wiIH0sXG5cbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRHluYW1pYyBUYXhhdGlvblwiLFxuICAgIGhyZWY6IFwiZHluYW1pY1RheFwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiBcIk92ZXJ2aWV3XCIsIGhyZWY6IFwiL3RheG92ZXJ2aWV3XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiVGF4ZXNcIiwgaHJlZjogXCIvdGF4ZXNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJUYXggQ2xhc3Nlc1wiLCBocmVmOiBcIi9jbGFzc2VzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiQXNzaWdubWVudCBvZiBUYXggdG8gVXNlcnNcIiwgaHJlZjogXCIvYXNzaWdubWVudFwiIH0sICAgXG4gXG4gICAgICB7IHRpdGxlOiBcIkRldiByZXNvdXJjZXNcIiwgaHJlZjogXCIvdGF4ZGV2XCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiWFVTRCBMaXRQYXNzXCIsXG4gICAgaHJlZjogXCJjcmVkaXRyZXBvcnRcIixcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogXCJPdmVydmlld1wiLCBocmVmOiBcIi9saXRvdmVydmlld1wiIH0sXG5cbiAgICAgIHsgdGl0bGU6IFwiQnV5XCIsIGhyZWY6IFwiL29idGFpblwiIH0sXG4gICAgICBcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiS2luZ3NcIixcbiAgICBocmVmOiBcImtpbmdzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiQXJlIHlvdSB3b3J0aHk/XCIsIGhyZWY6IFwiL3N0YXJ0a2luZ1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNlaWduaW9yYWdlXCIsIGhyZWY6IFwiL3NlaWduaW9yYWdlXCIgfSxcbiAgICAgIFxuICAgIF0sXG4gIH0sIFxuICBcbl07XG5cbmV4cG9ydCBjb25zdCBwYWdlX3JvdXRlcyA9IFJPVVRFUy5tYXAoKHsgaHJlZiwgaXRlbXMgfSkgPT4ge1xuICByZXR1cm4gaXRlbXMubWFwKChsaW5rKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBsaW5rLnRpdGxlLFxuICAgICAgaHJlZjogaHJlZiArIGxpbmsuaHJlZixcbiAgICB9O1xuICB9KTtcbn0pLmZsYXQoKTtcbiJdLCJuYW1lcyI6WyJST1VURVMiLCJ0aXRsZSIsImhyZWYiLCJpdGVtcyIsInBhZ2Vfcm91dGVzIiwibWFwIiwibGluayIsImZsYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/routes-config.ts\n"));

/***/ })

});