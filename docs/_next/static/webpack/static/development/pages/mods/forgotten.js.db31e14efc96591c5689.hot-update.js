webpackHotUpdate("static/development/pages/mods/forgotten.js",{

/***/ "./components/BasicCard.tsx":
/*!**********************************!*\
  !*** ./components/BasicCard.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/components/BasicCard.tsx";


/** @jsx jsx */



var basicCardRootStyles = function basicCardRootStyles(color, darkText, noShadow) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])({
      backgroundColor: color,
      color: darkText ? "white" : "black",
      padding: 32,
      borderRadius: 6,
      boxShadow: noShadow ? "none" : "0 4px 8px #666",
      textAlign: "center",
      transition: "box-shadow 0.10s",
      display: "inline-flex",
      flexDirection: "column",
      position: "relative",
      alignSelf: "center",
      height: "100%",
      maxHeight: 500,
      '&:hover': {
        boxShadow: noShadow ? "none" : "0 8px 16px #666"
      }
    },  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlEiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvY29tcG9uZW50cy9CYXNpY0NhcmQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5pbnRlcmZhY2UgQmFzaWNDYXJkUHJvcHMge1xuXHR0aXRsZTogc3RyaW5nXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmdcblx0Y29sb3I/OiBzdHJpbmdcblx0ZGFya1RleHQ/OiBib29sZWFuXG5cdGxpbms/OiBzdHJpbmdcblx0aW1hZ2U/OiBzdHJpbmdcblx0bm9TaGFkb3c/OiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNpY0NhcmRSb290U3R5bGVzID0gKGNvbG9yOiBzdHJpbmcsIGRhcmtUZXh0OiBib29sZWFuIHwgdW5kZWZpbmVkLCBub1NoYWRvdzogYm9vbGVhbiB8IHVuZGVmaW5lZCkgPT4ge1xuXHRyZXR1cm4gY3NzKHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuXHRcdGNvbG9yOiBkYXJrVGV4dD8gXCJ3aGl0ZVwiOiBcImJsYWNrXCIsXG5cdFx0cGFkZGluZzogMzIsXG5cdFx0Ym9yZGVyUmFkaXVzOiA2LFxuXHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgNHB4IDhweCAjNjY2XCIsXG5cdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxuXHRcdHRyYW5zaXRpb246IFwiYm94LXNoYWRvdyAwLjEwc1wiLFxuXHRcdGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcblx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxuXHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWF4SGVpZ2h0OiA1MDAsXG5cblxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBub1NoYWRvdz8gXCJub25lXCI6IFwiMCA4cHggMTZweCAjNjY2XCIsXG5cdFx0fVxuXHR9KVxufVxuXG5jb25zdCBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyA9IGNzcyh7XG5cdHBhZGRpbmdMZWZ0OiAyNCxcblx0cGFkZGluZ1JpZ2h0OiAyNCxcblx0cGFkZGluZ0JvdHRvbTogMjQsXG5cdHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcblxufSlcblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgPSBjc3Moe1xuXHR3aWR0aDogXCIxMDAlXCIsXG5cdGhlaWdodDogXCJhdXRvXCIsXG5cdG1heEhlaWdodDogMjUwLFxuXHRtYXJnaW5Cb3R0b206IDgsXG5cdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblxufSlcblxuY29uc3QgYmFzaWNDYXJkVGl0bGVTdHlsZXMgPSBjc3Moe1xuXHRmb250V2VpZ2h0OiA3MDAsXG5cdGZvbnRTaXplOiAnMS43NWVtJyxcblx0bWFyZ2luQm90dG9tOiAwLFxuXHRtYXJnaW5Ub3A6IDAsXG5cdGZsZXhHcm93OiAxLFxufSlcblxuY29uc3QgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgPSBjc3Moe1xuXHRtYXJnaW5Ub3A6IDQsXG5cdHRleHRBbGlnbjogXCJsZWZ0XCIsXG59KVxuXG5jb25zdCBCYXNpY0NhcmQ6IEZDPEJhc2ljQ2FyZFByb3BzPiA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9IH0+XG5cdFx0PExpbmsgaHJlZj17IHByb3BzLmxpbmsgfT5cblx0XHRcdDxhIHN0eWxlPSB7IHsgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH0gfT5cblx0XHRcdFx0PGRpdiBpZD1cInBhLWJhc2ljLWNhcmRcIiBjc3M9eyBiYXNpY0NhcmRSb290U3R5bGVzKHByb3BzLmNvbG9yPyBwcm9wcy5jb2xvcjogXCIjZmZmXCIsIHByb3BzLmRhcmtUZXh0LCBwcm9wcy5ub1NoYWRvdykgfT5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPSB7IHsgZmxleEdyb3c6IDEsIH0gfT5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZFRpdGxlU3R5bGVzIH0+eyBwcm9wcy50aXRsZSB9PC9wPlxuXHRcdFx0XHRcdFx0PHAgY3NzPXsgYmFzaWNDYXJkRGVzY3JpcHRpb25TdHlsZXMgfT57IHByb3BzLmRlc2NyaXB0aW9uIH08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0eyBwcm9wcy5pbWFnZT8gPGRpdiBjc3M9eyBiYXNpY0NhcmRJbWFnZUNvbnRhaW5lclN0eWxlcyB9PjxpbWcgc3JjPXsgcHJvcHMuaW1hZ2UgfSBjc3M9eyBiYXNpY0NhcmRJbWFnZVN0eWxlcyB9Lz48L2Rpdj46IG51bGwgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYT5cblx0XHQ8L0xpbms+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNDYXJkOyJdfQ== */")
  );
};

