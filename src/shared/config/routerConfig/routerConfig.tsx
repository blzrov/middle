import { AboutPage, MainPage, NotFoundPage, ProfilePage } from 'pages';
import { RouteProps } from 'react-router-dom';

export enum AppRouter {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: '/',
  [AppRouter.ABOUT]: '/about',
  [AppRouter.PROFILE]: '/profile',
  [AppRouter.NOT_FOUND]: '*'
};

export const RouteConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRouter.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRouter.PROFILE]: { path: RoutePath.profile, element: <ProfilePage /> },
  [AppRouter.NOT_FOUND]: { path: RoutePath.not_found, element: <NotFoundPage /> }
};
