webpackHotUpdate("static/development/pages/chat.js",{

/***/ "./pages/chat.tsx":
/*!************************!*\
  !*** ./pages/chat.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHero */ "./components/PageHero.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/breakpoints */ "./utils/breakpoints.ts");
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/commonStyles */ "./utils/commonStyles.tsx");
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/chat.tsx";




/** @jsx jsx */



var aboutPeopleContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_4__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "repeat(1, 1fr)", "repeat(3, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:aboutPeopleContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2NoYXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWU2QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9wYWdlcy9jaGF0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQYWdlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VIZXJvJ1xuaW1wb3J0IEJhc2ljQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2ljQ2FyZCdcblxuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vdXRpbHMvYnJlYWtwb2ludHMnXG5pbXBvcnQgeyBwYWdlQ29udGVudFN0eWxlcyB9IGZyb20gJy4uL3V0aWxzL2NvbW1vblN0eWxlcydcblxuaW1wb3J0IGR1c2tJbWFnZSBmcm9tICcuLi9hc3NldHMvcGVvcGxlL2R1c2sucG5nJztcbmltcG9ydCBub2VsaWFJbWFnZSBmcm9tICcuLi9hc3NldHMvcGVvcGxlL25vZS5wbmcnO1xuXG5cbmNvbnN0IGFib3V0UGVvcGxlQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcInJlcGVhdCgxLCAxZnIpXCIsIFwicmVwZWF0KDMsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDk2LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxufSkpO1xuXG5cbmNvbnN0IEFib3V0UGFnZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJBYm91dFwiPlxuICAgIDxQYWdlSGVyb1xuICAgIFx0dGl0bGU9XCJBYm91dCBVc1wiXG4gICAgXHRzdWJ0aXRsZT1cIldlIG1ha2UgY29vbCB0aGluZ3MuXCJcbiAgICBcdHNob3dMaW5rXG4gICAgXHRsaW5rVGV4dCA9IFwiQ29udGFjdCBVc1wiXG4gICAgXHRsaW5rUG9pbnRzVG8gPSBcIm1haWx0bzpoZWxsb0BhbGljZW9zLmFwcFwiXG5cdC8+XG5cdDxkaXYgY3NzPXsgcGFnZUNvbnRlbnRTdHlsZXMgfT5cblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPldobyBhcmUgd2U/PC9oMT5cblx0XHRcdDxwPlxuXHRcdFx0XHRQcm9qZWN0IEFsaWNlIGlzIGEgZ3JvdXAgb2YgY29sbGFib3JhdG9ycywgYXJ0aXN0cywgZGV2ZWxvcGVycywgYW5kIG1vZGRlcnMgdGhhdCBtYWtlcyBvcGVuLXNvdXJjZSBjb250ZW50LiBTaW5jZSBNYXkgMjAxOCwgd2UndmUgYmVlbiB3b3JraW5nIGhhcmQgb24gbWFraW5nIGZyYW1ld29ya3MgZm9yIHZpc3VhbCBub3ZlbCBkZXZlbG9wZXJzIGFuZCBncmVhdCBtb2RzIGZvciBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViLiBBbmQgd2UgYWx3YXlzIG1ha2Ugb3VyIHdvcmsgb3Blbi1zb3VyY2UgYmVjYXVzZSB3ZSBqdXN0IPCfkpogdGhlIG9wZW4tc291cmNlIGNvbW11bml0eS5cblx0XHRcdDwvcD5cblx0XHQ8L2Rpdj5cblx0XHQ8aDE+TWVldCB0aGUgdGVhbSAob3Igc29tZSBvZiB1cyk8L2gxPlxuXHQ8L2Rpdj5cbiAgPC9MYXlvdXQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZVxuIl19 */"));

var AboutPage = function AboutPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_PageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Us",
    subtitle: "We make cool things.",
    showLink: true,
    linkText: "Contact Us",
    linkPointsTo: "mailto:hello@aliceos.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_5__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Who are we?"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Project Alice is a group of collaborators, artists, developers, and modders that makes open-source content. Since May 2018, we've been working hard on making frameworks for visual novel developers and great mods for Doki Doki Literature Club. And we always make our work open-source because we just \uD83D\uDC9A the open-source community.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Meet the team (or some of us)")));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=chat.js.b256bbcaf09f568b4f31.hot-update.js.map