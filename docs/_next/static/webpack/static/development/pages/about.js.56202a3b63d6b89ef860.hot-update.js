webpackHotUpdate("static/development/pages/about.js",{

/***/ "./utils/commonStyles.tsx":
/*!********************************!*\
  !*** ./utils/commonStyles.tsx ***!
  \********************************/
/*! exports provided: pageContentStyles, pageGridContainer, thinnerPageGridContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageContentStyles", function() { return pageContentStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageGridContainer", function() { return pageGridContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thinnerPageGridContainer", function() { return thinnerPageGridContainer; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./utils/breakpoints.ts");
/** @jsx jsx */


var pageContentStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"])({
  paddingTop: 64,
  paddingBottom: 64,
  paddingLeft: [24, 48, 188],
  paddingRight: [24, 48, 188],
  '& a': {
    textDecoration: "none",
    color: "#ffcc22"
  },
  '& a:hover': {
    color: "#ffdb64"
  }
}), "label:pageContentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3V0aWxzL2NvbW1vblN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2lDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3V0aWxzL2NvbW1vblN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmltcG9ydCBicmVha3BvaW50cyBmcm9tICcuL2JyZWFrcG9pbnRzJ1xuXG5leHBvcnQgY29uc3QgcGFnZUNvbnRlbnRTdHlsZXMgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBwYWRkaW5nVG9wOiA2NCxcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG4gIHBhZGRpbmdMZWZ0OiBbMjQsIDQ4LCAxODhdLFxuICBwYWRkaW5nUmlnaHQ6IFsyNCwgNDgsIDE4OF0sXG4gICcmIGEnOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgIGNvbG9yOiBcIiNmZmNjMjJcIlxuICB9LFxuICAnJiBhOmhvdmVyJzoge1xuICAgIGNvbG9yOiBcIiNmZmRiNjRcIlxuICB9XG59KSlcblxuZXhwb3J0IGNvbnN0IHBhZ2VHcmlkQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgyLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IHRoaW5uZXJQYWdlR3JpZENvbnRhaW5lciA9IGNzcyhicmVha3BvaW50cyh7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCIxZnJcIiwgXCJyZXBlYXQoMSwgMWZyKVwiLCBcInJlcGVhdCgzLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbn0pKTsiXX0= */"));
var pageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3V0aWxzL2NvbW1vblN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJpQyIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS91dGlscy9jb21tb25TdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi9icmVha3BvaW50cydcblxuZXhwb3J0IGNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmV4cG9ydCBjb25zdCBwYWdlR3JpZENvbnRhaW5lciA9IGNzcyhicmVha3BvaW50cyh7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG59KSk7XG5cbmV4cG9ydCBjb25zdCB0aGlubmVyUGFnZUdyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwicmVwZWF0KDEsIDFmcilcIiwgXCJyZXBlYXQoMywgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG59KSk7Il19 */"));
var thinnerPageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "repeat(1, 1fr)", "repeat(3, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:thinnerPageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3V0aWxzL2NvbW1vblN0eWxlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJ3QyIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS91dGlscy9jb21tb25TdHlsZXMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi9icmVha3BvaW50cydcblxuZXhwb3J0IGNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmV4cG9ydCBjb25zdCBwYWdlR3JpZENvbnRhaW5lciA9IGNzcyhicmVha3BvaW50cyh7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG59KSk7XG5cbmV4cG9ydCBjb25zdCB0aGlubmVyUGFnZUdyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwicmVwZWF0KDEsIDFmcilcIiwgXCJyZXBlYXQoMywgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG59KSk7Il19 */"));

/***/ })

})
//# sourceMappingURL=about.js.56202a3b63d6b89ef860.hot-update.js.map