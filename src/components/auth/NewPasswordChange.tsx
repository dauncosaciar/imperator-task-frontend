import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RectangleEllipsis } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Form from "../form/Form";
import NewPasswordForm from "./NewPasswordForm";
import { ConfirmToken, NewPasswordFormData } from "@/types";
import { updatePasswordWithToken } from "@/api/AuthApi";

type NewPasswordChangeProps = {
  token: ConfirmToken["token"];
};

export default function NewPasswordChange({ token }: NewPasswordChangeProps) {
  const navigate = useNavigate();

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

  const { isPending, mutate } = useMutation({
    mutationFn: updatePasswordWithToken,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      reset();
      navigate("/auth/login");
    }
  });

  const handleForm = (formData: NewPasswordFormData) => {
    const data = {
      formData,
      token
    };
    mutate(data);
  };

  return (
    <div className="new-password-change">
      <Form
        handleSubmit={handleSubmit}
        fnSubmit={handleForm}
        InnerForm={NewPasswordForm}
        register={register}
        errors={errors}
        passwordWatch={passwordWatch}
        mutationExecuting={isPending}
        spinnerMessage="Estableciendo nueva contraseña"
        submitIcon={RectangleEllipsis}
        submitText="Establecer Nueva Contraseña"
      />
    </div>
  );
}
