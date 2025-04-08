import { ComponentType, ElementType } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form";

type FormProps<T extends FieldValues> = {
  handleSubmit: UseFormHandleSubmit<T>;
  fnSubmit: SubmitHandler<T>;
  InnerForm: ComponentType<{
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
  }>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  submitIcon: ElementType;
  submitText: string;
};

export default function Form<T extends FieldValues>({
  handleSubmit,
  fnSubmit,
  InnerForm,
  register,
  errors,
  submitIcon,
  submitText
}: FormProps<T>) {
  const Icon = submitIcon;

  return (
    <form className="form" onSubmit={handleSubmit(fnSubmit)} noValidate>
      <InnerForm register={register} errors={errors} />

      <button className="form__submit" type="submit">
        <Icon /> {submitText}
      </button>
    </form>
  );
}
