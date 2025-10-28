import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ProfileFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type ProfileFormProps = {
  register: UseFormRegister<ProfileFormData>;
  errors: FieldErrors<ProfileFormData>;
  mutationExecuting: boolean;
};

export default function ProfileForm({
  register,
  errors,
  mutationExecuting
}: ProfileFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="name" className="form__label">
          Nombre
        </label>
        <input
          id="name"
          className={`form__input${errors.name ? " form__input--error" : ""}${
            mutationExecuting ? " form__input--disabled" : ""
          }`}
          type="text"
          placeholder="Juan"
          disabled={mutationExecuting}
          {...register("name", {
            required: "El Nombre es obligatorio."
          })}
        />

        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="form__field">
        <label htmlFor="lastName" className="form__label">
          Apellido
        </label>
        <input
          id="lastName"
          className={`form__input${
            errors.lastName ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="text"
          placeholder="Pérez"
          disabled={mutationExecuting}
          {...register("lastName", {
            required: "El Apellido es obligatorio."
          })}
        />

        {errors.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          id="email"
          className={`form__input${errors.email ? " form__input--error" : ""}${
            mutationExecuting ? " form__input--disabled" : ""
          }`}
          type="email"
          placeholder="mi.correo@ejemplo.com"
          disabled={mutationExecuting}
          {...register("email", {
            required: "El Email es obligatorio.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email no válido"
            }
          })}
        />

        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
    </>
  );
}
