webpackHotUpdate("static/development/pages/mods/forgotten.js",{

/***/ "./pages/mods/forgotten.tsx":
/*!**********************************!*\
  !*** ./pages/mods/forgotten.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FrontpageHero */ "./components/FrontpageHero.tsx");
/* harmony import */ var _components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MiniNavbar */ "./components/MiniNavbar.tsx");
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/breakpoints */ "./utils/breakpoints.ts");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-hero_alt.png */ "./assets/mods/forgotten/forgotten-hero_alt.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-logo.png */ "./assets/mods/forgotten/forgotten-logo.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/mods/forgotten/f1.png */ "./assets/mods/forgotten/f1.png");
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/mods/forgotten/f2.png */ "./assets/mods/forgotten/f2.png");
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/mods/forgotten/f3.png */ "./assets/mods/forgotten/f3.png");
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/mods/forgotten/f4.jpg */ "./assets/mods/forgotten/f4.jpg");
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/mods/forgotten.tsx";







/** @jsx jsx */








var pageContentStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
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
}), "label:pageContentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QjBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5pbXBvcnQgb3BlblNvdXJjZUZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YxLnBuZyc7XG5pbXBvcnQgY2hhcHRlclJlbGVhc2VGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMi5wbmcnO1xuaW1wb3J0IGNoYXJhY3RlcnNGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMy5wbmcnO1xuaW1wb3J0IGRldmVsb3BlcnNGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mNC5qcGcnO1xuXG5cbmNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmNvbnN0IHBhZ2VHcmlkQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgyLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcblxufSkpXG5cbmNvbnN0IEZvcmdvdHRlblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJGb3Jnb3R0ZW5cIj5cbiAgICAgIDxNaW5pTmF2YmFyXG4gICAgICAgIHRpdGxlPVwiRm9yZ290dGVuXCJcbiAgICAgICAgaWNvbj17IGZvcmdvdHRlbkxvZ28gfVxuICAgICAgICBidXR0b25UZXh0PVwiVHJ5IGRlbW9cIlxuICAgICAgICBidXR0b25MaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL1Byb2plY3RBbGljZURldi9zdGVpbi9yZWxlYXNlcy9sYXRlc3RcIlxuICAgICAgID5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kcy9wb2xpY2llc1wiPlxuICAgICAgICAgICA8YT5Qb2xpY2llczwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvamVjdGFsaWNlZGV2L3N0ZWluXCI+XG4gICAgICAgICAgIDxhPlNvdXJjZTwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L01pbmlOYXZiYXI+XG4gICAgICA8RnJvbnRwYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIkRvbid0IGZvcmdldCB3aGF0IGhhcHBlbmVkLlwiXG4gICAgICAgIHN1YnRpdGxlPVwiU2V0IGFmdGVyIHRoZSBldmVudHMgb2YgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1YiEsIHRoZSBMaXRlcmF0dXJlIENsdWIgdGFrZXMgYSBob3JyaWZpYyB0dXJuIGZvciB0aGUgd29yc3QgaW4gRm9yZ290dGVuLiBGaW5kIG91dCB3aGF0IGhhcHBlbmVkIHRvIE1vbmlrYSBiZWZvcmUgaXQncyB0b28gbGF0ZS5cIlxuICAgICAgICBjYWxsVG9BY3Rpb25UZXh0PVwiXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uTGluaz1cIlwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZUxvY2F0aW9uPXsgZm9yZ290dGVuSGVybyB9XG4gICAgICAgIGRvbnRTaG93Q2FsbFRvQWN0aW9uXG4gICAgICAvPlxuICAgICAgPGRpdiBjc3M9eyBwYWdlQ29udGVudFN0eWxlcyB9PlxuICAgICAgICA8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDaGFyYWN0ZXJzIGZyb20gdGhlIGNvbW11bml0eSB0byBmYWxsIGluIGxvdmUgd2l0aC5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGJyaW5ncyBuZXcgY2hhcmFjdGVycyB0aGF0IHlvdSBhbHJlYWR5IGtub3cgYW5kIGxvdmUgdG8gdGhlIHRhYmxlLiBUaGUgdmVuZXJhYmxlIEFsaWNlIEFuZ2VsIGZyb20gQmVuY3kgYW5kIHRoZSBJbmsgTWFjaGluZSBhbmQgU2F5b25pa2EgZnJvbSB0aGUgU2F5b25pa2EgdGVhbSBqb2luIGZvcmNlcyB0byBoZWxwIHNvbHZlIHRoZSBteXN0ZXJ5LlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH1cbiAgICAgICAgICAgIGltYWdlPXsgY2hhcmFjdGVyc0ZlYXR1cmUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2VPblRvcFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFudGljaXBhdGUgdGhlIG5leHQgcmVsZWFzZS4gRmVlbCB0aGUgaG9ycm9yIGFnYWluLlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gdXBkYXRlcyBhcmUgcmVsZWFzZWQgd2l0aCBuZXcgY2hhcHRlcnMgdG8gZXhwYW5kIHRoZSBzdG9yeSwgZ2l2aW5nIHBsYXllcnMgYSBjbGlmZmhhbmdlciBleHBlcmllbmNlIGFuZCBsZXR0aW5nIHRoZW0gYW50aWNpcGF0ZSBmdXJ0aGVyIGFkZGl0aW9ucyB0byB0aGUgc3RvcnkuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2UgPSB7IGNoYXB0ZXJSZWxlYXNlRmVhdHVyZSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVseSBvcGVuLiBSaWdodCBkb3duIHRvIHRoZSB0aGUgc291cmNlLlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gaXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUsIGxpY2Vuc2VkIHVuZGVyIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZS4gV2hldGhlciBpdCdzIHRha2luZyBhIGxvb2sgYXQgaG93IEZvcmdvdHRlbiBpcyBtYWRlIG9yIGNyZWF0aW5nIGEgbmV3IHNwaW5vZmYgb2YgdGhlIG9yaWdpbmFsIHN0b3JlLCB0aGUgY29kZSBpcyBmcmVlbHkgYXZhaWxhYmxlIG9uIEdpdEh1Yi5cIlxuICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9XG4gICAgICAgICAgICBpbWFnZT17IG9wZW5Tb3VyY2VGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIGltYWdlT25Ub3BcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJBIG1vZCBkZXZlbG9wZXJzIHdpbGwgYWJzb2x1dGVseSBsb3ZlKCkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRldmVsb3BlcnMgd2lsbCBsb3ZlIHRpbmtlcmluZyBhcm91bmQgd2l0aCBGb3Jnb3R0ZW4ncyBjb2RlLiBGb3Jnb3R0ZW4gc3VwcG9ydHMgU2F5b25pa2EncyBRdWlja1N0YXJ0IHNjcmlwdHMgZm9yIFRyYXZpcyBDSSBkZXBsb3ltZW50IGFuZCBpcyBvbmUgb2YgdGhlIGZpcnN0IHByb2plY3RzIHRvIGhhdmUgWGNvZGUgc3VwcG9ydCwgbWVhbmluZyBkZXZlbG9wZXJzIGNhbiB0YWtlIGFkdmFudGFnZSBvZiBYY29kZSdzIGFkdmFuY2VkIGZlYXR1cmVzLiBGb3Jnb3R0ZW4gaXMgYWxzbyBidWlsdCBvbiB0b3Agb2YgQWxpY2VPUywgb3VyIHJvYnVzdCBhbmQgZXZvbHZpbmcgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIGludGVyYWN0aXZlIHZpc3VhbCBub3ZlbCBleHBlcmllbmNlcyB3aXRoIG9wZXJhdGluZyBzeXN0ZW0tbGlrZSBmZWF0dXJlcyBzdWNoIGFzIG5vdGlmaWNhdGlvbnMgYW5kIHNldHVwIGFzc2lzdGFudHMuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBpbWFnZT17IGRldmVsb3BlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3R0ZW5QYWdlXG4iXX0= */"));
var pageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5pbXBvcnQgb3BlblNvdXJjZUZlYXR1cmUgZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2YxLnBuZyc7XG5pbXBvcnQgY2hhcHRlclJlbGVhc2VGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMi5wbmcnO1xuaW1wb3J0IGNoYXJhY3RlcnNGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMy5wbmcnO1xuaW1wb3J0IGRldmVsb3BlcnNGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mNC5qcGcnO1xuXG5cbmNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmNvbnN0IHBhZ2VHcmlkQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgyLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA5NixcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcblxufSkpXG5cbmNvbnN0IEZvcmdvdHRlblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJGb3Jnb3R0ZW5cIj5cbiAgICAgIDxNaW5pTmF2YmFyXG4gICAgICAgIHRpdGxlPVwiRm9yZ290dGVuXCJcbiAgICAgICAgaWNvbj17IGZvcmdvdHRlbkxvZ28gfVxuICAgICAgICBidXR0b25UZXh0PVwiVHJ5IGRlbW9cIlxuICAgICAgICBidXR0b25MaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL1Byb2plY3RBbGljZURldi9zdGVpbi9yZWxlYXNlcy9sYXRlc3RcIlxuICAgICAgID5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kcy9wb2xpY2llc1wiPlxuICAgICAgICAgICA8YT5Qb2xpY2llczwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvamVjdGFsaWNlZGV2L3N0ZWluXCI+XG4gICAgICAgICAgIDxhPlNvdXJjZTwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L01pbmlOYXZiYXI+XG4gICAgICA8RnJvbnRwYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIkRvbid0IGZvcmdldCB3aGF0IGhhcHBlbmVkLlwiXG4gICAgICAgIHN1YnRpdGxlPVwiU2V0IGFmdGVyIHRoZSBldmVudHMgb2YgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1YiEsIHRoZSBMaXRlcmF0dXJlIENsdWIgdGFrZXMgYSBob3JyaWZpYyB0dXJuIGZvciB0aGUgd29yc3QgaW4gRm9yZ290dGVuLiBGaW5kIG91dCB3aGF0IGhhcHBlbmVkIHRvIE1vbmlrYSBiZWZvcmUgaXQncyB0b28gbGF0ZS5cIlxuICAgICAgICBjYWxsVG9BY3Rpb25UZXh0PVwiXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uTGluaz1cIlwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZUxvY2F0aW9uPXsgZm9yZ290dGVuSGVybyB9XG4gICAgICAgIGRvbnRTaG93Q2FsbFRvQWN0aW9uXG4gICAgICAvPlxuICAgICAgPGRpdiBjc3M9eyBwYWdlQ29udGVudFN0eWxlcyB9PlxuICAgICAgICA8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDaGFyYWN0ZXJzIGZyb20gdGhlIGNvbW11bml0eSB0byBmYWxsIGluIGxvdmUgd2l0aC5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGJyaW5ncyBuZXcgY2hhcmFjdGVycyB0aGF0IHlvdSBhbHJlYWR5IGtub3cgYW5kIGxvdmUgdG8gdGhlIHRhYmxlLiBUaGUgdmVuZXJhYmxlIEFsaWNlIEFuZ2VsIGZyb20gQmVuY3kgYW5kIHRoZSBJbmsgTWFjaGluZSBhbmQgU2F5b25pa2EgZnJvbSB0aGUgU2F5b25pa2EgdGVhbSBqb2luIGZvcmNlcyB0byBoZWxwIHNvbHZlIHRoZSBteXN0ZXJ5LlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH1cbiAgICAgICAgICAgIGltYWdlPXsgY2hhcmFjdGVyc0ZlYXR1cmUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2VPblRvcFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFudGljaXBhdGUgdGhlIG5leHQgcmVsZWFzZS4gRmVlbCB0aGUgaG9ycm9yIGFnYWluLlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gdXBkYXRlcyBhcmUgcmVsZWFzZWQgd2l0aCBuZXcgY2hhcHRlcnMgdG8gZXhwYW5kIHRoZSBzdG9yeSwgZ2l2aW5nIHBsYXllcnMgYSBjbGlmZmhhbmdlciBleHBlcmllbmNlIGFuZCBsZXR0aW5nIHRoZW0gYW50aWNpcGF0ZSBmdXJ0aGVyIGFkZGl0aW9ucyB0byB0aGUgc3RvcnkuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2UgPSB7IGNoYXB0ZXJSZWxlYXNlRmVhdHVyZSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQ29tcGxldGVseSBvcGVuLiBSaWdodCBkb3duIHRvIHRoZSB0aGUgc291cmNlLlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gaXMgZnJlZSBhbmQgb3Blbi1zb3VyY2Ugc29mdHdhcmUsIGxpY2Vuc2VkIHVuZGVyIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZS4gV2hldGhlciBpdCdzIHRha2luZyBhIGxvb2sgYXQgaG93IEZvcmdvdHRlbiBpcyBtYWRlIG9yIGNyZWF0aW5nIGEgbmV3IHNwaW5vZmYgb2YgdGhlIG9yaWdpbmFsIHN0b3JlLCB0aGUgY29kZSBpcyBmcmVlbHkgYXZhaWxhYmxlIG9uIEdpdEh1Yi5cIlxuICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9XG4gICAgICAgICAgICBpbWFnZT17IG9wZW5Tb3VyY2VGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIGltYWdlT25Ub3BcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJBIG1vZCBkZXZlbG9wZXJzIHdpbGwgYWJzb2x1dGVseSBsb3ZlKCkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRldmVsb3BlcnMgd2lsbCBsb3ZlIHRpbmtlcmluZyBhcm91bmQgd2l0aCBGb3Jnb3R0ZW4ncyBjb2RlLiBGb3Jnb3R0ZW4gc3VwcG9ydHMgU2F5b25pa2EncyBRdWlja1N0YXJ0IHNjcmlwdHMgZm9yIFRyYXZpcyBDSSBkZXBsb3ltZW50IGFuZCBpcyBvbmUgb2YgdGhlIGZpcnN0IHByb2plY3RzIHRvIGhhdmUgWGNvZGUgc3VwcG9ydCwgbWVhbmluZyBkZXZlbG9wZXJzIGNhbiB0YWtlIGFkdmFudGFnZSBvZiBYY29kZSdzIGFkdmFuY2VkIGZlYXR1cmVzLiBGb3Jnb3R0ZW4gaXMgYWxzbyBidWlsdCBvbiB0b3Agb2YgQWxpY2VPUywgb3VyIHJvYnVzdCBhbmQgZXZvbHZpbmcgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIGludGVyYWN0aXZlIHZpc3VhbCBub3ZlbCBleHBlcmllbmNlcyB3aXRoIG9wZXJhdGluZyBzeXN0ZW0tbGlrZSBmZWF0dXJlcyBzdWNoIGFzIG5vdGlmaWNhdGlvbnMgYW5kIHNldHVwIGFzc2lzdGFudHMuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBpbWFnZT17IGRldmVsb3BlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3Jnb3R0ZW5QYWdlXG4iXX0= */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Source"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Don't forget what happened.",
    subtitle: "Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Find out what happened to Monika before it's too late.",
    callToActionText: "",
    callToActionLink: "",
    backgroundImageLocation: _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    dontShowCallToAction: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageContentStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Characters from the community to fall in love with.",
    cardDescription: "Forgotten brings new characters that you already know and love to the table. The venerable Alice Angel from Bency and the Ink Machine and Sayonika from the Sayonika team join forces to help solve the mystery.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Anticipate the next release. Feel the horror again.",
    cardDescription: "Forgotten updates are released with new chapters to expand the story, giving players a cliffhanger experience and letting them anticipate further additions to the story.",
    color: "#fafafa",
    noShadow: true,
    strictPadding: true,
    image: _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Completely open. Right down to the the source.",
    cardDescription: "Forgotten is free and open-source software, licensed under the GNU General Public License. Whether it's taking a look at how Forgotten is made or creating a new spinoff of the original store, the code is freely available on GitHub.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "A mod developers will absolutely love().",
    cardDescription: "Developers will love tinkering around with Forgotten's code. Forgotten supports Sayonika's QuickStart scripts for Travis CI deployment and is one of the first projects to have Xcode support, meaning developers can take advantage of Xcode's advanced features. Forgotten is also built on top of AliceOS, our robust and evolving framework for developing interactive visual novel experiences with operating system-like features such as notifications and setup assistants.",
    color: "#fafafa",
    image: _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    strictPadding: true,
    noShadow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.e78717ebfb19f64ea316.hot-update.js.map