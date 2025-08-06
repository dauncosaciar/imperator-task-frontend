import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { LogIn } from "lucide-react";
import { toast } from "sonner";
import { changeDocumentTitle } from "@/utils";
import Form from "@/components/form/Form";
import LoginForm from "@/components/auth/LoginForm";
import { LoginFormData } from "@/types";
import { authenticateUser } from "@/api/AuthApi";

export default function LoginView() {
  const initialValues: LoginFormData = {
    email: "",
    password: ""
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: initialValues });

  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: () => {
      navigate("/");
      reset();
    }
  });

  useEffect(() => {
    changeDocumentTitle("Inicia sesión");
  }, []);

  const handleForm = (formData: LoginFormData) => mutate(formData);

  return (
    <div className="login-view">
      <h2 className="login-view__heading">Inicia sesión</h2>
      <p className="login-view__text">Para gestionar tus proyectos y tareas.</p>

      <div className="login-view__content">
        <Form
          handleSubmit={handleSubmit}
          fnSubmit={handleForm}
          InnerForm={LoginForm}
          register={register}
          errors={errors}
          mutationExecuting={isPending}
          spinnerMessage="Iniciando sesión"
          submitIcon={LogIn}
          submitText="Iniciar Sesión"
        />

        <div className="login-view__question">
          <p className="login-view__question-text">¿Nuevo en ImperatorTask?</p>
          <Link to="/auth/register" className="login-view__question-link">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
