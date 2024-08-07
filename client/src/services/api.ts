import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./auth/authSlice";

const apiSliceWithAuth = createApi({
  reducerPath: "apiWithAuth",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    loadUser: build.query({
      query: () => "auth/profile",
      async onQueryStarted(arg, api) {
        try {
          const result = await api.queryFulfilled;
          api.dispatch(userLoggedIn({ user: result.data }));
        } catch (err: any) {
          console.error(err);
        }
      },
    }),
  }),
});

const apiSliceWithoutAuth = createApi({
  reducerPath: "apiWithoutAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
  }),
  endpoints: (build) => ({
    fetchPublicData: build.query({
      query: () => "public/data",
    }),
  }),
});

export const { useLoadUserQuery } = apiSliceWithAuth;
export const { useFetchPublicDataQuery } = apiSliceWithoutAuth;
export default { apiSliceWithAuth, apiSliceWithoutAuth };
