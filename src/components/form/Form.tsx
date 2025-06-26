import { ComponentType, ElementType } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form";
import Spinner from "../ui/Spinner";

type FormProps<T extends FieldValues> = {
  handleSubmit: UseFormHandleSubmit<T>;
  fnSubmit: SubmitHandler<T>;
  InnerForm: ComponentType<{
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    passwordWatch?: string;
    mutationExecuting: boolean;
  }>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  passwordWatch?: string;
  mutationExecuting: boolean;
  spinnerMessage: string;
  submitIcon: ElementType;
  submitText: string;
};

export default function Form<T extends FieldValues>({
  handleSubmit,
  fnSubmit,
  InnerForm,
  register,
  errors,
  passwordWatch,
  mutationExecuting,
  spinnerMessage,
  submitIcon,
  submitText
}: FormProps<T>) {
  const Icon = submitIcon;

  return (
    <form className="form" onSubmit={handleSubmit(fnSubmit)} noValidate>
      <InnerForm
        register={register}
        errors={errors}
        passwordWatch={passwordWatch}
        mutationExecuting={mutationExecuting}
      />

      {!mutationExecuting ? (
        <button className="form__submit" type="submit">
          <Icon /> {submitText}
        </button>
      ) : (
        <Spinner spinnerText={spinnerMessage} />
      )}
    </form>
  );
}
