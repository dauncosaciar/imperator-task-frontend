import { isAxiosError } from "axios";
import api from "@/lib/axios";
import { NoteFormData, Project, Task } from "@/types";

type NoteApi = {
  projectId: Project["_id"];
  taskId: Task["_id"];
  formData: NoteFormData;
};

export async function createNote({
  projectId,
  taskId,
  formData
}: Pick<NoteApi, "projectId" | "taskId" | "formData">) {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/notes`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
