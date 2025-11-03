import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { RectangleEllipsis } from "lucide-react";
import { toast } from "sonner";
import { changeDocumentTitle } from "@/utils";
import Form from "@/components/form/Form";
import UpdateCurrentUserPasswordForm from "@/components/profile/UpdateCurrentUserPasswordForm";
import { UpdateCurrentUserPasswordFormData } from "@/types";
import { updateCurrentUserPassword } from "@/api/ProfileApi";

export default function ChangePasswordView() {
  useEffect(() => {
    const documentTitle = "Cambiar tu Contraseña";
    changeDocumentTitle(documentTitle);
  }, []);

  const initialValues: UpdateCurrentUserPasswordFormData = {
    currentPassword: "",
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
    mutationFn: updateCurrentUserPassword,
    onError: error => toast.error(error.message),
    onSuccess: data => {
      toast.success(data);
      reset();
    }
  });

  const handleForm = (formData: UpdateCurrentUserPasswordFormData) =>
    mutate(formData);

  return (
    <div className="change-password-view">
      <h2 className="change-password-view__heading">Cambia tu Contraseña</h2>
      <p className="change-password-view__text">
        Actualiza tu contraseña si lo necesitas.
      </p>

      <div className="change-password-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={UpdateCurrentUserPasswordForm}
          register={register}
          errors={errors}
          passwordWatch={passwordWatch}
          mutationExecuting={isPending}
          spinnerMessage="Estableciendo nueva contraseña"
          submitIcon={RectangleEllipsis}
          submitText="Establecer Nueva Contraseña"
        />
      </div>
    </div>
  );
}
