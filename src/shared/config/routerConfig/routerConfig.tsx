import { AboutPage, MainPage } from "pages/async";
import { RouteProps } from "react-router-dom";

export enum AppRouter {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRouter, string> = { [AppRouter.MAIN]: "/", [AppRouter.ABOUT]: "/about" };

export const RouteConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRouter.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
};
