import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NewPasswordFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type NewPasswordFormProps = {
  register: UseFormRegister<NewPasswordFormData>;
  errors: FieldErrors<NewPasswordFormData>;
  passwordWatch?: string;
  mutationExecuting: boolean;
};

export default function NewPasswordForm({
  register,
  errors,
  passwordWatch,
  mutationExecuting
}: NewPasswordFormProps) {
  return (
    <>
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
