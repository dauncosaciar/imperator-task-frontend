import { FieldErrors, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../form/ErrorMessage";

type ProjectFormProps = {
  register: UseFormRegister<{
    projectName: string;
    clientName: string;
    description: string;
  }>;
  errors: FieldErrors<{
    projectName: string;
    clientName: string;
    description: string;
  }>;
};

export default function ProjectForm({ register, errors }: ProjectFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="projectName" className="form__label">
          Nombre del Proyecto
        </label>
        <input
          id="projectName"
          className={`form__input ${
            errors.projectName ? "form__input--error" : ""
          }`}
          type="text"
          placeholder="Nombre del Proyecto"
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
          Nombre Cliente
        </label>
        <input
          id="clientName"
          className={`form__input ${
            errors.clientName ? "form__input--error" : ""
          }`}
          type="text"
          placeholder="Nombre del Cliente"
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
          className={`form__input ${
            errors.description ? "form__input--error" : ""
          }`}
          placeholder="Descripción del Proyecto"
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
