"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/index.tsx
var app_exports = {};
__export(app_exports, {
  Header: () => Header,
  SiteNotFound: () => SiteNotFound
});
module.exports = __toCommonJS(app_exports);

// app/header.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Header({ text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-2xl font-bold", children: text });
}

// app/page/page.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function SiteNotFound() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col justify-center items-center w-full h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute top-4 left-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col items-center gap-x-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "text-5xl font-bold", children: "404" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "font-medium text-slate-300", children: "The page you are looking for does not exist." })
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Header,
  SiteNotFound
});
