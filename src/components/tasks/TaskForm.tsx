import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TaskFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type TaskFormProps = {
  register: UseFormRegister<TaskFormData>;
  errors: FieldErrors<TaskFormData>;
  mutationExecuting: boolean;
};

export default function TaskForm({
  register,
  errors,
  mutationExecuting
}: TaskFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="name" className="form__label">
          Nombre de la Tarea
        </label>
        <input
          id="name"
          className={`form__input${errors.name ? " form__input--error" : ""}${
            mutationExecuting ? " form__input--disabled" : ""
          }`}
          type="text"
          placeholder="Nombre de la Tarea"
          disabled={mutationExecuting}
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
          className={`form__input${
            errors.description ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          placeholder="Descripción de la Tarea"
          disabled={mutationExecuting}
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
