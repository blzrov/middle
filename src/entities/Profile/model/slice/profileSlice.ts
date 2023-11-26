import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setLoginData: (state, action: PayloadAction<Profile>) => {
    //   // state.authData = action.payload;
    // }
  }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
