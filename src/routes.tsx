import React from "react";
import { Route } from "react-router";
import loadable from "@loadable/component";
export type UseParamsType = {
    ["/[nama]"]: {
        ["nama"]: string;
    };
};
export const RouteConfig = {
    ["/kucing?"]: loadable(() => import("./pages/kucing")),
    ["/about/hello?"]: loadable(() => import("./pages/about/hello")),
    ["/about?"]: loadable(() => import("./pages/about")),
    ["/about"]: loadable(() => import("./pages/about/index")),
    ["/:nama?"]: loadable(() => import("./pages/[nama]")),
    ["/"]: loadable(() => import("./pages/index"))
};
export default () => (<><Route path="/kucing" component={RouteConfig["/kucing?"]} exact/><Route path="/about/hello" component={RouteConfig["/about/hello?"]} exact/><Route path="/about" component={RouteConfig["/about?"]} exact/><Route path="/about" component={RouteConfig["/about"]} exact/><Route path="/:nama" component={RouteConfig["/:nama?"]} exact/><Route path="/" component={RouteConfig["/"]} exact/></>);

