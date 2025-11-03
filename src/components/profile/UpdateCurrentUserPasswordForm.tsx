import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UpdateCurrentUserPasswordFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type UpdateCurrentUserPasswordFormProps = {
  register: UseFormRegister<UpdateCurrentUserPasswordFormData>;
  errors: FieldErrors<UpdateCurrentUserPasswordFormData>;
  passwordWatch?: string;
  mutationExecuting: boolean;
};

export default function UpdateCurrentUserPasswordForm({
  register,
  errors,
  passwordWatch,
  mutationExecuting
}: UpdateCurrentUserPasswordFormProps) {
  return (
    <>
      <div className="form__field">
        <label htmlFor="currentPassword" className="form__label">
          Tu Contraseña Actual
        </label>
        <input
          id="currentPassword"
          className={`form__input${
            errors.currentPassword ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="password"
          placeholder="Contraseña que estás utilizando ahora"
          disabled={mutationExecuting}
          {...register("currentPassword", {
            required: "La Contraseña Actual es obligatoria."
          })}
        />

        {errors.currentPassword && (
          <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
        )}
      </div>

      <div className="form__field">
        <label htmlFor="password" className="form__label">
          Nueva Contraseña
        </label>
        <input
          id="password"
          className={`form__input${
            errors.password ? " form__input--error" : ""
          }${mutationExecuting ? " form__input--disabled" : ""}`}
          type="password"
          placeholder="Contraseña nueva que elegiste"
          disabled={mutationExecuting}
          {...register("password", {
            required: "La Contraseña Nueva es obligatoria.",
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
          placeholder="Repite la Contraseña nueva elegida"
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
