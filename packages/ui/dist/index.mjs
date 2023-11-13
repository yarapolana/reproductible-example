// app/header.tsx
import { jsx } from "react/jsx-runtime";
function Header({ text }) {
  return /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: text });
}

// app/page/page.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function SiteNotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center w-full h-screen", children: [
    /* @__PURE__ */ jsx2("div", { className: "absolute top-4 left-4" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-x-5", children: [
      /* @__PURE__ */ jsx2("h1", { className: "text-5xl font-bold", children: "404" }),
      /* @__PURE__ */ jsx2("p", { className: "font-medium text-slate-300", children: "The page you are looking for does not exist." })
    ] })
  ] });
}
export {
  Header,
  SiteNotFound
};
