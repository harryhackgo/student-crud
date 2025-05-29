import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        method: "GET",
        url: "/user",
        params,
      }),
      providesTags: ["USERS"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/user",
        body,
      }),
      invalidatesTags: ["USERS"],
    }),
    updateUser: build.mutation({
      query: ({ id, body }) => ({
        method: "PUT",
        url: `/user/${id}`,
        body,
      }),
      invalidatesTags: ["USERS"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/user/${id}`,
      }),
      invalidatesTags: ["USERS"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = extendedApi;
