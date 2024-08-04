"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(rsc)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   stringify: () => (/* binding */ stringify)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration for `stringify`.\n * @property {boolean} [padLeft=true]\n *   Whether to pad a space before a token.\n * @property {boolean} [padRight=false]\n *   Whether to pad a space after a token.\n */\n\n/**\n * @typedef {Options} StringifyOptions\n *   Please use `StringifyOptions` instead.\n */\n\n/**\n * Parse comma-separated tokens to an array.\n *\n * @param {string} value\n *   Comma-separated tokens.\n * @returns {Array<string>}\n *   List of tokens.\n */\nfunction parse(value) {\n  /** @type {Array<string>} */\n  const tokens = []\n  const input = String(value || '')\n  let index = input.indexOf(',')\n  let start = 0\n  /** @type {boolean} */\n  let end = false\n\n  while (!end) {\n    if (index === -1) {\n      index = input.length\n      end = true\n    }\n\n    const token = input.slice(start, index).trim()\n\n    if (token || !end) {\n      tokens.push(token)\n    }\n\n    start = index + 1\n    index = input.indexOf(',', start)\n  }\n\n  return tokens\n}\n\n/**\n * Serialize an array of strings or numbers to comma-separated tokens.\n *\n * @param {Array<string|number>} values\n *   List of tokens.\n * @param {Options} [options]\n *   Configuration for `stringify` (optional).\n * @returns {string}\n *   Comma-separated tokens.\n */\nfunction stringify(values, options) {\n  const settings = options || {}\n\n  // Ensure the last empty entry is seen.\n  const input = values[values.length - 1] === '' ? [...values, ''] : values\n\n  return input\n    .join(\n      (settings.padRight ? ' ' : '') +\n        ',' +\n        (settings.padLeft === false ? '' : ' ')\n    )\n    .trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2NvbW1hLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanM/YjYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYHN0cmluZ2lmeWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtwYWRMZWZ0PXRydWVdXG4gKiAgIFdoZXRoZXIgdG8gcGFkIGEgc3BhY2UgYmVmb3JlIGEgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtwYWRSaWdodD1mYWxzZV1cbiAqICAgV2hldGhlciB0byBwYWQgYSBzcGFjZSBhZnRlciBhIHRva2VuLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09wdGlvbnN9IFN0cmluZ2lmeU9wdGlvbnNcbiAqICAgUGxlYXNlIHVzZSBgU3RyaW5naWZ5T3B0aW9uc2AgaW5zdGVhZC5cbiAqL1xuXG4vKipcbiAqIFBhcnNlIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMgdG8gYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIENvbW1hLXNlcGFyYXRlZCB0b2tlbnMuXG4gKiBAcmV0dXJucyB7QXJyYXk8c3RyaW5nPn1cbiAqICAgTGlzdCBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gIGNvbnN0IHRva2VucyA9IFtdXG4gIGNvbnN0IGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxuICBsZXQgaW5kZXggPSBpbnB1dC5pbmRleE9mKCcsJylcbiAgbGV0IHN0YXJ0ID0gMFxuICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gIGxldCBlbmQgPSBmYWxzZVxuXG4gIHdoaWxlICghZW5kKSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBpbnB1dC5sZW5ndGhcbiAgICAgIGVuZCA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGlucHV0LnNsaWNlKHN0YXJ0LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodG9rZW4gfHwgIWVuZCkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgfVxuXG4gICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoJywnLCBzdGFydClcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gYXJyYXkgb2Ygc3RyaW5ncyBvciBudW1iZXJzIHRvIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmd8bnVtYmVyPn0gdmFsdWVzXG4gKiAgIExpc3Qgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYHN0cmluZ2lmeWAgKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKiAgIENvbW1hLXNlcGFyYXRlZCB0b2tlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzLCBvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIC8vIEVuc3VyZSB0aGUgbGFzdCBlbXB0eSBlbnRyeSBpcyBzZWVuLlxuICBjb25zdCBpbnB1dCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09ICcnID8gWy4uLnZhbHVlcywgJyddIDogdmFsdWVzXG5cbiAgcmV0dXJuIGlucHV0XG4gICAgLmpvaW4oXG4gICAgICAoc2V0dGluZ3MucGFkUmlnaHQgPyAnICcgOiAnJykgK1xuICAgICAgICAnLCcgK1xuICAgICAgICAoc2V0dGluZ3MucGFkTGVmdCA9PT0gZmFsc2UgPyAnJyA6ICcgJylcbiAgICApXG4gICAgLnRyaW0oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;