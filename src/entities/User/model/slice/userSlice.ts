import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSORAGE_LOGIN } from 'shared/const/localstorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initLoginData: (state) => {
      const user = localStorage.getItem(USER_LOCALSORAGE_LOGIN);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      localStorage.setItem(USER_LOCALSORAGE_LOGIN, undefined);
      state.authData = undefined;
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
