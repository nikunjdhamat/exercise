import {createSlice} from '@reduxjs/toolkit';

type LoginState = {
  email?: string;
  password?: string;
};
const initialState: LoginState = {
  email: undefined,
  password: undefined,
};
const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const {setEmail, setPassword} = loginSlice.actions;
export default loginSlice.reducer;
