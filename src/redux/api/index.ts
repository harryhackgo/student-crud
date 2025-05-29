import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6813724e129f6313e2114952.mockapi.io",
    prepareHeaders: (headers) => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTczLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDgzMjQxODcsImV4cCI6MTc0ODMyNzc4N30.xyuCmW_diGJvRoe_PXNPtLokypkt0gxIuPnfDUbJDas";
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["USERS", "COMMENTS", "CENTERS"]
});

export const {} = mainApi;
