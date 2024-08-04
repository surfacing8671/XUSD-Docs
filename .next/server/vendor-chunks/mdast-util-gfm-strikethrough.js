"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/lib/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughFromMarkdown: () => (/* binding */ gfmStrikethroughFromMarkdown),\n/* harmony export */   gfmStrikethroughToMarkdown: () => (/* binding */ gfmStrikethroughToMarkdown)\n/* harmony export */ });\n/**\n * @typedef {import('mdast').Delete} Delete\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n */\n\n/**\n * List of constructs that occur in phrasing (paragraphs, headings), but cannot\n * contain strikethrough.\n * So they sort of cancel each other out.\n * Note: could use a better name.\n *\n * Note: keep in sync with: <https://github.com/syntax-tree/mdast-util-to-markdown/blob/8ce8dbf/lib/unsafe.js#L14>\n *\n * @type {Array<ConstructName>}\n */\nconst constructsWithoutStrikethrough = [\n  'autolink',\n  'destinationLiteral',\n  'destinationRaw',\n  'reference',\n  'titleQuote',\n  'titleApostrophe'\n]\n\nhandleDelete.peek = peekDelete\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM\n * strikethrough in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM strikethrough.\n */\nfunction gfmStrikethroughFromMarkdown() {\n  return {\n    canContainEols: ['delete'],\n    enter: {strikethrough: enterStrikethrough},\n    exit: {strikethrough: exitStrikethrough}\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM\n * strikethrough in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM strikethrough.\n */\nfunction gfmStrikethroughToMarkdown() {\n  return {\n    unsafe: [\n      {\n        character: '~',\n        inConstruct: 'phrasing',\n        notInConstruct: constructsWithoutStrikethrough\n      }\n    ],\n    handlers: {delete: handleDelete}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterStrikethrough(token) {\n  this.enter({type: 'delete', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitStrikethrough(token) {\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {Delete} node\n */\nfunction handleDelete(node, _, state, info) {\n  const tracker = state.createTracker(info)\n  const exit = state.enter('strikethrough')\n  let value = tracker.move('~~')\n  value += state.containerPhrasing(node, {\n    ...tracker.current(),\n    before: value,\n    after: '~'\n  })\n  value += tracker.move('~~')\n  exit()\n  return value\n}\n\n/** @type {ToMarkdownHandle} */\nfunction peekDelete() {\n  return '~'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0EsYUFBYSxtREFBbUQ7QUFDaEUsYUFBYSw4Q0FBOEM7QUFDM0QsYUFBYSwyQ0FBMkM7QUFDeEQ7QUFDQSxhQUFhLGdEQUFnRDtBQUM3RCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLDBDQUEwQztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsWUFBWSxrQ0FBa0M7QUFDOUMsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0M7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL2xpYi9pbmRleC5qcz8yZTU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5EZWxldGV9IERlbGV0ZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkNvbXBpbGVDb250ZXh0fSBDb21waWxlQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuRXh0ZW5zaW9ufSBGcm9tTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC10by1tYXJrZG93bicpLkNvbnN0cnVjdE5hbWV9IENvbnN0cnVjdE5hbWVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5IYW5kbGV9IFRvTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKi9cblxuLyoqXG4gKiBMaXN0IG9mIGNvbnN0cnVjdHMgdGhhdCBvY2N1ciBpbiBwaHJhc2luZyAocGFyYWdyYXBocywgaGVhZGluZ3MpLCBidXQgY2Fubm90XG4gKiBjb250YWluIHN0cmlrZXRocm91Z2guXG4gKiBTbyB0aGV5IHNvcnQgb2YgY2FuY2VsIGVhY2ggb3RoZXIgb3V0LlxuICogTm90ZTogY291bGQgdXNlIGEgYmV0dGVyIG5hbWUuXG4gKlxuICogTm90ZToga2VlcCBpbiBzeW5jIHdpdGg6IDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iLzhjZThkYmYvbGliL3Vuc2FmZS5qcyNMMTQ+XG4gKlxuICogQHR5cGUge0FycmF5PENvbnN0cnVjdE5hbWU+fVxuICovXG5jb25zdCBjb25zdHJ1Y3RzV2l0aG91dFN0cmlrZXRocm91Z2ggPSBbXG4gICdhdXRvbGluaycsXG4gICdkZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAnZGVzdGluYXRpb25SYXcnLFxuICAncmVmZXJlbmNlJyxcbiAgJ3RpdGxlUXVvdGUnLFxuICAndGl0bGVBcG9zdHJvcGhlJ1xuXVxuXG5oYW5kbGVEZWxldGUucGVlayA9IHBlZWtEZWxldGVcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNXG4gKiBzdHJpa2V0aHJvdWdoIGluIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBzdHJpa2V0aHJvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtU3RyaWtldGhyb3VnaEZyb21NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICBjYW5Db250YWluRW9sczogWydkZWxldGUnXSxcbiAgICBlbnRlcjoge3N0cmlrZXRocm91Z2g6IGVudGVyU3RyaWtldGhyb3VnaH0sXG4gICAgZXhpdDoge3N0cmlrZXRocm91Z2g6IGV4aXRTdHJpa2V0aHJvdWdofVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk1cbiAqIHN0cmlrZXRocm91Z2ggaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gc3RyaWtldGhyb3VnaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVN0cmlrZXRocm91Z2hUb01hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW1xuICAgICAge1xuICAgICAgICBjaGFyYWN0ZXI6ICd+JyxcbiAgICAgICAgaW5Db25zdHJ1Y3Q6ICdwaHJhc2luZycsXG4gICAgICAgIG5vdEluQ29uc3RydWN0OiBjb25zdHJ1Y3RzV2l0aG91dFN0cmlrZXRocm91Z2hcbiAgICAgIH1cbiAgICBdLFxuICAgIGhhbmRsZXJzOiB7ZGVsZXRlOiBoYW5kbGVEZWxldGV9XG4gIH1cbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlclN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2RlbGV0ZScsIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7RGVsZXRlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZShub2RlLCBfLCBzdGF0ZSwgaW5mbykge1xuICBjb25zdCB0cmFja2VyID0gc3RhdGUuY3JlYXRlVHJhY2tlcihpbmZvKVxuICBjb25zdCBleGl0ID0gc3RhdGUuZW50ZXIoJ3N0cmlrZXRocm91Z2gnKVxuICBsZXQgdmFsdWUgPSB0cmFja2VyLm1vdmUoJ35+JylcbiAgdmFsdWUgKz0gc3RhdGUuY29udGFpbmVyUGhyYXNpbmcobm9kZSwge1xuICAgIC4uLnRyYWNrZXIuY3VycmVudCgpLFxuICAgIGJlZm9yZTogdmFsdWUsXG4gICAgYWZ0ZXI6ICd+J1xuICB9KVxuICB2YWx1ZSArPSB0cmFja2VyLm1vdmUoJ35+JylcbiAgZXhpdCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKiogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9ICovXG5mdW5jdGlvbiBwZWVrRGVsZXRlKCkge1xuICByZXR1cm4gJ34nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-gfm-strikethrough/lib/index.js\n");

/***/ })

};
;