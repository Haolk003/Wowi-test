import api from "@/services/api";
import { userLoggedIn } from "./authSlice";

const authApi = api.apiSliceWithoutAuth.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { username: email, password },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, api) {
        try {
          const result = await api.queryFulfilled;
          api.dispatch(userLoggedIn({ user: result.data.user }));
          localStorage.setItem("token", JSON.stringify(result.data.token));
        } catch (err: any) {
          console.error(err);
        }
      },
    }),

    registerUser: build.mutation({
      query: ({ name, email, password }) => ({
        url: "auth/register",
        method: "POST",
        body: { name, email, password },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
