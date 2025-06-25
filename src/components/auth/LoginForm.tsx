import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type LoginFormProps = {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  mutationExecuting: boolean;
};

export default function LoginForm({
  register,
  errors,
  mutationExecuting
}: LoginFormProps) {
  return (
    <>
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
            required: "La Contraseña es obligatoria."
          })}
        />

        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
