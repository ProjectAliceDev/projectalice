webpackHotUpdate("static/development/pages/mods.js",{

/***/ "./pages/mods/index.tsx":
/*!******************************!*\
  !*** ./pages/mods/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FrontpageHero */ "./components/FrontpageHero.tsx");
/* harmony import */ var _components_Subnavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Subnavbar */ "./components/Subnavbar.tsx");
/* harmony import */ var _components_SubnavbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SubnavbarItem */ "./components/SubnavbarItem.tsx");
/* harmony import */ var _components_BasicCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/BasicCard */ "./components/BasicCard.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _utils_commonStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/commonStyles */ "./utils/commonStyles.tsx");
/* harmony import */ var _utils_breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/breakpoints */ "./utils/breakpoints.ts");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-hero.png */ "./assets/mods/forgotten/forgotten-hero.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_hero_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_hero_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_mods_tar_tar_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/mods/tar/tar-logo.png */ "./assets/mods/tar/tar-logo.png");
/* harmony import */ var _assets_mods_tar_tar_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_tar_tar_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/mods/forgotten/forgotten-logo.png */ "./assets/mods/forgotten/forgotten-logo.png");
/* harmony import */ var _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_mods_tar_tar_bg_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/mods/tar/tar-bg.png */ "./assets/mods/tar/tar-bg.png");
/* harmony import */ var _assets_mods_tar_tar_bg_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_mods_tar_tar_bg_png__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/mods/index.tsx";







/** @jsx jsx */







var pageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_8__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 96,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CMEIiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvcGFnZXMvbW9kcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgRnJvbnRwYWdlSGVybyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zyb250cGFnZUhlcm8nXG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3VibmF2YmFyJ1xuaW1wb3J0IFN1Ym5hdmJhckl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdWJuYXZiYXJJdGVtJ1xuaW1wb3J0IEJhc2ljQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2ljQ2FyZCdcblxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBwYWdlQ29udGVudFN0eWxlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblN0eWxlcydcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYnJlYWtwb2ludHMnXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyby5wbmcnO1xuaW1wb3J0IHRoZUFuZ2VsUmV0dXJuc0xvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvdGFyL3Rhci1sb2dvLnBuZyc7XG5pbXBvcnQgZm9yZ290dGVuTG9nbyBmcm9tICcuLi8uLi9hc3NldHMvbW9kcy9mb3Jnb3R0ZW4vZm9yZ290dGVuLWxvZ28ucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCBwb2xpY2llc0hlcm9JbWFnZSBmcm9tICcuLi8uLi9hc3NldHMvcG9saWNpZXMuanBnJztcblxuY29uc3QgcGFnZUdyaWRDb250YWluZXIgPSBjc3MoYnJlYWtwb2ludHMoe1xuICBkaXNwbGF5OiBcImdyaWRcIixcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1wiMWZyXCIsIFwiMWZyXCIsIFwicmVwZWF0KDIsIDFmcilcIl0sXG4gIGdyaWRBdXRvUm93czogXCIxZnJcIixcbiAgZ3JpZENvbHVtbkdhcDogMjQsXG4gIGdyaWRSb3dHYXA6IDk2LFxuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxufSkpO1xuXG5jb25zdCBNb2RzTGFuZGluZ1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJNb2RzXCI+XG4gICAgICA8U3ViTmF2YmFyPlxuICAgICAgICA8U3VibmF2YmFySXRlbSBuYW1lPVwiVGhlIEFuZ2VsIFJldHVybnNcIiBpY29uPXsgdGhlQW5nZWxSZXR1cm5zTG9nbyB9IGxpbmtzVG89XCIvbW9kcy90aGUtYW5nZWwtcmV0dXJuc1wiLz5cbiAgICAgICAgPFN1Ym5hdmJhckl0ZW0gbmFtZT1cIkZvcmdvdHRlblwiIGljb249eyBmb3Jnb3R0ZW5Mb2dvIH0gbGlua3NUbz1cIi9tb2RzL2ZvcmdvdHRlblwiLz5cbiAgICAgIDwvU3ViTmF2YmFyPlxuICAgICAgPEZyb250cGFnZUhlcm9cbiAgICAgICAgdGl0bGU9XCJEZWxldGVkLiBBbmQgZm9yZ290dGVuLlwiXG4gICAgICAgIHN1YnRpdGxlPVwiVGhlIG5ldyBjaGFwdGVycyBvZiBGb3Jnb3R0ZW4gYnJpbmcgc3VzcGVuc2UsIHN1cnByaXNlLCBhbmQgaG9ycm9yIHRvIHRoZSB0YWJsZSBpbiBhIHdob2xlIG5ldyB3YXkuXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uVGV4dD1cIkxlYXJuIG1vcmVcIlxuICAgICAgICBjYWxsVG9BY3Rpb25MaW5rPVwiL21vZHMvZm9yZ290dGVuXCJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlTG9jYXRpb249eyBmb3Jnb3R0ZW5IZXJvIH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNzcz17IHBhZ2VDb250ZW50U3R5bGVzIH0+XG4gICAgICAgIDxkaXYgY3NzPXsgcGFnZUdyaWRDb250YWluZXIgfT5cbiAgICAgICAgICA8QmFzaWNDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiVGhlIEFuZ2VsIFJldHVybnMuIE5vdyB1cCB0byB5b3UuXCJcbiAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uPVwiT3VyIG9yaWdpbmFsIG9wZW4tc291cmNlIG1vZCBpcyByZWFkeSBmb3IgdGhlIG1vZGRpbmcgY29tbXVuaXR5IHRvIGV4cGxvcmUgYW5kIGJ1aWxkIHVwb24gYXMgYW4gb3Blbi1lbmRlZCwgbmV2ZXItZmluaXNoZWQgbW9kLlwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgIGltYWdlPXsgdGhlQW5nZWxSZXR1cm5zSGVybyB9XG4gICAgICAgICAgICAgIGxpbms9XCIvbW9kcy90aGUtYW5nZWwtcmV0dXJuc1wiXG4gICAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH0vPlxuICAgICAgICAgIDxCYXNpY0NhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJXZSB0YWtlIGNvbnRlbnQgcG9saWNpZXMuIFNlcmlvdXNseS5cIlxuICAgICAgICAgICAgICBjYXJkRGVzY3JpcHRpb249XCJMZWFybiBtb3JlIGFib3V0IGhvdyB3ZSBzdHJpdmUgdG8gYWJpZGUgYnkgZmFuIGNvbnRlbnQgcG9saWNpZXMgdGhhdCBtYWtlIG91ciBtb2RzIHBvc3NpYmxlIGZyb20gc3RhcnQgdG8gZmluaXNoLlwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiI2ZhZmFmYVwiXG4gICAgICAgICAgICAgIGltYWdlPXsgdGhlQW5nZWxSZXR1cm5zSGVybyB9XG4gICAgICAgICAgICAgIGxpbms9XCIvbW9kcy90aGUtYW5nZWwtcmV0dXJuc1wiXG4gICAgICAgICAgICAgIHN0cmljdFBhZGRpbmdcbiAgICAgICAgICAgICAgbm9TaGFkb3c9eyB0cnVlIH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHNMYW5kaW5nUGFnZVxuIl19 */"));

var ModsLandingPage = function ModsLandingPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mods",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Subnavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_SubnavbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "The Angel Returns",
    icon: _assets_mods_tar_tar_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    linksTo: "/mods/the-angel-returns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_SubnavbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    linksTo: "/mods/forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_FrontpageHero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Deleted. And forgotten.",
    subtitle: "The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way.",
    callToActionText: "Learn more",
    callToActionLink: "/mods/forgotten",
    backgroundImageLocation: _assets_mods_forgotten_forgotten_hero_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: _utils_commonStyles__WEBPACK_IMPORTED_MODULE_7__["pageContentStyles"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "The Angel Returns. Now up to you.",
    cardDescription: "Our original open-source mod is ready for the modding community to explore and build upon as an open-ended, never-finished mod.",
    color: "#fafafa",
    image: _assets_mods_tar_tar_bg_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    link: "/mods/the-angel-returns",
    strictPadding: true,
    noShadow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "We take content policies. Seriously.",
    cardDescription: "Learn more about how we strive to abide by fan content policies that make our mods possible from start to finish.",
    color: "#fafafa",
    image: _assets_mods_tar_tar_bg_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    link: "/mods/the-angel-returns",
    strictPadding: true,
    noShadow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModsLandingPage);

/***/ })

})
//# sourceMappingURL=mods.js.021d827783d3a68389cc.hot-update.js.map