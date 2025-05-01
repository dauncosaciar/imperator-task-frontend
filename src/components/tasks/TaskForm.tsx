import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type TaskFormProps = {
  register: UseFormRegister<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
};

export default function TaskForm({ register, errors }: TaskFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="name" className="form__label">
          Nombre de la Tarea
        </label>
        <input
          id="name"
          className={`form__input ${errors.name ? "form__input--error" : ""}`}
          type="text"
          placeholder="Nombre de la Tarea"
          {...register("name", {
            required: "El Nombre de la Tarea es obligatorio."
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="form__field">
        <label htmlFor="description" className="form__label">
          Descripción de la Tarea
        </label>
        <textarea
          id="description"
          className={`form__input ${
            errors.description ? "form__input--error" : ""
          }`}
          placeholder="Descripción de la Tarea"
          {...register("description", {
            required: "La Descripción de la Tarea es obligatoria."
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
