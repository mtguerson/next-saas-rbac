import { api } from './api-client'

interface CreateProjectRequest {
  org: string
  name: string
  description: string | null
}

type CreateProjectResponse = void

export async function createProject({
  org,
  name,
  description,
}: CreateProjectRequest): Promise<CreateProjectResponse> {
  await api.post(`organizations/${org}/projects`, {
    json: {
      name,
      description,
    },
  })
}
