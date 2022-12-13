import React, { Suspense } from "react";
import {
  useRoutes,
  HashRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "virtual:windi.css";

import routes from "~react-pages";

const App = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
