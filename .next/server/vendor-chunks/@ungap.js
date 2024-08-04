"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ungap";
exports.ids = ["vendor-chunks/@ungap"];
exports.modules = {

/***/ "(rsc)/./node_modules/@ungap/structured-clone/esm/deserialize.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/deserialize.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deserialize: () => (/* binding */ deserialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"(rsc)/./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst env = typeof self === 'object' ? self : globalThis;\n\nconst deserializer = ($, _) => {\n  const as = (out, index) => {\n    $.set(index, out);\n    return out;\n  };\n\n  const unpair = index => {\n    if ($.has(index))\n      return $.get(index);\n\n    const [type, value] = _[index];\n    switch (type) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE:\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.VOID:\n        return as(value, index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        const arr = as([], index);\n        for (const index of value)\n          arr.push(unpair(index));\n        return arr;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        const object = as({}, index);\n        for (const [key, index] of value)\n          object[unpair(key)] = unpair(index);\n        return object;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as(new Date(value), index);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as(new RegExp(source, flags), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const map = as(new Map, index);\n        for (const [key, index] of value)\n          map.set(unpair(key), unpair(index));\n        return map;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const set = as(new Set, index);\n        for (const index of value)\n          set.add(unpair(index));\n        return set;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR: {\n        const {name, message} = value;\n        return as(new env[name](message), index);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT:\n        return as(BigInt(value), index);\n      case 'BigInt':\n        return as(Object(BigInt(value)), index);\n    }\n    return as(new env[type](value), index);\n  };\n\n  return unpair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns a deserialized value from a serialized array of Records.\n * @param {Record[]} serialized a previously serialized value.\n * @returns {any}\n */\nconst deserialize = serialized => deserializer(new Map, serialized)(0);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL2Rlc2VyaWFsaXplLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS29COztBQUVwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxnREFBUztBQUNwQixXQUFXLDJDQUFJO0FBQ2Y7QUFDQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZDQUFNO0FBQ2pCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkNBQUk7QUFDZjtBQUNBLFdBQVcsNkNBQU07QUFDakIsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLDBDQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0Q0FBSztBQUNoQixlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBLFdBQVcsNkNBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWE7QUFDYjtBQUNPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9lc20vZGVzZXJpYWxpemUuanM/NzYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBWT0lELCBQUklNSVRJVkUsXG4gIEFSUkFZLCBPQkpFQ1QsXG4gIERBVEUsIFJFR0VYUCwgTUFQLCBTRVQsXG4gIEVSUk9SLCBCSUdJTlRcbn0gZnJvbSAnLi90eXBlcy5qcyc7XG5cbmNvbnN0IGVudiA9IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOiBnbG9iYWxUaGlzO1xuXG5jb25zdCBkZXNlcmlhbGl6ZXIgPSAoJCwgXykgPT4ge1xuICBjb25zdCBhcyA9IChvdXQsIGluZGV4KSA9PiB7XG4gICAgJC5zZXQoaW5kZXgsIG91dCk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICBjb25zdCB1bnBhaXIgPSBpbmRleCA9PiB7XG4gICAgaWYgKCQuaGFzKGluZGV4KSlcbiAgICAgIHJldHVybiAkLmdldChpbmRleCk7XG5cbiAgICBjb25zdCBbdHlwZSwgdmFsdWVdID0gX1tpbmRleF07XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFBSSU1JVElWRTpcbiAgICAgIGNhc2UgVk9JRDpcbiAgICAgICAgcmV0dXJuIGFzKHZhbHVlLCBpbmRleCk7XG4gICAgICBjYXNlIEFSUkFZOiB7XG4gICAgICAgIGNvbnN0IGFyciA9IGFzKFtdLCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgdmFsdWUpXG4gICAgICAgICAgYXJyLnB1c2godW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9XG4gICAgICBjYXNlIE9CSkVDVDoge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBhcyh7fSwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIGluZGV4XSBvZiB2YWx1ZSlcbiAgICAgICAgICBvYmplY3RbdW5wYWlyKGtleSldID0gdW5wYWlyKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgIH1cbiAgICAgIGNhc2UgREFURTpcbiAgICAgICAgcmV0dXJuIGFzKG5ldyBEYXRlKHZhbHVlKSwgaW5kZXgpO1xuICAgICAgY2FzZSBSRUdFWFA6IHtcbiAgICAgICAgY29uc3Qge3NvdXJjZSwgZmxhZ3N9ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBhcyhuZXcgUmVnRXhwKHNvdXJjZSwgZmxhZ3MpLCBpbmRleCk7XG4gICAgICB9XG4gICAgICBjYXNlIE1BUDoge1xuICAgICAgICBjb25zdCBtYXAgPSBhcyhuZXcgTWFwLCBpbmRleCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgaW5kZXhdIG9mIHZhbHVlKVxuICAgICAgICAgIG1hcC5zZXQodW5wYWlyKGtleSksIHVucGFpcihpbmRleCkpO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfVxuICAgICAgY2FzZSBTRVQ6IHtcbiAgICAgICAgY29uc3Qgc2V0ID0gYXMobmV3IFNldCwgaW5kZXgpO1xuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHZhbHVlKVxuICAgICAgICAgIHNldC5hZGQodW5wYWlyKGluZGV4KSk7XG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgICB9XG4gICAgICBjYXNlIEVSUk9SOiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBtZXNzYWdlfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gYXMobmV3IGVudltuYW1lXShtZXNzYWdlKSwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgY2FzZSBCSUdJTlQ6XG4gICAgICAgIHJldHVybiBhcyhCaWdJbnQodmFsdWUpLCBpbmRleCk7XG4gICAgICBjYXNlICdCaWdJbnQnOlxuICAgICAgICByZXR1cm4gYXMoT2JqZWN0KEJpZ0ludCh2YWx1ZSkpLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBhcyhuZXcgZW52W3R5cGVdKHZhbHVlKSwgaW5kZXgpO1xuICB9O1xuXG4gIHJldHVybiB1bnBhaXI7XG59O1xuXG4vKipcbiAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcsYW55Pn0gUmVjb3JkIGEgdHlwZSByZXByZXNlbnRhdGlvblxuICovXG5cbi8qKlxuICogUmV0dXJucyBhIGRlc2VyaWFsaXplZCB2YWx1ZSBmcm9tIGEgc2VyaWFsaXplZCBhcnJheSBvZiBSZWNvcmRzLlxuICogQHBhcmFtIHtSZWNvcmRbXX0gc2VyaWFsaXplZCBhIHByZXZpb3VzbHkgc2VyaWFsaXplZCB2YWx1ZS5cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGl6ZSA9IHNlcmlhbGl6ZWQgPT4gZGVzZXJpYWxpemVyKG5ldyBNYXAsIHNlcmlhbGl6ZWQpKDApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@ungap/structured-clone/esm/deserialize.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@ungap/structured-clone/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deserialize: () => (/* reexport safe */ _deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize),\n/* harmony export */   serialize: () => (/* reexport safe */ _serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)\n/* harmony export */ });\n/* harmony import */ var _deserialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserialize.js */ \"(rsc)/./node_modules/@ungap/structured-clone/esm/deserialize.js\");\n/* harmony import */ var _serialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize.js */ \"(rsc)/./node_modules/@ungap/structured-clone/esm/serialize.js\");\n\n\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} any a serializable value.\n * @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with\n * a transfer option (ignored when polyfilled) and/or non standard fields that\n * fallback to the polyfill if present.\n * @returns {Record[]}\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof structuredClone === \"function\" ?\n  /* c8 ignore start */\n  (any, options) => (\n    options && ('json' in options || 'lossy' in options) ?\n      (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)) : structuredClone(any)\n  ) :\n  (any, options) => (0,_deserialize_js__WEBPACK_IMPORTED_MODULE_0__.deserialize)((0,_serialize_js__WEBPACK_IMPORTED_MODULE_1__.serialize)(any, options)));\n  /* c8 ignore stop */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0o7O0FBRXpDO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZLGtEQUFrRCxHQUFHO0FBQ2pFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVcsQ0FBQyx3REFBUztBQUMzQjtBQUNBLG9CQUFvQiw0REFBVyxDQUFDLHdEQUFTLGVBQWUsRUFBQztBQUN6RDs7QUFFZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL0B1bmdhcC9zdHJ1Y3R1cmVkLWNsb25lL2VzbS9pbmRleC5qcz8xZDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVzZXJpYWxpemV9IGZyb20gJy4vZGVzZXJpYWxpemUuanMnO1xuaW1wb3J0IHtzZXJpYWxpemV9IGZyb20gJy4vc2VyaWFsaXplLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nLGFueT59IFJlY29yZCBhIHR5cGUgcmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2VyaWFsaXplZCBSZWNvcmRzLlxuICogQHBhcmFtIHthbnl9IGFueSBhIHNlcmlhbGl6YWJsZSB2YWx1ZS5cbiAqIEBwYXJhbSB7e3RyYW5zZmVyPzogYW55W10sIGpzb24/OiBib29sZWFuLCBsb3NzeT86IGJvb2xlYW59P30gb3B0aW9ucyBhbiBvYmplY3Qgd2l0aFxuICogYSB0cmFuc2ZlciBvcHRpb24gKGlnbm9yZWQgd2hlbiBwb2x5ZmlsbGVkKSBhbmQvb3Igbm9uIHN0YW5kYXJkIGZpZWxkcyB0aGF0XG4gKiBmYWxsYmFjayB0byB0aGUgcG9seWZpbGwgaWYgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtSZWNvcmRbXX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgdHlwZW9mIHN0cnVjdHVyZWRDbG9uZSA9PT0gXCJmdW5jdGlvblwiID9cbiAgLyogYzggaWdub3JlIHN0YXJ0ICovXG4gIChhbnksIG9wdGlvbnMpID0+IChcbiAgICBvcHRpb25zICYmICgnanNvbicgaW4gb3B0aW9ucyB8fCAnbG9zc3knIGluIG9wdGlvbnMpID9cbiAgICAgIGRlc2VyaWFsaXplKHNlcmlhbGl6ZShhbnksIG9wdGlvbnMpKSA6IHN0cnVjdHVyZWRDbG9uZShhbnkpXG4gICkgOlxuICAoYW55LCBvcHRpb25zKSA9PiBkZXNlcmlhbGl6ZShzZXJpYWxpemUoYW55LCBvcHRpb25zKSk7XG4gIC8qIGM4IGlnbm9yZSBzdG9wICovXG5cbmV4cG9ydCB7ZGVzZXJpYWxpemUsIHNlcmlhbGl6ZX07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@ungap/structured-clone/esm/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@ungap/structured-clone/esm/serialize.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/serialize.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serialize: () => (/* binding */ serialize)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"(rsc)/./node_modules/@ungap/structured-clone/esm/types.js\");\n\n\nconst EMPTY = '';\n\nconst {toString} = {};\nconst {keys} = Object;\n\nconst typeOf = value => {\n  const type = typeof value;\n  if (type !== 'object' || !value)\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE, type];\n\n  const asString = toString.call(value).slice(8, -1);\n  switch (asString) {\n    case 'Array':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, EMPTY];\n    case 'Object':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, EMPTY];\n    case 'Date':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.DATE, EMPTY];\n    case 'RegExp':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP, EMPTY];\n    case 'Map':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.MAP, EMPTY];\n    case 'Set':\n      return [_types_js__WEBPACK_IMPORTED_MODULE_0__.SET, EMPTY];\n  }\n\n  if (asString.includes('Array'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY, asString];\n\n  if (asString.includes('Error'))\n    return [_types_js__WEBPACK_IMPORTED_MODULE_0__.ERROR, asString];\n\n  return [_types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT, asString];\n};\n\nconst shouldSkip = ([TYPE, type]) => (\n  TYPE === _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE &&\n  (type === 'function' || type === 'symbol')\n);\n\nconst serializer = (strict, json, $, _) => {\n\n  const as = (out, value) => {\n    const index = _.push(out) - 1;\n    $.set(value, index);\n    return index;\n  };\n\n  const pair = value => {\n    if ($.has(value))\n      return $.get(value);\n\n    let [TYPE, type] = typeOf(value);\n    switch (TYPE) {\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.PRIMITIVE: {\n        let entry = value;\n        switch (type) {\n          case 'bigint':\n            TYPE = _types_js__WEBPACK_IMPORTED_MODULE_0__.BIGINT;\n            entry = value.toString();\n            break;\n          case 'function':\n          case 'symbol':\n            if (strict)\n              throw new TypeError('unable to serialize ' + type);\n            entry = null;\n            break;\n          case 'undefined':\n            return as([_types_js__WEBPACK_IMPORTED_MODULE_0__.VOID], value);\n        }\n        return as([TYPE, entry], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY: {\n        if (type)\n          return as([type, [...value]], value);\n  \n        const arr = [];\n        const index = as([TYPE, arr], value);\n        for (const entry of value)\n          arr.push(pair(entry));\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.OBJECT: {\n        if (type) {\n          switch (type) {\n            case 'BigInt':\n              return as([type, value.toString()], value);\n            case 'Boolean':\n            case 'Number':\n            case 'String':\n              return as([type, value.valueOf()], value);\n          }\n        }\n\n        if (json && ('toJSON' in value))\n          return pair(value.toJSON());\n\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const key of keys(value)) {\n          if (strict || !shouldSkip(typeOf(value[key])))\n            entries.push([pair(key), pair(value[key])]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.DATE:\n        return as([TYPE, value.toISOString()], value);\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.REGEXP: {\n        const {source, flags} = value;\n        return as([TYPE, {source, flags}], value);\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.MAP: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const [key, entry] of value) {\n          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))\n            entries.push([pair(key), pair(entry)]);\n        }\n        return index;\n      }\n      case _types_js__WEBPACK_IMPORTED_MODULE_0__.SET: {\n        const entries = [];\n        const index = as([TYPE, entries], value);\n        for (const entry of value) {\n          if (strict || !shouldSkip(typeOf(entry)))\n            entries.push(pair(entry));\n        }\n        return index;\n      }\n    }\n\n    const {message} = value;\n    return as([TYPE, {name: type, message}], value);\n  };\n\n  return pair;\n};\n\n/**\n * @typedef {Array<string,any>} Record a type representation\n */\n\n/**\n * Returns an array of serialized Records.\n * @param {any} value a serializable value.\n * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,\n *  if `true`, will not throw errors on incompatible types, and behave more\n *  like JSON stringify would behave. Symbol and Function will be discarded.\n * @returns {Record[]}\n */\n const serialize = (value, {json, lossy} = {}) => {\n  const _ = [];\n  return serializer(!(json || lossy), !!json, new Map, _)(value), _;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3NlcmlhbGl6ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtvQjs7QUFFcEI7O0FBRUEsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sTUFBTTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFTOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRDQUFLO0FBQ25CO0FBQ0EsY0FBYyw2Q0FBTTtBQUNwQjtBQUNBLGNBQWMsMkNBQUk7QUFDbEI7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCO0FBQ0EsY0FBYywwQ0FBRztBQUNqQjtBQUNBLGNBQWMsMENBQUc7QUFDakI7O0FBRUE7QUFDQSxZQUFZLDRDQUFLOztBQUVqQjtBQUNBLFlBQVksNENBQUs7O0FBRWpCLFVBQVUsNkNBQU07QUFDaEI7O0FBRUE7QUFDQSxXQUFXLGdEQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQ0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkNBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBSTtBQUNmO0FBQ0EsV0FBVyw2Q0FBTTtBQUNqQixlQUFlLGVBQWU7QUFDOUIsMEJBQTBCLGNBQWM7QUFDeEM7QUFDQSxXQUFXLDBDQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMENBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCLHNCQUFzQixvQkFBb0I7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsWUFBWSxnQ0FBZ0MsR0FBRztBQUMvQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBUSwyQkFBMkIsYUFBYSxJQUFJO0FBQ3BEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3NlcmlhbGl6ZS5qcz9hNTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZPSUQsIFBSSU1JVElWRSxcbiAgQVJSQVksIE9CSkVDVCxcbiAgREFURSwgUkVHRVhQLCBNQVAsIFNFVCxcbiAgRVJST1IsIEJJR0lOVFxufSBmcm9tICcuL3R5cGVzLmpzJztcblxuY29uc3QgRU1QVFkgPSAnJztcblxuY29uc3Qge3RvU3RyaW5nfSA9IHt9O1xuY29uc3Qge2tleXN9ID0gT2JqZWN0O1xuXG5jb25zdCB0eXBlT2YgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpXG4gICAgcmV0dXJuIFtQUklNSVRJVkUsIHR5cGVdO1xuXG4gIGNvbnN0IGFzU3RyaW5nID0gdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICBzd2l0Y2ggKGFzU3RyaW5nKSB7XG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIFtBUlJBWSwgRU1QVFldO1xuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gW09CSkVDVCwgRU1QVFldO1xuICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgcmV0dXJuIFtEQVRFLCBFTVBUWV07XG4gICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgIHJldHVybiBbUkVHRVhQLCBFTVBUWV07XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiBbTUFQLCBFTVBUWV07XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBbU0VULCBFTVBUWV07XG4gIH1cblxuICBpZiAoYXNTdHJpbmcuaW5jbHVkZXMoJ0FycmF5JykpXG4gICAgcmV0dXJuIFtBUlJBWSwgYXNTdHJpbmddO1xuXG4gIGlmIChhc1N0cmluZy5pbmNsdWRlcygnRXJyb3InKSlcbiAgICByZXR1cm4gW0VSUk9SLCBhc1N0cmluZ107XG5cbiAgcmV0dXJuIFtPQkpFQ1QsIGFzU3RyaW5nXTtcbn07XG5cbmNvbnN0IHNob3VsZFNraXAgPSAoW1RZUEUsIHR5cGVdKSA9PiAoXG4gIFRZUEUgPT09IFBSSU1JVElWRSAmJlxuICAodHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlID09PSAnc3ltYm9sJylcbik7XG5cbmNvbnN0IHNlcmlhbGl6ZXIgPSAoc3RyaWN0LCBqc29uLCAkLCBfKSA9PiB7XG5cbiAgY29uc3QgYXMgPSAob3V0LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gXy5wdXNoKG91dCkgLSAxO1xuICAgICQuc2V0KHZhbHVlLCBpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIGNvbnN0IHBhaXIgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKCQuaGFzKHZhbHVlKSlcbiAgICAgIHJldHVybiAkLmdldCh2YWx1ZSk7XG5cbiAgICBsZXQgW1RZUEUsIHR5cGVdID0gdHlwZU9mKHZhbHVlKTtcbiAgICBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgIGNhc2UgUFJJTUlUSVZFOiB7XG4gICAgICAgIGxldCBlbnRyeSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlICdiaWdpbnQnOlxuICAgICAgICAgICAgVFlQRSA9IEJJR0lOVDtcbiAgICAgICAgICAgIGVudHJ5ID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgaWYgKHN0cmljdClcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5hYmxlIHRvIHNlcmlhbGl6ZSAnICsgdHlwZSk7XG4gICAgICAgICAgICBlbnRyeSA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgcmV0dXJuIGFzKFtWT0lEXSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcyhbVFlQRSwgZW50cnldLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXNlIEFSUkFZOiB7XG4gICAgICAgIGlmICh0eXBlKVxuICAgICAgICAgIHJldHVybiBhcyhbdHlwZSwgWy4uLnZhbHVlXV0sIHZhbHVlKTtcbiAgXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFzKFtUWVBFLCBhcnJdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgdmFsdWUpXG4gICAgICAgICAgYXJyLnB1c2gocGFpcihlbnRyeSkpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG4gICAgICBjYXNlIE9CSkVDVDoge1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnQmlnSW50JzpcbiAgICAgICAgICAgICAgcmV0dXJuIGFzKFt0eXBlLCB2YWx1ZS50b1N0cmluZygpXSwgdmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICBjYXNlICdOdW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgcmV0dXJuIGFzKFt0eXBlLCB2YWx1ZS52YWx1ZU9mKCldLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGpzb24gJiYgKCd0b0pTT04nIGluIHZhbHVlKSlcbiAgICAgICAgICByZXR1cm4gcGFpcih2YWx1ZS50b0pTT04oKSk7XG5cbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFzKFtUWVBFLCBlbnRyaWVzXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKHZhbHVlKSkge1xuICAgICAgICAgIGlmIChzdHJpY3QgfHwgIXNob3VsZFNraXAodHlwZU9mKHZhbHVlW2tleV0pKSlcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChbcGFpcihrZXkpLCBwYWlyKHZhbHVlW2tleV0pXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgY2FzZSBEQVRFOlxuICAgICAgICByZXR1cm4gYXMoW1RZUEUsIHZhbHVlLnRvSVNPU3RyaW5nKCldLCB2YWx1ZSk7XG4gICAgICBjYXNlIFJFR0VYUDoge1xuICAgICAgICBjb25zdCB7c291cmNlLCBmbGFnc30gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIGFzKFtUWVBFLCB7c291cmNlLCBmbGFnc31dLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE1BUDoge1xuICAgICAgICBjb25zdCBlbnRyaWVzID0gW107XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXMoW1RZUEUsIGVudHJpZXNdLCB2YWx1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHN0cmljdCB8fCAhKHNob3VsZFNraXAodHlwZU9mKGtleSkpIHx8IHNob3VsZFNraXAodHlwZU9mKGVudHJ5KSkpKVxuICAgICAgICAgICAgZW50cmllcy5wdXNoKFtwYWlyKGtleSksIHBhaXIoZW50cnkpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgICAgY2FzZSBTRVQ6IHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFzKFtUWVBFLCBlbnRyaWVzXSwgdmFsdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHN0cmljdCB8fCAhc2hvdWxkU2tpcCh0eXBlT2YoZW50cnkpKSlcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChwYWlyKGVudHJ5KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHttZXNzYWdlfSA9IHZhbHVlO1xuICAgIHJldHVybiBhcyhbVFlQRSwge25hbWU6IHR5cGUsIG1lc3NhZ2V9XSwgdmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiBwYWlyO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nLGFueT59IFJlY29yZCBhIHR5cGUgcmVwcmVzZW50YXRpb25cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2VyaWFsaXplZCBSZWNvcmRzLlxuICogQHBhcmFtIHthbnl9IHZhbHVlIGEgc2VyaWFsaXphYmxlIHZhbHVlLlxuICogQHBhcmFtIHt7anNvbj86IGJvb2xlYW4sIGxvc3N5PzogYm9vbGVhbn0/fSBvcHRpb25zIGFuIG9iamVjdCB3aXRoIGEgYGxvc3N5YCBvciBganNvbmAgcHJvcGVydHkgdGhhdCxcbiAqICBpZiBgdHJ1ZWAsIHdpbGwgbm90IHRocm93IGVycm9ycyBvbiBpbmNvbXBhdGlibGUgdHlwZXMsIGFuZCBiZWhhdmUgbW9yZVxuICogIGxpa2UgSlNPTiBzdHJpbmdpZnkgd291bGQgYmVoYXZlLiBTeW1ib2wgYW5kIEZ1bmN0aW9uIHdpbGwgYmUgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1JlY29yZFtdfVxuICovXG4gZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZSA9ICh2YWx1ZSwge2pzb24sIGxvc3N5fSA9IHt9KSA9PiB7XG4gIGNvbnN0IF8gPSBbXTtcbiAgcmV0dXJuIHNlcmlhbGl6ZXIoIShqc29uIHx8IGxvc3N5KSwgISFqc29uLCBuZXcgTWFwLCBfKSh2YWx1ZSksIF87XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@ungap/structured-clone/esm/serialize.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@ungap/structured-clone/esm/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ungap/structured-clone/esm/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ARRAY: () => (/* binding */ ARRAY),\n/* harmony export */   BIGINT: () => (/* binding */ BIGINT),\n/* harmony export */   DATE: () => (/* binding */ DATE),\n/* harmony export */   ERROR: () => (/* binding */ ERROR),\n/* harmony export */   MAP: () => (/* binding */ MAP),\n/* harmony export */   OBJECT: () => (/* binding */ OBJECT),\n/* harmony export */   PRIMITIVE: () => (/* binding */ PRIMITIVE),\n/* harmony export */   REGEXP: () => (/* binding */ REGEXP),\n/* harmony export */   SET: () => (/* binding */ SET),\n/* harmony export */   VOID: () => (/* binding */ VOID)\n/* harmony export */ });\nconst VOID       = -1;\nconst PRIMITIVE  = 0;\nconst ARRAY      = 1;\nconst OBJECT     = 2;\nconst DATE       = 3;\nconst REGEXP     = 4;\nconst MAP        = 5;\nconst SET        = 6;\nconst ERROR      = 7;\nconst BIGINT     = 8;\n// export const SYMBOL = 9;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUvZXNtL3R5cGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9AdW5nYXAvc3RydWN0dXJlZC1jbG9uZS9lc20vdHlwZXMuanM/NDI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVk9JRCAgICAgICA9IC0xO1xuZXhwb3J0IGNvbnN0IFBSSU1JVElWRSAgPSAwO1xuZXhwb3J0IGNvbnN0IEFSUkFZICAgICAgPSAxO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCAgICAgPSAyO1xuZXhwb3J0IGNvbnN0IERBVEUgICAgICAgPSAzO1xuZXhwb3J0IGNvbnN0IFJFR0VYUCAgICAgPSA0O1xuZXhwb3J0IGNvbnN0IE1BUCAgICAgICAgPSA1O1xuZXhwb3J0IGNvbnN0IFNFVCAgICAgICAgPSA2O1xuZXhwb3J0IGNvbnN0IEVSUk9SICAgICAgPSA3O1xuZXhwb3J0IGNvbnN0IEJJR0lOVCAgICAgPSA4O1xuLy8gZXhwb3J0IGNvbnN0IFNZTUJPTCA9IDk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@ungap/structured-clone/esm/types.js\n");

/***/ })

};
;