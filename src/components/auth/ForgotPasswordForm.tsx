import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ForgotPasswordFormData } from "@/types";
import ErrorMessage from "../form/ErrorMessage";

type ForgotPasswordFormProps = {
  register: UseFormRegister<ForgotPasswordFormData>;
  errors: FieldErrors<ForgotPasswordFormData>;
  mutationExecuting: boolean;
};

export default function ForgotPasswordForm({
  register,
  errors,
  mutationExecuting
}: ForgotPasswordFormProps) {
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
    </>
  );
}
