import { useForm } from "react-hook-form";
import { RectangleEllipsis } from "lucide-react";
import Form from "../form/Form";
import NewPasswordForm from "./NewPasswordForm";
import { NewPasswordFormData } from "@/types";

export default function NewPasswordChange() {
  const initialValues: NewPasswordFormData = {
    password: "",
    passwordConfirmation: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const passwordWatch = watch("password");

  const handleForm = (formData: NewPasswordFormData) =>
    console.log("formData:", formData);

  return (
    <div className="new-password-change">
      <Form
        handleSubmit={handleSubmit}
        fnSubmit={handleForm}
        InnerForm={NewPasswordForm}
        register={register}
        errors={errors}
        passwordWatch={passwordWatch}
        // mutationExecuting={isPending}
        mutationExecuting={false}
        spinnerMessage="Estableciendo nueva contraseña"
        submitIcon={RectangleEllipsis}
        submitText="Establecer Nueva Contraseña"
      />
    </div>
  );
}
