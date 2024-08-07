import { UserType } from "@/types/user.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  user: UserType | null;
};

const intialState: initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user;
    },
    userLoggout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});
export const { userLoggedIn, userLoggout } = authSlice.actions;

export default authSlice.reducer;
