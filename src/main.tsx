import "./tailwind.css";
import React, { Suspense } from "react";
import { useRoutes, HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// @ts-ignore
import routes from "~react-pages";

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
