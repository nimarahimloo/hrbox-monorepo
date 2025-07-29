import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HRLINK_BASE_URL } from "@hrbox/shared-templates";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: HRLINK_BASE_URL,
        credentials: "include",
    }),
    endpoints: () => ({}),
});
