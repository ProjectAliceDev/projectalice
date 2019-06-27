webpackHotUpdate("static/development/pages/about.js",{

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
}), "label:aboutPeopleContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2Fib3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNkIiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvcGFnZXMvYWJvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZUhlcm8nXG5pbXBvcnQgQmFzaWNDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzaWNDYXJkJ1xuXG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IGZhY2VwYWludCBmcm9tICdmYWNlcGFpbnQnXG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IHsgcGFnZUNvbnRlbnRTdHlsZXMsIHBhZ2VHcmlkQ29udGFpbmVyIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uU3R5bGVzJ1xuXG5pbXBvcnQgcG9saWNpZXNIZXJvSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3BvbGljaWVzLmpwZyc7XG5cbmNvbnN0IGFib3V0UGVvcGxlQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCg0LCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcbn0pKTtcblxuXG5jb25zdCBBYm91dFBhZ2U6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPVwiQWJvdXRcIj5cbiAgICA8UGFnZUhlcm9cbiAgICBcdHRpdGxlPVwiQWJvdXQgVXNcIlxuICAgIFx0c3VidGl0bGU9XCJXZSBtYWtlIGNvb2wgdGhpbmdzLlwiXG4gICAgXHRzaG93TGlua1xuICAgIFx0bGlua1RleHQgPSBcIkNvbnRhY3QgVXNcIlxuICAgIFx0bGlua1BvaW50c1RvID0gXCJtYWlsdG86aGVsbG9AYWxpY2Vvcy5hcHBcIlxuXHQvPlxuXHQ8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG5cdFx0PGRpdj5cblx0XHRcdDxoMT5XaG8gYXJlIHdlPzwvaDE+XG5cdFx0XHQ8cD5cblx0XHRcdFx0UHJvamVjdCBBbGljZSBpcyBhIGdyb3VwIG9mIGNvbGxhYm9yYXRvcnMsIGFydGlzdHMsIGRldmVsb3BlcnMsIGFuZCBtb2RkZXJzIHRoYXQgbWFrZXMgb3Blbi1zb3VyY2UgY29udGVudC4gU2luY2UgTWF5IDIwMTgsIHdlJ3ZlIGJlZW4gd29ya2luZyBoYXJkIG9uIG1ha2luZyBmcmFtZXdvcmtzIGZvciB2aXN1YWwgbm92ZWwgZGV2ZWxvcGVycyBhbmQgZ3JlYXQgbW9kcyBmb3IgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1Yi4gQW5kIHdlIGFsd2F5cyBtYWtlIG91ciB3b3JrIG9wZW4tc291cmNlIGJlY2F1c2Ugd2UganVzdCDwn5KaIHRoZSBvcGVuLXNvdXJjZSBjb21tdW5pdHkuXG5cdFx0XHQ8L3A+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjc3M9eyBhYm91dFBlb3BsZUNvbnRhaW5lciB9PlxuICAgICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIk1hcnF1aXMgS3VydFwiXG4gICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkhlYWQgZGV2ZWxvcGVyIGFuZCBkaXJlY3Rvci4gRW1haWw6IG1hcnF1aXMua3VydEBhbGljZW9zLmFwcFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzQ0NTA2ND9zPTQ2MCZ2PTRcIlxuICAgICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJFbnJhXCJcbiAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRGlyZWN0b3IgYW5kIGRldmVsb3Blci4gRW1haWw6IGVucmFAYWxpY2Vvcy5hcHBcIlxuICAgICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTQ5NzY1MTY/cz00NjAmdj00XCJcbiAgICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiRHVzayBFYWxhaW5cIlxuICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJEaXBsb21hdC4gRW1haWw6IGR1c2suZWFsYWluQGFsaWNlb3MuYXBwXCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJOb2VsaWEgUml2ZXJvc1wiXG4gICAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkFydGlzdC4gRW1haWw6IG5vZWxpYS5yaXZlcm9zQGFsaWNlb3MuYXBwXCJcbiAgICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgLz5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4gIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2VcbiJdfQ== */"));

var AboutPage = function AboutPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_6__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Who are we?"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Project Alice is a group of collaborators, artists, developers, and modders that makes open-source content. Since May 2018, we've been working hard on making frameworks for visual novel developers and great mods for Doki Doki Literature Club. And we always make our work open-source because we just \uD83D\uDC9A the open-source community.")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: aboutPeopleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Marquis Kurt",
    cardDescription: "Head developer and director. Email: marquis.kurt@aliceos.app",
    color: "#fafafa",
    image: "https://avatars1.githubusercontent.com/u/13445064?s=460&v=4",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Enra",
    cardDescription: "Director and developer. Email: enra@aliceos.app",
    color: "#fafafa",
    image: "https://avatars0.githubusercontent.com/u/14976516?s=460&v=4",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Dusk Ealain",
    cardDescription: "Diplomat. Email: dusk.ealain@aliceos.app",
    color: "#fafafa",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Noelia Riveros",
    cardDescription: "Artist. Email: noelia.riveros@aliceos.app",
    color: "#fafafa",
    strictPadding: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ })

})
//# sourceMappingURL=about.js.7f3149fa6f27a9aa0725.hot-update.js.map