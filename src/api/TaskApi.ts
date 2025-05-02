import { isAxiosError } from "axios";
import { Project, TaskFormData } from "@/types";
import api from "@/lib/axios";

type TaskApi = {
  projectId: Project["_id"];
  formData: TaskFormData;
};

export async function createTask({
  projectId,
  formData
}: Pick<TaskApi, "projectId" | "formData">) {
  try {
    const url = `/projects/${projectId}/tasks`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
