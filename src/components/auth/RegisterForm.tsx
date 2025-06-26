import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegistrationFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type RegisterFormProps = {
  register: UseFormRegister<RegistrationFormData>;
  errors: FieldErrors<RegistrationFormData>;
  passwordWatch?: string;
  mutationExecuting: boolean;
};

export default function RegisterForm({
  register,
  errors,
  passwordWatch,
  mutationExecuting
}: RegisterFormProps) {
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

      <div className="form__field">
        <label htmlFor="password" className="form__label">
          Contraseña
        </label>
        <input
          id="password"
          className={`form__input${
            errors.password ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="password"
          placeholder="Contraseña que elegiste"
          disabled={mutationExecuting}
          {...register("password", {
            required: "La Contraseña es obligatoria.",
            minLength: {
              value: 8,
              message: "La Contraseña debe tener al menos 8 caracteres."
            }
          })}
        />

        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="repeatPassword" className="form__label">
          Confirmar Contraseña
        </label>
        <input
          id="repeatPassword"
          className={`form__input${
            errors.passwordConfirmation ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="password"
          placeholder="Repite la Contraseña elegida"
          disabled={mutationExecuting}
          {...register("passwordConfirmation", {
            required: "Vuelve a escribir la Contraseña.",
            validate: value =>
              value === passwordWatch || "Las Contraseñas no son iguales."
          })}
        />

        {errors.passwordConfirmation && (
          <ErrorMessage>{errors.passwordConfirmation.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
