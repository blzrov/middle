/* eslint-disable @typescript-eslint/promise-function-async */
import { lazy } from 'react';
const LoginModal = lazy(() => import('./ui/LoginModal'));
export { LoginModal };

export type { LoginSchema } from './model/types/loginSchema';
