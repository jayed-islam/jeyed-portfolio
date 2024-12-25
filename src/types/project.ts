export interface IProject {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProjectListResponse {
  projects: IProject[];
  total: number;
  page: number;
  pageSize: number;
}

// Response type for fetching a single project by ID
export interface IGetSingleProjectResponse {
  project: IProject;
}
