import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CheckPasswordFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type DeleteProjectFormProps = {
  register: UseFormRegister<CheckPasswordFormData>;
  errors: FieldErrors<CheckPasswordFormData>;
  mutationExecuting: boolean;
};

export default function DeleteProjectForm({
  register,
  errors,
  mutationExecuting
}: DeleteProjectFormProps) {
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
