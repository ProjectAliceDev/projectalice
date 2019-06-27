webpackHotUpdate("static/development/pages/about.js",{

/***/ "./assets/people/dusk.png":
/*!********************************!*\
  !*** ./assets/people/dusk.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dusk-794af25051427593b16980596ce3b90f.png";

/***/ }),

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_PageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageHero */ "./components/PageHero.tsx");
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/breakpoints */ "./utils/breakpoints.ts");
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/commonStyles */ "./utils/commonStyles.tsx");
/* harmony import */ var _assets_people_dusk_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/people/dusk.png */ "./assets/people/dusk.png");
/* harmony import */ var _assets_people_dusk_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_people_dusk_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/about.tsx";




/** @jsx jsx */





var aboutPeopleContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_5__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(4, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:aboutPeopleContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2Fib3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQjZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2Fib3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQYWdlSGVybyBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VIZXJvJ1xuaW1wb3J0IEJhc2ljQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jhc2ljQ2FyZCdcblxuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBmYWNlcGFpbnQgZnJvbSAnZmFjZXBhaW50J1xuaW1wb3J0IHsgYnJlYWtwb2ludHMgfSBmcm9tICcuLi91dGlscy9icmVha3BvaW50cydcbmltcG9ydCB7IHBhZ2VDb250ZW50U3R5bGVzLCBwYWdlR3JpZENvbnRhaW5lciB9IGZyb20gJy4uL3V0aWxzL2NvbW1vblN0eWxlcydcblxuaW1wb3J0IHBvbGljaWVzSGVyb0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9wb2xpY2llcy5qcGcnO1xuaW1wb3J0IGR1c2tJbWFnZSBmcm9tICcuLi9hc3NldHMvcGVvcGxlL2R1c2sucG5nJztcbmltcG9ydCBub2VsaWFJbWFnZSBmcm9tICcuLi9hc3NldHMvcGVvcGxlL25vZS5wbmcnO1xuXG5cbmNvbnN0IGFib3V0UGVvcGxlQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCg0LCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbn0pKTtcblxuXG5jb25zdCBBYm91dFBhZ2U6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiQWJvdXRcIj5cbiAgICA8UGFnZUhlcm9cbiAgICBcdHRpdGxlPVwiQWJvdXQgVXNcIlxuICAgIFx0c3VidGl0bGU9XCJXZSBtYWtlIGNvb2wgdGhpbmdzLlwiXG4gICAgXHRzaG93TGlua1xuICAgIFx0bGlua1RleHQgPSBcIkNvbnRhY3QgVXNcIlxuICAgIFx0bGlua1BvaW50c1RvID0gXCJtYWlsdG86aGVsbG9AYWxpY2Vvcy5hcHBcIlxuXHQvPlxuXHQ8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG5cdFx0PGRpdj5cblx0XHRcdDxoMT5XaG8gYXJlIHdlPzwvaDE+XG5cdFx0XHQ8cD5cblx0XHRcdFx0UHJvamVjdCBBbGljZSBpcyBhIGdyb3VwIG9mIGNvbGxhYm9yYXRvcnMsIGFydGlzdHMsIGRldmVsb3BlcnMsIGFuZCBtb2RkZXJzIHRoYXQgbWFrZXMgb3Blbi1zb3VyY2UgY29udGVudC4gU2luY2UgTWF5IDIwMTgsIHdlJ3ZlIGJlZW4gd29ya2luZyBoYXJkIG9uIG1ha2luZyBmcmFtZXdvcmtzIGZvciB2aXN1YWwgbm92ZWwgZGV2ZWxvcGVycyBhbmQgZ3JlYXQgbW9kcyBmb3IgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1Yi4gQW5kIHdlIGFsd2F5cyBtYWtlIG91ciB3b3JrIG9wZW4tc291cmNlIGJlY2F1c2Ugd2UganVzdCDwn5KaIHRoZSBvcGVuLXNvdXJjZSBjb21tdW5pdHkuXG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjc3M9eyBhYm91dFBlb3BsZUNvbnRhaW5lciB9PlxuICAgICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIk1hcnF1aXMgS3VydFwiXG4gICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkhlYWQgZGV2ZWxvcGVyIGFuZCBkaXJlY3Rvci4gRW1haWw6IG1hcnF1aXMua3VydEBhbGljZW9zLmFwcFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzQ0NTA2ND9zPTUxMiZ2PTRcIlxuICAgICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJLaWJvIEhpa2FyaVwiXG4gICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRpcmVjdG9yIGFuZCBkZXZlbG9wZXIuIEVtYWlsOiBlbnJhQGFsaWNlb3MuYXBwXCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE0OTc2NTE2P3M9NTEyJnY9NFwiXG4gICAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIkR1c2sgRWFsYWluXCJcbiAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRGlwbG9tYXQuIEVtYWlsOiBkdXNrLmVhbGFpbkBhbGljZW9zLmFwcFwiXG4gICAgICAgICAgICAgIGltYWdlPXsgZHVza0ltYWdlIH1cbiAgICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJOb2VsaWEgUml2ZXJvc1wiXG4gICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkFydGlzdC4gRW1haWw6IG5vZWxpYS5yaXZlcm9zQGFsaWNlb3MuYXBwXCJcbiAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMTEzMzk0MTg0MDIwNDQ0MzY1My91alNQMm9xNV80MDB4NDAwLnBuZ1wiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIC8+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQYWdlXG4iXX0= */"));

var AboutPage = function AboutPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_PageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Us",
    subtitle: "We make cool things.",
    showLink: true,
    linkText: "Contact Us",
    linkPointsTo: "mailto:hello@aliceos.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_6__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Who are we?"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Project Alice is a group of collaborators, artists, developers, and modders that makes open-source content. Since May 2018, we've been working hard on making frameworks for visual novel developers and great mods for Doki Doki Literature Club. And we always make our work open-source because we just \uD83D\uDC9A the open-source community.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: aboutPeopleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Marquis Kurt",
    cardDescription: "Head developer and director. Email: marquis.kurt@aliceos.app",
    color: "#fafafa",
    image: "https://avatars1.githubusercontent.com/u/13445064?s=512&v=4",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Kibo Hikari",
    cardDescription: "Director and developer. Email: enra@aliceos.app",
    color: "#fafafa",
    image: "https://avatars0.githubusercontent.com/u/14976516?s=512&v=4",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Dusk Ealain",
    cardDescription: "Diplomat. Email: dusk.ealain@aliceos.app",
    image: _assets_people_dusk_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    color: "#fafafa",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Noelia Riveros",
    cardDescription: "Artist. Email: noelia.riveros@aliceos.app",
    image: "https://pbs.twimg.com/profile_images/1133941840204443653/ujSP2oq5_400x400.png",
    color: "#fafafa",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.e4fcf82b9e724c28ff95.hot-update.js.map