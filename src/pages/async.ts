import { lazy } from "react";

const MainPage = lazy(() => import("./MainPage/MainPage"));
const AboutPage = lazy(() => import("./AboutPage/AboutPage"));

export { MainPage, AboutPage };
