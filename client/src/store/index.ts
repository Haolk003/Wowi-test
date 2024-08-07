import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../services/api";
import authSlice from "../services/auth/authSlice";
const { apiSliceWithAuth, apiSliceWithoutAuth } = apiSlice;

const store = configureStore({
  reducer: {
    [apiSliceWithAuth.reducerPath]: apiSliceWithAuth.reducer,
    [apiSliceWithoutAuth.reducerPath]: apiSliceWithoutAuth.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      apiSliceWithAuth.middleware,
      apiSliceWithoutAuth.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
