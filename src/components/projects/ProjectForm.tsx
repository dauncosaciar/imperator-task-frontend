import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProjectFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type ProjectFormProps = {
  register: UseFormRegister<ProjectFormData>;
  errors: FieldErrors<ProjectFormData>;
  mutationExecuting: boolean;
};

export default function ProjectForm({
  register,
  errors,
  mutationExecuting
}: ProjectFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="projectName" className="form__label">
          Nombre del Proyecto
        </label>
        <input
          id="projectName"
          className={`form__input${
            errors.projectName ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="text"
          placeholder="Nombre del Proyecto"
          disabled={mutationExecuting}
          {...register("projectName", {
            required: "El Título del Proyecto es obligatorio."
          })}
        />

        {errors.projectName && (
          <ErrorMessage>{errors.projectName.message}</ErrorMessage>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="clientName" className="form__label">
          Nombre del Cliente
        </label>
        <input
          id="clientName"
          className={`form__input${
            errors.clientName ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="text"
          placeholder="Nombre del Cliente"
          disabled={mutationExecuting}
          {...register("clientName", {
            required: "El Nombre del Cliente es obligatorio."
          })}
        />

        {errors.clientName && (
          <ErrorMessage>{errors.clientName.message}</ErrorMessage>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="description" className="form__label">
          Descripción
        </label>
        <textarea
          id="description"
          className={`form__input${
            errors.description ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          placeholder="Descripción del Proyecto"
          disabled={mutationExecuting}
          {...register("description", {
            required: "La Descripción del Proyecto es obligatoria."
          })}
        />

        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
