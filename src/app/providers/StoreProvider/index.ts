import { AppDispatch, createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';
import { StateSchema, ReduxStoreWithManager, ThunkExtraArg } from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkExtraArg
};
