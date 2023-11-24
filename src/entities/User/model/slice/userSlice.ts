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
      let user = localStorage.getItem(USER_LOCALSORAGE_LOGIN);
      if (!user) localStorage.setItem(USER_LOCALSORAGE_LOGIN, JSON.stringify(null));
      user = localStorage.getItem(USER_LOCALSORAGE_LOGIN);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      localStorage.setItem(USER_LOCALSORAGE_LOGIN, JSON.stringify(null));
      state.authData = null;
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
