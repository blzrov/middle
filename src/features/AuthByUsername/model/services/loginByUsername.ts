import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSORAGE_LOGIN } from 'shared/const/localstorage';

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (loginData, API) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', loginData);
      if (!response.data) throw new Error();
      localStorage.setItem(USER_LOCALSORAGE_LOGIN, JSON.stringify(response.data));
      API.dispatch(userActions.setLoginData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return API.rejectWithValue('error');
    }
  }
);
