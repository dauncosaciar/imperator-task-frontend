import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";
import { changeDocumentTitle } from "@/utils";
import Form from "@/components/form/Form";
import RegisterForm from "@/components/auth/RegisterForm";
import { RegistrationFormData } from "@/types";
import { createAccount } from "@/api/AuthApi";

export default function RegisterView() {
  const initialValues: RegistrationFormData = {
    name: "",
    lastName: "",
    email: "",
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
    mutationFn: createAccount,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
      reset();
    }
  });

  useEffect(() => {
    changeDocumentTitle("Regístrate");
  }, []);

  const handleForm = (formData: RegistrationFormData) => mutate(formData);

  return (
    <div className="register-view">
      <h2 className="register-view__heading">Regístrate</h2>
      <p className="register-view__text">
        Y comienza a ordenar tus proyectos y tareas.
      </p>

      <div className="register-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={RegisterForm}
          register={register}
          errors={errors}
          passwordWatch={passwordWatch}
          mutationExecuting={isPending}
          spinnerMessage="Creando cuenta"
          submitIcon={UserPlus}
          submitText="Crear Cuenta"
        />

        <div className="register-view__question">
          <p className="register-view__question-text">
            ¿Ya tienes cuenta en ImperatorTask?
          </p>
          <Link to="/auth/login" className="register-view__question-link">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
