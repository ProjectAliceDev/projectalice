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
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/commonStyles */ "./utils/commonStyles.tsx");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-hero_alt.png */ "./assets/mods/forgotten/forgotten-hero_alt.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-logo.png */ "./assets/mods/forgotten/forgotten-logo.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/mods/forgotten/f1.png */ "./assets/mods/forgotten/f1.png");
/* harmony import */ var _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/mods/forgotten/f2.png */ "./assets/mods/forgotten/f2.png");
/* harmony import */ var _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/mods/forgotten/f3.png */ "./assets/mods/forgotten/f3.png");
/* harmony import */ var _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/mods/forgotten/f4.jpg */ "./assets/mods/forgotten/f4.jpg");
/* harmony import */ var _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/mods/forgotten.tsx";







/** @jsx jsx */









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
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IHsgcGFnZUNvbnRlbnRTdHlsZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25TdHlsZXMnXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCBmb3Jnb3R0ZW5Mb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4tbG9nby5wbmcnO1xuaW1wb3J0IG9wZW5Tb3VyY2VGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMS5wbmcnO1xuaW1wb3J0IGNoYXB0ZXJSZWxlYXNlRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjIucG5nJztcbmltcG9ydCBjaGFyYWN0ZXJzRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjMucG5nJztcbmltcG9ydCBkZXZlbG9wZXJzRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjQuanBnJztcblxuXG5jb25zdCBwYWdlR3JpZENvbnRhaW5lciA9IGNzcyhicmVha3BvaW50cyh7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG59KSlcblxuY29uc3QgRm9yZ290dGVuUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIkZvcmdvdHRlblwiPlxuICAgICAgPE1pbmlOYXZiYXJcbiAgICAgICAgdGl0bGU9XCJGb3Jnb3R0ZW5cIlxuICAgICAgICBpY29uPXsgZm9yZ290dGVuTG9nbyB9XG4gICAgICAgIGJ1dHRvblRleHQ9XCJUcnkgZGVtb1wiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vUHJvamVjdEFsaWNlRGV2L3N0ZWluL3JlbGVhc2VzL2xhdGVzdFwiXG4gICAgICAgPlxuICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RzL3BvbGljaWVzXCI+XG4gICAgICAgICAgIDxhPlBvbGljaWVzPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9qZWN0YWxpY2VkZXYvc3RlaW5cIj5cbiAgICAgICAgICAgPGE+U291cmNlPC9hPlxuICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvTWluaU5hdmJhcj5cbiAgICAgIDxGcm9udHBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiRG9uJ3QgZm9yZ2V0IHdoYXQgaGFwcGVuZWQuXCJcbiAgICAgICAgc3VidGl0bGU9XCJTZXQgYWZ0ZXIgdGhlIGV2ZW50cyBvZiBEb2tpIERva2kgTGl0ZXJhdHVyZSBDbHViISwgdGhlIExpdGVyYXR1cmUgQ2x1YiB0YWtlcyBhIGhvcnJpZmljIHR1cm4gZm9yIHRoZSB3b3JzdCBpbiBGb3Jnb3R0ZW4uIFNheW9yaSB0YWtlcyBvbiB0aGUgY2hhbGxlbmdlcyBvZiBsZWFkaW5nIHRoZSBsaXRlcmF0dXJlIGNsdWIgd2hpbGUgdGhlIG90aGVyIG1lbWJlcnMgZGVhbCB3aXRoIE1vbmlrYSdzIHN1ZGRlbiBkaXNhcHBlYXJhbmNlIGFuZCB0aGUgYXJyaXZhbCBvZiBTYXlvbmlrYSwgYSBjaGVlcmZ1bCBjbGFzc21hdGUgd2l0aCBhIHBhc3Npb24gYW5kIGNyYWZ0IGluIHByb2dyYW1taW5nLiBIb3dldmVyLCB3aGVuIHN0cmFuZ2UgdGhpbmdzIHN0YXJ0IGhhcHBlbmluZyBhcm91bmQgY2FtcHVzIGFuZCB0aGUgbmVpZ2hib3Job29kLCBpdCdzIHVwIHRvIHlvdSwgd2l0aCB0aGUgaGVscCBvZiBuZXdseS1hcnJpdmVkIEFsaWNlIEFuZ2VsLCB0byBmaW5kIG91dCB3aGF0J3MgZ29pbmcgb24gYW5kIHdoZXJlIE1vbmlrYSBkaXNhcHBlYXJlZCB0by4gQ2FuIHlvdSB1bmNvdmVyIHRoZSB0cnV0aCBiZWZvcmUgaXQncyB0b28gbGF0ZT9cIlxuICAgICAgICBjYWxsVG9BY3Rpb25UZXh0PVwiXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uTGluaz1cIlwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZUxvY2F0aW9uPXsgZm9yZ290dGVuSGVybyB9XG4gICAgICAgIGRvbnRTaG93Q2FsbFRvQWN0aW9uXG4gICAgICAvPlxuICAgICAgPGRpdiBjc3M9eyBwYWdlQ29udGVudFN0eWxlcyB9PlxuICAgICAgICA8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDaGFyYWN0ZXJzIGZyb20gdGhlIGNvbW11bml0eSB0byBmYWxsIGluIGxvdmUgd2l0aC5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGJyaW5ncyBuZXcgY2hhcmFjdGVycyB0aGF0IHlvdSBhbHJlYWR5IGtub3cgYW5kIGxvdmUgdG8gdGhlIHRhYmxlLiBUaGUgdmVuZXJhYmxlIEFsaWNlIEFuZ2VsIGZyb20gQmVuY3kgYW5kIHRoZSBJbmsgTWFjaGluZSBhbmQgU2F5b25pa2EgZnJvbSB0aGUgU2F5b25pa2EgdGVhbSBqb2luIGZvcmNlcyB0byBoZWxwIHNvbHZlIHRoZSBteXN0ZXJ5LlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH1cbiAgICAgICAgICAgIGltYWdlPXsgY2hhcmFjdGVyc0ZlYXR1cmUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2VPblRvcFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkFudGljaXBhdGUgdGhlIG5leHQgcmVsZWFzZS4gQ29udGludWUgdGhlIHN0b3J5LlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gdXBkYXRlcyBhcmUgcmVsZWFzZWQgb24gYSBjaGFwdGVyLWJ5LWNoYXB0ZXIgYmFzaXMsIGxldHRpbmcgcGxheWVycyBmZWVsIHRoZSBleHBlcmllbmNlIGFuZCBrZWVwIHBsYXlpbmcgd2l0aCBldmVyeSBuZXcgdXBkYXRlLiBBbmQsIHNpbmNlIGVhY2ggcmVsZWFzZSBpbXByb3ZlcyBvbiBwcmV2aW91cyBjaGFwdGVycywgcGxheWVycyB0aGF0IHdhbnQgdG8gc3RhcnQgb3ZlciB3aWxsIGdldCB0byBzZWUgbmV3IGltcHJvdmVtZW50cy5cIlxuICAgICAgICAgICAgY29sb3I9XCIjZmFmYWZhXCJcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBpbWFnZSA9IHsgY2hhcHRlclJlbGVhc2VGZWF0dXJlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDb21wbGV0ZWx5IG9wZW4gdG8gZXZlcnlvbmUuIFJpZ2h0IGRvd24gdG8gdGhlIHRoZSBzb3VyY2UuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkZvcmdvdHRlbiBpcyBmcmVlIGFuZCBvcGVuLXNvdXJjZSBzb2Z0d2FyZSwgbGljZW5zZWQgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlLiBXaGV0aGVyIGl0J3MgdGFraW5nIGEgbG9vayBhdCBob3cgRm9yZ290dGVuIGlzIG1hZGUgb3IgY3JlYXRpbmcgYSBuZXcgc3Bpbm9mZiBvZiB0aGUgb3JpZ2luYWwgc3RvcnksIHRoZSBjb2RlIGlzIGZyZWVseSBhdmFpbGFibGUgb24gR2l0SHViLiBXZSBhbHNvIGFsbG93IGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgY29tbXVuaXR5IHRvIG1ha2UgRm9yZ290dGVuIHRoZSBiZXN0IG1vZCBpdCBjYW4gYmUsIHJldmlld2luZyBpc3N1ZXMgYW5kIHB1bGwgcmVxdWVzdHMgcmVndWxhcmx5LlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH1cbiAgICAgICAgICAgIGltYWdlPXsgb3BlblNvdXJjZUZlYXR1cmUgfVxuICAgICAgICAgICAgc3RyaWN0UGFkZGluZ1xuICAgICAgICAgICAgaW1hZ2VPblRvcFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkEgbW9kIGRldmVsb3BlcnMgd2lsbCBhYnNvbHV0ZWx5IGxvdmUodG86IC5kZWF0aCkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkRldmVsb3BlcnMgd2lsbCBsb3ZlIHRpbmtlcmluZyBhcm91bmQgd2l0aCBGb3Jnb3R0ZW4ncyBjb2RlLiBGb3Jnb3R0ZW4gc3VwcG9ydHMgU2F5b25pa2EncyBRdWlja1N0YXJ0IHNjcmlwdHMgZm9yIFRyYXZpcyBDSSBkZXBsb3ltZW50IGFuZCBpcyBvbmUgb2YgdGhlIGZpcnN0IHByb2plY3RzIHRvIGhhdmUgWGNvZGUgc3VwcG9ydC4gRm9yZ290dGVuIGlzIGFsc28gYnVpbHQgb24gdG9wIG9mIEFsaWNlT1MsIG91ciByb2J1c3QgYW5kIGV2b2x2aW5nIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyBpbnRlcmFjdGl2ZSB2aXN1YWwgbm92ZWwgZXhwZXJpZW5jZXMgd2l0aCBvcGVyYXRpbmcgc3lzdGVtLWxpa2UgZmVhdHVyZXMgc3VjaCBhcyBub3RpZmljYXRpb25zIGFuZCBzZXR1cCBhc3Npc3RhbnRzLlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgaW1hZ2U9eyBkZXZlbG9wZXJzRmVhdHVyZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgICA8c21hbGw+XG4gICAgICAgICAgWGNvZGUgaXMgYSB0cmFkZW1hcmsgb2YgQXBwbGUgSW5jLiwgcmVnaXN0ZXJlZCBpbiB0aGUgVS5TLiBhbmQgb3RoZXIgY291bnRyaWVzLiBTYXlvbmlrYSBpcyBhIHRyYWRlbWFyayBvZiB0aGUgU2F5b25pa2EgcHJvamVjdC5cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmdvdHRlblBhZ2VcbiJdfQ== */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Source"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Don't forget what happened.",
    subtitle: "Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Sayori takes on the challenges of leading the literature club while the other members deal with Monika's sudden disappearance and the arrival of Sayonika, a cheerful classmate with a passion and craft in programming. However, when strange things start happening around campus and the neighborhood, it's up to you, with the help of newly-arrived Alice Angel, to find out what's going on and where Monika disappeared to. Can you uncover the truth before it's too late?",
    callToActionText: "",
    callToActionLink: "",
    backgroundImageLocation: _assets_mods_forgotten_forgotten_hero_alt_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    dontShowCallToAction: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_8__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Characters from the community to fall in love with.",
    cardDescription: "Forgotten brings new characters that you already know and love to the table. The venerable Alice Angel from Bency and the Ink Machine and Sayonika from the Sayonika team join forces to help solve the mystery.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f3_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Anticipate the next release. Continue the story.",
    cardDescription: "Forgotten updates are released on a chapter-by-chapter basis, letting players feel the experience and keep playing with every new update. And, since each release improves on previous chapters, players that want to start over will get to see new improvements.",
    color: "#fafafa",
    noShadow: true,
    strictPadding: true,
    image: _assets_mods_forgotten_f2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Completely open to everyone. Right down to the the source.",
    cardDescription: "Forgotten is free and open-source software, licensed under the GNU General Public License. Whether it's taking a look at how Forgotten is made or creating a new spinoff of the original story, the code is freely available on GitHub. We also allow contributions from the community to make Forgotten the best mod it can be, reviewing issues and pull requests regularly.",
    color: "#fafafa",
    noShadow: true,
    image: _assets_mods_forgotten_f1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    strictPadding: true,
    imageOnTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "A mod developers will absolutely love(to: .death).",
    cardDescription: "Developers will love tinkering around with Forgotten's code. Forgotten supports Sayonika's QuickStart scripts for Travis CI deployment and is one of the first projects to have Xcode support. Forgotten is also built on top of AliceOS, our robust and evolving framework for developing interactive visual novel experiences with operating system-like features such as notifications and setup assistants.",
    color: "#fafafa",
    image: _assets_mods_forgotten_f4_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    strictPadding: true,
    noShadow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Xcode is a trademark of Apple Inc., registered in the U.S. and other countries. Sayonika is a trademark of the Sayonika project.")));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.e51efc4187eae97b5d4c.hot-update.js.map