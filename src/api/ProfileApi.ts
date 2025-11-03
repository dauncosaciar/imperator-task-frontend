import { isAxiosError } from "axios";
import api from "@/lib/axios";
import { ProfileFormData, UpdateCurrentUserPasswordFormData } from "@/types";

export async function updateProfile(formData: ProfileFormData) {
  try {
    const url = "/auth/profile";
    const { data } = await api.put<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateCurrentUserPassword(
  formData: UpdateCurrentUserPasswordFormData
) {
  try {
    const url = "/auth/update-password";
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
