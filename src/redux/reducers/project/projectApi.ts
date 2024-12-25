import {
  IGetSingleProjectResponse,
  IProjectListResponse,
} from "@/types/project";
import { api } from "../../api";

export const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch a list of projects with filters/pagination
    getProjectList: builder.query<IProjectListResponse, void>({
      query: (body) => ({
        url: "/project/get-list",
        method: "POST",
        body,
      }),
      providesTags: ["projects"],
    }),

    // Fetch a single project by ID
    getProjectById: builder.query<IGetSingleProjectResponse, string>({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetProjectByIdQuery, useGetProjectListQuery } = projectApi;
