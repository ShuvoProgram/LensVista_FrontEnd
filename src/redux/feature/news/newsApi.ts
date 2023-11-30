/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api/api";

export const newsApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    createNews: builder.mutation({
      query: (data: any) => ({
        url: "/news",
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ["news"],
    }),
    updateNews: builder.mutation({
      query: ({ id, data }: any) => ({
        url: `/news/${id}`,
        method: `PATCH`,
        body: data,
      }),
      invalidatesTags: ["news"],
    }),
    deleteNews: builder.mutation({
      query: (id: any) => ({
        url: `/news/${id}`,
        method: `DELETE`,
      }),
      invalidatesTags: ["news"],
    }),
    getNews: builder.query({
      query: (page: number) => ({
        url: `/news?page=${page}`,
        method: "GET",
      }),

      providesTags: ["news"],
    }),
  }),
});

export const {
    useCreateNewsMutation,
    useUpdateNewsMutation,
    useGetNewsQuery,
    useDeleteNewsMutation,
} = newsApi;
