import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { actions: userActions, reducer: userReducer } = userSlice;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
