webpackHotUpdate("static/development/pages/mods/forgotten.js",{

/***/ "./components/MiniNavbar.tsx":
/*!***********************************!*\
  !*** ./components/MiniNavbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/components/MiniNavbar.tsx";


/** @jsx jsx */


var miniNavbarRootStyles =  false ? undefined : {
  name: "1mnn4gv-miniNavbarRootStyles",
  styles: "height:48px;background-color:rgba(255, 255, 255, 0.8);position:absolute;top:0;display:flex;width:100%;label:miniNavbarRootStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYzZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmludGVyZmFjZSBNaW5pTmF2YmFyUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRidXR0b25UZXh0OiBzdHJpbmc7XG5cdGJ1dHRvbkxpbms6IHN0cmluZztcblx0Y2hpbGRyZW4/OiBhbnk7XG5cdGljb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IG1pbmlOYXZiYXJSb290U3R5bGVzID0gY3NzKHtcblx0aGVpZ2h0OiA0OCxcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiLFxuXHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXHR0b3A6IDAsXG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHR3aWR0aDogXCIxMDAlXCJcbn0pXG5cbmNvbnN0IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRib3JkZXJCb3R0b21Db2xvcjogXCIjMzMzXCIsXG5cdGJvcmRlckJvdHRvbVdpZHRoOiAwLjI1LFxuXHRib3JkZXJCb3R0b21TdHlsZTogXCJzb2xpZFwiLFxuXHRtYXhXaWR0aDogODUwLFxuXHRtYXJnaW5MZWZ0OiBcImF1dG9cIixcblx0bWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuXHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHR3aWR0aDogXCIxMDAlXCIsXG5cdHBhZGRpbmdMZWZ0OiAxNixcblx0cGFkZGluZ1JpZ2h0OiAxNixcbn0pXG5cbmNvbnN0IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyA9IGNzcyh7XG5cdGZvbnRXZWlnaHQ6IDcwMCxcblx0bWFyZ2luVG9wOiAxMixcbn0pXG5cbmNvbnN0IG1pbmlOYXZiYXJMb2dvU3R5bGVzID0gY3NzKHtcblx0aGVpZ2h0OiAnMTAwJScsXG5cdHdpZHRoOiAnYXV0bycsXG5cdHBhZGRpbmdSaWdodDogNCxcblx0bWFyZ2luVG9wOiAxMixcbn0pXG5cbmNvbnN0IG1pbmlOYXZiYXJMaW5rU3R5bGVzID0gY3NzKHtcblx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdG1hcmdpblRvcDogMTIsXG5cdCcmIGEnOiB7XG5cdFx0bWFyZ2luVG9wOiAyLFxuXHRcdHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcblx0XHRjb2xvcjogXCIjMzMzXCIsXG5cdFx0cGFkZGluZ0xlZnQ6IDgsXG5cdFx0cGFkZGluZ1JpZ2h0OiA4LFxuXHRcdGZvbnRTaXplOiAnMC45ZW0nXG5cdH0sXG5cdCcmIGE6aG92ZXInOiB7XG5cdFx0Y29sb3I6IFwiIzk5OVwiXG5cdH1cbn0pXG5cbmNvbnN0IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgPSBjc3Moe1xuXHRiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgjZmZkYjY0LCAjZmZjYzIyKVwiLFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZGI2NFwiLFxuXHRib3JkZXJDb2xvcjogXCIjYjM4ZjE4XCIsXG5cdGJvcmRlcldpZHRoOiAxLFxuXHRib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuXHRjb2xvcjogXCIjMzMzXCIsXG5cdGJvcmRlclJhZGl1czogOCxcblx0cGFkZGluZ0xlZnQ6IDEyLFxuXHRwYWRkaW5nUmlnaHQ6IDEyLFxuXHRwYWRkaW5nVG9wOiAtNCxcblx0cGFkZGluZ0JvdHRvbTogLTQsXG5cdGZvbnRTaXplOiAnMWVtJyxcblxuXHQnJiBwJzoge1xuXHRcdHRleHREZWNvcmF0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxuXHRcdG1hcmdpblRvcDogMCxcblx0XHRtYXJnaW5Cb3R0b206IDAsXG5cdFx0Zm9udFdlaWdodDogNjAwXG5cdH1cbn0pXG5cbmNvbnN0IG5hdmJhckJ1dHRvblN0eWxlID0geyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGZvbnRTaXplOiAnMC45NWVtJywgbWFyZ2luVG9wOiAtMC41IH1cblxuY29uc3QgTWluaU5hdmJhcjogRkM8TWluaU5hdmJhclByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9XCJwYS1taW5pbmF2YmFyXCIgY3NzPXsgbWluaU5hdmJhclJvb3RTdHlsZXMgfT5cblx0XHRcdDxkaXYgY3NzPXsgbWluaU5hdmJhcklubmVyUmVnaW9uU3R5bGVzIH0+XG5cdFx0XHRcdDxkaXYgc3R5bGUgPSB7IHsgZmxleEdyb3c6IDEsIGRpc3BsYXk6IFwiZmxleFwiIH0gfT5cblx0XHRcdFx0XHR7IHByb3BzLmljb24/IDxpbWcgc3JjPXsgcHJvcHMuaWNvbiB9IGNzcz17IG1pbmlOYXZiYXJMb2dvU3R5bGVzIH0vPjogbnVsbCB9XG5cdFx0XHRcdFx0PHAgY3NzPXsgbWluaU5hdmJhclRpdGxlU3R5bGVzIH0+IHsgcHJvcHMudGl0bGUgfSA8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhci1saW5rc1wiIGNzcz17IG1pbmlOYXZiYXJMaW5rU3R5bGVzIH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5jaGlsZHJlbiB9XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17IHByb3BzLmJ1dHRvbkxpbmsgfT5cblx0XHRcdFx0XHRcdDxhIHN0eWxlPXsgbmF2YmFyQnV0dG9uU3R5bGUgfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjc3M9IHsgbWluaU5hdmJhckJ1dHRvblN0eWxlcyB9PlxuXHRcdFx0XHRcdFx0XHRcdDxwPiB7IHByb3BzLmJ1dHRvblRleHQgfSA8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaW5pTmF2YmFyIl19 */"
};
var miniNavbarInnerRegionStyles =  false ? undefined : {
  name: "fw4uof-miniNavbarInnerRegionStyles",
  styles: "display:flex;border-bottom-color:#333;border-bottom-width:0.25px;border-bottom-style:solid;max-width:850px;margin-left:auto;margin-right:auto;height:100%;width:100%;padding-left:16px;padding-right:16px;label:miniNavbarInnerRegionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJvQyIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9jb21wb25lbnRzL01pbmlOYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgTWluaU5hdmJhclByb3BzIHtcblx0dGl0bGU6IHN0cmluZztcblx0YnV0dG9uVGV4dDogc3RyaW5nO1xuXHRidXR0b25MaW5rOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogYW55O1xuXHRpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBtaW5pTmF2YmFyUm9vdFN0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogNDgsXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIixcblx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0dG9wOiAwLFxuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0d2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBtaW5pTmF2YmFySW5uZXJSZWdpb25TdHlsZXMgPSBjc3Moe1xuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0Ym9yZGVyQm90dG9tQ29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJCb3R0b21XaWR0aDogMC4yNSxcblx0Ym9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcblx0bWF4V2lkdGg6IDg1MCxcblx0bWFyZ2luTGVmdDogXCJhdXRvXCIsXG5cdG1hcmdpblJpZ2h0OiBcImF1dG9cIixcblx0aGVpZ2h0OiBcIjEwMCVcIixcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRwYWRkaW5nTGVmdDogMTYsXG5cdHBhZGRpbmdSaWdodDogMTYsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTG9nb1N0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogJzEwMCUnLFxuXHR3aWR0aDogJ2F1dG8nLFxuXHRwYWRkaW5nUmlnaHQ6IDQsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTGlua1N0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRtYXJnaW5Ub3A6IDEyLFxuXHQnJiBhJzoge1xuXHRcdG1hcmdpblRvcDogMixcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0Y29sb3I6IFwiIzMzM1wiLFxuXHRcdHBhZGRpbmdMZWZ0OiA4LFxuXHRcdHBhZGRpbmdSaWdodDogOCxcblx0XHRmb250U2l6ZTogJzAuOWVtJ1xuXHR9LFxuXHQnJiBhOmhvdmVyJzoge1xuXHRcdGNvbG9yOiBcIiM5OTlcIlxuXHR9XG59KVxuXG5jb25zdCBtaW5pTmF2YmFyQnV0dG9uU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZGI2NCwgI2ZmY2MyMilcIixcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmRiNjRcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Y29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJSYWRpdXM6IDgsXG5cdHBhZGRpbmdMZWZ0OiAxMixcblx0cGFkZGluZ1JpZ2h0OiAxMixcblx0cGFkZGluZ1RvcDogLTQsXG5cdHBhZGRpbmdCb3R0b206IC00LFxuXHRmb250U2l6ZTogJzFlbScsXG5cblx0JyYgcCc6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcblx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdGZvbnRXZWlnaHQ6IDYwMFxuXHR9XG59KVxuXG5jb25zdCBuYXZiYXJCdXR0b25TdHlsZSA9IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBmb250U2l6ZTogJzAuOTVlbScsIG1hcmdpblRvcDogLTAuNSB9XG5cbmNvbnN0IE1pbmlOYXZiYXI6IEZDPE1pbmlOYXZiYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhclwiIGNzcz17IG1pbmlOYXZiYXJSb290U3R5bGVzIH0+XG5cdFx0XHQ8ZGl2IGNzcz17IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlID0geyB7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiBcImZsZXhcIiB9IH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pY29uPyA8aW1nIHNyYz17IHByb3BzLmljb24gfSBjc3M9eyBtaW5pTmF2YmFyTG9nb1N0eWxlcyB9Lz46IG51bGwgfVxuXHRcdFx0XHRcdDxwIGNzcz17IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyB9PiB7IHByb3BzLnRpdGxlIH0gPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBhLW1pbmluYXZiYXItbGlua3NcIiBjc3M9eyBtaW5pTmF2YmFyTGlua1N0eWxlcyB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5idXR0b25MaW5rIH0+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17IG5hdmJhckJ1dHRvblN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY3NzPSB7IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8cD4geyBwcm9wcy5idXR0b25UZXh0IH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaU5hdmJhciJdfQ== */"
};
var miniNavbarTitleStyles =  false ? undefined : {
  name: "1dxe6bi-miniNavbarTitleStyles",
  styles: "font-weight:700;margin-top:12px;label:miniNavbarTitleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUM4QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9jb21wb25lbnRzL01pbmlOYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgTWluaU5hdmJhclByb3BzIHtcblx0dGl0bGU6IHN0cmluZztcblx0YnV0dG9uVGV4dDogc3RyaW5nO1xuXHRidXR0b25MaW5rOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogYW55O1xuXHRpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBtaW5pTmF2YmFyUm9vdFN0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogNDgsXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIixcblx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0dG9wOiAwLFxuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0d2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBtaW5pTmF2YmFySW5uZXJSZWdpb25TdHlsZXMgPSBjc3Moe1xuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0Ym9yZGVyQm90dG9tQ29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJCb3R0b21XaWR0aDogMC4yNSxcblx0Ym9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcblx0bWF4V2lkdGg6IDg1MCxcblx0bWFyZ2luTGVmdDogXCJhdXRvXCIsXG5cdG1hcmdpblJpZ2h0OiBcImF1dG9cIixcblx0aGVpZ2h0OiBcIjEwMCVcIixcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRwYWRkaW5nTGVmdDogMTYsXG5cdHBhZGRpbmdSaWdodDogMTYsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTG9nb1N0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogJzEwMCUnLFxuXHR3aWR0aDogJ2F1dG8nLFxuXHRwYWRkaW5nUmlnaHQ6IDQsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTGlua1N0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRtYXJnaW5Ub3A6IDEyLFxuXHQnJiBhJzoge1xuXHRcdG1hcmdpblRvcDogMixcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0Y29sb3I6IFwiIzMzM1wiLFxuXHRcdHBhZGRpbmdMZWZ0OiA4LFxuXHRcdHBhZGRpbmdSaWdodDogOCxcblx0XHRmb250U2l6ZTogJzAuOWVtJ1xuXHR9LFxuXHQnJiBhOmhvdmVyJzoge1xuXHRcdGNvbG9yOiBcIiM5OTlcIlxuXHR9XG59KVxuXG5jb25zdCBtaW5pTmF2YmFyQnV0dG9uU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZGI2NCwgI2ZmY2MyMilcIixcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmRiNjRcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Y29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJSYWRpdXM6IDgsXG5cdHBhZGRpbmdMZWZ0OiAxMixcblx0cGFkZGluZ1JpZ2h0OiAxMixcblx0cGFkZGluZ1RvcDogLTQsXG5cdHBhZGRpbmdCb3R0b206IC00LFxuXHRmb250U2l6ZTogJzFlbScsXG5cblx0JyYgcCc6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcblx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdGZvbnRXZWlnaHQ6IDYwMFxuXHR9XG59KVxuXG5jb25zdCBuYXZiYXJCdXR0b25TdHlsZSA9IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBmb250U2l6ZTogJzAuOTVlbScsIG1hcmdpblRvcDogLTAuNSB9XG5cbmNvbnN0IE1pbmlOYXZiYXI6IEZDPE1pbmlOYXZiYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhclwiIGNzcz17IG1pbmlOYXZiYXJSb290U3R5bGVzIH0+XG5cdFx0XHQ8ZGl2IGNzcz17IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlID0geyB7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiBcImZsZXhcIiB9IH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pY29uPyA8aW1nIHNyYz17IHByb3BzLmljb24gfSBjc3M9eyBtaW5pTmF2YmFyTG9nb1N0eWxlcyB9Lz46IG51bGwgfVxuXHRcdFx0XHRcdDxwIGNzcz17IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyB9PiB7IHByb3BzLnRpdGxlIH0gPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBhLW1pbmluYXZiYXItbGlua3NcIiBjc3M9eyBtaW5pTmF2YmFyTGlua1N0eWxlcyB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5idXR0b25MaW5rIH0+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17IG5hdmJhckJ1dHRvblN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY3NzPSB7IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8cD4geyBwcm9wcy5idXR0b25UZXh0IH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaU5hdmJhciJdfQ== */"
};
var miniNavbarLogoStyles =  false ? undefined : {
  name: "1foa9c1-miniNavbarLogoStyles",
  styles: "height:100%;width:auto;padding-right:4px;margin-top:12px;label:miniNavbarLogoStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM2QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9jb21wb25lbnRzL01pbmlOYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgTWluaU5hdmJhclByb3BzIHtcblx0dGl0bGU6IHN0cmluZztcblx0YnV0dG9uVGV4dDogc3RyaW5nO1xuXHRidXR0b25MaW5rOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogYW55O1xuXHRpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBtaW5pTmF2YmFyUm9vdFN0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogNDgsXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIixcblx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0dG9wOiAwLFxuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0d2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBtaW5pTmF2YmFySW5uZXJSZWdpb25TdHlsZXMgPSBjc3Moe1xuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0Ym9yZGVyQm90dG9tQ29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJCb3R0b21XaWR0aDogMC4yNSxcblx0Ym9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcblx0bWF4V2lkdGg6IDg1MCxcblx0bWFyZ2luTGVmdDogXCJhdXRvXCIsXG5cdG1hcmdpblJpZ2h0OiBcImF1dG9cIixcblx0aGVpZ2h0OiBcIjEwMCVcIixcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRwYWRkaW5nTGVmdDogMTYsXG5cdHBhZGRpbmdSaWdodDogMTYsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTG9nb1N0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogJzEwMCUnLFxuXHR3aWR0aDogJ2F1dG8nLFxuXHRwYWRkaW5nUmlnaHQ6IDQsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTGlua1N0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRtYXJnaW5Ub3A6IDEyLFxuXHQnJiBhJzoge1xuXHRcdG1hcmdpblRvcDogMixcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0Y29sb3I6IFwiIzMzM1wiLFxuXHRcdHBhZGRpbmdMZWZ0OiA4LFxuXHRcdHBhZGRpbmdSaWdodDogOCxcblx0XHRmb250U2l6ZTogJzAuOWVtJ1xuXHR9LFxuXHQnJiBhOmhvdmVyJzoge1xuXHRcdGNvbG9yOiBcIiM5OTlcIlxuXHR9XG59KVxuXG5jb25zdCBtaW5pTmF2YmFyQnV0dG9uU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZGI2NCwgI2ZmY2MyMilcIixcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmRiNjRcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Y29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJSYWRpdXM6IDgsXG5cdHBhZGRpbmdMZWZ0OiAxMixcblx0cGFkZGluZ1JpZ2h0OiAxMixcblx0cGFkZGluZ1RvcDogLTQsXG5cdHBhZGRpbmdCb3R0b206IC00LFxuXHRmb250U2l6ZTogJzFlbScsXG5cblx0JyYgcCc6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcblx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdGZvbnRXZWlnaHQ6IDYwMFxuXHR9XG59KVxuXG5jb25zdCBuYXZiYXJCdXR0b25TdHlsZSA9IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBmb250U2l6ZTogJzAuOTVlbScsIG1hcmdpblRvcDogLTAuNSB9XG5cbmNvbnN0IE1pbmlOYXZiYXI6IEZDPE1pbmlOYXZiYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhclwiIGNzcz17IG1pbmlOYXZiYXJSb290U3R5bGVzIH0+XG5cdFx0XHQ8ZGl2IGNzcz17IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlID0geyB7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiBcImZsZXhcIiB9IH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pY29uPyA8aW1nIHNyYz17IHByb3BzLmljb24gfSBjc3M9eyBtaW5pTmF2YmFyTG9nb1N0eWxlcyB9Lz46IG51bGwgfVxuXHRcdFx0XHRcdDxwIGNzcz17IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyB9PiB7IHByb3BzLnRpdGxlIH0gPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBhLW1pbmluYXZiYXItbGlua3NcIiBjc3M9eyBtaW5pTmF2YmFyTGlua1N0eWxlcyB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5idXR0b25MaW5rIH0+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17IG5hdmJhckJ1dHRvblN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY3NzPSB7IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8cD4geyBwcm9wcy5idXR0b25UZXh0IH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaU5hdmJhciJdfQ== */"
};
var miniNavbarLinkStyles =  false ? undefined : {
  name: "11quias-miniNavbarLinkStyles",
  styles: "display:flex;margin-top:12px;& a{margin-top:2px;text-decoration:none;color:#333;padding-left:8px;padding-right:8px;font-size:0.9em;}& a:hover{color:#999;}label:miniNavbarLinkStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUQ2QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9jb21wb25lbnRzL01pbmlOYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgTWluaU5hdmJhclByb3BzIHtcblx0dGl0bGU6IHN0cmluZztcblx0YnV0dG9uVGV4dDogc3RyaW5nO1xuXHRidXR0b25MaW5rOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogYW55O1xuXHRpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBtaW5pTmF2YmFyUm9vdFN0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogNDgsXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIixcblx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0dG9wOiAwLFxuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0d2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBtaW5pTmF2YmFySW5uZXJSZWdpb25TdHlsZXMgPSBjc3Moe1xuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0Ym9yZGVyQm90dG9tQ29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJCb3R0b21XaWR0aDogMC4yNSxcblx0Ym9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcblx0bWF4V2lkdGg6IDg1MCxcblx0bWFyZ2luTGVmdDogXCJhdXRvXCIsXG5cdG1hcmdpblJpZ2h0OiBcImF1dG9cIixcblx0aGVpZ2h0OiBcIjEwMCVcIixcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRwYWRkaW5nTGVmdDogMTYsXG5cdHBhZGRpbmdSaWdodDogMTYsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTG9nb1N0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogJzEwMCUnLFxuXHR3aWR0aDogJ2F1dG8nLFxuXHRwYWRkaW5nUmlnaHQ6IDQsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTGlua1N0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRtYXJnaW5Ub3A6IDEyLFxuXHQnJiBhJzoge1xuXHRcdG1hcmdpblRvcDogMixcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0Y29sb3I6IFwiIzMzM1wiLFxuXHRcdHBhZGRpbmdMZWZ0OiA4LFxuXHRcdHBhZGRpbmdSaWdodDogOCxcblx0XHRmb250U2l6ZTogJzAuOWVtJ1xuXHR9LFxuXHQnJiBhOmhvdmVyJzoge1xuXHRcdGNvbG9yOiBcIiM5OTlcIlxuXHR9XG59KVxuXG5jb25zdCBtaW5pTmF2YmFyQnV0dG9uU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZGI2NCwgI2ZmY2MyMilcIixcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmRiNjRcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Y29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJSYWRpdXM6IDgsXG5cdHBhZGRpbmdMZWZ0OiAxMixcblx0cGFkZGluZ1JpZ2h0OiAxMixcblx0cGFkZGluZ1RvcDogLTQsXG5cdHBhZGRpbmdCb3R0b206IC00LFxuXHRmb250U2l6ZTogJzFlbScsXG5cblx0JyYgcCc6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcblx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdGZvbnRXZWlnaHQ6IDYwMFxuXHR9XG59KVxuXG5jb25zdCBuYXZiYXJCdXR0b25TdHlsZSA9IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBmb250U2l6ZTogJzAuOTVlbScsIG1hcmdpblRvcDogLTAuNSB9XG5cbmNvbnN0IE1pbmlOYXZiYXI6IEZDPE1pbmlOYXZiYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhclwiIGNzcz17IG1pbmlOYXZiYXJSb290U3R5bGVzIH0+XG5cdFx0XHQ8ZGl2IGNzcz17IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlID0geyB7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiBcImZsZXhcIiB9IH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pY29uPyA8aW1nIHNyYz17IHByb3BzLmljb24gfSBjc3M9eyBtaW5pTmF2YmFyTG9nb1N0eWxlcyB9Lz46IG51bGwgfVxuXHRcdFx0XHRcdDxwIGNzcz17IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyB9PiB7IHByb3BzLnRpdGxlIH0gPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBhLW1pbmluYXZiYXItbGlua3NcIiBjc3M9eyBtaW5pTmF2YmFyTGlua1N0eWxlcyB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5idXR0b25MaW5rIH0+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17IG5hdmJhckJ1dHRvblN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY3NzPSB7IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8cD4geyBwcm9wcy5idXR0b25UZXh0IH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaU5hdmJhciJdfQ== */"
};
var miniNavbarButtonStyles =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])({
  background: "linear-gradient(#ffdb64, #ffcc22)",
  backgroundColor: "#ffdb64",
  borderColor: "#b38f18",
  borderWidth: 1,
  borderStyle: "solid",
  color: "#333",
  borderRadius: 8,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: -4,
  paddingBottom: -4,
  fontSize: '1em',
  '& p': {
    textDecoration: "none !important",
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 600
  }
}, "label:miniNavbarButtonStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvTWluaU5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUUrQiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9jb21wb25lbnRzL01pbmlOYXZiYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgTWluaU5hdmJhclByb3BzIHtcblx0dGl0bGU6IHN0cmluZztcblx0YnV0dG9uVGV4dDogc3RyaW5nO1xuXHRidXR0b25MaW5rOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogYW55O1xuXHRpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBtaW5pTmF2YmFyUm9vdFN0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogNDgsXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcIixcblx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcblx0dG9wOiAwLFxuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0d2lkdGg6IFwiMTAwJVwiXG59KVxuXG5jb25zdCBtaW5pTmF2YmFySW5uZXJSZWdpb25TdHlsZXMgPSBjc3Moe1xuXHRkaXNwbGF5OiBcImZsZXhcIixcblx0Ym9yZGVyQm90dG9tQ29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJCb3R0b21XaWR0aDogMC4yNSxcblx0Ym9yZGVyQm90dG9tU3R5bGU6IFwic29saWRcIixcblx0bWF4V2lkdGg6IDg1MCxcblx0bWFyZ2luTGVmdDogXCJhdXRvXCIsXG5cdG1hcmdpblJpZ2h0OiBcImF1dG9cIixcblx0aGVpZ2h0OiBcIjEwMCVcIixcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRwYWRkaW5nTGVmdDogMTYsXG5cdHBhZGRpbmdSaWdodDogMTYsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTG9nb1N0eWxlcyA9IGNzcyh7XG5cdGhlaWdodDogJzEwMCUnLFxuXHR3aWR0aDogJ2F1dG8nLFxuXHRwYWRkaW5nUmlnaHQ6IDQsXG5cdG1hcmdpblRvcDogMTIsXG59KVxuXG5jb25zdCBtaW5pTmF2YmFyTGlua1N0eWxlcyA9IGNzcyh7XG5cdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRtYXJnaW5Ub3A6IDEyLFxuXHQnJiBhJzoge1xuXHRcdG1hcmdpblRvcDogMixcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG5cdFx0Y29sb3I6IFwiIzMzM1wiLFxuXHRcdHBhZGRpbmdMZWZ0OiA4LFxuXHRcdHBhZGRpbmdSaWdodDogOCxcblx0XHRmb250U2l6ZTogJzAuOWVtJ1xuXHR9LFxuXHQnJiBhOmhvdmVyJzoge1xuXHRcdGNvbG9yOiBcIiM5OTlcIlxuXHR9XG59KVxuXG5jb25zdCBtaW5pTmF2YmFyQnV0dG9uU3R5bGVzID0gY3NzKHtcblx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoI2ZmZGI2NCwgI2ZmY2MyMilcIixcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmRiNjRcIixcblx0Ym9yZGVyQ29sb3I6IFwiI2IzOGYxOFwiLFxuXHRib3JkZXJXaWR0aDogMSxcblx0Ym9yZGVyU3R5bGU6IFwic29saWRcIixcblx0Y29sb3I6IFwiIzMzM1wiLFxuXHRib3JkZXJSYWRpdXM6IDgsXG5cdHBhZGRpbmdMZWZ0OiAxMixcblx0cGFkZGluZ1JpZ2h0OiAxMixcblx0cGFkZGluZ1RvcDogLTQsXG5cdHBhZGRpbmdCb3R0b206IC00LFxuXHRmb250U2l6ZTogJzFlbScsXG5cblx0JyYgcCc6IHtcblx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcblx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0bWFyZ2luQm90dG9tOiAwLFxuXHRcdGZvbnRXZWlnaHQ6IDYwMFxuXHR9XG59KVxuXG5jb25zdCBuYXZiYXJCdXR0b25TdHlsZSA9IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCBmb250U2l6ZTogJzAuOTVlbScsIG1hcmdpblRvcDogLTAuNSB9XG5cbmNvbnN0IE1pbmlOYXZiYXI6IEZDPE1pbmlOYXZiYXJQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGEtbWluaW5hdmJhclwiIGNzcz17IG1pbmlOYXZiYXJSb290U3R5bGVzIH0+XG5cdFx0XHQ8ZGl2IGNzcz17IG1pbmlOYXZiYXJJbm5lclJlZ2lvblN0eWxlcyB9PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlID0geyB7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiBcImZsZXhcIiB9IH0+XG5cdFx0XHRcdFx0eyBwcm9wcy5pY29uPyA8aW1nIHNyYz17IHByb3BzLmljb24gfSBjc3M9eyBtaW5pTmF2YmFyTG9nb1N0eWxlcyB9Lz46IG51bGwgfVxuXHRcdFx0XHRcdDxwIGNzcz17IG1pbmlOYXZiYXJUaXRsZVN0eWxlcyB9PiB7IHByb3BzLnRpdGxlIH0gPC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInBhLW1pbmluYXZiYXItbGlua3NcIiBjc3M9eyBtaW5pTmF2YmFyTGlua1N0eWxlcyB9PlxuXHRcdFx0XHRcdHsgcHJvcHMuY2hpbGRyZW4gfVxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5idXR0b25MaW5rIH0+XG5cdFx0XHRcdFx0XHQ8YSBzdHlsZT17IG5hdmJhckJ1dHRvblN0eWxlIH0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY3NzPSB7IG1pbmlOYXZiYXJCdXR0b25TdHlsZXMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8cD4geyBwcm9wcy5idXR0b25UZXh0IH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWluaU5hdmJhciJdfQ== */"));
var navbarButtonStyle = {
  textDecoration: "none",
  fontSize: '0.95em',
  marginTop: -0.5
};

var MiniNavbar = function MiniNavbar(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    id: "pa-mininavbar",
    css: miniNavbarRootStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: miniNavbarInnerRegionStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      flexGrow: 1,
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, props.icon ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.icon,
    css: miniNavbarLogoStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }) : null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: miniNavbarTitleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, " ", props.title, " ")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    id: "pa-mininavbar-links",
    css: miniNavbarLinkStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.children, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.buttonLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    style: navbarButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: miniNavbarButtonStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, " ", props.buttonText, " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MiniNavbar);

/***/ })

})
//# sourceMappingURL=forgotten.js.91303bc8d502f96b9dff.hot-update.js.map