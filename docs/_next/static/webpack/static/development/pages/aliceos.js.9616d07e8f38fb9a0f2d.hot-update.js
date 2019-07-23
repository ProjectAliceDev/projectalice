webpackHotUpdate("static/development/pages/aliceos.js",{

/***/ "./pages/aliceos.tsx":
/*!***************************!*\
  !*** ./pages/aliceos.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/marquiskurt/Developer/projectalice/pages/aliceos.tsx";



/** @jsx jsx */

var errorPageRootStyles =  false ? undefined : {
  name: "1fvrmv9-errorPageRootStyles",
  styles: "text-align:center;padding-left:32px;padding-right:32px;padding-top:128px;padding-bottom:128px;label:errorPageRootStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2FsaWNlb3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVE0QiIsImZpbGUiOiIvVXNlcnMvbWFycXVpc2t1cnQvRGV2ZWxvcGVyL3Byb2plY3RhbGljZS9wYWdlcy9hbGljZW9zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcblxuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5jb25zdCBlcnJvclBhZ2VSb290U3R5bGVzID0gY3NzKHtcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICBwYWRkaW5nTGVmdDogMzIsXG4gIHBhZGRpbmdSaWdodDogMzIsXG4gIHBhZGRpbmdUb3A6IDEyOCxcbiAgcGFkZGluZ0JvdHRvbTogMTI4XG59KVxuXG5jb25zdCB0aXRsZVN0eWxlcyA9IGNzcyh7XG4gIGZvbnRTaXplOiAnMi43NWVtJyxcbn0pXG5cbmNvbnN0IGNhbGx0b0FjdGlvblN0eWxlcyA9IGNzcyh7XG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgZm9udFNpemU6IFwiMS4yNWVtXCIsXG4gIGNvbG9yOiBcInJnYigyNTUsIDIwNCwgMClcIixcbiAgJyY6aG92ZXInOiB7XG4gICAgY29sb3I6IFwiI2ZmZGI2NFwiLFxuICB9XG59KVxuXG5jb25zdCBFcnJvclBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9XCJBbGljZU9TIFByb3NwZWN0IFBhcmtcIj5cbiAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJyZWZyZXNoXCIgY29udGVudD1cIjA7IHVybD1odHRwOi8vYWxpY2Vvcy5hcHAvcHJvc3BlY3QtcGFyay1wcmV2aWV3L1wiLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VcbiJdfQ== */"
};
var titleStyles =  false ? undefined : {
  name: "ztaboh-titleStyles",
  styles: "font-size:2.75em;label:titleStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2FsaWNlb3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCb0IiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvcGFnZXMvYWxpY2Vvcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgZXJyb3JQYWdlUm9vdFN0eWxlcyA9IGNzcyh7XG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgcGFkZGluZ0xlZnQ6IDMyLFxuICBwYWRkaW5nUmlnaHQ6IDMyLFxuICBwYWRkaW5nVG9wOiAxMjgsXG4gIHBhZGRpbmdCb3R0b206IDEyOFxufSlcblxuY29uc3QgdGl0bGVTdHlsZXMgPSBjc3Moe1xuICBmb250U2l6ZTogJzIuNzVlbScsXG59KVxuXG5jb25zdCBjYWxsdG9BY3Rpb25TdHlsZXMgPSBjc3Moe1xuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIGZvbnRTaXplOiBcIjEuMjVlbVwiLFxuICBjb2xvcjogXCJyZ2IoMjU1LCAyMDQsIDApXCIsXG4gICcmOmhvdmVyJzoge1xuICAgIGNvbG9yOiBcIiNmZmRiNjRcIixcbiAgfVxufSlcblxuY29uc3QgRXJyb3JQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiQWxpY2VPUyBQcm9zcGVjdCBQYXJrXCI+XG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9aHR0cDovL2FsaWNlb3MuYXBwL3Byb3NwZWN0LXBhcmstcHJldmlldy9cIi8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlXG4iXX0= */"
};
var calltoActionStyles =  false ? undefined : {
  name: "1a7wfuk-calltoActionStyles",
  styles: "text-decoration:none;font-size:1.25em;color:rgb(255, 204, 0);&:hover{color:#ffdb64;}label:calltoActionStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJxdWlza3VydC9EZXZlbG9wZXIvcHJvamVjdGFsaWNlL3BhZ2VzL2FsaWNlb3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CMkIiLCJmaWxlIjoiL1VzZXJzL21hcnF1aXNrdXJ0L0RldmVsb3Blci9wcm9qZWN0YWxpY2UvcGFnZXMvYWxpY2Vvcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgZXJyb3JQYWdlUm9vdFN0eWxlcyA9IGNzcyh7XG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgcGFkZGluZ0xlZnQ6IDMyLFxuICBwYWRkaW5nUmlnaHQ6IDMyLFxuICBwYWRkaW5nVG9wOiAxMjgsXG4gIHBhZGRpbmdCb3R0b206IDEyOFxufSlcblxuY29uc3QgdGl0bGVTdHlsZXMgPSBjc3Moe1xuICBmb250U2l6ZTogJzIuNzVlbScsXG59KVxuXG5jb25zdCBjYWxsdG9BY3Rpb25TdHlsZXMgPSBjc3Moe1xuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIGZvbnRTaXplOiBcIjEuMjVlbVwiLFxuICBjb2xvcjogXCJyZ2IoMjU1LCAyMDQsIDApXCIsXG4gICcmOmhvdmVyJzoge1xuICAgIGNvbG9yOiBcIiNmZmRiNjRcIixcbiAgfVxufSlcblxuY29uc3QgRXJyb3JQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiQWxpY2VPUyBQcm9zcGVjdCBQYXJrXCI+XG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9aHR0cDovL2FsaWNlb3MuYXBwL3Byb3NwZWN0LXBhcmstcHJldmlldy9cIi8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlXG4iXX0= */"
};

var ErrorPage = function ErrorPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "AliceOS Prospect Park",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("meta", {
    "http-equiv": "refresh",
    content: "0; url=http://aliceos.app/prospect-park-preview/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

/***/ })

})
//# sourceMappingURL=aliceos.js.9616d07e8f38fb9a0f2d.hot-update.js.map