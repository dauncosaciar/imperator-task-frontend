import { isAxiosError } from "axios";
import { RegistrationFormData } from "@/types";
import api from "@/lib/axios";

export async function createAccount(formData: RegistrationFormData) {
  try {
    const url = "/auth/create-account";
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
