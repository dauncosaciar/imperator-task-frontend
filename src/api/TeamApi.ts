import { isAxiosError } from "axios";
import api from "@/lib/axios";
import { Project, TeamMemberFormData } from "@/types";

type TeamApi = {
  projectId: Project["_id"];
  formData: TeamMemberFormData;
};

export async function findUserByEmail({
  projectId,
  formData
}: Pick<TeamApi, "projectId" | "formData">) {
  try {
    const url = `/projects/${projectId}/team/find`;
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