var basicCardImageContainerStyles =  false ? undefined : {
  name: "dcbvm8-basicCardImageContainerStyles",
  styles: "padding-left:24px;padding-right:24px;padding-bottom:24px;position:relative;label:basicCardImageContainerStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3NDIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChjb2xvcjogc3RyaW5nLCBkYXJrVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCwgbm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5kZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardImageStyles =  false ? undefined : {
  name: "afsv2z-basicCardImageStyles",
  styles: "width:100%;height:auto;max-height:250px;margin-bottom:8px;align-self:center;label:basicCardImageStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQzZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChjb2xvcjogc3RyaW5nLCBkYXJrVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCwgbm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5kZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardTitleStyles =  false ? undefined : {
  name: "dg91ay-basicCardTitleStyles",
  styles: "font-weight:700;font-size:1.75em;margin-bottom:0;margin-top:0;flex-grow:1;label:basicCardTitleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RDZCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChjb2xvcjogc3RyaW5nLCBkYXJrVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCwgbm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5kZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};
var basicCardDescriptionStyles =  false ? undefined : {
  name: "u2v68c-basicCardDescriptionStyles",
  styles: "margin-top:4px;text-align:left;label:basicCardDescriptionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRW1DIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL2NvbXBvbmVudHMvQmFzaWNDYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuaW50ZXJmYWNlIEJhc2ljQ2FyZFByb3BzIHtcblx0dGl0bGU6IHN0cmluZ1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nXG5cdGNvbG9yPzogc3RyaW5nXG5cdGRhcmtUZXh0PzogYm9vbGVhblxuXHRsaW5rPzogc3RyaW5nXG5cdGltYWdlPzogc3RyaW5nXG5cdG5vU2hhZG93PzogYm9vbGVhbjtcbn1cblxuY29uc3QgYmFzaWNDYXJkUm9vdFN0eWxlcyA9IChjb2xvcjogc3RyaW5nLCBkYXJrVGV4dDogYm9vbGVhbiB8IHVuZGVmaW5lZCwgbm9TaGFkb3c6IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblx0cmV0dXJuIGNzcyh7XG5cdFx0YmFja2dyb3VuZENvbG9yOiBjb2xvcixcblx0XHRjb2xvcjogZGFya1RleHQ/IFwid2hpdGVcIjogXCJibGFja1wiLFxuXHRcdHBhZGRpbmc6IDMyLFxuXHRcdGJvcmRlclJhZGl1czogNixcblx0XHRib3hTaGFkb3c6IG5vU2hhZG93PyBcIm5vbmVcIjogXCIwIDRweCA4cHggIzY2NlwiLFxuXHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcblx0XHR0cmFuc2l0aW9uOiBcImJveC1zaGFkb3cgMC4xMHNcIixcblx0XHRkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG5cdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuXHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcblx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogNTAwLFxuXG5cblx0XHQnJjpob3Zlcic6IHtcblx0XHRcdGJveFNoYWRvdzogbm9TaGFkb3c/IFwibm9uZVwiOiBcIjAgOHB4IDE2cHggIzY2NlwiLFxuXHRcdH1cblx0fSlcbn1cblxuY29uc3QgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgPSBjc3Moe1xuXHRwYWRkaW5nTGVmdDogMjQsXG5cdHBhZGRpbmdSaWdodDogMjQsXG5cdHBhZGRpbmdCb3R0b206IDI0LFxuXHRwb3NpdGlvbjogXCJyZWxhdGl2ZVwiXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZEltYWdlU3R5bGVzID0gY3NzKHtcblx0d2lkdGg6IFwiMTAwJVwiLFxuXHRoZWlnaHQ6IFwiYXV0b1wiLFxuXHRtYXhIZWlnaHQ6IDI1MCxcblx0bWFyZ2luQm90dG9tOiA4LFxuXHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXG5cbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZFRpdGxlU3R5bGVzID0gY3NzKHtcblx0Zm9udFdlaWdodDogNzAwLFxuXHRmb250U2l6ZTogJzEuNzVlbScsXG5cdG1hcmdpbkJvdHRvbTogMCxcblx0bWFyZ2luVG9wOiAwLFxuXHRmbGV4R3JvdzogMSxcbn0pXG5cbmNvbnN0IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzID0gY3NzKHtcblx0bWFyZ2luVG9wOiA0LFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiLFxufSlcblxuY29uc3QgQmFzaWNDYXJkOiBGQzxCYXNpY0NhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IHN0eWxlPXsgeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSB9PlxuXHRcdDxMaW5rIGhyZWY9eyBwcm9wcy5saW5rIH0+XG5cdFx0XHQ8YSBzdHlsZT0geyB7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9IH0+XG5cdFx0XHRcdDxkaXYgaWQ9XCJwYS1iYXNpYy1jYXJkXCIgY3NzPXsgYmFzaWNDYXJkUm9vdFN0eWxlcyhwcm9wcy5jb2xvcj8gcHJvcHMuY29sb3I6IFwiI2ZmZlwiLCBwcm9wcy5kYXJrVGV4dCwgcHJvcHMubm9TaGFkb3cpIH0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT0geyB7IGZsZXhHcm93OiAxLCB9IH0+XG5cdFx0XHRcdFx0XHQ8cCBjc3M9eyBiYXNpY0NhcmRUaXRsZVN0eWxlcyB9PnsgcHJvcHMudGl0bGUgfTwvcD5cblx0XHRcdFx0XHRcdDxwIGNzcz17IGJhc2ljQ2FyZERlc2NyaXB0aW9uU3R5bGVzIH0+eyBwcm9wcy5kZXNjcmlwdGlvbiB9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsgcHJvcHMuaW1hZ2U/IDxkaXYgY3NzPXsgYmFzaWNDYXJkSW1hZ2VDb250YWluZXJTdHlsZXMgfT48aW1nIHNyYz17IHByb3BzLmltYWdlIH0gY3NzPXsgYmFzaWNDYXJkSW1hZ2VTdHlsZXMgfS8+PC9kaXY+OiBudWxsIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0PC9MaW5rPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljQ2FyZDsiXX0= */"
};

var BasicCard = function BasicCard(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      width: "100%",
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    style: {
      textDecoration: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    id: "pa-basic-card",
    css: basicCardRootStyles(props.color ? props.color : "#fff", props.darkText, props.noShadow),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    style: {
      flexGrow: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardTitleStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, props.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    css: basicCardDescriptionStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.description)), props.image ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: basicCardImageContainerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: props.image,
    css: basicCardImageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicCard);

/***/ }),

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
}), "label:pageContentStyles;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQjBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5cbmNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmNvbnN0IHBhZ2VHcmlkQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgzLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA2NCxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcblxufSkpXG5cbmNvbnN0IEZvcmdvdHRlblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJGb3Jnb3R0ZW5cIj5cbiAgICAgIDxNaW5pTmF2YmFyXG4gICAgICAgIHRpdGxlPVwiRm9yZ290dGVuXCJcbiAgICAgICAgaWNvbj17IGZvcmdvdHRlbkxvZ28gfVxuICAgICAgICBidXR0b25UZXh0PVwiVHJ5IGRlbW9cIlxuICAgICAgICBidXR0b25MaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL1Byb2plY3RBbGljZURldi9zdGVpbi9yZWxlYXNlcy9sYXRlc3RcIlxuICAgICAgID5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kcy9wb2xpY2llc1wiPlxuICAgICAgICAgICA8YT5Qb2xpY2llczwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvamVjdGFsaWNlZGV2L3N0ZWluXCI+XG4gICAgICAgICAgIDxhPlNvdXJjZTwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L01pbmlOYXZiYXI+XG4gICAgICA8RnJvbnRwYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIkRvbid0IGZvcmdldCB3aGF0IGhhcHBlbmVkLlwiXG4gICAgICAgIHN1YnRpdGxlPVwiU2V0IGFmdGVyIHRoZSBldmVudHMgb2YgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1YiEsIHRoZSBMaXRlcmF0dXJlIENsdWIgdGFrZXMgYSBob3JyaWZpYyB0dXJuIGZvciB0aGUgd29yc3QgaW4gRm9yZ290dGVuLiBGaW5kIG91dCB3aGF0IGhhcHBlbmVkIHRvIE1vbmlrYSBiZWZvcmUgaXQncyB0b28gbGF0ZS5cIlxuICAgICAgICBjYWxsVG9BY3Rpb25UZXh0PVwiXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uTGluaz1cIlwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZUxvY2F0aW9uPXsgZm9yZ290dGVuSGVybyB9XG4gICAgICAgIGRvbnRTaG93Q2FsbFRvQWN0aW9uXG4gICAgICAvPlxuICAgICAgPGRpdiBjc3M9eyBwYWdlQ29udGVudFN0eWxlcyB9PlxuICAgICAgICA8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJPcGVuIHNvdXJjZS5cIlxuICAgICAgICAgICAgZGVzY3JpcHRvbj1cIlBsZWFzZSBoZWxwIG1lLlwiXG4gICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290dGVuUGFnZVxuIl19 */"));
var pageGridContainer =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])(Object(_utils_breakpoints__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr", "repeat(3, 1fr)"],
  gridAutoRows: "1fr",
  gridColumnGap: 24,
  gridRowGap: 64,
  width: "100%",
  height: "100%",
  paddingBottom: 64
}), "label:pageGridContainer;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzBCIiwiZmlsZSI6Ii9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL21vZHMvZm9yZ290dGVuLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBGcm9udHBhZ2VIZXJvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnJvbnRwYWdlSGVybydcbmltcG9ydCBNaW5pTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWluaU5hdmJhcidcbmltcG9ydCBCYXNpY0NhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNpY0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gJy4uLy4uL3V0aWxzL2JyZWFrcG9pbnRzJ1xuXG5cbmltcG9ydCBmb3Jnb3R0ZW5IZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL2ZvcmdvdHRlbi9mb3Jnb3R0ZW4taGVyb19hbHQucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNIZXJvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItYmcucG5nJztcbmltcG9ydCB0aGVBbmdlbFJldHVybnNMb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9tb2RzL3Rhci90YXItbG9nby5wbmcnO1xuaW1wb3J0IGZvcmdvdHRlbkxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL21vZHMvZm9yZ290dGVuL2ZvcmdvdHRlbi1sb2dvLnBuZyc7XG5cbmNvbnN0IHBhZ2VDb250ZW50U3R5bGVzID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgcGFkZGluZ1RvcDogNjQsXG4gIHBhZGRpbmdCb3R0b206IDY0LFxuICBwYWRkaW5nTGVmdDogWzI0LCA0OCwgMTg4XSxcbiAgcGFkZGluZ1JpZ2h0OiBbMjQsIDQ4LCAxODhdLFxuICAnJiBhJzoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICBjb2xvcjogXCIjZmZjYzIyXCJcbiAgfSxcbiAgJyYgYTpob3Zlcic6IHtcbiAgICBjb2xvcjogXCIjZmZkYjY0XCJcbiAgfVxufSkpXG5cbmNvbnN0IHBhZ2VHcmlkQ29udGFpbmVyID0gY3NzKGJyZWFrcG9pbnRzKHtcbiAgZGlzcGxheTogXCJncmlkXCIsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcIjFmclwiLCBcIjFmclwiLCBcInJlcGVhdCgzLCAxZnIpXCJdLFxuICBncmlkQXV0b1Jvd3M6IFwiMWZyXCIsXG4gIGdyaWRDb2x1bW5HYXA6IDI0LFxuICBncmlkUm93R2FwOiA2NCxcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICBwYWRkaW5nQm90dG9tOiA2NCxcblxufSkpXG5cbmNvbnN0IEZvcmdvdHRlblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJGb3Jnb3R0ZW5cIj5cbiAgICAgIDxNaW5pTmF2YmFyXG4gICAgICAgIHRpdGxlPVwiRm9yZ290dGVuXCJcbiAgICAgICAgaWNvbj17IGZvcmdvdHRlbkxvZ28gfVxuICAgICAgICBidXR0b25UZXh0PVwiVHJ5IGRlbW9cIlxuICAgICAgICBidXR0b25MaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL1Byb2plY3RBbGljZURldi9zdGVpbi9yZWxlYXNlcy9sYXRlc3RcIlxuICAgICAgID5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW9kcy9wb2xpY2llc1wiPlxuICAgICAgICAgICA8YT5Qb2xpY2llczwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvamVjdGFsaWNlZGV2L3N0ZWluXCI+XG4gICAgICAgICAgIDxhPlNvdXJjZTwvYT5cbiAgICAgICAgIDwvTGluaz5cbiAgICAgICA8L01pbmlOYXZiYXI+XG4gICAgICA8RnJvbnRwYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIkRvbid0IGZvcmdldCB3aGF0IGhhcHBlbmVkLlwiXG4gICAgICAgIHN1YnRpdGxlPVwiU2V0IGFmdGVyIHRoZSBldmVudHMgb2YgRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1YiEsIHRoZSBMaXRlcmF0dXJlIENsdWIgdGFrZXMgYSBob3JyaWZpYyB0dXJuIGZvciB0aGUgd29yc3QgaW4gRm9yZ290dGVuLiBGaW5kIG91dCB3aGF0IGhhcHBlbmVkIHRvIE1vbmlrYSBiZWZvcmUgaXQncyB0b28gbGF0ZS5cIlxuICAgICAgICBjYWxsVG9BY3Rpb25UZXh0PVwiXCJcbiAgICAgICAgY2FsbFRvQWN0aW9uTGluaz1cIlwiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZUxvY2F0aW9uPXsgZm9yZ290dGVuSGVybyB9XG4gICAgICAgIGRvbnRTaG93Q2FsbFRvQWN0aW9uXG4gICAgICAvPlxuICAgICAgPGRpdiBjc3M9eyBwYWdlQ29udGVudFN0eWxlcyB9PlxuICAgICAgICA8ZGl2IGNzcz17IHBhZ2VHcmlkQ29udGFpbmVyIH0+XG4gICAgICAgICAgPEJhc2ljQ2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJPcGVuIHNvdXJjZS5cIlxuICAgICAgICAgICAgZGVzY3JpcHRvbj1cIlBsZWFzZSBoZWxwIG1lLlwiXG4gICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290dGVuUGFnZVxuIl19 */"));

var ForgottenPage = function ForgottenPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgotten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_MiniNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Forgotten",
    icon: _assets_mods_forgotten_forgotten_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    buttonText: "Try demo",
    buttonLink: "https://github.com/ProjectAliceDev/stein/releases/latest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/mods/policies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Policies")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://github.com/projectalicedev/stein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
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
      lineNumber: 62
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageContentStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: pageGridContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_BasicCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Open source.",
    descripton: "Please help me.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ForgottenPage);

/***/ })

})
//# sourceMappingURL=forgotten.js.db31e14efc96591c5689.hot-update.js.map