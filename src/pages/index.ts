/* eslint-disable @typescript-eslint/promise-function-async */
import { lazy } from 'react';

const MainPage = lazy(() => import('./MainPage/MainPage'));
const AboutPage = lazy(() => import('./AboutPage/AboutPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export { MainPage, AboutPage, NotFoundPage };
