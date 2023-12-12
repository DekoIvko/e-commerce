import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.data;
    },
    logoutUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
