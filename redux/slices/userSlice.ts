import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userDetails: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userDetails = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.userDetails = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
