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
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuaW1wb3J0IHsgcGFnZUNvbnRlbnRTdHlsZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb25TdHlsZXMnXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCBmb3Jnb3R0ZW5Mb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4tbG9nby5wbmcnO1xuaW1wb3J0IG9wZW5Tb3VyY2VGZWF0dXJlIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mMS5wbmcnO1xuaW1wb3J0IGNoYXB0ZXJSZWxlYXNlRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjIucG5nJztcbmltcG9ydCBjaGFyYWN0ZXJzRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjMucG5nJztcbmltcG9ydCBkZXZlbG9wZXJzRmVhdHVyZSBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZjQuanBnJztcblxuXG5jb25zdCBwYWdlR3JpZENvbnRhaW5lciA9IGNzcyhicmVha3BvaW50cyh7XG4gIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXCIxZnJcIiwgXCIxZnJcIiwgXCJyZXBlYXQoMiwgMWZyKVwiXSxcbiAgZ3JpZEF1dG9Sb3dzOiBcIjFmclwiLFxuICBncmlkQ29sdW1uR2FwOiAyNCxcbiAgZ3JpZFJvd0dhcDogOTYsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgcGFkZGluZ0JvdHRvbTogNjQsXG5cbn0pKVxuXG5jb25zdCBGb3Jnb3R0ZW5QYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiRm9yZ290dGVuXCI+XG4gICAgICA8TWluaU5hdmJhclxuICAgICAgICB0aXRsZT1cIkZvcmdvdHRlblwiXG4gICAgICAgIGljb249eyBmb3Jnb3R0ZW5Mb2dvIH1cbiAgICAgICAgYnV0dG9uVGV4dD1cIlRyeSBkZW1vXCJcbiAgICAgICAgYnV0dG9uTGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS9Qcm9qZWN0QWxpY2VEZXYvc3RlaW4vcmVsZWFzZXMvbGF0ZXN0XCJcbiAgICAgICA+XG4gICAgICAgICA8TGluayBocmVmPVwiL21vZHMvcG9saWNpZXNcIj5cbiAgICAgICAgICAgPGE+UG9saWNpZXM8L2E+XG4gICAgICAgICA8L0xpbms+XG4gICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2plY3RhbGljZWRldi9zdGVpblwiPlxuICAgICAgICAgICA8YT5Tb3VyY2U8L2E+XG4gICAgICAgICA8L0xpbms+XG4gICAgICAgPC9NaW5pTmF2YmFyPlxuICAgICAgPEZyb250cGFnZUhlcm9cbiAgICAgICAgdGl0bGU9XCJEb24ndCBmb3JnZXQgd2hhdCBoYXBwZW5lZC5cIlxuICAgICAgICBzdWJ0aXRsZT1cIlNldCBhZnRlciB0aGUgZXZlbnRzIG9mIERva2kgRG9raSBMaXRlcmF0dXJlIENsdWIhLCB0aGUgTGl0ZXJhdHVyZSBDbHViIHRha2VzIGEgaG9ycmlmaWMgdHVybiBmb3IgdGhlIHdvcnN0IGluIEZvcmdvdHRlbi4gU2F5b3JpIHRha2VzIG9uIHRoZSBjaGFsbGVuZ2VzIG9mIGxlYWRpbmcgdGhlIGxpdGVyYXR1cmUgY2x1YiB3aGlsZSB0aGUgb3RoZXIgbWVtYmVycyBkZWFsIHdpdGggTW9uaWthJ3Mgc3VkZGVuIGRpc2FwcGVhcmFuY2UgYW5kIHRoZSBhcnJpdmFsIG9mIFNheW9uaWthLCBhIGNoZWVyZnVsIGNsYXNzbWF0ZSB3aXRoIGEgcGFzc2lvbiBhbmQgY3JhZnQgaW4gcHJvZ3JhbW1pbmcuIEhvd2V2ZXIsIHdoZW4gc3RyYW5nZSB0aGluZ3Mgc3RhcnQgaGFwcGVuaW5nIGFyb3VuZCBjYW1wdXMgYW5kIHRoZSBuZWlnaGJvcmhvb2QsIGl0J3MgdXAgdG8geW91LCB3aXRoIHRoZSBoZWxwIG9mIG5ld2x5LWFycml2ZWQgQWxpY2UgQW5nZWwsIHRvIGZpbmQgb3V0IHdoYXQncyBnb2luZyBvbiBhbmQgd2hlcmUgTW9uaWthIGRpc2FwcGVhcmVkIHRvLiBDYW4geW91IHVuY292ZXIgdGhlIHRydXRoIGJlZm9yZSBpdCdzIHRvbyBsYXRlP1wiXG4gICAgICAgIGNhbGxUb0FjdGlvblRleHQ9XCJcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgICAgZG9udFNob3dDYWxsVG9BY3Rpb25cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG4gICAgICAgIDxkaXYgY3NzPXsgcGFnZUdyaWRDb250YWluZXIgfT5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkNoYXJhY3RlcnMgZnJvbSB0aGUgY29tbXVuaXR5IHRvIGZhbGwgaW4gbG92ZSB3aXRoLlwiXG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJGb3Jnb3R0ZW4gYnJpbmdzIG5ldyBjaGFyYWN0ZXJzIHRoYXQgeW91IGFscmVhZHkga25vdyBhbmQgbG92ZSB0byB0aGUgdGFibGUuIFRoZSB2ZW5lcmFibGUgQWxpY2UgQW5nZWwgZnJvbSBCZW5jeSBhbmQgdGhlIEluayBNYWNoaW5lIGFuZCBTYXlvbmlrYSBmcm9tIHRoZSBTYXlvbmlrYSB0ZWFtIGpvaW4gZm9yY2VzIHRvIGhlbHAgc29sdmUgdGhlIG15c3RlcnkuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgaW1hZ2U9eyBjaGFyYWN0ZXJzRmVhdHVyZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBpbWFnZU9uVG9wXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQW50aWNpcGF0ZSB0aGUgbmV4dCByZWxlYXNlLiBDb250aW51ZSB0aGUgc3RvcnkuXCJcbiAgICAgICAgICAgIGNhcmREZXNjcmlwdGlvbj1cIkZvcmdvdHRlbiB1cGRhdGVzIGFyZSByZWxlYXNlZCBvbiBhIGNoYXB0ZXItYnktY2hhcHRlciBiYXNpcywgbGV0dGluZyBwbGF5ZXJzIGZlZWwgdGhlIGV4cGVyaWVuY2UgYW5kIGtlZXAgcGxheWluZyB3aXRoIGV2ZXJ5IG5ldyB1cGRhdGUuIEFuZCwgc2luY2UgZWFjaCByZWxlYXNlIGltcHJvdmVzIG9uIHByZXZpb3VzIGNoYXB0ZXJzLCBwbGF5ZXJzIHRoYXQgd2FudCB0byBzdGFydCBvdmVyIHdpbGwgZ2V0IHRvIHNlZSBuZXcgaW1wcm92ZW1lbnRzLlwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmYWZhZmFcIlxuICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIGltYWdlID0geyBjaGFwdGVyUmVsZWFzZUZlYXR1cmUgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkNvbXBsZXRlbHkgb3BlbiB0byBldmVyeW9uZS4gUmlnaHQgZG93biB0byB0aGUgdGhlIHNvdXJjZS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRm9yZ290dGVuIGlzIGZyZWUgYW5kIG9wZW4tc291cmNlIHNvZnR3YXJlLCBsaWNlbnNlZCB1bmRlciB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UuIFdoZXRoZXIgaXQncyB0YWtpbmcgYSBsb29rIGF0IGhvdyBGb3Jnb3R0ZW4gaXMgbWFkZSBvciBjcmVhdGluZyBhIG5ldyBzcGlub2ZmIG9mIHRoZSBvcmlnaW5hbCBzdG9yeSwgdGhlIGNvZGUgaXMgZnJlZWx5IGF2YWlsYWJsZSBvbiBHaXRIdWIuIFdlIGFsc28gYWxsb3cgY29udHJpYnV0aW9ucyBmcm9tIHRoZSBjb21tdW5pdHkgdG8gbWFrZSBGb3Jnb3R0ZW4gdGhlIGJlc3QgbW9kIGl0IGNhbiBiZSwgcmV2aWV3aW5nIGlzc3VlcyBhbmQgcHVsbCByZXF1ZXN0cyByZWd1bGFybHkuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBub1NoYWRvdz17IHRydWUgfVxuICAgICAgICAgICAgaW1hZ2U9eyBvcGVuU291cmNlRmVhdHVyZSB9XG4gICAgICAgICAgICBzdHJpY3RQYWRkaW5nXG4gICAgICAgICAgICBpbWFnZU9uVG9wXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgIHRpdGxlPVwiQSBtb2QgZGV2ZWxvcGVycyB3aWxsIGFic29sdXRlbHkgbG92ZSh0bzogLmRlYXRoKS5cIlxuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiRGV2ZWxvcGVycyB3aWxsIGxvdmUgdGlua2VyaW5nIGFyb3VuZCB3aXRoIEZvcmdvdHRlbidzIGNvZGUuIEZvcmdvdHRlbiBzdXBwb3J0cyBTYXlvbmlrYSdzIFF1aWNrU3RhcnQgc2NyaXB0cyBmb3IgVHJhdmlzIENJIGRlcGxveW1lbnQgYW5kIGlzIG9uZSBvZiB0aGUgZmlyc3QgcHJvamVjdHMgdG8gaGF2ZSBYY29kZSBzdXBwb3J0LiBGb3Jnb3R0ZW4gaXMgYWxzbyBidWlsdCBvbiB0b3Agb2YgQWxpY2VPUywgb3VyIHJvYnVzdCBhbmQgZXZvbHZpbmcgZnJhbWV3b3JrIGZvciBkZXZlbG9waW5nIGludGVyYWN0aXZlIHZpc3VhbCBub3ZlbCBleHBlcmllbmNlcyB3aXRoIG9wZXJhdGluZyBzeXN0ZW0tbGlrZSBmZWF0dXJlcyBzdWNoIGFzIG5vdGlmaWNhdGlvbnMgYW5kIHNldHVwIGFzc2lzdGFudHMuXCJcbiAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICBpbWFnZT17IGRldmVsb3BlcnNGZWF0dXJlIH1cbiAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgIG5vU2hhZG93PXsgdHJ1ZSB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxzbWFsbD5cbiAgICAgICAgICBYY29kZSBpcyBhIHRyYWRlbWFyayBvZiBBcHBsZSBJbmMuLCByZWdpc3RlcmVkIGluIHRoZSBVLlMuIGFuZCBvdGhlciBjb3VudHJpZXMuIFNheW9uaWthIGlzIGEgdHJhZGVtYXJrIG9mIHRoZSBTYXlvbmlrYSBwcm9qZWN0LlxuICAgICAgICA8L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290dGVuUGFnZVxuIl19 */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
      lineNumber: 51
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_8__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 61
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
      lineNumber: 70
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
      lineNumber: 78
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
      lineNumber: 87
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Xcode is a trademark of Apple Inc., registered in the U.S. and other countries. Sayonika is a trademark of the Sayonika project.")));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.56481f6fed59c0e1e86d.hot-update.js.map