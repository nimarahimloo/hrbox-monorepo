import { baseApi } from "@baseApi";
import {HRLinkApiEndpoints} from "../../../../../../shared-templates/src/constants/hrlink-api";

export const companyApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchCompanyList: build.query<any, void>({
            query: () => HRLinkApiEndpoints.fetchCompaniesList,
            providesTags: ["Company"],
        }),
        getDetail: build.query<any, string>({
            query: (id) => `/company/detail?orgId=${id}`,
        }),
        sendRequest: build.mutation<any, string>({
            query: (id) => ({
                url: `/company/sendRequest?orgId=${id}`,
                method: "POST",
            }),
            invalidatesTags: ["Company"],
        }),
    }),
    overrideExisting: false,
});
